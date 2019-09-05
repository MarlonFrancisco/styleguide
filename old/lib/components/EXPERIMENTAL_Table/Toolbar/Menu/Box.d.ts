import { FC } from 'react';
export declare type BoxProps = {
    height?: string | number;
    width?: string | number;
    alignMenu?: Alignment;
    noMargin?: boolean;
    borderClasses?: string;
};
declare const Box: FC<BoxProps>;
export default Box;
