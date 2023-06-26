import 'styled-components';

declare module 'styled-components' {

    interface Colors {
        orange: string,
        white: string,
        gray: Scale
    }

    interface Scale {
        100: string,
        90: string,
        80: string,
        70: string,
        60: string,
        50: string,
        40: string,
        30: string,
        20: string,
        10: string,
    }

    export interface DefaultTheme {
        title: string,
        colors: Colors
    }
}