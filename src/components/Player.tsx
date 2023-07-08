import Bar from "./Bar";

export default function Player(){
  return (
    <div>
      <div 
        className="d-flex align-items-end justify-content-around border border-dark" 
        style={{height: 370, backgroundColor: "whitesmoke"}}>
        <Bar />
        <Bar />
        <Bar />
        <Bar />
        <Bar />


        <Bar />
        <Bar />
        <Bar />
        <Bar />
        <Bar />


        <Bar />
        <Bar />
        <Bar />
        <Bar />
        <Bar />

        <Bar />
        <Bar />
        <Bar />
        <Bar />
        <Bar />
        <Bar />
        <Bar />
        <Bar />
        <Bar />
        <Bar />
        <Bar />
        <Bar />
        <Bar />
        <Bar />
        <Bar />
        <Bar />
        <Bar />
        <Bar />
        <Bar />
        <Bar />
        <Bar />
        <Bar />
        <Bar />
        <Bar />
        <Bar />
        <Bar />
        <Bar />
        <Bar />
        <Bar />
        <Bar />
        <Bar />
        <Bar />
        <Bar />
        <Bar />
        <Bar />
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
