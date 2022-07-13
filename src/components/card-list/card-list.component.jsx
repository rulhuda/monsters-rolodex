import Card from "../card/card.component";
import './card-list.styles.css';

const CardList = ({ monsters }) => {
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
        monsters ? monsters.map((monster) => {
          return (
            <Card key={monster.id} {...monster} />
          );
        }) : notFound()
      }
      </div>
    </div>
  )
}


export default CardList;