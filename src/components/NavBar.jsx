import { Link } from 'react-router-dom';
import * as userService from '../utilities/users-service';

const NavBar = ({ user, setUser }) => {
  const { name } = user;

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  return (
    <nav>
      <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link>
      &nbsp; | &nbsp;
      <span>Welcome back, {name}!</span>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>
        LOG OUT
      </Link>
    </nav>
  );
};

export default NavBar;
