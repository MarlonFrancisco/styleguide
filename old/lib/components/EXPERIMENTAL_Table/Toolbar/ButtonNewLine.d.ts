import { FC } from 'react';
import { ButtonProps } from './Button';
declare const ButtonNewLine: FC<ButtonNewLineProps>;
export declare type ButtonNewLineProps = ButtonProps & {
    actions: Array<MenuAction>;
};
export default ButtonNewLine;
