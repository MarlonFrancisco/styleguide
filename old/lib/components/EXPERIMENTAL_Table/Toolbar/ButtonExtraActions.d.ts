import { FC } from 'react';
declare const ButtonExtraActions: FC<ButtonExtraActionsProps>;
export declare type ButtonExtraActionsProps = {
    label?: string;
    actions: Array<MenuAction>;
    alignMenu?: Alignment;
    isLoading?: boolean;
    size?: Size;
};
export default ButtonExtraActions;
