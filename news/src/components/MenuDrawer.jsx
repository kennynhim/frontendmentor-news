import {
    Drawer,
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const menuItems = ["Home", "New", "Popular", "Trending", "Categories"];

export default function MenuDrawer({ open, setOpen }) {
    const DrawerList = (
        <Box
            onClick={() => setOpen(false)}
            role="presentation"
            sx={{ width: 250 }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "end",
                    paddingRight: "10px",
                }}
            >
                <CloseIcon
                    onClick={() => setOpen(false)}
                    sx={{ fontSize: "50px", cursor: "pointer" }}
                />
            </div>
            <List>
                {menuItems.map((menuItem) => (
                    <ListItem key={menuItem}>
                        <ListItemButton>
                            <ListItemText
                                primary={menuItem}
                                primaryTypographyProps={{
                                    fontFamily: "Inter",
                                    fontWeight: 500,
                                    color: "hsl(240, 100%, 5%)",
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    return (
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
            {DrawerList}
        </Drawer>
    );
}
