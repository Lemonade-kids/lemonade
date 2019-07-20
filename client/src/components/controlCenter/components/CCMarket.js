import React, { Component } from 'react'
import '../../../App.css'
// import { connect } from 'react-redux'
import PropTypes from 'prop-types'


class CCMarket extends Component {

  // commenting out the redux stuff for now

  // onSubmit = (event) => {
  //   event.preventDefault()
  //   let maxTemp = 110
  //   let minTemp = 32
  //   let glassesSold = 0
  //   let productForsale = this.refs.amount.value
  //   let marketing = this.refs.marketing.value
  //   let unitPrice = this.refs.price.value
  //   console.log(this.props.prod)
  //   if (productForsale > (this.props.prod)) {
  //     // these should be modals and not alerts!
  //     return alert('You don\'t have the inventory. You can only sell the amount of products you have')
  //   } if (marketing > this.props.cash) {
  //     return alert('You dont have enough money. You can\'t afford to spend that much on marketing')
  //   } else {

  //     let marketingEffect = Math.floor(Math.random() * (maxTemp - minTemp))
  //     let tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp)
  //     // console.log("temp today is = " + tempToday)


  //     glassesSold = Math.floor(tempToday / unitPrice) + marketingEffect
  //     if (glassesSold > productForsale) {
  //       alert('you sold out')
  //       glassesSold = productForsale
  //     } else { console.log('nah') }
  //     let newBank = glassesSold * unitPrice - marketing
  //     this.props.SAVEPROD(productForsale)
  //     console.log('$ ' + newBank + ' is the amount of money you made')
  //     //  newBank = (this.props.cash);
  //     //  console.log(newBank);
  //     this.props.saveBank(newBank)
  //     console.log(glassesSold + ' Glasses Sold')
  //     console.log('marketing effect =  ' + marketingEffect)
  //     console.log(newBank + ' Ultimate Baller Kids')

  //   }

  // };

  render() {
    return (
      <div>
        {/* <form onSubmit={this.onSubmit} >
          <input type="number" ref="amount" />
          <p>Amount of goods you would like to display</p>
          <input type="number" ref="price" />
          <p>Enter goods price</p>
          <input type="number" ref="marketing" />
          <p>Enter marketing dollars here.</p>
          <button type="submit" 
          // onClick={this.props.GAME}
            onClick={this.props.startSelling} 
            className="btn" >Begin!</button>
        </form> */}
        {this.props.readyToSell ? null :
          <button className='btn' onClick={this.props.startSelling}>
          Begin!
          </button>}
      </div>
    )
  }


}

// commenting out redux stuff for now

// const mapStateToProps = state => {
//   return {
//     lem: state.Lemons,
//     cash: state.Bank,
//     prod: state.product,
//     sug: state.sugar,
//     win: state.winnings
//   }
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     GAME: () => dispatch({ type: 'GAME' }),
//     SAVEPROD(val) {
//       dispatch({
//         type: 'SAVEPROD',
//         inventory: val
//       })

//     },
//     saveBank(val) {
//       dispatch({
//         type: 'SAVE',
//         Bank: val
//       })

//     }
//   }
// }

CCMarket.propTypes = {
  lem: PropTypes.number,
  sug: PropTypes.number,
  prod: PropTypes.number,
  cash: PropTypes.number,
  producePicked: PropTypes.string,
  startSelling: PropTypes.func,
  readyToSell: PropTypes.bool
}

// export default connect(mapStateToProps, mapDispatchToProps)(CCMarket)

export default CCMarket
