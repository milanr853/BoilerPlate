import './App.css'

//styles import
import "./assets/css/styles.min.css";
//routes import
import AllRoutes from './Routes/AllRoutes';
//utility import
import no_console from './Utilities/no_console';


function App() {
  no_console()


  return (
    <>
      <AllRoutes />
    </>
  )
}

export default App
