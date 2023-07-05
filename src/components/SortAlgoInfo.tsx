export default function SortAlgoInfo(){
  return (
    <div className="row mt-5">
      <div className="col-md-8">
        <h3>Bubble Sort</h3>
        <p>
          Bubble Sort is a simple sorting algorithm that works by repeatedly 
          looping through a collection of elements and swapping adjacent
          elements if they are in the wrong order. Although simple, the number
          of required comparisons grows exponentially with the size of it's input.
          Therefore, it is impractical for problems including large datasets.
        </p>
      </div>
      <div className="col-md-4">
        <h6 className="mt-4 text-decoration-underline">Complexity</h6>
        <ul>
          <li>Average = O(n^2)</li>
          <li>Best = O(n)</li>
          <li>Worst = O(n^2)</li>
          <li>Space = O(1)</li>
        </ul>
      </div>
    </div>
  );
}
