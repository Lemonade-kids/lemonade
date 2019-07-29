import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
// import { connect } from 'react-redux'
import ControlCenter from './components/controlCenter/ControlCenter'
import CCGarden from './components/controlCenter/components/CCGarden'
import CCKitchen from './components/controlCenter/components/CCKitchen'
import CCMarket from './components/controlCenter/components/CCMarket'
import CCStore from './components/controlCenter/components/CCStore'
import water from './images/water.png'
import Header from './components/Header'
import GameBoard from './components/GameBoard'
import Modal from './components/modal'
import { calculateProductSold, 
  calculateTemperature,
  calculateMoneyMade,
  calculateCrowd } from './modules/marketController'

class App extends React.Component {
  state = {
    whichComponent: '',
    producePicked: '',
    watered: false,
    weeded: false,
    harvested: false,
    bakeBtn: false,
    buySugar: 0,
    buyFlour: 0,
    buyMilk: 0,
    buyEggs: 0,
    sugarTotal: 0,
    flourTotal: 0,
    milkTotal: 0,
    eggTotal: 0,
    runningTotal: 0,
    readyToSell: false,
    marketBtn: false,
    bank: 50,
    products: 0,
    cropAmount: 0,
    storeModalOpen: false,
    kitchenModalOpen: false,
    ingredientsModalOpen: false,
    eggInventory: 0,
    flourInventory: 0,
    milkInventory: 0,
    sugarInventory: 0,
    product: 0,
    temperature: '',
    customers: 0
  }

  tendGarden = (event) => {
    let id = event.target.dataset.valuename
    if (id === 'waterBtn') {
      this.setState({
        watered: true
      })
      return <img src={water} className="water" alt="water" />
    }
    if (id === 'weedBtn') {
      this.setState({
        weeded: true
      })
    }
    if (id === 'harvestBtn') {
      if (this.state.watered && this.state.weeded) {
        this.setState({
          harvested: true,
          watered: false,
          cropAmount: 20
        })
      }
      if (this.state.watered && !this.state.weeded) {
        this.setState({
          harvested: true,
          watered: false,
          cropAmount: 17
        })
      }
      if (!this.state.watered && this.state.weeded) {
        this.setState({
          harvested: true,
          watered: false,
          cropAmount: 17
        })
      }
      if (!this.state.watered && !this.state.weeded) {
        this.setState({
          harvested: true,
          watered: false,
          cropAmount: 15
        })
      }
    }
  }

  // function to show loading bar in kitchen and "make" the product
  showBar = () => {
    let { customers, eggInventory, flourInventory,
      milkInventory, sugarInventory, cropAmount} = this.state
    customers = calculateCrowd()
    if (this.state.producePicked === 'Lemon') {
      sugarInventory -= 5
      cropAmount -= 15
      if (cropAmount >= 0 && sugarInventory >= 0) {
        this.setState({
          bakeBtn: true,
          sugarInventory,
          cropAmount,
          product: 30,
          customers
        })
      } else {
        this.setState({kitchenModalOpen: true, modal: 'kitchen'})
      }
    }
    if (this.state.producePicked === 'Blueberry') {
      cropAmount -= 15
      eggInventory -= 2
      milkInventory -= 1
      flourInventory -= 1
      sugarInventory -= 2
      if (cropAmount >= 0 && eggInventory >= 0 && flourInventory >= 0 
        && milkInventory >= 0 && sugarInventory >= 0) {
        this.setState({
          bakeBtn: true,
          eggInventory,
          flourInventory,
          milkInventory,
          sugarInventory,
          cropAmount,
          product: 30,
          customers
        })
      } else {
        this.setState({kitchenModalOpen: true, modal: 'kitchen'})
      }
    }
    if (this.state.producePicked === 'Squash') {
      cropAmount -= 15
      eggInventory -= 2
      milkInventory -= 1
      flourInventory -= 1
      sugarInventory -= 1
      if (cropAmount >= 0 && eggInventory >= 0 && flourInventory >= 0 
        && milkInventory >= 0 && sugarInventory >= 0) {
        this.setState({
          bakeBtn: true,
          eggInventory,
          flourInventory,
          milkInventory,
          sugarInventory,
          cropAmount,
          product: 30,
          customers
        })
      } else {
        this.setState({kitchenModalOpen: true, modal: 'kitchen'})
      }
    }
  }

  showGoToMarketBtn = () => {
    this.setState({marketBtn: true})
  }

  /* function that gets passed to child components that
  checks on these values in there and returns them back here (putting them in state),
  so any changes get passed throughout other parts of the app */
  grabData = (crop, bank, cropAmount, temperature) => {
    this.setState({producePicked: crop, bank, cropAmount, temperature})
  }

