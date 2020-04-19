import React from "react";
import axios from "axios";

class Jocks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jocks: [],
    };
  }
  componentWillMount = () => {
    this.getJocks();
  };
  getJocks = () => {
    axios
      .get(
        "http://api.icndb.com/jokes/random?limitTo=" +
          this.props.location.state.category
      )
      .then((response) => {
        this.setState({ jocks: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="row mt-4 d-flex justify-content-center">
        <div className="col-12 col-md-6">
          {this.state.jocks.value ? (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  {this.state.jocks.value.categories}
                </h5>
                <p className="card-text">{this.state.jocks.value.joke}</p>
              </div>
            </div>
          ) : null}
          <button
            type="button"
            className="btn btn-primary mt-3"
            onClick={this.getJocks}
          >
            Get Next Jock
          </button>
        </div>
      </div>
    );
  }
}

export default Jocks;
