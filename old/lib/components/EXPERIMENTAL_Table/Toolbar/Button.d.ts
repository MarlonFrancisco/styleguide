import React, { ReactNode } from 'react';
export declare type ButtonProps = {
    id?: string;
    label?: string;
    onClick?: Function;
    isLoading?: boolean;
    disabled?: boolean;
    size?: Size;
    icon?: any;
    title?: string;
    variation?: Variation;
    isActiveOfGroup?: boolean;
    children?: ReactNode;
};
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLDivElement>>;
export default Button;
