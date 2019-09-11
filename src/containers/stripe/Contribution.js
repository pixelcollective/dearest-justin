import React from 'react'
import {connect} from 'react-redux'

import StripeCheckout from 'react-stripe-checkout'

import ReactPlayer from 'react-player'

import {completedContribution} from './../../actions/contribution'

import {
  Col,
  Row,
  Badge,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Table,
  Alert
} from 'reactstrap'

class Contribution extends React.Component {
  levelOne = (token) => {
    console.log(token)
    fetch('https://api.dearestjustin.org/contribution/create/1000', {
      method:  'POST',
      headers: {'Content-Type': 'application/json'},
      body:    JSON.stringify(token)
    }).then(response => {
      this.props.completedContribution(response.body.amount)
    })
  }

  levelTwo = (token) => {
    console.log(token)
    fetch('https://api.dearestjustin.org/contribution/create/2500', {
      method:  'POST',
      headers: {'Content-Type': 'application/json'},
      body:    JSON.stringify(token)
    }).then(response => {
      this.props.completedContribution(response.body.amount)
    })
  }

  levelThree = (token) => {
    console.log(token)
    fetch('https://api.dearestjustin.org/contribution/create/5000', {
      method:  'POST',
      headers: {'Content-Type': 'application/json'},
      body:    JSON.stringify(token)
    }).then(response => {
      this.props.completedContribution(response.body.amount)
    })
  }

  levelFour = (token) => {
    console.log(token)
    fetch('https://api.dearestjustin.org/contribution/create/50000', {
      method:  'POST',
      headers: {'Content-Type': 'application/json'},
      body:    JSON.stringify(token)
    }).then(response => {
      this.props.completedContribution(response.body.amount)
    })
  }

