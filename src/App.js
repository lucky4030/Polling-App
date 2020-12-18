import './styleSheets/App.css';
import Header from "./Header.js";
import Topic_list from "./Topic_list";
import Login from './Login';

function App() {
  
  const user = sessionStorage.getItem('userId');
  return (
    <div className="App">
      <>
      {!user?(<Login/>)
      :<>
          <div className="top">
            <Header/>
          </div>
          <div className="middle">
          <Topic_list/>
          </div>
          </>
    }
    </>
    </div>
  );
}
export default App;
