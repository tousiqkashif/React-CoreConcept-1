import Head from "./tophead/Head.jsx";
import "./App.css";
import Section from "./midsection/Section.jsx";
import {CORE_CONCEPTS } from "./data.js";
import {EXAMPLES} from "./data.js";
import Tabbutton from "./Tabbutton.jsx";
import { useState } from "react";

function App() {
   const [selectedContent , setselectedContent] = useState("components");
  function selectHandle(selectedbutton){
    setselectedContent(selectedbutton);
    console.log(selectedContent);
}
  return (
    <>
    
    <Head/>
    <br/>
    <h1 align="center">Core concepts</h1>
    <section>
    
      
<Section  {...CORE_CONCEPTS[0]}/>
<Section  {...CORE_CONCEPTS[1]}/>
<Section  {...CORE_CONCEPTS[2]}/>
<Section  {...CORE_CONCEPTS[3]}/>
</section>

    <div id="Section">
      <h1>Examples</h1>
    
      
      
  <div>    
<Tabbutton onSelect={()=>selectHandle('components')}>Components</Tabbutton>
<Tabbutton onSelect={()=>selectHandle('jsx')}>JSX</Tabbutton>
<Tabbutton onSelect={()=>selectHandle('props')}>Props</Tabbutton>
<Tabbutton onSelect={()=>selectHandle('state')}>State</Tabbutton>

</div>
<div className="Content">
  <h2>{EXAMPLES[selectedContent].title}</h2>
  <p className="con-p">{EXAMPLES[selectedContent].description}</p>
  <pre className="con-pre">
    <code className="con-pre">
   {EXAMPLES[selectedContent].code}
   </code></pre>
    
  
</div>
    </div>
   

    </>
  );
}

export default App;
