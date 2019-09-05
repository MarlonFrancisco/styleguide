import { FC } from 'react';
export declare type ItemProps = {
    isSelected: boolean;
    handleCallback: Function;
    closeMenuOnClick: boolean;
};
declare const Item: FC<ItemProps>;
export default Item;
