//This will have all the server-side code.

import express from 'express';

// Allow frontend to send POST request. /article/learn-node/upvote.

const app = express();
app.use(express.json());

// app.get('/hello', (req, res) => {
//     res.send(`Hello ${ req.body.name }`);
// });

// //Getting URL params in express, we can also have multiple URL params.
// app.get('/hello/:Article_Name', (req, res) => {
//     const articleName = req.params.Article_Name;

//     res.send(`Hello ${ articleName }`)
//})

//Temp DB
let articleInfo = [{
    name: 'learn-react',
    upvote: 0,
    cmment: [],
},
{
    name: 'mongodb',
    upvote: 0,
    comment: [],
},
{
    name: 'learn-node',
    upvote: 0,
    comment: [],
}]

//PUT is used if we need to change the currrent value.
app.put('/api/articles/:name/upvote', (req, res) => {
    const ArticleName = req.params.name;
    const article = articleInfo.find((a) => a.name === ArticleName);

    if (article) {
        article.upvote += 1;
        res.send(`The ${ article.name } has now ${ article.upvote } votes!!`)
    } else{
        res.send("Article doesn't exist");
    }
});

// Post is used if we need to extend something
app.post('/api/article/:name/comments', (req, res) => {
    const { postedBy, text } = req.body;
    const { name } = req.params;

    const article = articleInfo.find((a) => a.name === name)

    if (article){
        article.comment.push({ postedBy, text });
        res.send("Comment Added")
    } else {
        res.send("Article not found!")
    }
})

app.listen(8000, () => {
    console.log('Server is running at port 8000!')
})