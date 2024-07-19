import { List, ListItem, ListItemText, Divider } from "@mui/material";

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
    return (
        <div
            style={{
                fontFamily: "Inter",
                fontWeight: "700",
                fontSize: "45px",

                backgroundColor: "hsl(240, 100%, 5%)",
                height: "100%",
            }}
        >
            <div style={{ color: "hsl(35, 77%, 62%)", paddingLeft: "20px" }}>
                New
            </div>
            <List sx={{ padding: "20px" }}>
                {articles.map((article, idx) => (
                    <ListItem
                        key={article.id}
                        divider={idx < articles.length - 1}
                        sx={{ borderColor: "hsl(233, 8%, 79%)" }}
                    >
                        <ListItemText
                            primary={article.title}
                            secondary={article.snippet}
                            primaryTypographyProps={{
                                color: "white",
                                fontFamily: "inter",
                                fontWeight: 700,
                                paddingBottom: "10px",
                                paddingTop: "20px",
                            }}
                            secondaryTypographyProps={{
                                color: "hsl(233, 8%, 79%)",
                                paddingBottom: "20px",
                            }}
                        />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}
