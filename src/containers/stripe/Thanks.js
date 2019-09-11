import React, {Component} from 'react'
import {connect} from 'react-redux'

class Thanks extends Component {
  render(){
    return(
      <div className='thank-you-for-everything'>
        <h1>Thank You!</h1>
      </div>
    )
  }
}

export default connect(null, null)(Thanks)
