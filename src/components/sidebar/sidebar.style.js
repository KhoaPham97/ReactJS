import { fade, makeStyles, useTheme } from "@material-ui/core/styles";

const drawerWidth = 240;
const colorWhite = "#fff";
const colorGray = "#252525";

export const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  parent: {
    backgroundColor: "#1d1d1d",
    " & .MuiSvgIcon-root , & .MuiTypography-root": {
      color: "#fff !important"
    },
    "&::after": {
      content: "",
      position: 'absolute',
      backgroundColor: "#fff",
      width: 6,
      height: 6,
      borderRadius: "50%"
    }
  },
  children: {
    backgroundColor: "blue"
  },

  title: {
    paddingLeft: 20
  },
  test: {
    marginLeft: -(drawerWidth - theme.spacing(7) - 1),
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    zIndex: 1,
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    // " & .MuiPaper-root": {
    //   backgroundColor: colorGray
    // }
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(7) + 1
    }
  },
  sideBar: {
    top: 7,
    " & .MuiSvgIcon-root , & .MuiTypography-root": {
      fill: "#a1a1a1",
      color: "#a1a1a1"
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  grow: {
    flexGrow: 1
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));
