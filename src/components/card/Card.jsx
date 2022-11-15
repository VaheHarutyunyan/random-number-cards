import React from "react";
import {useDispatch} from "react-redux";
import {ReactComponent as DeleteIcon} from "../../assets/icon/delete.svg";
import {setDelete} from "../../store/generator/generator-action";
import Button from "../button/Button";
import "./card.scss";

const Card = ({id, number}) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(setDelete(id));
  };
  return (
    <div className="card">
      <div className="card-header">
        <Button className="btn-icon" onClick={handleDelete}>
          <DeleteIcon width={25} height={25} />
        </Button>
      </div>
      <div className="card-body">
        <h2>{number}</h2>
      </div>
    </div>
  );
};

export default Card;
