import React , {useState} from "react";
import {useParams } from "react-router-dom";
import { API } from "../../Api";
import StadiumEdit from "../StadiumEdit/StadiumEdit";
import "./StadiumPage.css";


const StadiumPage = (props) => {
    const [stadium, setStadium] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { id } = useParams();
    React.useEffect(() => {
        const fetchData = async () => {
        try {
            const { data } = await API.get(`/stadiums/${id}`);
            setStadium(data);
            setLoading(false);
        } catch (e) {
            setError(e.message);
            setLoading(false);
        }
        };
        fetchData();
    }, [id]);
    
    const displayCats = () => {
        return (
            <StadiumEdit
            key={stadium.id}
            id={stadium.id}
            name={stadium.name}
            image={stadium.image}
            description={stadium.description}
            capacity={stadium.capacity}
            location={stadium.location}
            plan={stadium.plan}
            getUpdated={getUpdated}
            />
        );
    };
    const getUpdated = async (name, image, description, capacity,location,plan, id) => {                
        const { data } = await API.put(`/stadiums/${id}`, {
            name,
            image,
            description,
            capacity,
            location,
            plan,
        });
        setStadium(data);        
    }

    if (loading) return <div className='loader2' ></div>;
    if (error) return <h1>{error}</h1>;
    
    return (
        <>
        <div>            
            <div>{displayCats()}</div>
        </div>
        </>
    );
    

}
export default StadiumPage;