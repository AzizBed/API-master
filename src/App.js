import "./App.css"
import UserList from "./Component/UserList/UserList";

const App = () => {
 
  

 
   

    return (
        <div className="App">
          <h4 style={{textAlign:"center",marginTop:"10px"}}> {Date() } </h4>
            <UserList   />
        </div>
    );
};
export default App;
