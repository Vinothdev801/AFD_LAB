const ex = require('express');
const app = ex();

app.use(ex.static('public'))

// start server
app.listen(3000, ()=> {
    console.log('Server started on http://localhost:3000/');           
})