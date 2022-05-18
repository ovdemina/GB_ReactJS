import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ChatBoard } from "../components/chatBoard";
import "../components/app.css";


export function Chats() {
  return (
    <div className='board'>
      <div>
    <List
      sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}
      aria-label="contacts"
    >
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText inset primary="Ivan_Ivanov" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText inset primary="Alexey_Demin" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText inset primary="Anna_Kivina" />
        </ListItemButton>
      </ListItem>
    </List>
    </div>
    <ChatBoard />
    </div>
  );
}
