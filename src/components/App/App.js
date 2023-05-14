import {Routes, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Routes>   
        <Route path="/" exact element={<MovieList />} />
        <Route path='/details' element={<Details />} />
        {/* Details page */}

        {/* Add Movie page */}
      </Routes>
    </div>
  );
}


export default App;
