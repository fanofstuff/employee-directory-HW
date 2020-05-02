import React from "react";
import Item from "./Item";

const List = (props) => {
  return (
    <>
      <div className="row bg-dark text-light text-center p-3">
        <h1>You have {props.employees.length} employees.</h1>
      </div>
      <div className="row">
        <div className="col">
          <table className="table text-center bg-light">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col" onClick={props.handleSort}>
                  Name
                </th>
                <th scope="col">Phone #</th>
                <th scope="col">Email</th>
                <th scope="col">DOB</th>
              </tr>
            </thead>
            <tbody>
              {props.employees.map((employee, index) => (
                <Item employee={employee} key={index} id={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default List;
