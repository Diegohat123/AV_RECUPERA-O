import './List.css'
function List(){

    return(
        <div className='container'>
            
            <ol className="lista">
                <img src='logo.svg'/>
              <li>Entregador</li>
              <li>Restaurantes e mercado</li>
              <li>Carreiras</li>
              <li>Ifood Card</li>
              
              <button className='botao1'>Criar conta</button>
              <button className='botao'>entrar</button>
              
             


              
            </ol>
            
        </div>
    );
    
}
export default List;