import React, { useEffect } from 'react';
import '../Css/Values.css';
import { GiPassport } from 'react-icons/gi';
import { FaPassport } from 'react-icons/fa';
import { BsTicketPerforatedFill } from 'react-icons/bs';
import { RiSuitcase3Fill } from 'react-icons/ri';
import { MdChangeCircle } from 'react-icons/md';
import { BsFillFlagFill } from 'react-icons/bs';
import { FcSimCardChip } from 'react-icons/fc';
import { BiHotel } from 'react-icons/bi';
import { BsBusFront } from 'react-icons/bs';
import { MdSecurity } from 'react-icons/md';
import { Ri24HoursFill } from 'react-icons/ri';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const ServicesComponent = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            delay: 100,
        });
    }, []);

    return (
        <>
            <div className="container_service">
                <p>
                    Somos uma empresa de Turismo digital, que se destaca no mercado por seu compromisso em auxiliar seus clientes com todo o trajeto da sua viagem.
                </p>
                <p>
                    Com uma equipe de especialistas altamente qualificados para atender antes, durante e no pós, viagem. A nossa empresa oferece soluções personalizadas para atender às necessidades específicas de cada cliente em busca de realizar sonhos.
                </p>
            </div>

            <div id="services" className="values">
                <h3>Nossos Serviços</h3>
                <div className="section_infos" data-aos="fade-right">
                    <div className="father_infos"><GiPassport className='icons_infos' />  <p>Vistos</p></div>
                    <div className="father_infos"><FaPassport className='icons_infos' /> <p>Emissão de passaporte</p> </div>
                    <div className="father_infos"><BsTicketPerforatedFill className='icons_infos' /><p>Passagens aéreas</p></div>
                    <div className="father_infos"><RiSuitcase3Fill className='icons_infos' /><p>Montamos sua bagagem</p></div>
                    <div className="father_infos"><MdChangeCircle className='icons_infos' /><p>Imigração Portuguesa</p></div>
                    <div className="father_infos"><BsFillFlagFill className='icons_infos' /><p>Dupla Cidadania</p></div>
                    <div className="father_infos"><FcSimCardChip className='icons_infos' /><p>Chip internacional</p></div>
                    <div className="father_infos"><BiHotel className='icons_infos' /><p>Hospedagem</p></div>
                    <div className="father_infos"><BsBusFront className='icons_infos' /><p>Transfer</p></div>
                    <div className="father_infos"><MdSecurity className='icons_infos' /><p>Seguro Viagem</p></div>
                    <div className="father_infos"><Ri24HoursFill className='icons_infos' /><p>Assistência durante toda a viagem 24h</p></div>
                </div>
            </div>
        </>
    );
}
