interface Input {
    columns: Array<Column>;
    items: Array<any>;
    density?: Density;
}
declare const useTableState: ({ columns, items, density }: Input) => TableState;
export default useTableState;
