import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Card from "../components/Card"
import cards from "../cards.json";

class Home extends Component {

  state = {
    cards,
    topScore: 0,
    currentScore: 0,
    clicked: []
  }

  handleBtnClick = id => {
   console.log(id)
}

render() {
    return (
      <div>
        <Container style={{ marginTop: 30 }}>
          <Row>
          {this.state.cards.map(card => (
          <Card
            // clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
          </Row>
        </Container>
      </div>
    );

  }
}

export default Home;
  