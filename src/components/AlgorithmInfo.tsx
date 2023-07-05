interface Algorithm {
  name: string;
  description: string;
  average: string;
  best: string;
  worst: string; 
  space: string;
}
export default function AlgorithmInfo(){
  return (
    <div className="row mt-5">
      <div className="col-md-8">
        <h3>Test</h3>
        <p>Test</p>
      </div>
      <div className="col-md-4">
        <h6 className="mt-4 text-decoration-underline">Complexity</h6>
        <ul>
          <li>Average = </li>
          <li>Best = </li>
          <li>Worst = </li>
          <li>Space = </li>
        </ul>
      </div>
    </div>
  );
}
