import { Box, useMediaQuery } from '@mui/material';
import { Navbar, Sidebar } from '../../components';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const Layout = () => {
  {
    /* isNonMobile boolean to check for min width pf 600px, False for mobile, gtrue for desktop */
  }
  const isNonMobile = useMediaQuery('(min-width: 600px)');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    // We can pass css properties into the Box componenent unlike other components
    <Box display={isNonMobile ? 'flex' : 'block'} width='100%' height='100%'>
      <Sidebar
        isNonMobile={!isNonMobile}
        drawerWidth='250px'
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box>
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
