import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import "../MasterCss/Home.css";
import { giveMeAlign } from "../MasterCss/GiveAlignment";
import Card from "../ResuableComp/Card";
import Notiflix from "notiflix";
const Home = () => {
  let [value, setValue] = useState({
    addTodo: "",
  });

  const [todos, setTodos] = useState([]);

  let MainBack = {
    height: "100vh",
    padding: "20px",
  };

  let inputstyle = {
    width: "100%",
    height: "39px",
    padding: "10px",
    border: "solid",
    borderWidth: "0.5px",
    borderColor: "lightgreen",
  };

  const StoreIntoLocal = (e) => {
    e.preventDefault();
    if (value.addTodo === "") {
      Notiflix.Notify.warning("Please add Name");
    } else {
      if (!localStorage.getItem("list")) {
        let obj = { id: uuidv4(), name: value };
        localStorage.setItem("list", JSON.stringify([obj]));
        setValue({ addTodo: "" });
      } else {
        let obj = { id: uuidv4(), name: value };
        let getItem = localStorage.getItem("list");
        localStorage.setItem(
          "list",
          JSON.stringify([...JSON.parse(getItem), obj])
        );
        console.log(getItem);
        setValue({ addTodo: "" });
      }
    }
  };

  useEffect(() => {
    if (localStorage.getItem("list")) {
      setTodos(JSON.parse(localStorage.getItem("list")));
    }
  }, [localStorage.getItem("list")]);

  const handleEdit = (id) => {
    window.location.href = `/EditPage/${id}`;
  };

  const handleDelete = (id) => {
    let notMatched = JSON.parse(localStorage.getItem("list"));
    let unmatched = notMatched.filter((item) => item.id !== id);
    localStorage.setItem("list", JSON.stringify(unmatched));
    window.location.reload();
  };

  const Logout = () => {
    localStorage.removeItem("list");
    localStorage.removeItem("data");
    window.location.href = "/";
  };

  return (
    <div style={MainBack}>
      <div style={giveMeAlign(2)}>
        <button className="LogoutBtnStyle" onClick={() => Logout()}>
          {" "}
          <FontAwesomeIcon icon={faDoorOpen} />
          Logout
        </button>
      </div>
      <div style={giveMeAlign(1)}>
        <h1>To Do List</h1>
      </div>
      <div style={giveMeAlign(3)}>
        <div style={{ width: "1000px" }}>
          <FormGroup>
            <input
              style={inputstyle}
              value={value.addTodo}
              type="text"
              name="addTodo"
              placeholder="Name ..."
              onChange={(e) => setValue(e.target.value)}
            />
          </FormGroup>{" "}
        </div>
        <div>
          <Button outline color="success" onClick={(e) => StoreIntoLocal(e)}>
            Submit
          </Button>
        </div>
      </div>
      <div style={giveMeAlign(4)}>
        {todos &&
          todos.length > 0 &&
          todos.map((item) => {
            return (
              <div>
                <Card
                  item={item}
                  onClickEdit={handleEdit}
                  onClickDelete={handleDelete}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
