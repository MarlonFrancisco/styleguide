import { FC } from 'react';
/**
 * Row of the Table (suports nesting)
 * 🤓Be aware that the subRows are rendered recursivelly
 */
declare const Row: FC<RowProps>;
interface RowProps {
    data: {
        children?: Array<unknown>;
    };
    index: number;
    depth?: number;
}
export default Row;
