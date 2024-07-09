import { Grid } from "@mui/material";

export default function Header() {
    return (
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
            <Grid item xs={4} sx={{ alignContent: "center", textAlign: "end" }}>
                <span>Home</span>
                <span>New</span>
                <span>Popular</span>
                <span>Trending</span>
                <span>Categories</span>
            </Grid>
        </Grid>
    );
}
