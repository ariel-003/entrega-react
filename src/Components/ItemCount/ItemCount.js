import React, { useState } from "react";

function ItemCount(props) {
  const[counter, setCounter] = useState(props.counter ? props.counter : 0);

  const Add=() => {
    setCounter(counter + 1);
    const args = props.args ? [...props.args, ...[counter + 1]] : [counter + 1]
    props.postAdd(...args);
  }
  
  const Substract=() => {
    setCounter(counter - 1);
    const args = props.args ? [...props.args, ...[counter - 1]] : [counter - 1]
    props.postSubstract(...args);
  }

  const OnChange = (value) => {
    const intValue = parseInt(value);
    setCounter(intValue)
    const args = props.args ? [...props.args, ...[intValue]] : [intValue]
    props.postChange(...args);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-3 col-xs-offset-3">
          <div className="input-group number-spinner">
            <span className="input-group-btn">
              <button className="btn btn-default" onClick={Substract} data-dir="dwn"><span className="bi bi-dash-lg"></span></button>
            </span>
            <input type="text" onChange={e => OnChange(e.target.value)} className="form-control text-center" value={counter}/>
            <span className="input-group-btn">
              <button className="btn btn-default" onClick={Add} data-dir="up"><span className="bi bi-plus-lg"></span></button>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCount;