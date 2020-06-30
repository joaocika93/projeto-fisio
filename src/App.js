import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <div class="row">
            <ul class="main-nav">
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Preciso de Ajuda</a></li>
              <li><a href="#">Quem Somos</a></li>
              <li><a href="#">Seja um Profissional</a></li>
              <li><a href="#">Indicadores</a></li>
              <li><a href="#">Fale Conosco</a></li>
            </ul>
          </div>
        </nav>
        <nav>
          <div class="hero-text-box">
            <h1>Quem Somos? </h1>
            <p>There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form, by injected humour,
            or randomised words which don't look even slightly believable. If you are going
            to use a passage of Lorem Ipsum, you need to be sure there isn't anything
            embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet
            tend to repeat predefined chunks as necessary</p>
          </div>
        </nav>
      </header>
      <main>
        <section class='formulary'>
          <form class='formulary-group'>
            <h1>Precisa de Ajuda?</h1>
            <div class="form-group">
              <label for="exampleFormControlInput1">Endereço de email</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="nome@exemplo.com">
              </input>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Select de exemplo</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect2">Exemplo de select múltiplo</label>
              <select multiple class="form-control" id="exampleFormControlSelect2">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Exemplo de textarea</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="button" class="btn btn-primary">Enviar</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
