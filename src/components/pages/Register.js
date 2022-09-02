import React from 'react'
import {useNavigate} from 'react-router-dom'
import {FaGithub, FaLock} from 'react-icons/fa'

const Register = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    window.localStorage.setItem("user", JSON.stringify({username:'Samuel', status:true, token:'gsdgdGjjjkjk'}));
    navigate('/dashboard');
  }

  return (
    <div>
      <div className="container-lg my-5">
        <div className="row main">
          <div className="col-md-4 col-sm-6 col-md-6 content">
            <button className="btn btn-primary btn-sm px-5 m-3" onClick={handleLogin}>
              <FaGithub /> Login
            </button>
            <button className="btn btn-primary btn-sm px-5" onClick={handleLogin}>
              <FaLock /> Register
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Register