import { Grid, Button } from "@mui/material";
import mainImg from "../../assets/image-web-3-desktop.jpg";

export default function MainArticle() {
    return (
        <Grid container>
            <Grid item xs={12} style={{ marginBottom: "40px" }}>
                <img style={{ maxWidth: "100%" }} src={mainImg} />
            </Grid>
            <Grid item xs={6}>
                <div
                    style={{
                        fontFamily: "Inter",
                        fontWeight: "800",
                        fontSize: "50px",
                        width: "60%",
                    }}
                >
                    The Bright Future of Web 3.0?
                </div>
            </Grid>
            <Grid item xs={6} sx={{ position: "relative" }}>
                <div
                    style={{
                        fontFamily: "Inter",
                        fontSize: "15px",
                        lineHeight: "25px",
                        wordSpacing: "3px",
                    }}
                >
                    We dive into the next evolution of the web that claims to
                    put the power of the platforms back into the hands of the
                    people. But is it really fulfilling its promise?
                </div>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "hsl(5, 85%, 63%)",
                        color: "black",
                        fontFamily: "Inter",
                        fontWeight: "700",
                        width: "50%",
                        position: "absolute",
                        bottom: 0,
                    }}
                >
                    Read More
                </Button>
            </Grid>
        </Grid>
    );
}
