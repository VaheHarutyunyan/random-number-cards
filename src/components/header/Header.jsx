import React from "react";
import uuid from "react-uuid";
import {useDispatch} from "react-redux";
import {setRandomNumber, setSort} from "../../store/generator/generator-action";
import Button from "../button/Button";
import {ReactComponent as AddIcon} from "../../assets/icon/add.svg";
import {ReactComponent as SortIcon} from "../../assets/icon/sort.svg";
import "./header.scss";

const Header = () => {
  const dispatch = useDispatch();
  const handleRandomNumber = () => {
    dispatch(
      setRandomNumber({id: uuid(), number: Math.floor(Math.random() * 100) + 1})
    );
  };
  const handleSort = () => {
    dispatch(setSort());
  };
  return (
    <header>
      <div className="row">
        <div className="col">
          <Button
            icon={<AddIcon width="15px" height="15px" />}
            name="Add number"
            className="btn-yellow"
            onClick={handleRandomNumber}
          />
        </div>
        <div className="col">
          <Button
            icon={<SortIcon />}
            name="Sort"
            className="btn-outline"
            onClick={handleSort}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
