import React, { Component } from 'react'
import '../../../App.css'
import Boy1 from '../../../images/boy1.png'
import Boy2 from '../../../images/boy2.png'
import Boy3 from '../../../images/boy3.png'
import Boy4 from '../../../images/boy4.png'
import Boy6 from '../../../images/boy6.png'
import Boy7 from '../../../images/boy7.png'
import Girl1 from '../../../images/girl1.png'
import Girl2 from '../../../images/girl2.png'
import Girl3 from '../../../images/girl3.png'
import Girl4 from '../../../images/girl4.png'
import Girl5 from '../../../images/girl5.png'
import Girl6 from '../../../images/girl6.png'
import Girl7 from '../../../images/girl7.png'
import Girl8 from '../../../images/girl8.png'

class People extends Component {

  render() {
    return (
      <div className="People">
        <img src={Boy1} alt="boy" className="peeps" id="p1" />
        <img src={Girl1} alt="girl" className="peeps" id="p2" />
        <img src={Boy2} alt="boy" className="peeps" id="p3" />
        <img src={Girl2} alt="girl" className="peeps" id="p4" />
        <img src={Boy3} alt="boy" className="peeps" id="p5" />
        <img src={Girl3} alt="girl" className="peeps" id="p6" />
        <img src={Boy4} alt="boy" className="peeps" id="p7" />
        <img src={Girl4} alt="girl" className="peeps" id="p8" />
        <img src={Boy6} alt="boy" className="peeps" id="p9" />
        <img src={Girl6} alt="girl" className="peeps" id="p10" />
        <img src={Boy7} alt="boy" className="peeps" id="p11" />
        <img src={Girl5} alt="girl" className="peeps" id="p12" />
        <img src={Girl7} alt="girl" className="peeps" id="p13" />
        <img src={Girl8} alt="girl" className="peeps" id="p14" />
      </div>
    )
  }
}

export default People