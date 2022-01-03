import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { changeLightColor, setInitialState } from "../actions";
import "./TrafficLight.css";

const TrafficLight = ({ signalStatus, changeLightColor }) => {
  const { color, index } = signalStatus;

  const timer = {
      0:2500,
      1:1000,
      2:2500,
  }

  useEffect(() => {
    console.log("hello");
      setTimeout( ()=>{ changeLightColor(signalStatus) }, timer[index]);
  },[signalStatus]);

  const RenderLight = () => {
    let lightDiv = [];
    let colour = "";
    for (let i = 0; i < 3; i++) {
      index === i ? (colour = color) : (colour = "");
      lightDiv.push(<div className={`circle ${colour}`}> </div>);
    }
    return lightDiv;
  };

  return (
    <Fragment>
      <div className="container">
        <RenderLight />
      </div>
      <button
        className="change-light"
        onClick={() => changeLightColor(signalStatus)}
      >
        Change Light
      </button>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  signalStatus: state.signalStatus,
});

const mapDispatchToProps = (dispatch) => ({
  initialState: () => dispatch(setInitialState()),
  changeLightColor: (signalStatus) => dispatch(changeLightColor(signalStatus)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TrafficLight);
