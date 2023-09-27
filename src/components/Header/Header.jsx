import * as React from "react";
import {
    AppBar,
    IconButton,
    Toolbar,
    Typography,
} from "@mui/material";

const Header = () => {
    return (
        <AppBar component="nav">
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    sx={{ mr: 2, display: { sm: "none" } }}
                >
                    News feed
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                >
                    News feed
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
