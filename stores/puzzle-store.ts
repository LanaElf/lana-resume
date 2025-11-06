import {defineStore} from 'pinia'
import { useRuntimeConfig } from '#imports'

export const usePuzzleStore: any = defineStore('puzzle', () => {
    const picDir: string = `${useRuntimeConfig().app.baseURL}_nuxt/assets/images/puzzlePictures/`;

    const pictures: Array<string> = [
        'IMG_20240318_095558_229.jpg',
        'IMG_20230708_185602_925.jpg',
        'IMG_20220925_093947_641.jpg',
        'photo_2025-03-29_00-13-22.jpg',
        'IMG_20230324_115237_951.jpg',
        'IMG_20230705_163405_155.jpg',
        'IMG_20230808_135702_684.jpg',
        'photo_2025-06-01_12-46-05.jpg',
        'photo_2025-05-30_14-46-54.jpg',
        'IMG_20240424_013619_702.jpg',
        'Adorable.gif',
        'human.jpg',
        'kinkade.jpg',
        'scale_1200.jpeg',
        'Spring.jpeg',
        '177.jpeg',
        '686d2654-44f9-456b-80d7-10055190b839.jpeg',
        '84d1ec99ff0fedc139195056d7n5.jpg',
        '1003549388.jpg',
        '152863659119670787.jpg'
    ];

    const picturePaths: Array<string> = pictures.map(item => picDir + item);

    const difficulties: Array<{
        name: string,
        detailsCount: number,
        detailsInRow: number, //для расчета ширины и высоты детали пазла
        detailsPosition: Array<string> //для позиционирования фона деталей
    }> = [
        {
            name: 'Easy',
            detailsCount: 9,
            detailsInRow: 3,
            detailsPosition: [
                '0 0',
                '50% 0',
                '100% 0',

                '0',
                '50%',
                '100%',

                '0 100%',
                '50% 100%',
                '100% 100%'
            ]
        },
        {
            name: 'Normal',
            detailsCount: 16,
            detailsInRow: 4,
            detailsPosition: [
                '0 0',
                'calc(100% / 3) 0',
                'calc(100% / 3 * 2) 0',
                '100% 0',

                '0 calc(100% / 3)',
                'calc(100% / 3) calc(100% / 3)',
                'calc(100% / 3 * 2) calc(100% / 3)',
                '100% calc(100% / 3)',

                '0 calc(100% / 3 * 2)',
                'calc(100% / 3) calc(100% / 3 * 2)',
                'calc(100% / 3 * 2) calc(100% / 3 * 2)',
                '100% calc(100% / 3 * 2)',

                '0 100%',
                'calc(100% / 3) 100%',
                'calc(100% / 3 * 2) 100%',
                '100% 100%',
            ]
        },
        {
            name: 'Hard',
            detailsCount: 25,
            detailsInRow: 5,
            detailsPosition: [
                '0 0',
                'calc(100% / 4) 0',
                'calc(100% / 4 * 2) 0',
                'calc(100% / 4 * 3) 0',
                '100% 0',

                '0 calc(100% / 4)',
                'calc(100% / 4) calc(100% / 4)',
                'calc(100% / 4 * 2) calc(100% / 4)',
                'calc(100% / 4 * 3) calc(100% / 4)',
                '100% calc(100% / 4)',

                '0 calc(100% / 4 * 2)',
                'calc(100% / 4) calc(100% / 4 * 2)',
                'calc(100% / 4 * 2) calc(100% / 4 * 2)',
                'calc(100% / 4 * 3) calc(100% / 4 * 2)',
                '100% calc(100% / 4 * 2)',

                '0 calc(100% / 4 * 3)',
                'calc(100% / 4) calc(100% / 4 * 3)',
                'calc(100% / 4 * 2) calc(100% / 4 * 3)',
                'calc(100% / 4 * 3) calc(100% / 4 * 3)',
                '100% calc(100% / 4 * 3)',

                '0 100%',
                'calc(100% / 4) 100%',
                'calc(100% / 4 * 2) 100%',
                'calc(100% / 4 * 3) 100%',
                '100% 100%'
            ]
        }
    ];

    const rotationAngles: Array<number> = [];

    const anglesStep = 45

    for (let i = 0; i < 360; i += anglesStep) {
        rotationAngles.push(i)
    }

    const chosenPuzzle: Ref<{
        picturePath: string,
        difficulty: string,
        containerWidth: number,
        containerHeight: number,
    }> = ref({
        picturePath: picDir + pictures[0],
        difficulty: 'Easy',
        containerWidth: 0,
        containerHeight: 0,
    });

    const rightRotations: Ref<{
        easy: Set<number>,
        normal: Set<number>,
        hard: Set<number>,
    }> = ref({
        easy: new Set(),
        normal: new Set(),
        hard: new Set(),
    });

    const win = ref(false);

    function choosePicture(picturePath: string) {
        chosenPuzzle.value.picturePath = picturePath;

        //установка размеров контейнера пазла = размер выбранной картинки
        //ограничение высоты до 500px и пересчет ширины для сохранения пропорций
        const img = new Image();
        img.src = picturePath;
        img.onload = () => {
            const maxHeight = 500
            if (img.height > maxHeight) {
                const ratio = maxHeight / img.height;
                chosenPuzzle.value.containerWidth = Math.round(img.width * ratio);
                chosenPuzzle.value.containerHeight = maxHeight;
            } else {
                chosenPuzzle.value.containerWidth = img.width;
                chosenPuzzle.value.containerHeight = img.height;
            }

            //адаптация под размер экрана

            if (chosenPuzzle.value.containerWidth > window.screen.width/6*5 - 16/*margins*/) {
                const newWidth = window.screen.width/6*5 - 16
                const ratio = newWidth / chosenPuzzle.value.containerWidth;

                chosenPuzzle.value.containerWidth = newWidth
                chosenPuzzle.value.containerHeight = Math.round(chosenPuzzle.value.containerHeight * ratio);
            }
        }

        //обнуление количества верно повернутых деталей при смене картинки
        rightRotations.value.easy = new Set();
        rightRotations.value.normal = new Set();
        rightRotations.value.hard = new Set();
    }

    function chooseDifficulty(difficulty: string) {
        chosenPuzzle.value.difficulty = difficulty;
    }

    function checkCompleteness(
        isRightRotation: boolean,
        difficulty: {
            name: string,
            detailsCount: number,
            detailsInRow: number,
            detailsPosition: Array<string>
        },
        detailPosition: string) {

        const index = difficulty.detailsPosition.indexOf(detailPosition)

        switch (difficulty.name) {
            case 'Easy':
                updateCompleteness(rightRotations.value.easy)
                break;
            case 'Normal':
                updateCompleteness(rightRotations.value.normal);
                break;
            case 'Hard':
                updateCompleteness(rightRotations.value.hard);
                break;
        }

        function  updateCompleteness(rightRotations: Set<number>) {
            isRightRotation ? rightRotations.add(index) : rightRotations.delete(index);
            win.value = rightRotations.size === difficulty.detailsCount;
        }
    }

    return {
        picturePaths,
        difficulties,
        chosenPuzzle,
        rotationAngles,
        anglesStep,
        win,
        choosePicture,
        chooseDifficulty,
        checkCompleteness
    };
});
