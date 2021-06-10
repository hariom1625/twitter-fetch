import React from "react";
import "./Card.css";

class GetDetails extends React.Component {
  render() {
    const x = this.props.name.map((nm, idx) => {
      return (
        <div className="shadow card">
          <div className="card-body">
            <h5 className="card-title">ID: {nm.id}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Created At: {nm.created_at}
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">
              <span className="sub-head"> Username:</span>
              {nm.username}
            </h6>
            <p className="card-text">
              <span className="sub-head">Tweet:</span>
              {nm.desc}
            </p>{" "}
            <p className="card-text">
              <span className="sub-head">External Link:</span>
              {nm.link[0].map(function (x) {
                return (
                  <div>
                    {" "}
                    <a href={x}> {x}</a>
                  </div>
                );
              })}
            </p>
          </div>
        </div>
      );
    });
    console.log(this.props.name);
    if (this.props.name.length === 0) {
      return (
        <div className="app  container-fluid">
          <div className="shadow-lg p-3 mb-5 bg-body rounded container">
            <p className="no-tweet">No Tweet Found :(</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="app  container-fluid">
          <div className="shadow-lg p-3 mb-5 bg-body rounded container">
            <a className="back-btn" href="/">
              <button
                value="AllUsers"
                onClick={this.AllUsers}
                type="button"
                className="btn btn-secondary btn-lg"
              >
                Go Back
              </button>
            </a>
            <h1 className="home-head"> Tweet Details</h1>
            <div className="row">
              <div className="card-col">{x}</div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default GetDetails;
