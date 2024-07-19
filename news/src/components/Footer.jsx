import { Grid } from "@mui/material";
import gamingGrowth from "../assets/image-gaming-growth.jpg";
import retroPcs from "../assets/image-retro-pcs.jpg";
import topLaptops from "../assets/image-top-laptops.jpg";

const ARTICLES = [
    {
        id: 1,
        label: "01",
        title: "Reviving Retro PCs",
        snippet: "What happens when old PCs are given modern upgrades?",
        img: retroPcs,
    },
    {
        id: 2,
        label: "02",
        title: "Top 10 Laptops of 2022",
        snippet: "Our best picks for various needs and budgets.",
        img: topLaptops,
    },
    {
        id: 3,
        label: "03",
        title: "The Growth of Gaming",
        snippet: "How the pandemic has sparked fresh opportunities.",
        img: gamingGrowth,
    },
];

export default function Footer() {
    return (
        <Grid container>
            {ARTICLES.map((article) => (
                <Grid item key={article.id} xs={4}>
                    <Grid container spacing={3}>
                        <Grid item xs="auto">
                            <img
                                src={article.img}
                                style={{ height: "150px" }}
                            />
                        </Grid>
                        <Grid item xs>
                            <Grid
                                container
                                direction="column"
                                justifyContent="space-between"
                                sx={{
                                    fontFamily: "Inter",
                                    height: "100%",
                                }}
                            >
                                <Grid
                                    item
                                    style={{
                                        color: "hsl(5, 85%, 63%)",
                                        fontSize: "30px",
                                        fontWeight: 800,
                                    }}
                                >
                                    {article.label}
                                </Grid>
                                <Grid
                                    item
                                    style={{
                                        color: "hsl(240, 100%, 5%)",
                                        fontWeight: 800,
                                        fontSize: "22px",
                                    }}
                                >
                                    {article.title}
                                </Grid>
                                <Grid
                                    item
                                    style={{ color: "hsl(236, 13%, 42%)" }}
                                >
                                    {article.snippet}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            ))}
        </Grid>
    );
}
