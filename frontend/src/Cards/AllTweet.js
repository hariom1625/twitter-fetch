import React from "react";
import "./Card.css";

class AllTweet extends React.Component {
  render() {
    const x = this.props.name.map((nm, idx) => {
      if (idx % 2 === 0) {
        return (
          <div className="shadow card">
            <div className="card-body">
              <h5 className="card-title">ID: {nm.id}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Created At: {nm.created_at}
              </h6>
              <p className="card-text">
                {" "}
                <span className="sub-head"> Tweet:</span>
                {nm.text}
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
              <h5 className="card-title">ID: {nm.id}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Created At: {nm.created_at}
              </h6>

              <p className="card-text">
                {" "}
                <span className="sub-head"> Tweet:</span>
                {nm.text}
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
          <h1 className="home-head"> Tweet Data</h1>
          <div className="row">
            <div className="card-col col-lg-6">{x}</div>
            <div className="col-lg-6">{y}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default AllTweet;
