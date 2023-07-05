import SortAlgoPlayer from "./components/SortAlgoPlayer";
import SortAlgoInfo from "./components/SortAlgoInfo";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center mb-4">
          Sorting Algorithm Visualizer
        </h1>
        <SortAlgoPlayer />
        <SortAlgoInfo />
      </div>
    </div>
  );
}
