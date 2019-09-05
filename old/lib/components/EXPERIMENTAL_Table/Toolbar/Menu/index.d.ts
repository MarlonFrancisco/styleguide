import { FC } from 'react';
import { ButtonProps } from '../Button';
import { BoxProps } from './Box';
import { ItemProps } from './Item';
declare type Props = {
    button: ButtonProps;
    box: BoxProps;
};
interface Composites {
    Item: FC<ItemProps>;
}
declare const Menu: FC<Props> & Composites;
export default Menu;
