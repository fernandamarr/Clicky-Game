import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import mario from "../images/mario.png";
import koopatroopa from "../images/koopa-troopa.jpg";
import peach from "../images/peach.png";
import yoshi from "../images/yoshi.jpg"

class Home extends Component {

  state = {
    image: "",
    match: false,
    matchCount: 0
  }

  handleBtnClick() {
    console.log('Button was clicked!')
}

render() {
    return (
      <div>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-3">
            <div id="img" onClick={this.handleBtnClick}><img id="click" className="click-image"  src={mario} alt="Mario" /></div>
            </Col>
            <Col size="md-3">
            <div id="img" onClick={this.handleBtnClick}><img id="click" className="click-image" src={koopatroopa} alt="Koopa Troopa" /></div>
            </Col>
            <Col size="md-3">
            <div id="img" onClick={this.handleBtnClick}><img id="click" className="click-image" src={peach} alt="Peach" /></div>
            </Col>
            <Col size="md-3">
            <div id="img" onClick={this.handleBtnClick}><img id="click" className="click-image" src={yoshi} alt="Yoshi" /></div>
            </Col>
          </Row>
        
        </Container>
      </div>
    );

  }
}

export default Home;
  