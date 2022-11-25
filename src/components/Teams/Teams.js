import './Teams.css'
import { useState, useEffect } from 'react'
import { API } from "../../Api";

const Teams = () => {
const [Teams, setTeams] = useState([])
const [loading, setLoading] = useState(true)

useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const { data } = await API.get('/teams')
        console.log(data)
        setTeams(data);
      } catch (e) {
        console.log(e.message); // ! Handle Error message
      }
      setLoading(false)      
    };
    fetchData();
  }, []);
  if (loading) return <div className='loader2' ></div>;

    return (
        
        <div className="team">
            {Teams.map((team) => (
                    <div className="team-body">                        
                        <h5 className="team-title">{team.name_en}</h5>  
                        <div className="team-header">
                            <img className="team-imgs" src={team.flag} alt="team" />
                        </div>     
                        <div className="team-container">                                                                  
                            <p className="team-text">Group: {team.groups}</p>
                        </div>
                    </div>
                
            ))}
            </div>
    )
}

export default Teams

