import "./App.css";
import { MovieCard } from "./components/MovieCard";
import movieList from "./data/movieListData.json";

function App() {
  return (
    <div className="flex-center min-h-screen bg-[#141517] text-white">
      <div className="flex-between max-w-[1200px] flex-wrap gap-8">
        {movieList.results.map((movieItem) => (
          <MovieCard key={movieItem.id} movieItem={movieItem} />
        ))}
      </div>
    </div>
  );
}

export default App;
