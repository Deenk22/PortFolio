import { Outlet, useLocation, useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

export default function Layout() {
  const { id } = useParams();
  const pathLocation = useLocation();
  const showNavbar = pathLocation.pathname !== `/projectdetails/${id}`;

  return (
    <>
      {showNavbar && <Navbar />}
      <Outlet />
    </>
  );
}
