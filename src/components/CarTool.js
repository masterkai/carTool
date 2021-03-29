import React, {useState} from 'react';
import ToolHeader from "./ToolHeader";
import CarTable from "./CarTable";
import CarForm from "./CarForm";


export const CarTool = ({cars: initialCars}) => {

  const [cars, setCars] = useState(initialCars.concat())

  const addCar = (carForm) => {
    setCars(cars.concat({
      ...carForm,
      id: Math.max(...cars.map(car => car.id)) + 1,
    }))


  }

  return (
    <>
      <ToolHeader headerText={`CarTool`}/>
      <CarTable cars={cars}/>
      <CarForm onSubmitCar={addCar} buttonText='add car'/>
    </>
  )
}