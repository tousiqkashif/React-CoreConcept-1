import Core from "../assets/react-core-concepts.png";
import "./Head.css"
function Head(){
    return(

        <>
        <div className="hdg">
            <img src={Core} alt="react-core-concepts" />
            <h1>React Essentials</h1>
            <p >Fundamental React Concept yo will need for almost any app you are going to build!</p>
        </div>
        </>
    );
}

export default Head;