import './App.css';
function App() {
  return (
    <div className='wrapper'>
      <from action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder='Email Address...' required />
          
        </div>
        <div className="input-box">
          <input type="password" placeholder='Password' required />

        </div>
        <div classname="forget">
          
          <a href="#">Forgot password?</a>
        </div>

        <button type='submit'>Login</button>

        <div classname="register-link">
          
          <p className='para'>Don't have the an account?<a href="#">Register</a></p>
        </div>
      </from>
    </div>
  );
}

export default App;