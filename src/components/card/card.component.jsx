import './card.styles.css';

const Card = ({ id, name, email }) => {
  return (
    <div className='card'>
      <img alt={`monster ${name}`} src={`https://robohash.org/${id + 99}?set=set2&size=180x180`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default Card;
