import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest'
import PuzzleDetail from "./PuzzleDetail.vue";

describe('PuzzleDetail.vue', () => {
    const props = {
        chosenPuzzle: {
            containerWidth: 400,
            containerHeight: 400,
            picturePath: 'IMG_20230708_185602_925.jpg'
        },
        difficulty: {
            detailsInRow: 4
        },
        backgroundPosition: '0px 0px',
        rotationAngles: ['0', '90', '180', '270'],
        anglesStep: 90
    };

    it('renders correctly and rotates on click', async () => {
        const wrapper = mount(PuzzleDetail, { props });
        const puzzleDiv = wrapper.find('.puzzle-detail');

        // Начальный угол должен быть из rotationAngles
        expect(props.rotationAngles).toContain(String(wrapper.vm.rotationAngle));

        // Клик увеличивает угол на anglesStep
        const initialAngle = wrapper.vm.rotationAngle;
        await puzzleDiv.trigger('click');
        expect(wrapper.vm.rotationAngle).toBe((initialAngle + props.anglesStep) % 360);
    });
});
