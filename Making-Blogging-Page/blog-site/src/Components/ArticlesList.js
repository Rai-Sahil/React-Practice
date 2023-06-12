// this will have all the reusable components of the website. So lets say i 
// want to have top ranked article page, related article articles page. I would use this for those things

import { Link } from 'react-router-dom';

const ArticleList_Reusable = ({ articles }) => {
    return (
        <>
            { articles.map((article) => (
                <Link key={ article.name } className="article-list-item" to={`/article/${article.name}`}>
                    <h3> { article.title } </h3>
                    <p> { article.content[0].substring(0, 150) }... </p>
                </Link>
            ))}
        </>
    )
}

export default ArticleList_Reusable;