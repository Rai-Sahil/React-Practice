// This will show the total number of articles in thhe site.

//Import the article from content page
import articles from "./article-content";
import ArticleList_Reusable from "../Components/ArticlesList";

const ArticleListPage = () => {
    return (
        <>
        <h1>Article Lists</h1>
        <ArticleList_Reusable articles={ articles } />
        </>
    )
}

export default ArticleListPage;