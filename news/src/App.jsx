import { Container } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Header from "./components/Header";
import Body from "./components/Body/Body";

function App() {
    return (
        <Container maxWidth="xl">
            <Header />
            <Body />
        </Container>
    );
}

export default App;
