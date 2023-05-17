import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HeaderComponent } from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import { InfosComponent } from './Components/InfosComponent';
import { ServicesComponent } from './Components/ServicesComponent';
import { MissionComponent } from './Components/MissionComponent';


function App() {
  return (
    <>
    <HeaderComponent />
    <InfosComponent />  
    <MissionComponent />
    <ServicesComponent />
    <FooterComponent />
    </>
    );
}

export default App;
