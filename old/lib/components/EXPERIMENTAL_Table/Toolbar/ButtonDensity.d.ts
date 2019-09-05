import { FC } from 'react';
export declare type ButtonDensityProps = {
    label: string;
    lowOptionLabel: string;
    mediumOptionLabel: string;
    highOptionLabel: string;
    handleCallback: Function;
    alignMenu: Alignment;
    disabled: boolean;
};
declare const ButtonDensity: FC<ButtonDensityProps>;
export default ButtonDensity;
