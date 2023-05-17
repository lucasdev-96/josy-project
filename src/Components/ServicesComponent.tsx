import '../Css/Values.css'
import { GiPassport } from 'react-icons/gi'
import { FaPassport } from 'react-icons/fa'
import { BsTicketPerforatedFill } from 'react-icons/bs'
import { RiSuitcase3Fill } from 'react-icons/ri'
import { MdChangeCircle } from 'react-icons/md'
import { BsFillFlagFill } from 'react-icons/bs'
import { FcSimCardChip } from 'react-icons/fc'
import { BiHotel } from 'react-icons/bi'
import { BsBusFront } from 'react-icons/bs'
import { MdSecurity } from 'react-icons/md'
import { Ri24HoursFill } from 'react-icons/ri'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'




export const ServicesComponent = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // duração da animação em milissegundos
          easing: 'ease-in-out', // tipo de animação
          delay: 100, // atraso antes da animação iniciar
        });
      }, []);
    return (
        <div id="services" className="values">
            <h3>Nossos Serviços: </h3>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <section data-aos="fade-right" className='section_infos'>
                <p><GiPassport />  Vistos</p>
                <p><FaPassport />  Emissão de passaporte </p>
                <p><BsTicketPerforatedFill />  Passagens aéreas </p>
                <p><RiSuitcase3Fill />  Montamos sua bagagem </p>
                <p><MdChangeCircle />  Mudança de pais</p>
                <p><BsFillFlagFill />  Nacionalidade</p>
                <p><FcSimCardChip />  Chip internacional </p>
                <p><BiHotel />  Hospedagem </p>
                <p><BsBusFront />  Transfer</p>
                <p><MdSecurity />  Seguro Viagem </p>
                <p><Ri24HoursFill />  Assistência durante toda a viagem 24h  </p>
            </section>
            </div>
       
        </div>
    )
}