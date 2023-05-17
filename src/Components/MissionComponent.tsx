import '../Css/Mission.css'
import { AiFillStar } from 'react-icons/ai'
import { GiFlyingTarget } from 'react-icons/gi'


export const MissionComponent = () => {
    return (
        <div>
            <div id='mission' className="Mission">
            <div>
            <GiFlyingTarget className='misson_icons' />
            <h3>Missão</h3>
            </div>
            <div className='misson_phrase'>
Proporciona a melhor experiência para cada um, permitindo a realização de sonhos de maneira personalizada, de forma única e segura. </div>
            </div>
            <div className='Mission_values'>
            <AiFillStar className='misson_icons'/>
            <h3>Valores</h3>
            <ul>
            <li>Dedicação</li>
            <li>Compromisso com o cliente</li>
            <li>Acolhimento do cliente e parceiros</li>
            <li>Exclusividade e personalização</li>
            </ul>
            </div>
        </div>
    )
}