  levelFive = (token) => {
    console.log(token)
    fetch('https://api.dearestjustin.org/contribution/create/500000', {
      method:  'POST',
      headers: {'Content-Type': 'application/json'},
      body:    JSON.stringify(token)
    }).then(response => {
      this.props.completedContribution(response.body.amount)
    })
  }
  render() {
    let displayContribution = false
    if(this.props.contributionTotal > 0)
      displayContribution = true
    return (
      <Row>
        <Col id="thank-you">
          <div className="thank-you-transition">
            <h1 className="thank-you-heading">Your letter is in the mail!</h1>
            <p className="thank-you-note">Wanna go even further?</p>
          </div>
          <Row>
            <Col xs="12" lg="7">
              <div className="justin-video">
                <ReactPlayer url={require('./../../assets/dearest-justin.mp4')} controls={true} fileConfig={{ attributes: { poster: 'https://dearestjustin.org/share.png' } }} width="100%" height="100%" />
              </div>
            </Col>
            <Col xs="12" lg="5" className="justin-header">
              <Badge color="primary" pill>Open Campaign</Badge>
              <h2>Help us get this outrageous video love letter from America on Justin’s TV set in Canada</h2>
              <hr/>
              <p>Who knew how cheap it was to buy airtime in Canada? For the mere price of a fancy dinner for two (a $14,000 dinner) we can play our video valentine during SNL & Colbert in the Ottawa market.</p>
              {displayContribution &&
                <h4><span className="badge badge-primary"><strong>${this.props.contributionTotal} USD raised</strong></span></h4>
              }
            </Col>
          </Row>
          <Row>
            <Col xs="12" md="5" className="order-md-2">
              <h3>Donation Levels</h3>
              <hr/>
              <Card>
                <CardBody>
                  <CardTitle>$10 USD</CardTitle>
                  <CardSubtitle>Contributor Level</CardSubtitle>
                  <CardText>Donate $10 towards getting our ad onto the airwaves and we'll send you a whole mess of good vibes, on the house! (You're probably already swimming in them)</CardText>
                  <button className="btn btn-primary disabled">Contribute $10</button>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <CardTitle>$25 USD</CardTitle>
                  <CardSubtitle>Activist Level</CardSubtitle>
                  <CardText>Donate $25 and then when Trudeau dismisses this pipeline wholesale you can give yourself a big ol' pat-on-the-back. It was probably your $25 that got the ad in front of him. No doubt.</CardText>
                  <button className="btn btn-primary disabled">Contribute $25</button>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <CardTitle>$50 USD</CardTitle>
                  <CardSubtitle>Tastemaker Level</CardSubtitle>
                  <CardText>Donate $50 and sleep soundly knowing that you are a creator of culture, not just a consumer of it. By the way, do you have any film recommendations? Our Netflix queues are getting pretty dry.</CardText>
                  <button className="btn btn-primary disabled">Contribute $50</button>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <CardTitle>$500 USD</CardTitle>
                  <CardSubtitle>Producer Level</CardSubtitle>
                  <CardText>Donate $500 and be able to brag to your friends that you're kind of a big deal TV producer these days. If you want to use as a reference, you can have any of the major film or television studios in North America contact us and we'll confirm it with them.</CardText>
                  <button className="btn btn-primary disabled">Contribute $500</button>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <CardTitle>$5000 USD</CardTitle>
                  <CardSubtitle>Financier Level</CardSubtitle>
                  <CardText>If only more financiers were interested in climate justice. All they go on about is oil and profit. Not you, though. You're a mensch.</CardText>
                  <button className="btn btn-primary disabled">Contribute $5000</button>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" md="7" className="order-md-1 story">
              <Alert>Thank you! The campaign has concluded.</Alert>
              <h3>What We Need From Justin</h3>
              <hr/>
              <p>
                Justin Trudeau has been a dreamboat on a lot of issues, from gay rights to taxing the rich to respecting immigrants. But he’s breaking our hearts when it comes to climate and his passion for building dirty Tar Sands pipelines. Help us broadcast this hilarious and sexy video valentine on televisions in Ottawa where Justin lives. Together with Justin, we can stop the Kinder Morgan pipeline and save our climate.
              </p>
              <h4>✊🏾 Respect Indigenous Sovereignty</h4>
              <p>
                Seven First Nations in the pipeline's path (and dozens more all over the continent) have been fighting to stop Kinder Morgan for years. Justin <em>explicitly</em> promised that indigenous groups would have veto power over oil projects affecting their land and water. Now he’s steamrolling right over them. This is unacceptable.
              </p>
              <h4>💧 Water Is Life</h4>
              <p>
                If the Kinder Morgan pipeline becomes operational, it will cross scores of rivers and streams and imperil the fresh water of millions of Canadians. The dirty crude, known as bitumen, is toxic to the region's salmon. It will also mean 700% more oil tankers traversing the fragile waters of the Salish Sea (aka Puget Sound).
              </p>
              <h4>💣 Real Hunks Don't Detonate Carbon Bombs</h4>
              <p>
                Kinder Morgan's Trans Mountain Pipeline expansion would dramatically ramp up Big Oil's exploitation of the Tar Sands, one of the Earth's largest and dirtiest carbon deposits. "If Canada proceeds, and we do nothing, it will be game over for the climate," according to James Hansen, former head of NASA's Goddard Institute.
              </p>
              <h4>📺 Broadcast Schedules</h4>
              <Table className="table table-bordered table-inverted">
                <thead>
                  <tr>
                    <th scope="col">Program</th>
                    <th scope="col">Airtime</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">🦅 Colbert</th>
                    <td>Nightly, 11:35pm</td>
                    <td>$1360 USD</td>
                  </tr>
                  <tr>
                    <th scope="row">✍🏼 Madam Secretary</th>
                    <td>Sun 10p-11p</td>
                    <td>$3995 USD</td>
                  </tr>
                  <tr>
                    <th scope="row">😂 SNL</th>
                    <td>Sat 11:30p-1a</td>
                    <td>$11,293 USD</td>
                  </tr>
                  <tr>
                    <th scope="row">🏕 Survivor</th>
                    <td>Wed 8p-10p</td>
                    <td>$31,256 USD</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    contributionTotal: state.contribution.total,
    advocacy:          state.advocacy
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    completedContribution: (amount) => dispatch(completedContribution(amount))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contribution)
