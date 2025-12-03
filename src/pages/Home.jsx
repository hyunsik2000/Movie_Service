import { useNavigate } from "react-router-dom";
import { MovieCard } from "../components/MovieCard";
import movieList from "../data/movieListData.json";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex-between max-w-[1200px] cursor-pointer flex-wrap gap-8">
      {movieList.results.map((movieItem) => (
        <MovieCard
          key={movieItem.id}
          movieItem={movieItem}
          onClick={() => {
            navigate("/details");
          }}
        />
      ))}
    </div>
  );
}

export default Home;
