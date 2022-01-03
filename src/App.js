import "./App.css";
import { Provider } from "react-redux";
import TrafficLight from "./trafficLight/TrafficLight";

import configureStore from "./store";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1> Traffic Light </h1>
        <TrafficLight />
      </div>
    </Provider>
  );
}

export default App;
