import { Box } from '@mui/material';
import { Navbar } from '../../components';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  // We can pass css properties into the Box componenent unlike other components
  return (
    <Box width='100%' height='100%'>
      <Box>
        <Navbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
