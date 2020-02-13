import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { useStyles } from "./sidebar.style";

import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconExpandLess from "@material-ui/icons/ExpandLess";
import IconExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import IconDashboard from '@material-ui/icons/Dashboard'
import IconShoppingCart from '@material-ui/icons/ShoppingCart'
import IconPeople from '@material-ui/icons/People'
import IconBarChart from '@material-ui/icons/BarChart'
import IconLibraryBooks from '@material-ui/icons/LibraryBooks'

export default function SidebarItems(props) {
  const classes = useStyles();
  const theme = useTheme();
  console.log(props.item.Icon,  <IconBarChart/>);
  const [open, setOpen] = React.useState(false);
  const isExpandable = props.item.items && props.item.items.length > 0;
  const removeClass = temp => {
    const removeClassAll = document.querySelectorAll(`[id^=${temp}`);
    removeClassAll.forEach(function(item) {
      item.classList.remove(`${classes[temp]}`);
    });
  };
  function handleClick(event) {
    setOpen(!open);
    const getID = event.currentTarget.id.split("#")[1];
    const getParent = document.querySelector(`#${getID}`);
    removeClass("parent");
    removeClass("children");
    // const removeClassParent = document.querySelectorAll(`[id^=parent]`)
    //  removeClassParent.forEach(function(item) {
    //   item.classList.remove(`${classes.parent}`); });
    //     const removeClassChildren= document.querySelectorAll(`[id^=children]`)
    //     removeClassChildren.forEach(function(item) {
    //      item.classList.remove(`${classes.children}`);
    //        });

    if (getID === undefined) {
      // eslint-disable-next-line no-unused-expressions
       !open && !isExpandable ? event.currentTarget.classList.add(`${classes.parent}`) :  event.currentTarget.classList.add(`${classes.parent}`);
    }
    if (getParent !== null) {
      getParent.classList.add(`${classes.parent}`);
      event.currentTarget.classList.add(`${classes.children}`);
    }
  }

  const MenuItemRoot = (
    <ListItem className={classes.menuItem} id={props.id} onClick={handleClick}>
      {/* Display an icon if any */}
      {!!props.item.Icon && <IconLibraryBooks/>}
      <ListItemText primary={props.item.name} className={classes.title} />
      {/* Display the expand menu if the item has children */}
      {isExpandable && !open && <IconExpandMore />}
      {isExpandable && open && <IconExpandLess />}
    </ListItem>
  );

  const MenuItemChildren = isExpandable ? (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Divider />
      <List component="div" disablePadding className={!props.open ? classes.hide : ''} >
        {props.item.items.map((item, index) => (
          <SidebarItems item={item} key={index} id={item.id} />
        ))}
      </List>
    </Collapse>
  ) : null;

  return (
    <>
      {MenuItemRoot}
      {MenuItemChildren}
    </>
  );
}
