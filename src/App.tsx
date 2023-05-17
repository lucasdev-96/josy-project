import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HeaderComponent } from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import { InfosComponent } from './Components/InfosComponent';
import { ServicesComponent } from './Components/ServicesComponent';
import { MissionComponent } from './Components/MissionComponent';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import josi from '../src/Assets/Imgs/josi.jpg'



function App() {
  return (
    <>
    <HeaderComponent />
    <InfosComponent />  
    <MissionComponent />
    <ServicesComponent />
    <FooterComponent />
    <FloatingWhatsApp 
        phoneNumber="5519983201604"
        accountName="Josi"
        allowEsc
        chatMessage="Olá no que podemos ajudar?"
        avatar={josi}
        placeholder="Escreva sua mensagem..."
        statusMessage="Venha realizar seu sonho conosco!"
        allowClickAway/>
    </>
    );
}

export default App;
