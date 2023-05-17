import "../Css/Footer.css"
import { GrInstagram } from 'react-icons/gr'


function FooterComponent() {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Contato</h3>
            <p>Entre em contato conosco para obter mais informações.</p>
            <ul className="list-unstyled">
              <li>Endereço: Rua Exemplo, 123</li>
              <li>Telefone: (11) 1234-5678</li>
              <li>Email: exemplo@exemplo.com</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h3>Redes Sociais</h3>
            <ul className="list-unstyled">
              <li>
                <a  target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=5519983201604&text=Ol%C3%A1%20gostaria%20de%20fazer%20uma%20cota%C3%A7%C3%A3o!">Whatssap</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <h3>Parceiros</h3>
            <ul className="list-unstyled">
              <li>
              <GrInstagram className="links_icon" /> 
                <a className="links_a" target="_blank" rel="noreferrer" href="https://www.instagram.com/mariaclaraleitao.adv/">&nbsp; Maria Clara Leitão</a>
              </li>
              <li className="li_father">
                <GrInstagram className="links_icon" /> 
                <a className="links_a" target="_blank" rel="noreferrer" href="https://www.instagram.com/camentoriadigital/">Ca Mentoria Digital</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>
                © {new Date().getFullYear()} Joseane Pessoa - Todos os direitos
                reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;