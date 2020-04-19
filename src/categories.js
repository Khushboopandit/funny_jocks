import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      ticked_category: [],
    };
  }
  componentWillMount = () => {
    axios
      .get("http://api.icndb.com/categories")
      .then((response) => {
        console.log(response);
        this.setState({ data: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  handleCategories = (value) => {
    let lis = [value];
    console.log(lis);
    this.setState({ ticked_category: lis });
  };
  render() {
    return (
      <div className="row mt-4 d-flex justify-content-center">
        {this.state.data.value ? (
          <div className="col-12 col-md-6">
            <h5>Select Category For Jocks.</h5>
            <div className="card">
              <ul className="list-group list-group-flush">
                {this.state.data.value.map((Category, index) => {
                  if (this.state.ticked_category.length > 0) {
                    if (this.state.ticked_category[0] == Category) {
                      return (
                        <li className="list-group-item bg-secondary text-warning">
                          {Category.toUpperCase()}
                        </li>
                      );
                    } else {
                      return (
                        <li
                          className="list-group-item "
                          onClick={() => this.handleCategories(Category)}
                        >
                          {Category}
                        </li>
                      );
                    }
                  } else {
                    return (
                      <li
                        className="list-group-item"
                        onClick={() => this.handleCategories(Category)}
                      >
                        {Category}
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
            <Link
              to={{
                pathname: "/Jocks",
                state: {
                  category: this.state.ticked_category,
                  hsb: "hello",
                },
              }}
            >
              <button type="button" className="btn btn-primary mt-3">
                Submit
              </button>
            </Link>
          </div>
        ) : (
          <div className="col-12 text-center">
            <h4>There is no Category.</h4>
          </div>
        )}
      </div>
    );
  }
}

export default Categories;
