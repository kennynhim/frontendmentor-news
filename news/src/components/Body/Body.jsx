import { Grid } from "@mui/material";
import MainArticle from "./MainArticle";
import NewArticles from "./NewArticles";

export default function Body() {
    return (
        <Grid container spacing={3} sx={{ marginTop: "40px" }}>
            <Grid item xs={8}>
                <MainArticle />
            </Grid>
            <Grid item xs={4}>
                <NewArticles />
            </Grid>
        </Grid>
    );
}
