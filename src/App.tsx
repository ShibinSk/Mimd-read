import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Modal from "@mui/material/Modal";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  Toolbar,
  Typography,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import "./index.css";

import LinearProgress from "@mui/material/LinearProgress";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 1,
  color: "",
  p: 4,
};
function App() {
  const [numbers, setNumbers] = useState<number[] | null>(null); // Initialize the state as null
  const [add, setAdd] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [openbtn, setOpen] = React.useState(false);

  function handleClick() {
    setNumbers(numbers ? [...numbers, Number(add)] : [Number(add)]);

    // Check if numbers is not null, then add the new number
    setOpen(true);
    setAdd(""); // Clear the input field after adding the number
  }

  const handleClose = () => setOpen(false);
  console.log(numbers);
  const num = numbers;
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("This will run after 1 second!");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="row">
      <Box sx={{ flexGrow: 1, bgcolor: "red" }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="error"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Menu open={false} />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Mind Reader
            </Typography>
            <Button color="inherit"></Button>
          </Toolbar>
        </AppBar>
      </Box>
      <LinearProgress color="secondary" />

      <div className="container " col-md-5>
        <div className="App">
          <div className="List">
            <label>Think of a number between 1 to 10</label>
            <input
              type="text"
              value={add}
              onChange={(e) => setAdd(e.target.value)}
            />
            <div style={{ padding: "10px" }}>
              <button onClick={handleClick} type="submit">
                Read My Mind
              </button>
            </div>
          </div>

          <Modal
            open={openbtn}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                You Thinking off the number
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <li>{num}</li>
              </Typography>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default App;
