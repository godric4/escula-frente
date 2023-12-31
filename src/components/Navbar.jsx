import {
  AppBar,
  IconButton,
  InputBase,
  Toolbar,
  useTheme,
} from '@mui/material';
import {
  DarkModeOutlined,
  LightModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
} from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import FlexBetween from './FlexBetween';
import { setThemeMode } from '../features/themeSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <AppBar
      sx={{
        position: 'static',
        background: 'none',
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Left side */}
        <FlexBetween>
          <IconButton onClick={() => console.log('open sidebar')}>
            <MenuIcon />
          </IconButton>
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius='9px'
            gap='3rem' //It sets gap btw each item instead of setting margin and padding inndividually
            p='0.1rem 1.5rem'
          >
            <InputBase placeholder='Search' />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>{' '}
        </FlexBetween>

        {/* Right Side */}
        <FlexBetween gap='1.5rem'>
          <IconButton onClick={() => dispatch(setThemeMode())}>
            {theme.palette.mode === 'dark' ? (
              <DarkModeOutlined sx={{ fontSize: '25px' }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: '25px' }} />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{ fontSize: '25px' }} />
          </IconButton>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
