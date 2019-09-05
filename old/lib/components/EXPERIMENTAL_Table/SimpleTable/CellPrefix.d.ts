import { FC } from 'react';
declare const CellPrefix: FC<CellPrefixProps> & CellPrefixComposites;
export interface CellPrefixComposites {
    Arrow?: FC<ArrowProps>;
}
export interface ArrowProps {
    active: boolean;
    onClick: Function;
}
export interface CellPrefixProps {
    width: number;
}
export default CellPrefix;
