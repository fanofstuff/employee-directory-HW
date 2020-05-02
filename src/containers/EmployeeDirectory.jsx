import React, { Component } from "react";
import axios from "axios";
import List from "../components/EmployeeDirectory/List";

class EmployeeDirectory extends Component {
  state = {
    employees: [],
    employeeFilter: [],
    search: "",
  };

  componentDidMount() {
    this.callEmployeeAPI();
  }

  callEmployeeAPI = () => {
    axios
      .get(
        "https://randomuser.me/api/?seed=foobar&results=25&inc=name,email,dob,phone,picture&noinfo"
      )
      .then((response) => {
        this.setState({
          employees: response.data.results,
          employeeFilter: response.data.results,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  clearFilter = () => {
    this.setState({
      employeeFilter: this.state.employees,
      search: "",
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("HandleSubmit");
    console.log(this.state.search);
    const employees = [...this.state.employees];
    const filteredEmployees = employees.filter((employee) => {
      const regex = new RegExp(this.state.search, "gi");
      return employee.email.match(regex);
    });
    this.setState({
      employeeFilter: filteredEmployees,
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
              <form
                className="form-inline md-form mb-4"
                onSubmit={this.handleSubmit}
              >
                <div className="row">
                  <div className="col-sm-10">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Filter Employees by Email"
                        name="search"
                        value={this.state.search}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <button
                      className="btn btn-primary btn-rounded btn-sm my-0"
                      type="submit"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
              {this.state.employees.length !==
                this.state.employeeFilter.length && (
                <button
                  className="btn btn-secondary"
                  onClick={this.clearFilter}
                >
                  Clear Filter
                </button>
              )}
            </div>
          </div>
        </div>
        <List employees={this.state.employeeFilter} />
      </>
    );
  }
}

export default EmployeeDirectory;
