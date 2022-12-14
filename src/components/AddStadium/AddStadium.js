import React from "react";
import Input from "./Input";
import Popup from "./Popup";

const AddStadium = ({addStadium, submitted}) => {

    const [isOpen, setIsOpen] = React.useState(false);
 
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    // eslint-disable-next-line no-unused-vars
    const [state, setState] = React.useState({
        name: "",
        image: "",
        description: "",
        price: "",
    });
    const [name, setName] = React.useState(state.name);
    const [image, setImage] = React.useState(state.image);
    const [loading, setLoading] = React.useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await addStadium(name, image);
            setLoading(false);
            togglePopup();
        } catch (e) {
            console.log(e.message);
            setLoading(false);
        }
    };
    return (
        <>        
        <div>            
             <button className="addProduct" onClick={togglePopup}>Add Stadium</button>
            {isOpen && <Popup
                content={<>
            <form onSubmit={handleSubmit}>
                <h2>Add Stadium</h2>
                <Input
                      id="name"
                      type="text"
                      holder="Name"
                      value={name}
                      callBack={setName}
                      submitted={submitted}                      
                      className="form-control"
                    />
                    <Input
                        id="image"
                        type="text"
                        holder="Image"
                        value={image}
                        callBack={setImage}
                        submitted={submitted}                        
                        className="form-control"
                    />
                    <button type="submit" className="addProduct" onClick={handleSubmit()}   
                    disabled={loading}>
                    Add</button>
                    </form>
                </>}
                handleClose={togglePopup}
            />}
        </div>
        </>
    );
};             

export default AddStadium;
