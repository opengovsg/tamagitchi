/* eslint-disable @typescript-eslint/naming-convention */
export const enum PetColor {
    brown = 'brown',
    lightbrown = 'lightbrown',
    black = 'black',
    green = 'green',
    yellow = 'yellow',
    gray = 'gray',
    purple = 'purple',
    red = 'red',
    white = 'white',
    orange = 'orange',
    akita = 'akita',
    null = 'null',

    chawanmushi_plain = 'chawanmushi_plain',
    chawanmushi_cool = 'chawanmushi_cool',
    chawanmushi_rabbit = 'chawanmushi_rabbit',
    chawanmushi_reindeer = 'chawanmushi_reindeer',
    chawanmushi_dog = 'chawanmushi_dog',
    chawanmushi_potter = 'chawanmushi_potter',
    unhatched_plain = 'unhatched_plain',
    unhatched_cool = 'unhatched_cool',
    unhatched_rabbit = 'unhatched_rabbit',
    unhatched_reindeer = 'unhatched_reindeer',
    unhatched_dog = 'unhatched_dog',
    unhatched_potter = 'unhatched_potter',
    fried_plain = 'fried_plain',
    fried_cool = 'fried_cool',
    fried_rabbit = 'fried_rabbit',
    fried_reindeer = 'fried_reindeer',
    fried_dog = 'fried_dog',
    fried_potter = 'fried_potter',
    tamago_plain = 'tamago_plain',
    tamago_cool = 'tamago_cool',
    tamago_rabbit = 'tamago_rabbit',
    tamago_reindeer = 'tamago_reindeer',
    tamago_dog = 'tamago_dog',
    tamago_potter = 'tamago_potter',
}

export const enum PetType {
    cat = 'cat',
    chicken = 'chicken',
    clippy = 'clippy',
    cockatiel = 'cockatiel',
    crab = 'crab',
    dog = 'dog',
    fox = 'fox',
    mod = 'mod',
    rat = 'rat',
    rocky = 'rocky',
    rubberduck = 'rubber-duck',
    snake = 'snake',
    totoro = 'totoro',
    turtle = 'turtle',
    zappy = 'zappy',
    null = 'null',
    egg = 'egg',
}

export const enum PetSpeed {
    still = 0,
    verySlow = 1,
    slow = 2,
    normal = 3,
    fast = 4,
    veryFast = 5,
}

export const enum PetSize {
    nano = 'nano',
    small = 'small',
    medium = 'medium',
    large = 'large',
}

export const enum ExtPosition {
    panel = 'panel',
    explorer = 'explorer',
}

export const enum Theme {
    none = 'none',
    forest = 'forest',
    castle = 'castle',
    beach = 'beach',
}

export const enum ColorThemeKind {
    light = 1,
    dark = 2,
    highContrast = 3,
}

export class WebviewMessage {
    text: string;
    command: string;

    constructor(text: string, command: string) {
        this.text = text;
        this.command = command;
    }
}

export const ALL_PETS = [
    PetType.cat,
    PetType.chicken,
    PetType.clippy,
    PetType.cockatiel,
    PetType.crab,
    PetType.dog,
    PetType.fox,
    PetType.mod,
    PetType.rat,
    PetType.rocky,
    PetType.rubberduck,
    PetType.snake,
    PetType.totoro,
    PetType.turtle,
    PetType.zappy,
];
export const ALL_COLORS = [
    PetColor.black,
    PetColor.brown,
    PetColor.lightbrown,
    PetColor.green,
    PetColor.yellow,
    PetColor.gray,
    PetColor.purple,
    PetColor.red,
    PetColor.white,
    PetColor.orange,
    PetColor.akita,
    PetColor.null,
];
export const ALL_SCALES = [
    PetSize.nano,
    PetSize.small,
    PetSize.medium,
    PetSize.large,
];
export const ALL_THEMES = [Theme.none, Theme.forest, Theme.castle, Theme.beach];
