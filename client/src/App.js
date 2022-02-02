import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import MainScreen from "./components/home/MainScreen";
import Navbar from "./components/navbar/Navbar";
import { getMovies } from "./store/moviesSlice";

function App() {
  const dispatch = useDispatch();

  useMemo(() => {
    dispatch(getMovies("/api/movies", "GET", {}));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <MainScreen />
    </div>
  );
}

export default App;
