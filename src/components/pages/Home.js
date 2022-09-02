import React from 'react'
import {useNavigate} from 'react-router-dom'
import {FaGithub, FaHome} from 'react-icons/fa'


const Home = () => {
    const navigate = useNavigate();

  const handleLogin = () => {
    window.localStorage.setItem("user", JSON.stringify({username:'Samuel', status:true, token:'gsdgdGjjjkjk'}));
    navigate('/dashboard');
  }

  const testing = ( ) => {
    alert('testing 1111')
  }

  const openModal = () => {
    const exampleModal = document.getElementById('exampleModal')
    exampleModal.addEventListener('show.bs.modal', event => {
      // Button that triggered the modal
      const button = event.relatedTarget
      // Extract info from data-bs-* attributes
      const recipient = button.getAttribute('data-bs-whatever')
      const modalTitle = exampleModal.querySelector('.modal-title')
      const modalBodyInput = exampleModal.querySelector('.modal-body input')

      modalTitle.textContent = `New message to ${recipient}`
      modalBodyInput.value = recipient
    })
  }

  return (
    <>
    <div className="container-lg my-5">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eum ad nam, dolore quisquam praesentium? Corrupti suscipit incidunt ullam iure. A, ipsum quasi facilis tenetur reiciendis recusandae corrupti veniam fugiat eum laudantium fugit magni. Debitis, rem natus! Id voluptates, quisquam reprehenderit voluptate debitis reiciendis, repellendus deleniti velit nostrum, et consequuntur!</p>
      <button type="submit" className="btn btn-primary btn-sm" onClick={testing}><i className="bi bi-gear-fill text-white"></i> Submit</button>
      <p>
        <i className="bi bi-gear-fill text-warning g-1"></i>
        <i className="bi bi-alarm text-secondary"></i>
        <i className="bi bi-alipay text-info"></i>
        <i className="bi bi-star-fill text-info"></i>
        <i className="bi bi-star-half text-info"></i>
        <i className="bi bi-star text-info"></i>
        <i className="bi bi-cart-plus text-info"></i>
        <i className="bi bi-cart-plus-fill text-info"></i>
        <i className="bi bi-cloud-arrow-down text-primary"></i>
        <i className="bi bi-graph-up text-primary"></i>
        <i className="bi bi-house-fill text-primary"></i>
        <i className="bi bi-linkedin text-primary"></i>
        <i className="bi bi-facebook text-primary"></i>
        <i className="bi bi-instagram text-primary"></i>
        <i className="bi bi-twitter text-primary"></i>
        <i className="bi bi-whatsapp text-primary"></i>
        <i className="bi bi-tools text-primary"></i>
        <i className="bi bi-lock-fill text-primary"></i>
        <i className="bi bi-people-fill text-primary"></i>
      </p>
    </div>

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

    <section className="container">
      <button onClick={openModal} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      {/* Modal */}
      <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home;