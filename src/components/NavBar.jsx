import { Link } from 'react-router-dom';

const NavBar = ({ user }) => {
  const { email, name } = user;
  return (
    <nav>
      <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link>
      &nbsp; | &nbsp;
      <span>Welcome back, {name} </span>
      &nbsp; | &nbsp;
      <span>{email}</span>
    </nav>
  );
};

export default NavBar;
