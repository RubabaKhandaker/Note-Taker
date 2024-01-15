const notes = require('express');
const fs = require('fs');


notes.post('', (res, req) =>{

    fs.readFile('./db/db.json')
    .then((data) => {

        let post = JSON.parse(data);
        let newPost = {
            title : req.body.title,
            text : req.body.text,

        };

        post.push(newPost);
        return fs.writeFile('./db/db.json', JSON.stringify(post))
        .then(() => {

            return res.json(newPost);

        });
    })
   
});


module.exports = notes;