// This page is for individual article. Hence it will render as many times as there are articles.

//Using one more hook
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
//Import all the articles as an list from article content page
import articles from './article-content';
import NotFound from "./NotFoundPage";
import axios from 'axios';

const ArticlePage = () => {
    const [articleInfo, SetArticleInfo] = useState({ upvotes: 0, comment: [] });

    const { articleId } = useParams();
    const article = articles.find(article => article.name === articleId)

    useEffect(() => {
        const loadArticleInfo = async() => {
            const response = await axios.get(`/api/articles/${ articleId }`)
            const articleFromServer = response.data;
            SetArticleInfo(articleFromServer)
        }

        loadArticleInfo();
    }, [])

    if (!article) {
        return (
            <>
                <NotFound />
            </>
        )
    }

    return (
        //! We can't have that empty map function if we don't have this React.Fragment thing?
        <>
            <h1> { article.title } </h1>
            <p>This article has { articleInfo.upvotes } upvote(s)</p>
            { article.content.map(para => (
                <p> { para } </p>
            ))}
        </>
    )
}

export default ArticlePage;