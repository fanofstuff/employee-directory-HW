import React from "react";
// import axios from "axios";

const Item = ({employee}) => {
  return (
    <tr>
        <td><img src={employee.picture.large} className="img-fluid img-thumbnail" alt="employee"/></td>
        <td>{employee.name.title} {employee.name.first} {employee.name.last}</td>
        <td>{employee.phone}</td>
        <td>{employee.email}</td>
        <td>{employee.dob.date}</td>
    </tr>
  );
};

export default Item;
