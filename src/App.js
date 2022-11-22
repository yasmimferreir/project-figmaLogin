import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container-global'>
        <div className='container'>
          <h2 className='title'>Bem vindos ao<span> Login</span></h2>
          <p className='paragrafh'>Preencha os dados do login para acessar</p>
          <div className='register--input'>

            <p className='principal'>Usuário
              <br />
              <input
                id='nome'
                className='input--usuario'
                type="email"
                placeholder="usuario"
                required
              />
            </p>
            <hr className='linha' />


            <p className='principal'>Senha
              <br />
              <input
                id='password'
                className='input--usuario'
                type="password"
                placeholder="senha"
                required
              />
            </p>
            <hr className='linha' />

            <div className='container--button'>
              <button className='button'>
                Entrar
              </button>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
