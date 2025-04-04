

import './App.css';
import Chai from './chai'
import Test from './componte/test';
const data = [<Chai/>,<Chai/>];

function App() {
  return (
<>
<div style={{
      color:"red",
      border:"1px solid red",
      display:"flex"
      
    }}>
     <div className="boor">
     <h1>
        hello i am starting a new course that is react
        now i have change the neme of div.
      </h1>
     </div>
     {
 data.map((_, index) => <Chai key={index} />)
}


    </div>
<Test/>
</>
  );
}

export default App;


