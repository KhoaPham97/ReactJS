import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import { useStyles } from './sidebar.style';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconExpandLess from '@material-ui/icons/ExpandLess';
import IconExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';



export default function SidebarItems(props) {
  
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const isExpandable = props.item.items && props.item.items.length > 0


  const handleDrawerOpen = () => {    
    setOpen(!open)
  };
  function handleClick() {
    setOpen(!open)
  }

  const MenuItemRoot = (
    <ListItem className={classes.menuItem}  onClick={handleClick}>
      {/* Display an icon if any */}
      {!!props.item.Icon && (
      <InboxIcon />
      )}      
      <ListItemText primary={props.item.name}  className={classes.title}/>
      {/* Display the expand menu if the item has children */}
      {isExpandable && !open && <IconExpandMore />}
      {isExpandable && open && <IconExpandLess />}
    </ListItem>
  )

  const MenuItemChildren = isExpandable ? (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Divider />
      <List component="div" disablePadding>
        {props.item.items.map((item, index) => (
          <SidebarItems item={item} key={index} />
        ))}
      </List>
    </Collapse>
  ) : null

  return (
    <>
      {MenuItemRoot}
      {MenuItemChildren}
    </>
  )
}
