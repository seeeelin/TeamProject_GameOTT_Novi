import { useGenreTabStore } from '../../../store/modual/game';
import './style.css';

const GenreTab = () => {
    const { selectedGenre, setSelectedGenre } = useGenreTabStore();

    const genres = ['All', '액션', 'FPS', 'RPG', '아케이드', '어드벤쳐'];

    return (
        <div className="GenreTab">
            {genres.map((genre) => (
                <button
                    key={genre}
                    className={`genreItem ${selectedGenre === genre ? 'active' : ''}`}
                    onClick={() => setSelectedGenre(genre)}
                >
                    {genre}
                </button>
            ))}
        </div>
    );
};

export default GenreTab;