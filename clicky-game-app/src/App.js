import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Container from "./components/Container";
import Row from "./components/Row";
import Card from "./components/Card"
import cards from "./cards.json";


// import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    cards,
    score: 0,
    topscore: 0,
    clicked: []
  }

  handleClick = id => {
    for (let i = this.state.cards.length -1; i > 0; i--) {
      if (this.state.clicked.indexOf(i) === -1) {
        this.setState({
          score: 1
        })
        console.log("I have been clicked")
      }
    }   
}

render() {
    return (
      <div>
        <Navbar score={this.state.score} topscore={this.state.topscore} />
        <Wrapper>
        <Container style={{ marginTop: 30 }}>
          <Row>
          {this.state.cards.map(card => (
          <Card
            handleClick={this.handleClick}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
          </Row>
        </Container>
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
