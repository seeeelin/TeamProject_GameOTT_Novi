import useBestPostStore from '../../../store/sub/bestpost';
import BestPostItem from './BestPostItem';

const BestPostList = () => {
    const bestPosts = useBestPostStore((state) => state.bestPosts);

    return (
        <ul className="best-post-grid">
            {bestPosts.map((post) => (
                <BestPostItem key={post.id} item={post} />
            ))}
        </ul>
    );
};

export default BestPostList;