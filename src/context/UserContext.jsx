import React,{ useEffect,useState} from 'react'
import App from '../App';
const userDataContext = React.createContext();

const UserContext = ( function ({ component }) {
    const [userData, setUserData] = useState({});
      console.log("rerendered");

    useEffect(() => {
      fetch("http://127.0.0.1:5500/data/user.json")
        .then((res) => res.json())
        .then((data) => {
          setUserData(data);
          console.log(data);
        });
      console.log("rerendered");
      
    }, []);
    return (
       <userDataContext.Provider value= {userData}>
           <App /> 
         </userDataContext.Provider>
    )
})
export default ( UserContext);
export { userDataContext };