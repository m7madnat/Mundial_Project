import { Link } from 'react-router-dom';
import './Card.css'


const Card = ({ stadium ,deleteStadium}) => {
    return (
        <div>
            <div className='container2'> 
                <div className='leftside'>
                    <img src={stadium.image} alt={stadium.name} />
                </div>
                <div className='rightside'>       
                    <h3 className='qaterFont'>{stadium.name}</h3> 
                    <div className='button-card'>          
                        <Link style={{ textDecoration: 'none' }} to={`/stadiums/${stadium.id}`}>
                            <button className='btnCard'>Explore More</button>
                        </Link>
                        <button className='btnCard' onClick={() => deleteStadium(stadium.id)}>Remove</button>
                    </div>  
                </div> 
            </div>
            <div className='line'></div>
        </div>
    );
}

export default Card;