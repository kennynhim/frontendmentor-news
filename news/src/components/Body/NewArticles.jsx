import { Grid, useMediaQuery } from "@mui/material";

const articles = [
    {
        id: 1,
        title: "Hydrogen VS Electric Cars",
        snippet: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
        id: 2,
        title: "The Downsides of AI Artistry",
        snippet:
            "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
        id: 3,
        title: "Is VC Funding Drying Up?",
        snippet:
            "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
];

export default function NewArticles() {
    const isXL = useMediaQuery("(min-width:1536px)");
    return (
        <div
            style={{
                fontFamily: "Inter",
                backgroundColor: "hsl(240, 100%, 5%)",
                height: "100%",
                padding: "0 20px",
            }}
        >
            <div
                style={{
                    fontWeight: 700,
                    fontSize: "45px",
                    color: "hsl(35, 77%, 62%)",
                    paddingTop: "20px",
                }}
            >
                New
            </div>
            <Grid
                container
                direction="column"
                justifyContent="space-evenly"
                sx={{ height: isXL ? "100%" : "auto" }}
            >
                {articles.map((article, idx) => (
                    <Grid
                        item
                        key={article.id}
                        sx={{
                            fontFamily: "Inter",
                            borderBottom:
                                idx < articles.length - 1
                                    ? "1px solid hsl(233, 8%, 79%)"
                                    : "",
                        }}
                    >
                        <div
                            style={{
                                color: "white",
                                fontWeight: 700,
                                fontSize: "28px",
                                paddingBottom: "10px",
                            }}
                        >
                            {article.title}
                        </div>
                        <div
                            style={{
                                color: "hsl(233, 8%, 79%)",
                                paddingBottom: "50px",
                            }}
                        >
                            {article.snippet}
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
