import { useEffect, useState } from "react";
import Enroutes from "./components/enroutes/enroutes";
import Enroutes2 from "./components/enroutes/enroutes2";

function App(){
  const [userLogin, setUserLogin] = useState({
    name: 'Wendy', 
    phone: 742,
    image: null
  })

  const [path, setPath] = useState("")


  useEffect(() => {
    console.log(userLogin)
    if(userLogin.phone !== null && userLogin.phone !== undefined){
      setPath(<Enroutes  userLogin = { userLogin }/>)
    } else {
      setPath(<Enroutes2 setUserLogin = { setUserLogin }/>)
    }
    
  }, [userLogin, setUserLogin])
  return (
    <div className="container-main bg-dark hero">
      {path}
    </div>
  );
}

export default App