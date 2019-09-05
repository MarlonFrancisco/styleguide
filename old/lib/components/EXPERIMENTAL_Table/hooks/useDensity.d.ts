export declare const getRowHeight: (density: Density) => 76 | 48 | 32 | 45;
declare const useDensity: (density: Density) => {
    selectedDensity: Density;
    setSelectedDensity: import("react").Dispatch<import("react").SetStateAction<Density>>;
    rowHeight: number;
};
export default useDensity;
