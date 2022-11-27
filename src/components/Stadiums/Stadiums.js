import './Stadiums.css'
import { useState, useEffect } from 'react'
import { API } from "../../Api";
import Card from '../Card/Card'
import AddStadium from '../AddStadium/AddStadium'

const Stadiums = () => {
const [stadiums, setStadiums] = useState([]);
const [loading, setLoading] = useState(true);


useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const { data } = await API.get('/stadiums')
        console.log(data)
        setStadiums(data);
      } catch (e) {
        console.log(e.message); // ! Handle Error message

      }
      setLoading(false)      
    };
    fetchData();
  }, []);

  const deleteStadium = async (id) => {
    try {
      setLoading(true)
      await API.delete(`/stadiums/${id}`);
      setStadiums(stadiums.filter((stadium) => stadium.id !== id));
    } catch (e) {
      console.log(e.message); // ! Handle Error message
    }
    setLoading(false)
  };  

  const addStadium = async (name, image) => {
    try {
      setLoading(true)
      const { data } = await API.post('/stadiums', {
        name,
        image
      });
      setStadiums([...stadiums, data]);
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
                   <AddStadium className="addProduct" addStadium={addStadium} /> 
                </div>   
                {stadiums.map(stadium => (
                    <Card key={stadium.id} stadium={stadium}  deleteStadium={deleteStadium}  />
                ))}
            </div>
        </div>
    )
}

export default Stadiums

