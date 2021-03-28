import React, {useState} from 'react';

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
export const CarTool = ({cars: initialCars}) => {

  const [cars, setCars] = useState(initialCars.concat())

  const [carForm, setCarForm] = useState({
    make: '',
    model: '',
    year: 1900,
    color: '',
    price: 0
  })

  const change = ({target: {name, type, value}}) => {
    setCarForm({
      ...carForm,
      [name]: type === 'number' ? Number(value) : value
    })
  }

  const addCar = () => {
    setCars(cars.concat({
      ...carForm,
      id: Math.max(...cars.map(car => car.id)) + 1,
    }))

    setCarForm({
      make: '',
      model: '',
      year: 1900,
      color: '',
      price: 0,
    })
  }

  return (
    <>
      <header>
        <h1>Hello CatTool!!!~</h1>
      </header>
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
        {cars && rederCars(cars)}
        </tbody>
      </table>
      <form>
        <div>
          <label htmlFor="make-input">Make:</label>
          <input type="text" id='make-input'
                 value={carForm.make}
                 onChange={change}
                 name='make'
          />
        </div>
        <div>
          <label htmlFor="model-input">Model:</label>
          <input type="text" id='model-input'
                 value={carForm.model}
                 onChange={change}
                 name='model'
          />
        </div>
        <div>
          <label htmlFor="year-input">Year:</label>
          <input type="number" id='year-input'
                 value={carForm.year}
                 onChange={change}
                 name='year'
          />
        </div>
        <div>
          <label htmlFor="color-input">Color:</label>
          <input type="text" id='color-input'
                 value={carForm.color}
                 onChange={change}
                 name='color'
          />
        </div>
        <div>
          <label htmlFor="price-input">Price:</label>
          <input type="number" id='price-input'
                 value={carForm.price}
                 onChange={change}
                 name='price'
          />
        </div>
        <button type='button' onClick={addCar}>Add Car</button>
      </form>
    </>
  )
}