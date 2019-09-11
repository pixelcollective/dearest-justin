import React, {Component} from 'react'
import {connect} from 'react-redux'

import {submitLetter} from './../../actions/advocacy'
import {letterCompleteAnimation} from './../../actions/app'

import LetterAnimation from './../../components/actionnetwork/LetterAnimation'
import LetterForm from './../../components/actionnetwork/LetterForm'

class Letter extends Component {
  constructor(props) {
    super(props)
    this.onAnimationComplete = this.onAnimationComplete.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      message: ''
    }
  }
  handleChange(event) {
    this.setState({
      message: event.target.value
    })
  }
  handleSubmit() {
    if(this.state.message!=='')
      this.props.submitLetter(this.state.message)
    else
      this.props.submitLetter('default')
  }
  onAnimationComplete() {
    this.props.letterCompleteAnimation()
  }
  render() {
    if(!this.props.letterAnimationComplete)
      return <LetterAnimation submissionCount={32833} onComplete={this.onAnimationComplete} />
    else
      return <LetterForm submissionCount={32833} message={this.state.message} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
  }
}

const mapStateToProps = (state) => {
  return {
    letterAnimationComplete: state.app.letterAnimationComplete,
    submissionCount:         state.app.submissionCount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitLetter:            (activist) => dispatch(submitLetter(activist)),
    letterCompleteAnimation: ()         => dispatch(letterCompleteAnimation())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Letter)
