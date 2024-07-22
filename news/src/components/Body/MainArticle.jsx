import { Grid, Button, useMediaQuery } from "@mui/material";
import mainImg from "../../assets/image-web-3-desktop.jpg";
import { useIsMobile } from "../../customHooks";
import styles from "./MainArticle.module.css";

export default function MainArticle() {
    const isMobile = useIsMobile();
    const isXL = useMediaQuery("(min-width:1563px)");
    return (
        <Grid container sx={{ paddingRight: isMobile ? "0" : "30px" }}>
            <Grid item xs={12} style={{ marginBottom: "40px" }}>
                <img style={{ maxWidth: "100%" }} src={mainImg} />
            </Grid>
            <Grid item xs={12} md={6}>
                <div
                    style={{
                        fontFamily: "Inter",
                        fontWeight: "800",
                        fontSize: "50px",
                        width: isXL ? "60%" : "100%",
                        paddingBottom: isMobile ? "10px" : "0",
                    }}
                >
                    The Bright Future of Web 3.0?
                </div>
            </Grid>
            <Grid
                item
                xs={12}
                md={6}
                sx={{
                    position: isMobile ? "static" : "relative",
                    marginBottom: isMobile ? "50px" : "0",
                }}
            >
                <div
                    style={{
                        fontFamily: "Inter",
                        fontSize: "15px",
                        lineHeight: "25px",
                        wordSpacing: "3px",
                        paddingBottom: isMobile ? "10px" : "0",
                    }}
                >
                    We dive into the next evolution of the web that claims to
                    put the power of the platforms back into the hands of the
                    people. But is it really fulfilling its promise?
                </div>
                <Button
                    variant="contained"
                    className={styles.readMoreButton}
                    sx={{
                        width: isMobile ? "auto" : "50%",
                        position: isMobile ? "static" : "absolute",
                    }}
                >
                    Read More
                </Button>
            </Grid>
        </Grid>
    );
}
