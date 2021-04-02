const baseURL = 'http://localhost:3050/cars'

const getCollectionURL = () => baseURL
const getElementURL = carId => `${getCollectionURL()}/${encodeURIComponent(carId)}`
export const getAllCars = async () => {
  const res = await fetch(getCollectionURL())
  const cars = await res.json()
  // return await res.json()
  return new Promise(resolve => setTimeout(() => resolve(cars), 2000))
}

export const createCar = async (car) => {
  const res = await fetch(getCollectionURL(), {
    method: "POST",
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(car),
  })
  return await res.json()
}

export const replaceCar = async (car) => {
  const res = await fetch(getElementURL(car.id), {
    method: "PUT",
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(car),
  })
  return await res.json()
}

export const deleteCar = async (carId) => {
  await fetch(getElementURL(carId), {
    method: 'DELETE'
  })
}