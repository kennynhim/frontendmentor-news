import { useState } from "react";
import { Container } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Header from "./components/Header";

function App() {
    const [count, setCount] = useState(0);

    return (
        <Container sx={{ border: "1px solid red" }}>
            <Header />
        </Container>
    );
}

export default App;
