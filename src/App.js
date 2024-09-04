import Home from "./pages/home";
import Movie from "./pages/movie";
import Search from "./pages/search";
import GenreList from "./pages/genre list";
import Upcoming from "./pages/upcoming";
import Genre from "./pages/genre page";
import Tv from "./pages/tv";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/:id" element={<Movie />} />
                    <Route path="/tv/:id" element={<Tv />} />
                    <Route
                        path="/search/:keyword/page/:num"
                        element={<Search />}
                    />
                    <Route path="/genre" element={<GenreList />} />
                    <Route path="/upcoming/page/:num" element={<Upcoming />} />
                    <Route path="/genre/:id/page/:num" element={<Genre />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
