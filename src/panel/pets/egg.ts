import { PetColor } from '../../common/types';
import { BasePetType } from '../basepettype';
import { States } from '../states';

export class Egg extends BasePetType {
    label = 'egg';
    static possibleColors = [
        PetColor.chawanmushi_plain,
        PetColor.chawanmushi_cool,
        PetColor.chawanmushi_rabbit,
        PetColor.chawanmushi_reindeer,
        PetColor.chawanmushi_dog,
        PetColor.chawanmushi_potter,
        PetColor.unhatched_plain,
        PetColor.unhatched_cool,
        PetColor.unhatched_rabbit,
        PetColor.unhatched_reindeer,
        PetColor.unhatched_dog,
        PetColor.unhatched_potter,
        PetColor.fried_plain,
        PetColor.fried_cool,
        PetColor.fried_rabbit,
        PetColor.fried_reindeer,
        PetColor.fried_dog,
        PetColor.fried_potter,
        PetColor.tamago_plain,
        PetColor.tamago_cool,
        PetColor.tamago_rabbit,
        PetColor.tamago_reindeer,
        PetColor.tamago_dog,
        PetColor.tamago_potter,
    ];
    static evolutions = ['unhatched', 'fried', 'chawanmushi', 'tamago'];
    static costumes = ['plain', 'cool', 'rabbit', 'reindeer', 'dog', 'potter'];
    sequence = {
        startingState: States.sitIdle,
        sequenceStates: [
            {
                state: States.sitIdle,
                possibleNextStates: [States.sitIdle],
            },
        ],
    };
    get emoji(): string {
        return '🥚';
    }

    get hello(): string {
        return '🐣🍳🥚🍆';
    }

    get canChase(): boolean {
        return false;
    }

    get canSwipe(): boolean {
        return false;
    }
}

export const EGG_NAMES: ReadonlyArray<string> = ['Tamagitchi'];
