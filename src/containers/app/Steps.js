import React, {Component} from 'react'
import {connect} from 'react-redux'

class Steps extends Component {
  render(){
    if(this.props.app.step===0 || this.props.contribution.complete===true)
      return null
    else if(this.props.app.step===1)
      return(
        <div id="steps">
          <div className="step active" data-desc="Write your letter">✏️</div>
          <div className="step" data-desc="Address your letter">✉️</div>
          <div className="step" data-desc="Send">📬</div>
        </div>
      )
    else if(this.props.app.step===2)
      return(
        <div id="steps">
          <div className="step done" data-desc="Write your letter">
            <i className="fas fa-check"></i>
          </div>
          <div className="step active" data-desc="Address your letter">✉️</div>
          <div className="step" data-desc="Send">📬</div>
        </div>
      )
    else if(this.props.app.step===3)
      return(
        <div id="steps">
          <div className="step done" data-desc="Write your letter">
            <i className="fas fa-check"></i>
          </div>
          <div className="step done" data-desc="Address your letter">
            <i className="fas fa-check"></i>
          </div>
          <div className="step done" data-desc="Send">
            <i className="fas fa-check"></i>
          </div>
        </div>
      )
    else
      return null
  }
}

const mapStateToProps = (state) => {
  return {
    app:          state.app,
    contribution: state.contribution
  }
}

export default connect(mapStateToProps, null)(Steps)
