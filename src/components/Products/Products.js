import './Products.css'
import { useState, useEffect } from 'react'
import { API } from "../../Api";
import Card from '../Card/Card'
import AddProduct from '../AddProduct/AddProduct'

const Products = () => {
const [products, setProducts] = useState([])
const [loading, setLoading] = useState(true)

useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const { data } = await API.get('/stadiums')
        console.log(data)
        setProducts(data);
      } catch (e) {
        console.log(e.message); // ! Handle Error message

      }
      setLoading(false)      
    };
    fetchData();
  }, []);

  const deleteProduct = async (id) => {
    try {
      setLoading(true)
      await API.delete(`/stadiums/${id}`);
      setProducts(products.filter((product) => product.id !== id));
    } catch (e) {
      console.log(e.message); // ! Handle Error message
    }
    setLoading(false)
  };  

  const addProduct = async (name, image) => {
    try {
      setLoading(true)
      const { data } = await API.post('/stadiums', {
        name,
        image
      });
      setProducts([...products, data]);
    } catch (e) {
      console.log(e.message); // ! Handle Error message
    }
    setLoading(false)
  };

  if (loading) return <div className='loader2' ></div>;

    return (

        <div className='products'>     
            <div className='productsContainer'>    
                <div className='productsHeader'>
                    <div className='bg-red'>
                        <div className='headQ'>Qatar 2022  Stadiums</div>       
                        <div className='bigDes'>Be Amazed</div>      
                        <div className='smInfo'>Discover our eight spectacular FIFA World Cup Qatar 2022™ stadiums</div>         
                    </div>
                   <AddProduct className="addProduct" addProduct={addProduct} /> 
                </div>   
                {products.map(product => (
                    <Card key={product.id} product={product}  deleteProduct={deleteProduct}  />
                ))}
            </div>
        </div>
    )
}

export default Products

