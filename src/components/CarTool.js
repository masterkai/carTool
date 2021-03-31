import React, {useCallback, useState} from 'react';
import {useDefaultInputFocus} from '../hooks/useDefaultInputFocus'
import ToolHeader from "./ToolHeader";
import CarTable from "./CarTable";
import CarForm from "./CarForm";


export const CarTool = ({cars: initialCars}) => {

  const [cars, setCars] = useState(initialCars.concat())
  const [editCarId, setEditCarId] = useState(-1)
  const defaultInputRef = useDefaultInputFocus()

  const init = useCallback(() => {
    setEditCarId(-1)
    if (defaultInputRef.current) {
      defaultInputRef.current.focus()
    }
  }, [defaultInputRef])

  const addCar = useCallback((carForm) => {
    setCars(cars.concat({
      ...carForm,
      id: Math.max(...cars.map(car => car.id)) + 1,
    }))
    init()
  }, [cars,init])

  const replaceCar = useCallback((car) => {
    const newCars = cars.concat()
    const carIndex = newCars.findIndex(c => c.id === car.id)
    newCars[carIndex] = car
    setCars(newCars)
    init()
  }, [cars, init])

  const cancelCar = useCallback(() => {
    init()
  }, [init])

  const deleteCar = useCallback(carId => {
    setCars(cars.filter(car => car.id !== carId))
    init()
  }, [cars, init])

  return (
    <>
      <ToolHeader headerText={`CarTool`}/>
      <CarTable cars={cars}
                editCarId={editCarId}
                onEditCar={setEditCarId}
                onSaveCar={replaceCar}
                onCancelCar={cancelCar}
                onDeleteCar={deleteCar}/>
      <CarForm onSubmitCar={addCar} buttonText='add car' ref={defaultInputRef}/>
    </>
  )
}