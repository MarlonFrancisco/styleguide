interface MenuContext {
    isBoxVisible: boolean;
    setBoxVisible: (isBoxVisible: boolean) => void;
}
declare const MenuContext: import("react").Context<MenuContext>;
declare const MenuProvider: import("react").ProviderExoticComponent<import("react").ProviderProps<MenuContext>>;
declare const useMenuContext: () => MenuContext;
export default MenuContext;
export { MenuProvider, useMenuContext };
