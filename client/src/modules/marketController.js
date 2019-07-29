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

export const calculateProductSold = (producePicked, product, 
  temp, crowd) => {
  let productSold = 0
  if (producePicked === 'Lemon') {
    console.log('lemon', product, temp, crowd)
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
  if (producePicked === 'Squash') {
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
  if (producePicked === 'Blueberry') {
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
  console.log(productSold, product - productSold)
  return product - productSold
}

export const calculateMoneyMade = (sold, price = 2) => {
  return sold * price
}