  restart = () => {
    this.setState({
      whichComponent: '',
      producePicked: '',
      watered: false,
      weeded: false,
      harvested: false,
      bakeBtn: false,
      buySugar: 0,
      buyFlour: 0,
      buyMilk: 0,
      buyEggs: 0,
      sugarTotal: 0,
      flourTotal: 0,
      milkTotal: 0,
      eggTotal: 0,
      runningTotal: 0,
      readyToSell: false,
      marketBtn: false,
      bank: 50,
      products: 0,
      cropAmount: 0,
      storeModalOpen: false,
      kitchenModalOpen: false,
      ingredientsModalOpen: false,
      eggInventory: 0,
      flourInventory: 0,
      milkInventory: 0,
      sugarInventory: 0,
      product: 0,
      temperature: '',
      customers: 0
    })
  }

  addToCart = (buyEggs, buyFlour, buyMilk, buySugar) => {
    let eggTotal
    let milkTotal
    let flourTotal
    let sugarTotal
    buyEggs > 0 ? eggTotal = buyEggs * 1 : eggTotal = 0
    buyMilk > 0 ? milkTotal = buyMilk * 4 : milkTotal = 0
    buyFlour > 0 ? flourTotal = buyFlour * 3 : flourTotal = 0
    buySugar > 0 ? sugarTotal = buySugar * 6 : sugarTotal = 0
    this.setState({
      buyEggs, buyFlour, buyMilk, buySugar,
      runningTotal: eggTotal + milkTotal + flourTotal + sugarTotal
    })
  }

  getTodaysTemp = () => calculateTemperature()

  calculateProductSold = (producePicked, product, temp, crowd) => calculateProductSold(producePicked, product, temp, crowd)

  startSelling = () => {
    let { bank, product, producePicked, temperature, customers } = this.state
    console.log('customers', customers)
    let productSold = 0
    productSold = this.calculateProductSold(producePicked, product, temperature, customers)
    console.log(productSold)
    product -= productSold
    console.log(product)
    if (product > 0) {
      bank += calculateMoneyMade(productSold)
      this.setState({
        readyToSell: true,
        bank,
        product
      })
    }
  }

  makePurchase = () => {
    const newBank = this.state.bank - this.state.runningTotal
    const eggInventory = this.state.buyEggs + this.state.eggInventory
    const flourInventory = this.state.buyFlour + this.state.flourInventory
    const milkInventory = this.state.buyMilk + this.state.milkInventory
    const sugarInventory = this.state.buySugar + this.state.sugarInventory
    if (newBank >= 0) {
      this.setState({
        bank: newBank, 
        buyEggs: 0,
        buyFlour: 0,
        buyMilk: 0,
        buySugar: 0,
        runningTotal: 0,
        eggInventory,
        flourInventory,
        milkInventory,
        sugarInventory
      })
    } else {
      this.setState({storeModalOpen: true, modal: 'store'})
    }
  }

  openModal = (component) => {
    const modal = `${component}ModalOpen`
    this.setState({[modal]: true, modal: [component]})
  }
  
  openIngredientsModal = () => {
    this.setState({ingredientsModalOpen: true, modal: 'ingredients'})
  }

  closeModal = () => {
    const modal = `${this.state.modal}ModalOpen`
    this.setState({[modal]: false})
  }

