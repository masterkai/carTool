import React,{memo} from 'react';
import Spinner from "../UI/Spinner";
import PropTypes from 'prop-types'
import {carsPropTypes} from "../propTypes/cars";
import ViewCarRow from "./ViewCarRow";
import EditCarRow from './EditCarRow'

const CarTable = memo(({
                    cars, editCarId,
                    onDeleteCar: deleteCar,
                    onEditCar: editCar,
                    onCancelCar: cancelCar,
                    onSaveCar: saveCar
                  }) => {
  const rederCars = cars => {
    return cars.map(car => car.id === editCarId ?
      <EditCarRow key={car.id} car={car} onSaveCar={saveCar} onCancelCar={cancelCar}/> :
      <ViewCarRow key={car.id} car={car} onDeleteCar={deleteCar} onEditCar={editCar}/>)
  }
  return (
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th><label htmlFor='edit-make-input'>Make</label></th>
        <th><label htmlFor='edit-model-input'>Model</label></th>
        <th><label htmlFor='edit-year-input'>Year</label></th>
        <th><label htmlFor='edit-color-input'>Color</label></th>
        <th><label htmlFor='edit-price-input'>Price</label></th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      {cars.length === 0 && <tr>
        <td colSpan='7'><Spinner/> cars is loading...</td>
      </tr>}
      {cars && rederCars(cars)}
      </tbody>
    </table>
  );
});
CarTable.defaultProps = {
  cars: []
}
CarTable.propTypes = {
  cars: carsPropTypes,
  editCarId: PropTypes.number,
  onDeleteCar: PropTypes.func.isRequired,
  onCancelCar: PropTypes.func.isRequired,
  onSaveCar: PropTypes.func.isRequired,
  onEditCar: PropTypes.func.isRequired,
}
export default CarTable;