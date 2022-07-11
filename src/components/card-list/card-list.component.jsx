import { Component } from "react";
import Card from "../card/card.component";
import './card-list.styles.css';

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    const notFound = () => {
      return(
        <div className="not-found">
           <h2>Monsters Not Found!</h2>
         </div>
      )
    }

    return(
      <div>
        <div className="card-list">
        {
          monsters === undefined ? notFound()
          : monsters.map((monster) => {
            return (
              <Card key={monster.id} {...monster} />
            );
          }) 
        }
        </div>
      </div>
    )
  }
}

export default CardList;