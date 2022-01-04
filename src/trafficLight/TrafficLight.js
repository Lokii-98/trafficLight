import React, { Fragment, useRef } from "react";
import IdleTimer from "react-idle-timer";
import { connect } from "react-redux";
import { changeLightColor, setInitialState } from "../actions";
import "./TrafficLight.css";

const TrafficLight = ({ signalStatus, changeLightColor }) => {
  const { color, index } = signalStatus;
  console.log("Colour = ",color, "Index = ", index, "Current Signal" )
  const idleTimerRef = useRef(null);
  const timer = {
    0:5,
    1:2,
    2:5
  }
  const RenderLight = () => {
    let lightDiv = [];
    let colour = "";
    for (let i = 0; i < 3; i++) {
      index === i ? (colour = color) : (colour = "");
      lightDiv.push(<div className={`circle ${colour}`}> </div>);
    }
    return lightDiv;
  };

  const userIsIdle = (signalState)=>{
    console.log('idle timer')
    changeLightColor(signalState);
  }

  return (
    <Fragment>
      <div className="container">
        <RenderLight />
      </div>
      <IdleTimer 
        ref={idleTimerRef}
        timeout={timer[index]*1000}
        onIdle={()=>userIsIdle(signalStatus)}
      />
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
