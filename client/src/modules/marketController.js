export const generateRandom = () => {
  let num = Math.random()
  return num
}

export const calculateTemperature = () => {
  let factor = generateRandom() + 1
  let temperature = 50 * factor
  temperature = Math.floor(temperature)
  return temperature
}

export const calculateCrowd = () => {
  let factor = generateRandom() * 10
  let crowd = Math.floor(factor)
  return crowd
}

export const calculateProductSold = (product) => {
  const temp = calculateTemperature()
  const crowd = calculateCrowd()
  let productSold = 0
  if (product === 'Lemon') {
    if (temp > 70) {
      productSold = product * .1
    }
    if (temp < 70 && temp > 60 && crowd > 7) {
      productSold = product * .2
    }
    if (temp < 70 && temp > 60 && crowd < 7) {
      productSold = product * .4
    }
    if (temp < 60 && crowd > 7) {
      productSold = product * .5
    }
    if (temp < 60 && crowd < 7) {
      productSold = product * .8
    }
  }
  if (product === 'Squash') {
    if (temp > 70) {
      productSold = product * .5
    }
    if (temp < 70 && temp > 60 && crowd > 7) {
      productSold = product * .2
    }
    if (temp < 70 && temp > 60 && crowd < 7) {
      productSold = product * .4
    }
    if (temp < 60 && crowd > 7) {
      productSold = product * .3
    }
    if (temp < 60 && crowd < 7) {
      productSold = product * .2
    }
  }
  if (product === 'Blueberry') {
    if (temp > 70) {
      productSold = product * .4
    }
    if (temp < 70 && temp > 60 && crowd > 7) {
      productSold = product * .2
    }
    if (temp < 70 && temp > 60 && crowd < 7) {
      productSold = product * .4
    }
    if (temp < 60 && crowd > 7) {
      productSold = product * .3
    }
    if (temp < 60 && crowd < 7) {
      productSold = product * .1
    }
  }
  return productSold
}