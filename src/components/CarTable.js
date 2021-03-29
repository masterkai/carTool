import React from 'react';
import {carsPropTypes} from "../propTypes/cars";

const CarTable = ({cars}) => {
  const rederCars = cars => {
    return cars.map(car => (
      <tr key={car.id}>
        <td>{car.id}</td>
        <td>{car.make}</td>
        <td>{car.model}</td>
        <td>{car.year}</td>
        <td>{car.color}</td>
        <td>{car.price}</td>
      </tr>
    ))
  }
  return (
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Make</th>
        <th>Model</th>
        <th>Year</th>
        <th>Color</th>
        <th>Price</th>
      </tr>
      </thead>
      <tbody>
      {cars.length===0&&<tr><td colSpan='6'>There are no cars.</td></tr>}
      {cars && rederCars(cars)}
      </tbody>
    </table>
  );
};
CarTable.defaultProps = {
  cars:[]
}
CarTable.propTypes = {
  cars:carsPropTypes
}
export default CarTable;