import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest'
import PuzzleDetail from "./PuzzleDetail.vue";
import {usePuzzleStore} from "~/stores/puzzle-store";

const puzzleStore = usePuzzleStore();

// Расширяем интерфейс для TypeScript
interface CustomMatchers<R = unknown> {
    toBeMultipleOfStep(step: number, angle: number): R
}

declare module 'vitest' {
    interface Assertion<T = any> extends CustomMatchers<T> {}
    interface AsymmetricMatchersContaining extends CustomMatchers {}
}

expect.extend({
    toBeMultipleOfStep(step: number, angle: number) {
        if (angle % step === 0 || angle === 0) {
            return {
                message: () => `expected rotation angel (${angle}) not to be multiple of ${step}`,
                pass: true,
            }
        } else {
            return {
                message: () => `expected rotation angel (${angle}) to be multiple of ${step}`,
                pass: false,
            }
        }
    }
})

describe('PuzzleDetail.vue', () => {
    it('puzzle detail is clicked', async () => {
        const wrapper = mount(PuzzleDetail, {
            props: {
                chosenPuzzle: {},
                difficulty: {},
                backgroundPosition: '0 0',
                rotationAngles: puzzleStore.rotationAngles,
                anglesStep: puzzleStore.anglesStep
            }
        });
        const button = wrapper.find('.puzzle-detail');
        await button.trigger('click');
        const rotationAngle = wrapper.vm.rotationAngle

        expect(typeof rotationAngle).toBe('number');
        expect(rotationAngle).toBeGreaterThan(0);
        expect(rotationAngle).toBeMultipleOfStep(rotationAngle, puzzleStore.anglesStep);
    });
});