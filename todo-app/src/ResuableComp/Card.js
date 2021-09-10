import React from "react";
import "../MasterCss/Cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faEdit } from "@fortawesome/free-solid-svg-icons";
import { giveMeAlign } from "../MasterCss/GiveAlignment";
const Card = ({ item, onClickEdit, onClickDelete }) => {
  return (
    <div style={giveMeAlign(5)}>
      <div className="CardItemName">{item.name}</div>
      <div className="CardItemIcon1">
        <FontAwesomeIcon
          onClick={() => onClickDelete(item.id)}
          icon={faTimesCircle}
          color={"red"}
        />
      </div>
      <div className="CardItemIcon2">
        <FontAwesomeIcon
          icon={faEdit}
          onClick={() => onClickEdit(item.id)}
          color={"lightblue"}
        />
      </div>
    </div>
  );
};

export default Card;
