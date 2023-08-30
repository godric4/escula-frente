// color design tokens export
export const darkTokens = {
  grey: {
    0: '#ffffff', // manually adjusted
    10: '#f6f6f6', // manually adjusted
    50: '#f0f0f0', // manually adjusted
    100: '#e0e0e0',
    200: '#c2c2c2',
    300: '#a3a3a3',
    400: '#858585',
    500: '#666666',
    600: '#525252',
    700: '#3d3d3d',
    800: '#292929',
    900: '#141414',
    1000: '#000000', // manually adjusted
  },
  primary: {
    100: '#d9cdcd',
    200: '#b39a9a',
    300: '#8d6868',
    400: '#673535',
    500: '#4e0303',
    600: '#340202',
    700: '#270202',
    800: '#1a0101',
    900: '#0d0101',
  },

  secondary: {
    50: '#f0f0f0',
    100: '#e9e2d0',
    200: '#d3c5a1',
    300: '#bda971',
    400: '#a78c42',
    500: '#916f13',
    600: '#74590f',
    700: '#57430b',
    800: '#3a2c08',
    900: '#1d1604',
  },
};

// function that reverses the color palette
function reverseTokens(darkTokens) {
  const reversedTokens = {};
  Object.entries(darkTokens).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const lightTokens = reverseTokens(darkTokens);

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            // palette values for dark mode
            primary: {
              ...darkTokens.primary,
              main: darkTokens.primary[400],
              light: darkTokens.primary[400],
            },
            secondary: {
              ...darkTokens.secondary,
              main: darkTokens.secondary[300],
            },
            neutral: {
              ...darkTokens.grey,
              main: darkTokens.grey[500],
            },
            background: {
              default: darkTokens.primary[600],
              alt: darkTokens.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              ...lightTokens.primary,
              main: darkTokens.grey[50],
              light: darkTokens.grey[100],
            },
            secondary: {
              ...lightTokens.secondary,
              main: darkTokens.secondary[600],
              light: darkTokens.secondary[700],
            },
            neutral: {
              ...lightTokens.grey,
              main: darkTokens.grey[500],
            },
            background: {
              default: darkTokens.grey[50],
              alt: darkTokens.grey[200],
            },
          }),
    },
    typography: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: 12,
      h1: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 40,
      },
      h2: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 32,
      },
      h3: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 24,
      },
      h4: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 20,
      },
      h5: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 16,
      },
      h6: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 14,
      },
    },
  };
};
