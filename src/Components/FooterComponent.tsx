import "../Css/Footer.css";
import { GrInstagram } from 'react-icons/gr';

function FooterComponent() {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <h3>Contato</h3>
            <p>Entre em contato conosco para obter mais informações.</p>
            <ul className="list-unstyled">
              <li>Telefone: (19) 98320-1604</li>
              <li>Email: comercial@jotour.com.br</li>
            </ul>
          </div>
          <div className="col-md-6 col-sm-12">
            <h3>Redes Sociais</h3>
            <ul className="list-unstyled">
              <li>
                <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=5519983201604&text">Whatsapp</a>
              </li>
              <li>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/jofpessoa/">Instagram</a>
              </li>
            </ul>
          </div>
          <div className="col-md-12 col-sm-12">
            <h3>Parceiros</h3>
            <ul className="list-unstyled">
              <li>
                <GrInstagram className="links_icon" /> 
                <a className="links_a" target="_blank" rel="noreferrer" href="https://www.instagram.com/mariaclaraleitao.adv/">Maria Clara Leitão (ADV)</a>
              </li>
              <li>
                <GrInstagram className="links_icon" /> 
                <a className="links_a" target="_blank" rel="noreferrer" href="https://www.instagram.com/camentoriadigital/">Ca Mentoria Digital</a>
              </li>
              <li>
                <GrInstagram className="links_icon" /> 
                <a className="links_a" target="_blank" rel="noreferrer" href="https://www.instagram.com/lucazgodoy/">Lucas Mazuca Godoi (Dev)</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12 div_infos_footer">
              <p style={{fontWeight: 200, fontSize: '15px'}}>32.927.004 JOSEANE DE FRANCA PESSOA 32.927.004/0001-06</p>
              <p style={{fontWeight: 200,  fontSize: '15px'}}>© {new Date().getFullYear()} Joseane Pessoa - Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
