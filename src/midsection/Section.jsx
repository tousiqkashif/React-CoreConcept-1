import Assets from "../assets/components.png"
import "./section.css";
function Section({image , title , description}){
    
    return(
        <>
        {/* <div className="row"> */}

        <ul>
            <li><img src={image} alt="components" /></li>
           <li> <h2>{title}</h2></li>
           <li><p className="ptag">{description}</p></li> 
        </ul>
        {/* </div> */}
        </>
    );
}

export default Section;