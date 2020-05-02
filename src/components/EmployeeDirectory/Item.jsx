import React from "react";

const Item = ({employee}) => {
  return (
    <tr>
        <td><img src={employee.picture.large} className="img-fluid img-thumbnail" alt="employee"/></td>
        <td>{employee.name.first} {employee.name.last}</td>
        <td>{employee.phone}</td>
        <td>{employee.email}</td>
        <td>{employee.dob.date.substring(0,10)}</td>
    </tr>
  );
};

export default Item;
