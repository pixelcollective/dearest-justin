import React, {Component} from 'react'
import {connect} from 'react-redux'

import {updateActivist, submitAdvocacy} from './../../actions/advocacy'
import {envelopeCompleteAnimation} from './../../actions/app'

import EnvelopeAnimation from './../../components/actionnetwork/EnvelopeAnimation'
import EnvelopeForm from './../../components/actionnetwork/EnvelopeForm'

class Envelope extends Component {
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
    this.props.submitAdvocacy(this.props.advocacy)
  }
  onAnimationComplete() {
    this.props.envelopeCompleteAnimation()
  }
  render() {
    if(!this.props.advocacy.success)
      if(!this.props.envelopeAnimationCompleted)
        return <EnvelopeAnimation onComplete={this.onAnimationComplete} />
      else
        return (
          <EnvelopeForm
            email={this.props.advocacy.activist.email}
            postalCode={this.props.advocacy.activist.postalCode}
            status={this.props.advocacy.status}
            handleClick={this.handleClick}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            advocacyError={this.props.advocacy.error}
          />
        )
    else
      return null
  }
}

const mapStateToProps = (state) => {
  return {
    advocacy:                   state.advocacy,
    envelopeAnimationCompleted: state.app.envelopeAnimationComplete
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateActivist:            (activist) => dispatch(updateActivist(activist)),
    submitAdvocacy:            (activist) => dispatch(submitAdvocacy(activist)),
    envelopeCompleteAnimation: () => dispatch(envelopeCompleteAnimation())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Envelope)
