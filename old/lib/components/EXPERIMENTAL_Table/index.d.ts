import { FC } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { PaginationProps } from './Pagination';
declare const propTypes: {
    nestedRows: PropTypes.Requireable<boolean>;
    state: PropTypes.Requireable<PropTypes.InferProps<{
        schema: PropTypes.Requireable<PropTypes.InferProps<{
            columns: PropTypes.Validator<{
                [x: string]: PropTypes.InferProps<{
                    title: PropTypes.Validator<string>;
                    cellRender: PropTypes.Requireable<(...args: any[]) => any>;
                }>;
            }>;
            rowRender: PropTypes.Requireable<(...args: any[]) => any>;
        }>>;
        items: PropTypes.Requireable<object[]>;
        isEmpty: PropTypes.Requireable<boolean>;
        tableHeight: PropTypes.Requireable<number>;
        rowHeight: PropTypes.Requireable<number>;
        selectedDensity: PropTypes.Requireable<Density>;
        setSelectedDensity: PropTypes.Requireable<(...args: any[]) => any>;
    }>>;
};
declare type Props = InferProps<typeof propTypes>;
interface Composites {
    Toolbar: FC;
    Pagination: FC<PaginationProps>;
}
declare const Table: FC<Props> & Composites;
export default Table;
