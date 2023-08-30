import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Dashboard, Layout } from './screens';
import { themeSettings } from './theme';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

const App = () => {
  const themeMode = useSelector((state) => state.globalTheme.themeMode);

  const theme = useMemo(
    () => createTheme(themeSettings(themeMode)),
    [themeMode]
  );
  return (
    <div className='app'>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Navigate to='/dashboard' replace />} />
              <Route path='/dashboad' element={<Dashboard />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
