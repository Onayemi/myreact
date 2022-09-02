import React, {useState, useEffect} from 'react'  //useState
// import { useNavigate } from 'react-router-dom'
// import { useNavigate} from 'react-router-dom';
// import DashboardNavbar from '../Extra/DashboardNavbar'

const Dashboard = () => {
  // const navigate = useNavigate();
  const [user, setUser] = useState([]) 
useEffect(() => {
  const det = window.localStorage.getItem('user')
  setUser(JSON.parse(det))
  }, []);

  return (
    <div>
      <div className="container">
        <h2>Welcome {`${user.username}`},</h2>
        <p>{`${user.username}`} | {`${user.token}`}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et accusantium consequatur laboriosam veritatis nam deleniti eligendi corrupti eaque ratione fugit? Delectus ad natus dolorem, voluptate minima dolorum sequi aperiam ut, modi accusantium saepe harum necessitatibus pariatur, nam vitae obcaecati. Inventore.</p>
      </div>
    </div>
  )
}

export default Dashboard