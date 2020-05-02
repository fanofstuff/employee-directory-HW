import React, { Component } from "react";
import axios from "axios";
import List from "../components/EmployeeDirectory/List";

class EmployeeDirectory extends Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    this.callEmployeeAPI();
  }

  callEmployeeAPI = () => {
    axios
      .get(
        "https://randomuser.me/api/?seed=foobar&results=25&inc=name,email,dob,phone,picture,id&noinfo"
      )
      .then((response) => {
        console.log(response.data.results[0]);
        this.setState({
          employees: response.data.results,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <div className="jumbotron bg-dark text-white text-center mb-0">
          <h1>Employee Directory</h1>
          <p>
            Click on the search bar below to filter results by (Email Address).
          </p>
        </div>
        <div className="container-fluid p-3 bg-light">
          <div className="row">
            <div className="col">
              <form className="form-inline md-form mb-4">
                <input
                  className="form-control mr-sm-2"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn aqua-gradient btn-rounded btn-sm my-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
        <List employees={this.state.employees} />
      </>
    );
  }
}

export default EmployeeDirectory;
