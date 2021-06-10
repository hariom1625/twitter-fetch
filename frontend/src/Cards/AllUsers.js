import React from "react";
import "./Card.css";

class AllUsers extends React.Component {
  render() {
    const x = this.props.name.map((nm, idx) => {
      if (idx % 2 === 0) {
        return (
          <div className="shadow card">
            <div className="card-body">
              <h5 className="card-title"> {nm.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                <span className="sub-head"> Username:</span>
                {nm.username}
              </h6>
              <p className="card-text">
                <span className="sub-head">Description:</span>
                {nm.desc}
              </p>
            </div>
          </div>
        );
      } else {
        return <div></div>;
      }
    });

    const y = this.props.name.map((nm, idx) => {
      if (idx % 2 === 0) {
        return (
          <div className="shadow card">
            <div className="card-body">
              <h5 className="card-title"> {nm.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                <span className="sub-head"> Username:</span>
                {nm.username}
              </h6>
              <p className="card-text">
                <span className="sub-head">Description:</span>
                {nm.desc}
              </p>
            </div>
          </div>
        );
      } else {
        return <div></div>;
      }
    });
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
          <h1 className="home-head"> User Details</h1>
          <div className="row">
            <div className="card-col col-lg-6">{x}</div>
            <div className="col-lg-6">{y}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default AllUsers;
