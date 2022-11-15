import React from "react";
import {useSelector} from "react-redux";
import uuid from "react-uuid";
import {selectNumbers} from "../../store/generator/generator-selector";
import Row from "../row/Row";
import Card from "../card/Card";
import Empty from "../empty/Empty";
import "./main.scss";

const Main = () => {
  const {numbers} = useSelector(selectNumbers);
  console.log(numbers);
  return (
    <main>
      {numbers.length ? (
        <Row>
          {numbers.map(num => {
            return <Card key={uuid()} id={num.id} number={num.number} />;
          })}
        </Row>
      ) : (
        <Empty />
      )}
    </main>
  );
};

export default Main;
