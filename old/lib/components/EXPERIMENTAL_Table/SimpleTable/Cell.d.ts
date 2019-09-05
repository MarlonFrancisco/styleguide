import { FC } from 'react';
import { CellPrefixProps, CellPrefixComposites } from './CellPrefix';
declare const Cell: FC<CellProps> & Composites;
interface Composites {
    Prefix?: FC<CellPrefixProps> & CellPrefixComposites;
}
interface CellProps {
    id: string;
    isHeader?: boolean;
    width?: number;
}
export default Cell;
