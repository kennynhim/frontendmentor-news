import { List, ListItem, ListItemText } from "@mui/material";

const articles = [
    {
        title: "Hydrogen VS Electric Cars",
        snippet: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
        title: "The Downsides of AI Artistry",
        snippet:
            "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
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
                padding: "20px",
                backgroundColor: "hsl(240, 100%, 5%)",
            }}
        >
            <div style={{ color: "hsl(35, 77%, 62%)" }}>New</div>
            <List>
                {articles.map((article) => (
                    <ListItem>
                        <ListItemText
                            primary={article.title}
                            secondary={article.snippet}
                        />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}
