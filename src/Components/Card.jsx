import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({card}) => {
    const{id, name, price, short_description, image} = card;
    return (
        <div className="card hover:border scale-75  hover:scale-95 shadow-xl">
  <figure className='h-3/5'><img className='h-full w-full' src={image} alt={name}/></figure>
  <div className="card-body">
    <h2 className="card-title text-dark">{name}</h2>
    <p>{short_description}</p>
    <p><span className='text-dark'>Price: </span>${price}</p>
    <div className="card-actions justify-end">
     <Link to={`/card/${id}`}> <button className="btn border-none hover:bg-dark hover:text-light bg-light text-dark btn-primary">View Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default Card;
Card.propTypes ={
    card: PropTypes.object,
}