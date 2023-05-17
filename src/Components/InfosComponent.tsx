import '../Css/InfosComponent.css'
import {territory} from '../Database/territory'

export const InfosComponent = () => {
    return (
        <div className='infos'>
            <h1>Qual será seu Próximo destino ?</h1>
            <h3 id='destiny'>Todo território brasileiro</h3>
            <div className='infos_img' style={{justifyContent: 'space-between'}}>
            {territory.brazilian.map((data ) => (
                <>
                <div className='child_img'  style={{
                padding: '10px',
                backgroundImage: `url(${data.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "380px",
                width: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                opacity: 1,
                borderRadius: "5px",
                display: 'flex',
                justifyContent: "center"
                }}>
                    <h5 style={{alignSelf: 'flex-end', color: 'white'}}>{data.name}</h5>
                </div>
                </>
             ))}
            </div>
                <h3>Todo território Internacional</h3>
            <div id='infos_international' className='infos_img'>
            {territory.international.map((data ) => (
                <>
                <div className='child_img'  style={{
                padding: '10px',
                backgroundImage: `url(${data.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "380px",
                width: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                opacity: 1,
                borderRadius: "5px",
                display: 'flex',
                justifyContent: "center"
                }}>
                    <h5 style={{alignSelf: 'flex-end', color: 'white'}}>{data.name}</h5>
                </div>
                </>
             ))}
            </div>
            
        </div>
    )
}
