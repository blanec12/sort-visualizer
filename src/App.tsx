import Player from "./components/Player";
import Info from "./components/Info";

export default function App() {
  const state = {
    array: [],
    arraySize: 5,
    trace: [],
    algorithm: null,
    description: null,
    best: null,
    worst: null, 
    space: null
  }
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center mb-4">
          Sorting Algorithm Visualizer
        </h1>
        <Player />
        <Info />
      </div>
    </div>
  );
}
