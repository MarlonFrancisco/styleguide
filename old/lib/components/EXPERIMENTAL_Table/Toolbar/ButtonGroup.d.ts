import { FC } from 'react';
import { ButtonProps } from './Button';
import { ButtonDensityProps } from './ButtonDensity';
import { ButtonExtraActionsProps } from './ButtonExtraActions';
import { ButtonNewLineProps } from './ButtonNewLine';
interface Composites {
    Density: FC<ButtonDensityProps>;
    Download: FC<ButtonProps>;
    Upload: FC<ButtonProps>;
    ExtraActions: FC<ButtonExtraActionsProps>;
    NewLine: FC<ButtonNewLineProps>;
}
declare const ButtonGroup: FC & Composites;
export default ButtonGroup;
