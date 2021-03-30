import React, {useState} from 'react';
import ToolHeader from "./ToolHeader";
import CarTable from "./CarTable";
import CarForm from "./CarForm";


export const CarTool = ({cars: initialCars}) => {

  const [cars, setCars] = useState(initialCars.concat())
  const [editCarId, setEditCarId] = useState(-1)

  const addCar = (carForm) => {
    setCars(cars.concat({
      ...carForm,
      id: Math.max(...cars.map(car => car.id)) + 1,
    }))
  }

  const replaceCar = (car) => {
    const newCars = cars.concat()
    const carIndex = newCars.findIndex(c => c.id === car.id)
    newCars[carIndex] = car
    setCars(newCars)
    setEditCarId(-1)
  }

  const cancelCar = () => {
    setEditCarId(-1)
  }

  const deleteCar = carId => {
    setCars(cars.filter(car => car.id !== carId))
    setEditCarId(-1)
  }

  return (
    <>
      <ToolHeader headerText={`CarTool`}/>
      <CarTable cars={cars}
                editCarId={editCarId}
                onEditCar={setEditCarId}
                onSaveCar={replaceCar}
                onCancelCar={cancelCar}
                onDeleteCar={deleteCar}/>
      <CarForm onSubmitCar={addCar} buttonText='add car'/>
    </>
  )
}