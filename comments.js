//create web server application
const express = require('express');
const app = express();
//create a port to listen to
const port = 3000;
//create a variable to store comments
let comments = [];
//create a variable to store the count of comments
let count = 0;
//create a function to add a comment
function addComment(comment) {
    comments.push(comment);
    count++;
}
//create a function to get all comments
function getComments() {
    return comments;
}
//create a function to get all comments
function getCommentsCount() {
    return count;
}
//create a function to get all comments
function clearComments() {
    comments = [];
    count = 0;
}
//create a function to get all comments
function deleteComment(index) {
    comments.splice(index, 1);
    count--;
}
//create a function to get all comments
function updateComment(index, comment) {
    comments[index] = comment;
}
//create a function to get all comments
function getComment(index) {
    return comments[index];
}
//create a function to get all comments
function getCommentIndex(index) {
    return comments[index];
}
//create a function to get all comments
function getCommentIndex(index) {
    return comments[index];
}
//create a function to get all comments
app.get('/comments', (req, res) => {
    res.send(getComments());
});
//create a function to get all comments
app.get('/comments/count', (req, res) => {
    res.send(getCommentsCount());
});
//create a function to get all comments
app.post('/comments', (req, res) => {
    addComment(req.query.comment);
    res.send(getComments());
});
//create a function to get all comments
app.post('/comments/clear', (req, res) => {
    clearComments();
    res.send(getComments());
});
//create a function to get all comments
app.delete('/comments/:index', (req, res) => {
    deleteComment(req.params.index);
    res.send(getComments());
});
//create a function to get all comments
app.put('/comments/:index', (req, res) => {
    updateComment(req.params.index, req.query.comment);
    res.send(getComments());
});
//create a function to get all comments
app.get('/comments/:index', (req, res) => {
    res.send(getComment(req.params.index));

