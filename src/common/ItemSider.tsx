import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

interface IProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  to: string;
  text: string;
  icon: JSX.Element;
  end?: boolean;
}
const ItemSider = (props: IProps) => {
  type MyNavLinkProps = Omit<NavLinkProps, "to">;
  const MyNavLink = React.useMemo(
    () =>
      React.forwardRef<HTMLAnchorElement, MyNavLinkProps>((navLinkProps, ref) => {
        const { className: previousClasses, ...rest } = navLinkProps;
        const elementClasses = previousClasses?.toString() ?? "";
        return (
          <NavLink
            {...rest}
            ref={ref}
            to={props.to}
            end
            className={({ isActive }) => (isActive ? elementClasses + " Mui-selected" : elementClasses)}
          />
        );
      }),
    [props.to]
  );
  return (
    <ListItemButton
      component={MyNavLink}
      sx={{
        minHeight: 48,
        justifyContent: props.open ? "initial" : "center",
        mx: props.open ? 2 : 1,
        borderRadius: "8px",
      }}>
      <ListItemIcon sx={{ minWidth: 0, mr: props.open ? 3 : "auto", justifyContent: "center" }}>
        {props.icon}
      </ListItemIcon>
      <ListItemText primary={props.text} sx={{ opacity: props.open ? 1 : 0 }} />
    </ListItemButton>
  );
};

export default ItemSider;
