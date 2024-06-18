// src/App.js
import './App.css';
import { Routes, Route } from 'react-router-dom';
import FaceDetectionUI from './FaceDetectionUI';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './components/Home';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home username="Divyamshu" />} />
          <Route path='/face' element={<FaceDetectionUI />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
