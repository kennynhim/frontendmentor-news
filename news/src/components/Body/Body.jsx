import { Grid } from "@mui/material";
import MainArticle from "./MainArticle";
import NewArticles from "./NewArticles";

export default function Body() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
                <MainArticle />
            </Grid>
            <Grid item xs={12} md={4}>
                <NewArticles />
            </Grid>
        </Grid>
    );
}
