import React, { useState } from "react";
import styless from "./Home.module.css";
import Header from "../../Components/Header/Header";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useSelector, useDispatch } from "react-redux";
import { AddTodo } from "../../Redux/Actions/Todos-action";


const Home = () => {
  const { todos } = useSelector((state) => state.TodoReducer);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(AddTodo(value));
    setValue("");
  };
  return (
    <div className={styless.home}>
      <div className={styless.container}>
        <div className={styless.header}>
          <Header />
        </div>
        <div className={styless.home_todos}>
          <div className={styless.box_todos}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            ></Box>
            <TextField
              onChange={(event) => setValue(event.target.value)}
              value={value}
              classes={{ root: styless.input }}
              id="outlined-basic"
              variant="outlined"
              fullWidth
            />
            <Button
              onClick={handleClick}
              color="inherit"
              variant="contained"
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </div>
        </div>
      </div>
      {todos && todos.map((item) => <p key={item.id}>{item.title}</p>)}
    </div>
  );
};

export default Home;
