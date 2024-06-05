const express=require('express')

const app=express()


const todos=[]


app.use('/static',express.static('static'))
app.use(express.urlencoded({extended:true}))

app.get('/test',(req,res)=>{
    res.send("hello")
})

app.get('/',(req,res)=>{
    res.render('index.ejs',{
        name :" Dhanusha",
        todos:todos
    })
})

app.post('/',(req,res)=>{
    todos.push(req.body)
    res.redirect('/')
})

app.listen(4444,()=>{
    console.log(`Server is listening on port 4444`);
})