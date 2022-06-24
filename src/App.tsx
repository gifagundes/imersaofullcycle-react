import './App.css';
import { Posts } from './components/posts';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Detail } from './components/detail';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { createUseStyles } from 'react-jss';

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      light: '#757ce8',
      main: '#ca1eac',
      dark: '#002884',
      contrastText: '#000',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  typography: {
    // Use the system font over Roboto.
    fontFamily: 'Avenir Next, Roboto,"Helvetica Neue",Arial,sans-serif',
    htmlFontSize: 22,
  },
});

const useStyles = createUseStyles({
  mark: {
    fontFamily: 'Arial black',
    fontSize: '2em',
    textAlign: 'center',
    color: '#ca1eac'
  }
})

export const capitalizeFirstLowercaseRest = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <p className={classes.mark}>® Gi Fagundes</p>
      <Router>
        <Routes>
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/" element={<Navigate replace to="/posts" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
