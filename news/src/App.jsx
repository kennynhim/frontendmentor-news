import { Grid } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Header from "./components/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer";
import { useIsMobile } from "./customHooks";

function App() {
    const isMobile = useIsMobile();
    return (
        <Grid
            container
            rowSpacing={8}
            sx={{ padding: isMobile ? "10px" : "150px" }}
        >
            <Grid item xs={12}>
                <Header />
            </Grid>
            <Grid item xs={12}>
                <Body />
            </Grid>
            <Grid item xs={12}>
                <Footer />
            </Grid>
        </Grid>
    );
}

export default App;
