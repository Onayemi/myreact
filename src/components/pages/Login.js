import React from 'react'
import { useNavigate } from 'react-router-dom'
import {FaGithub, FaHome} from 'react-icons/fa'

const Login = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if(window.localStorage.getItem('user')){
  //     navigate('/dashboard')
  //   }
  // }, []);

  const handleLogin = () => {
    // localStorage.setItem("user", true);
    window.localStorage.setItem("user", JSON.stringify({username:'Samuel', status:true, token:'gsdgdGjjjkjk'}));
    navigate('/dashboard');
    // console.log('Login Successfully!')
  }
  return (
    <div>
      <div className="container my-5">
        <div className="row g-2">
          <div className="col-sm-6 col-md-8 col-sm-12">
            <div className="p-3 border bg-color">
            <h1>Welcome Page</h1>
              <p>col-8 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, ratione? Aspernatur, quas nobis dolore sint cumque temporibus assumenda perferendis iusto voluptatibus dignissimos quam tempora officia nulla tenetur asperiores voluptatem quasi!</p>
              <button className="btn btn-primary btn-sm px-5 my-2" onClick={handleLogin}>
                <FaGithub /> Login
              </button>

              <form className="row g-3">
                <div className="col-auto">
                  <label for="staticEmail2" className="visually-hidden">Email</label>
                  <input type="text" readonly className="form-control form-control-sm" id="staticEmail2" value="email@example.com" />
                </div>
                <div className="col-auto">
                  <label for="inputPassword2" className="visually-hidden">Password</label>
                  <input type="password" className="form-control form-control-sm" id="inputPassword2" placeholder="Password" />
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-primary btn-sm mb-3"><FaGithub /> Confirm identity</button>
                </div>
              </form>

              <form className="row g-3">
                <div className="col-md-6">
                  <label for="staticEmail2" className="visually-hidden">Email</label>
                  <input type="text" readonly className="form-control form-control-sm" id="staticEmail2" value="email@example.com" />
                </div>
                <div className="col-md-6">
                  <label for="inputPassword2" className="visually-hidden">Password</label>
                  <input type="password" className="form-control form-control-sm" id="inputPassword2" placeholder="Password" />
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-primary btn-sm mb-3"><FaGithub /> Confirm identity</button>
                </div>
              </form>

            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-sm-12">
            <div className="p-3 border bg-color">
              <h2><FaHome /> Form Two</h2>
              <form className="row g-3">
                <div className="col-md-12">
                  <label for="staticEmail2" className="visually-hidden">Email</label>
                  <input type="text" readonly className="form-control form-control-sm" id="staticEmail2" value="email@example.com" />
                </div>
                <div className="col-md-12">
                  <label for="inputPassword2" className="visually-hidden">Password</label>
                  <input type="password" className="form-control form-control-sm" id="inputPassword2" placeholder="Password" />
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-primary btn-sm mb-3"><FaGithub /> Confirm identity</button>
                </div>
              </form>

              <button className="btn btn-primary btn-sm px-5" onClick={handleLogin}>
                <FaGithub /> Login
              </button>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login