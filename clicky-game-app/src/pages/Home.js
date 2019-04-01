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
    topScore: 0,
    currentScore: 0,
    match: false,
    clicked: []
  }

  handleBtnClick = event => {
    const btnType = event.target.attributes.getNamedItem("data-value").value;
    switch (btnType) {
      case "mario":
      console.log("i am mario");
      break;
      case "koopa":
      console.log("i am koopa");
      break;
      case "peach":
      console.log("i am peach");
      break;
      case "yoshi":
      console.log("i am yoshi");
      break;
      default:
      console.log("none selected")
    }
}

render() {
    return (
      <div>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-3">
            <div id="img" onClick={this.handleBtnClick} ><img id="click" data-value="mario" className="click-image"  src={mario} alt="Mario" /></div>
            </Col>
            <Col size="md-3">
            <div id="img" onClick={this.handleBtnClick} ><img id="click" data-value="koopa" className="click-image" src={koopatroopa} alt="Koopa Troopa" /></div>
            </Col>
            <Col size="md-3">
            <div id="img" onClick={this.handleBtnClick}><img id="click" data-value="peach" className="click-image" src={peach} alt="Peach" /></div>
            </Col>
            <Col size="md-3">
            <div id="img" onClick={this.handleBtnClick}><img id="click" data-value="yoshi" className="click-image" src={yoshi} alt="Yoshi" /></div>
            </Col>
          </Row>
        
        </Container>
      </div>
    );

  }
}

export default Home;
  