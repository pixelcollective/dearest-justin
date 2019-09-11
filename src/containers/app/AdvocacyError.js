import React, {Component} from 'react'
import {connect} from 'react-redux'

import {Row, Col, Alert} from 'reactstrap'

class AdvocacyError extends Component {
  render(){
    if(this.props.connectionError==true)
      return(
        <div id="connection-error">
          <Row>
            <Col className="connection-error mx-auto" xs="12">
              <Alert className="alert-info">
                💔 Your valentine seems to have gotten stuck in the mail. Please try again 💓
              </Alert>
            </Col>
          </Row>
        </div>
      )
    else
      return null
  }
}

const mapStateToProps = (state) => {
  return {advocacyError: state.advocacy.advocacyError}
}

export default connect(mapStateToProps, null)(AdvocacyError)
