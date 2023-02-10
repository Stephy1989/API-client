/*import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';*/
import './App.css'
import { Navigationbar } from './components/navbar/Navbar';
import MultiActionAreaCard from './components/cards/Cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/forms/form';
import Data from './components/data/data';


function App() {

  return (
    <div className="App">
      <Navigationbar />
      <MultiActionAreaCard />
      <Form />
      <Data />
 
    </div>
  )
}

export default App
