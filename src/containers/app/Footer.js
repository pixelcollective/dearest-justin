import React, {Component} from 'react'
import {connect} from 'react-redux'

class Footer extends Component {
  render(){
    return(
      <div className='footer'>
        <p className="small"><em>Dearest Justin</em> is a an advocacy application that allows users to easily write and send a letter to Justin Trudeau asking him not to support Big Oil.</p>
        <p className="small font-weight-bold">❤ The Other 98% and STAND.earth</p>
      </div>
    )
  }
}

export default connect(null, null)(Footer)
