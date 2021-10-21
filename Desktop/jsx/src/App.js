import img1 from './img1.jpg' ;

import './App.css';

function App() {
  return (
    <>
    <div style={{ border:'solid 1px black', maxWidth:'100vw'}}>
    <h1 className="girls">Girls</h1> <br/>
    
     <img className="src" src={img1} alt="msrc" />
       <br/>
         <img className="pb" src="/img2.jpg" alt="mpublic"/>
         </div> 
         <video className="vv" width="320" height="240" controls>

          <source  src="myVideo.mp4" type="video/mp4" />

           </video>  
           </>
  );
}

export default App;
