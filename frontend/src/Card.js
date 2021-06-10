import React from "react";
import "./Card.css";

class Card extends React.Component {
  render() {
    const x = this.props.name.map((nm, idx) => {
      if (idx % 2 === 0) {
        return (
          <div class="shadow card">
            <div class="card-body">
              <h5 class="card-title">ID: {nm.id}</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                Created At: {nm.created_at}
              </h6>
              <p class="card-text">{nm.text}</p>
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
          <div class="shadow card">
            <div class="card-body">
              <h5 class="card-title">ID: {nm.id}</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                Created At: {nm.created_at}
              </h6>
              <p class="card-text">{nm.text}</p>
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
          <div className="row">
            <div className="card-col col-lg-6">{x}</div>
            <div className="col-lg-6">{y}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
