import React, {Component} from 'react'
import {connect} from 'react-redux'

import {Row, Col, Alert} from 'reactstrap'

class ConnectionError extends Component {
  render(){
    if(this.props.connectionError==true)
      return(
        <div id='connection-error'>
          <Row>
            <Col className='connection-error mx-auto' xs="12">
              <Alert className='alert-danger'>
                <span>😰 There seems to a problem connecting with our advocacy app. Finish your valentine, though. We'll send it when you get back online.</span>
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
  return {
    connectionError: state.app.connectionError
  }
}

export default connect(mapStateToProps, null)(ConnectionError)
