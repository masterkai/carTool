import React, {useCallback, useEffect, useState} from 'react';
import '../App.css'
import {useDefaultInputFocus} from '../hooks/useDefaultInputFocus'
import {
  getAllCars as dbGetAllCars,
  createCar as dbCreateCar,
  replaceCar as dbReplaceCar,
  deleteCar as dbDeleteCar,
} from "../services/cars";
import ToolHeader from "./ToolHeader";
import CarTable from "./CarTable";
import CarForm from "./CarForm";


export const CarTool = () => {

  const [cars, setCars] = useState([])
  const [editCarId, setEditCarId] = useState(-1)
  const defaultInputRef = useDefaultInputFocus()
  const init = useCallback(() => {
    setEditCarId(-1)
    if (defaultInputRef.current) {
      defaultInputRef.current.focus()
    }
  }, [defaultInputRef])

  const refreshCars = useCallback(()=>{
    dbGetAllCars().then(cars => {
      setCars(cars)
      init()
    })
  },[init])

  useEffect(() => {
    refreshCars()
  }, [refreshCars])



  const addCar = useCallback((car) => {
    dbCreateCar(car)
      .then(()=>refreshCars())
    // setCars(cars.concat({
    //   ...car,
    //   id: Math.max(...cars.map(car => car.id)) + 1,
    // }))
    // init()
  }, [refreshCars])

  const replaceCar = useCallback((car) => {
    dbReplaceCar(car)
      .then(()=>refreshCars())
    // const newCars = cars.concat()
    // const carIndex = newCars.findIndex(c => c.id === car.id)
    // newCars[carIndex] = car
    // setCars(newCars)
    // init()
  }, [refreshCars])

  const cancelCar = useCallback(() => {
    init()
  }, [init])

  const deleteCar = useCallback(carId => {
    dbDeleteCar(carId).then(refreshCars)
    // setCars(cars.filter(car => car.id !== carId))
    // init()
  }, [refreshCars])

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