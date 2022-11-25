
import ImageSlider from './ImageSlider';

function DisImages() {
    
        
        const slides =[
            {
                url: "https://e0.365dm.com/22/10/2048x1152/skysports-world-cup-qatar-2022_5921764.jpg",
            },
            {
                url:"https://www.aljazeera.net/wp-content/uploads/2022/11/0-14.jpg?fit=1170%2C878",
            },
            {
                url:"https://www.aljazeera.net/wp-content/uploads/2022/11/Pic-303-5.jpg?resize=1170%2C780",
            },
            {
                url:"https://www.aljazeera.net/wp-content/uploads/2022/11/RTSDCYYQ.jpg?fit=1170%2C731",
            },

    
        ]
        return (
            <div className="App">
                <ImageSlider slides={slides} />
            </div>
        );
    }


export default DisImages;