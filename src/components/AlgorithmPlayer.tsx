export default function AlgorithmPlayer(){
  return (
    <div>
      <div 
        className="d-flex align-items-end justify-content-around border border-dark" 
        style={{height: 370, backgroundColor: "whitesmoke"}}>

        <div className="bg-secondary text-center" style={{width: 100, height: 100}}>
          1
        </div>
        <div className="bg-secondary mx-2 text-center" style={{width: 100, height: 20}}>
          2
        </div>
        <div className="bg-secondary mx-2 text-center" style={{width: 100, height: 350}}>
          3
        </div>
        <div className="bg-secondary mx-2 text-center" style={{width: 100, height: 301}}>
          4
        </div>
        <div className="bg-secondary mx-2 text-center" style={{width: 100, height: 175}}>
          5
        </div>
      </div>
      <div className="col-12 bg-dark">
        <div className="d-flex align-items-center justify-content-center">
          <button className="btn btn-dark">
            <i className="fas fa-angle-double-left text-white" style={{ fontSize: 20, margin: 10 }}></i>
          </button>
          <button className="btn btn-dark">
            <i className="fas fa-play text-white" style={{ fontSize: 20, margin: 10 }}></i>
          </button>
          <button className="btn btn-dark">
            <i className="fas fa-angle-double-right text-white" style={{ fontSize: 20, margin: 10 }}></i>
          </button>
        </div>
      </div>
    </div>
  );
}
