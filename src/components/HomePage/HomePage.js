import './style.css'
import {Link} from "react-router-dom"
import DisImages from "./DisImages"
const HomePage = () => {
    return (
        <>
        <div>   
            <div style={{paddingBottom : "80px"}}>
                <DisImages/>
            </div>   
            <div className='homeText'>
                <h1 className='textHome'>Where history is being made</h1>
                <h3 className='textHome2'>Our eight spectacular FIFA World Cup Qatar 2022™ stadiums are ready to welcome the world</h3>            
                <Link className='btnHome' to='/stadiums'>Stadiums</Link>                
            </div>            
        </div>        
        </>
    )
}
export default HomePage