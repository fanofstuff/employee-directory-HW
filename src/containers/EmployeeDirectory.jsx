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
    const employees = [...this.state.employees];
    const filteredEmployees = employees.filter((employee) => {
      const regex = new RegExp(this.state.search, "gi");
      return employee.email.match(regex);
    });
    this.setState({
      employeeFilter: filteredEmployees,
    });
  };

  handleSortASC = (event) => {
    event.preventDefault();
    const employees = [...this.state.employeeFilter];
    function compare(a, b) {
      const A = a.name.first.toUpperCase();
      const B = b.name.first.toUpperCase();

      let comparison = 0;
      if (A > B) {
        comparison = 1;
      } else if (A < B) {
        comparison = -1;
      }
      return comparison;
    }
    const sortedEmployees = employees.sort(compare);
    this.setState({
      employeeFilter: sortedEmployees,
    });
  };

  render() {
    return (
      <>
        <div className="jumbotron jumbotron-fluid bg-dark text-white text-center mb-0">
          <h1>Employee Directory</h1>
          <p>
            Click on the search bar below to filter results by (Email Address).
          </p>
          <p>Click on the (Name) header to sort by first name, A to Z.</p>
        </div>
        <div className="container p-3 bg-light">
          <div className="row">
            <div className="col">
              <form className="md-form m-4" onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col m-1">
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
                  <div className="col m-2">
                    <button
                      className="btn btn-primary btn-rounded btn-sm mx-2"
                      type="submit"
                    >
                      Search
                    </button>
                    {this.state.employees.length !==
                      this.state.employeeFilter.length && (
                      <button
                        className="btn btn-danger mx-2"
                        onClick={this.clearFilter}
                      >
                        Clear Filter
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
          <List
            employees={this.state.employeeFilter}
            handleSort={this.handleSortASC}
          />
        </div>
      </>
    );
  }
}

export default EmployeeDirectory;
