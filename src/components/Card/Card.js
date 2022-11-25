import { Link } from 'react-router-dom';
import './Card.css'


const Card = ({ product ,deleteProduct}) => {
    return (
        <div>
            <div className='container2'> 
                <div className='leftside'>
                    <img src={product.image} alt={product.name} />
                </div>
                <div className='rightside'>       
                    <h3 className='qaterFont'>{product.name}</h3> 
                    <div className='button-card'>          
                        <Link style={{ textDecoration: 'none' }} to={`/products/${product.id}`}>
                            <button className='btnCard'>Explore More</button>
                        </Link>
                        <button className='btnCard' onClick={() => deleteProduct(product.id)}>Remove</button>
                    </div>  
                </div> 
            </div>
            <div className='line'></div>
        </div>
    );
}

export default Card;