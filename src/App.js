// App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FaceDetectionUI from './FaceDetectionUI';

function App() {
  return (
 
      <div className="App">
        <Routes>
          <Route path='/' element={<FaceDetectionUI />} />
        </Routes>
      </div>
  
  );
}

export default App;
