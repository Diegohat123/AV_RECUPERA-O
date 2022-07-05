//App.jsx
import './App.css'
import List from './List.jsx'


function App() {

    return (
        //bloco   

        <div>
            <List />
            <div className='text'>


<div className='container'>
                <div className='imagem'>
                    <img src="big-king.webp" />
                    <div className='textos'>
                    <p><strong>Combo big King</strong></p>
                        <p> Um hamburguer com duas carnes bovinas grelhadas de 57g, pão com gergelim e queijo.</p>
                        <div>
                           
                            <div class="button3">
                                <strong>Serve uma pessoa</strong>
                                <p> <strong>R$ 41,90</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                <div class="imagem">
                    <img src="cheddar-duplo.webp" />
                    <p><strong>Combo Cheddar-duplo</strong></p>
                    <div className='textos'>
                        <p> Um hamburguer com duas carnes bovinas grelhadas de 57g, pão preto com gergelim.</p>
                        <div class="button3">
                            <strong>Serve uma pessoa</strong>
                            <p> <strong>R$ 41,90</strong></p>
                        </div>
                    </div>
                </div>

                <div class="imagem">
                    <img src="cheeseburger-duplo.webp" />
                    <p><strong>Combo cheeseburguer-duplo com bacon</strong></p>
                    <div className='textos'>
                        <p> Um hamburguer com duas carnes bovinas grelhadas de 57g, pão com gergelim e queijo.</p>
                        <div class="button3">
                            <strong>Serve uma pessoa</strong>
                            <p> <strong>R$ 36,90</strong></p>
                        </div>
                        
                    </div>
                </div>

                <div class="imagem">
                    <img src="mega-stacker.webp" />
                    <p><strong>Combo Mega Stacker 2.0</strong></p>
                    <div className='textos'>
                        <p> Um hamburguer com duas carnes bovinas grelhadas de 113g, pão com gergelim e queijo.</p>
                        <div class="button3">
                            <strong>Serve uma pessoa</strong>
                            <p> <strong>R$ 51,90</strong></p>
                        </div>
                        
                    </div>
                </div>




            </div>


        </div>
    )
}
export default App;