  render() {
    const { 
      buyEggs, 
      buySugar, 
      buyFlour, 
      buyMilk, 
      eggTotal,
      milkTotal,
      flourTotal,
      sugarTotal,
      runningTotal,
      producePicked,
      harvested,
      watered,
      weeded,
      readyToSell,
      bakeBtn,
      bank,
      cropAmount,
      storeModalOpen,
      kitchenModalOpen,
      ingredientsModalOpen,
      eggInventory,
      flourInventory,
      milkInventory,
      sugarInventory,
      product,
      temperature,
      customers } = this.state
    console.log(customers)
    return (
      <div className="App">
        {storeModalOpen ? 
          <Modal 
            message={'Oops! Looks like this purchase costs more than you have!  Please adjust your amounts and try again.'} 
            confirm={'Okay'} 
            closeModal={this.closeModal} /> : null}
        {kitchenModalOpen ? 
          <Modal 
            message={'Oops! Looks like you don\'t have enough of an important ingredient!'} 
            confirm={'Okay'} 
            closeModal={this.closeModal} /> : null}
        {ingredientsModalOpen && producePicked === 'Lemon' ?
          <Modal 
            message={<div><h3>Lemonade</h3><p>{'You\'ll need 5 cups of sugar and 15 lemons to make enough lemonade to sell!'}</p></div>}
            confirm={'Okay'} 
            closeModal={this.closeModal} /> : null}
        {ingredientsModalOpen && producePicked === 'Blueberry' ?
          <Modal 
            message={<div><h3>Blueberry Muffins</h3><p>{'You\'ll need 2 eggs, 2 cups of sugar, 1 pound of flour, 1 pint of milk, and 15 pounds of blueberries to make enough muffins to sell!'}</p></div>} 
            confirm={'Okay'} 
            closeModal={this.closeModal} /> : null}
        {ingredientsModalOpen && producePicked === 'Squash' ?
          <Modal 
            message={<div><h3>Squash Bread</h3><p>{'You\'ll need 2 eggs, 1 cup of sugar, 1 pound of flour, 1 pint of milk, and 15 squash to make enough bread to sell!'}</p></div>} 
            confirm={'Okay'} 
            closeModal={this.closeModal} /> : null}
        {ingredientsModalOpen && producePicked === '' ?
          <Modal 
            message={'You need to select a crop first before you can get the ingredients for a recipe!'} 
            confirm={'Okay'} 
            closeModal={this.closeModal} /> : null}
        <Header 
          producePicked={producePicked}
          bank={bank}
          cropAmount={cropAmount}
          openModal={this.openIngredientsModal}
          temperature={temperature} />
        <div className="container">
          <div className="row app-container">
            <div className="col-sm-3 Control-Center">
              <ControlCenter 
                producePicked={producePicked} 
                bank={bank} 
                cropAmount={cropAmount}
                eggs={eggInventory}
                flour={flourInventory}
                milk={milkInventory}
                sugar={sugarInventory}
                product={product}
                temperature={temperature} />
              <Switch>
                <Route path='/garden' exact render={(props) => <CCGarden {...props}
                  producePicked={producePicked}
                  tendGarden={this.tendGarden}
                  watered={watered}
                  weeded={weeded}
                  harvested={harvested}
                  bank={bank}
                  cropAmount={cropAmount}
                  temperature={temperature}
                />} />
                <Route path='/store' exact render={(props) => <CCStore {...props}
                  producePicked={producePicked}
                  tendGarden={this.tendGarden}
                  watered={watered}
                  weeded={weeded}
                  harvested={harvested}
                  buySugar={buySugar}
                  buyFlour={buyFlour}
                  buyMilk={buyMilk}
                  buyEggs={buyEggs}
                  sugarTotal={sugarTotal}
                  flourTotal={flourTotal}
                  milkTotal={milkTotal}
                  eggTotal={eggTotal}
                  runningTotal={runningTotal}
                  bank={bank}
                  cropAmount={cropAmount}
                  makePurchase={this.makePurchase}
                  temperature={temperature}
                />} />
                <Route path='/kitchen' exact render={(props) => <CCKitchen {...props}
                  producePicked={producePicked}
                  tendGarden={this.tendGarden}
                  watered={watered}
                  weeded={weeded}
                  harvested={harvested}
                  showBar={this.showBar}
                  bank={bank}
                  cropAmount={cropAmount}
                  product={product}
                  temperature={temperature}
                />} />
                <Route path='/market' exact render={(props) => <CCMarket {...props}
                  producePicked={producePicked}
                  tendGarden={this.tendGarden}
                  watered={watered}
                  weeded={weeded}
                  harvested={harvested}
                  showBar={this.showBar}
                  startSelling={this.startSelling}
                  readyToSell={readyToSell}
                  bank={bank}
                  cropAmount={cropAmount}
                  product={product}
                  temperature={temperature}
                />} />                
              </Switch>
            </div>
            <div className="col-sm-9">
              <GameBoard 
                grabData={this.grabData} 
                watered={watered}
                weeded={weeded}
                harvested={harvested}
                bakeBtn={bakeBtn}
                readyToSell={readyToSell}
                buySugar={buySugar}
                buyFlour={buyFlour}
                buyMilk={buyMilk}
                buyEggs={buyEggs}
                addToCart={this.addToCart}
                bank={bank}
                restart={this.restart}
                product={product}
                getTodaysTemp={this.getTodaysTemp}
                temperature={temperature}
                cropAmount={cropAmount}
                producePicked={producePicked}
                customers={customers} />
            </div>
          </div>
        </div>
        <footer>
          <p>{new Date().getFullYear()} Developed by the <a className="footer" href="https://github.com/Lemonade-kids/lemonade">Lemonade Kids</a> for <a className="footer" href="https://customfitkids.us">Custom Fit Kids</a>.</p>
        </footer>
      </div>
    )
  }
}

// commenting out all the redux stuff for now
// const mapStateToProps = (state) => {
//   return {
//     producePicked: state.producePicked
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     chooseProduce: (seed) => {
//       dispatch({
//         type: 'SAVECHOICE',
//         payload: seed
//       })
//     }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)


export default App
