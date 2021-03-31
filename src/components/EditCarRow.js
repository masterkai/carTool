import React from 'react';
import {useForm} from '../hooks/useForm'
import {useDefaultInputFocus} from '../hooks/useDefaultInputFocus'

import PropTypes from 'prop-types'
import {carPropTypes} from '../propTypes/cars'

const EditCarRow = ({car, onSaveCar, onCancelCar: cancelCar}) => {

  const [carForm, change] = useForm({...car})

  const defaultInputRef = useDefaultInputFocus()

  const saveCar = () => {
    onSaveCar({
      ...carForm,
      id: car.id
    })
  }

  return (
    <tr>
      <td>{car.id}</td>
      <td>
        <input type='text' id='edit-make-input'
               value={carForm.make} name='make'
               onChange={change}
               ref={defaultInputRef}
        />
      </td>
      <td>
        <input type='text' id='edit-model-input'
               value={carForm.model} name='model'
               onChange={change}
        />
      </td>
      <td>
        <input type='number' id='edit-year-input'
               value={carForm.year} name='year'
               onChange={change}
        />
      </td>
      <td>
        <input type='text' id='edit-color-input'
               value={carForm.color} name='color'
               onChange={change}
        />
      </td>
      <td>
        <input type='number' id='edit-price-input'
               value={carForm.price} name='price'
               onChange={change}
        />
      </td>
      <td>
        <button type='button' onClick={saveCar}>Save</button>
        <button type='button' onClick={cancelCar}>Cancel</button>
      </td>
    </tr>
  );
};
EditCarRow.propTypes = {
  car: carPropTypes.isRequired,
  onSaveCar: PropTypes.func.isRequired,
  onCancelCar: PropTypes.func.isRequired,
}
export default EditCarRow;