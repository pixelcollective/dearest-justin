import React, {Component} from 'react'
import {connect} from 'react-redux'

import {setSubmissionCount} from './actions/app'
import {setOrgSource} from './actions/advocacy'
import {setContributionTotal} from './actions/contribution'

import Splash from './containers/app/Splash'
import Steps from './containers/app/Steps'
import Letter from './containers/actionnetwork/Letter'
import Envelope from './containers/actionnetwork/Envelope'
import Contribution from './containers/stripe/Contribution'
import Thanks from './containers/stripe/Thanks'

import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Satisfy:300,400,700', 'cursive']
  }
})

class App extends Component {
  constructor(props) {
    super(props)
    this.props.setSubmissionCount()
    this.props.setContributionTotal()
  }
  componentDidMount(){
    const {match: {params}} = this.props
    if(params.source)
      this.props.setOrgSource(params.source)
  }
  render() {
    let displayContent = null
    if(!this.props.app.splashAnimationComplete)
      displayContent = <Splash />
    else if(!this.props.advocacy.message)
      displayContent = <Letter />
    else if(!this.props.advocacy.email && !this.props.advocacy.success)
      displayContent = <Envelope />
    else if(!this.props.contribution.complete)
      displayContent = <Contribution />
    else
      displayContent = <Thanks />
    return (
      <div>
        <Steps />
        {displayContent}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    app:          state.app,
    advocacy:     state.advocacy,
    contribution: state.contribution
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSubmissionCount:   () => dispatch(setSubmissionCount()),
    setOrgSource:         (org)   => dispatch(setOrgSource(org)),
    setContributionTotal: ()      => dispatch(setContributionTotal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
