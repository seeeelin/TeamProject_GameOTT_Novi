import { useCategoryDataStore, useGenreTabStore } from '../../../store/modual/game';
import './style.css';

const CategoryItem = () => {
    const { categoryGames } = useCategoryDataStore();
    const { selectedGenre } = useGenreTabStore();

    // 선택된 장르에 따라 게임 필터링
    const filteredGames = selectedGenre === 'All'
        ? categoryGames
        : categoryGames.filter(game => game.genre === selectedGenre);

    return (
        <div className="CategoryItemWrap">
            {filteredGames.map((game) => (
                <div key={game.id} className="CategoryItem">
                    <img src={game.img} alt={game.title} />
                    <div className="categoryOverlay">
                        <h3>{game.title}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CategoryItem;
