import * as React from "react";
import { Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useIsMobile } from "../customHooks";
import MenuDrawer from "./MenuDrawer";

export default function Header() {
    const isMobile = useIsMobile();
    const [open, setOpen] = React.useState(false);

    const handleOpenMenu = () => {
        setOpen(true);
    };

    return (
        <>
            <Grid container>
                <Grid
                    item
                    xs={8}
                    sx={{
                        fontWeight: "800",
                        fontSize: "4rem",
                    }}
                >
                    W.
                </Grid>
                <Grid
                    item
                    xs={4}
                    sx={{
                        alignContent: "center",
                        textAlign: "end",
                    }}
                >
                    {isMobile ? (
                        <MenuIcon onClick={handleOpenMenu} />
                    ) : (
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                fontFamily: "Inter",
                            }}
                        >
                            <span>Home</span>
                            <span>New</span>
                            <span>Popular</span>
                            <span>Trending</span>
                            <span>Categories</span>
                        </div>
                    )}
                </Grid>
            </Grid>
            <MenuDrawer open={open} setOpen={setOpen} />
        </>
    );
}
