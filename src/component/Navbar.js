import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
    useTheme,
    useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#fff',
    },
    navlinks: {
        marginLeft: theme.spacing(5),
        display: "flex",
        
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
        fontSize: "20px",
        color:'#222'
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "15px",
        color:'#222',
        marginLeft: theme.spacing(6),
        "&:hover": {
            color: "blue",
            borderBottom: "1px solid white",
        },
    },
}));

function Navbar() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <AppBar position="static" className ={classes.root}>
            <CssBaseline />
            <Toolbar>
                <Typography variant="h6" className={classes.logo}>
                    {/* Reaserch Project Progress Report Tool (RPPRT) */}

                </Typography>
                {isMobile ? (
                    <DrawerComponent />
                ) : (
                    <div className={classes.navlinks}>
                        <Link to="/" className={classes.link}>
                            Home
                        </Link>
                        <Link to="/about" className={classes.link}>
                            About
                        </Link>
                        <Link to="/contact" className={classes.link}>
                            Contact
                        </Link>
                        <Link to="/faq" className={classes.link}>
                            FAQ
                        </Link>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;