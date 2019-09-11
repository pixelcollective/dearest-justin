import React, {Component} from 'react'
import {connect} from 'react-redux'

import {updateActivist, submitValentine} from './../../actions/advocacy'
import {valentineCompleteAnimation} from './../../actions/app'

import ValentineAnimation from './../../components/actionnetwork/ValentineAnimation'
import ValentineForm from './../../components/actionnetwork/ValentineForm'

class Valentine extends Component {
  constructor(props) {
    super(props)
    this.onAnimationComplete = this.onAnimationComplete.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleClick(updateName) {
    console.log(updateName + ' clicked')
  }
  handleChange(updateName, updateValue) {
    let activist = {}
    if(updateName==='email')
      activist = {
        email:      updateValue,
        postalCode: this.props.advocacy.activist.postalCode
      }
    else
      activist = {
        email:      this.props.advocacy.activist.email,
        postalCode: updateValue
      }
    this.props.updateActivist(activist)
  }
  handleSubmit() {
    this.props.submitValentine()
  }
  onAnimationComplete() {
    this.props.valentineCompleteAnimation()
  }
  render() {
    if(this.props.splashAnimationComplete) 
      if(!this.props.message) {
        if(!this.props.valentineAnimationComplete)
          return <ValentineAnimation onComplete={this.onAnimationComplete} />
        else
          return <ValentineForm handleSubmit={this.handleSubmit} />
      } else {
        return null
      }
    else 
      return null
  }
}

const mapStateToProps = (state) => {
  return {
    message:                    state.advocacy.message,
    splashAnimationComplete:    state.app.splashAnimationComplete,
    valentineAnimationComplete: state.app.valentineAnimationComplete
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateActivist:             (activist) => dispatch(updateActivist(activist)),
    submitValentine:            (activist) => dispatch(submitValentine(activist)),
    valentineCompleteAnimation: () => dispatch(valentineCompleteAnimation())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Valentine)
