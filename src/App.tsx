import AlgorithmPlayer from "./components/AlgorithmPlayer";
import AlgorithmInfo from "./components/AlgorithmInfo";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center mb-4">
          Sorting Algorithm Visualizer
        </h1>
        <AlgorithmPlayer />
        <AlgorithmInfo />
      </div>
    </div>
  );
}
