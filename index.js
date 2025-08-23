import express from "express";
import bodyParser from "body-parser";



const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const posts = []; // Store blog posts in memory

app.get("/", (req, res) => {
    res.render("index.ejs", {
        title: null,
        content: null,
        img_url: null,
        posts
    });
});

app.get("/post", (req, res) => {
    res.render("post.ejs", {
        title: null,
        content: null,
        img_url: null,
        posts
    });
})

app.post("/submit", (req, res)=>{

    const post = [];
    post.push()

    const { title, content, image, Author } = req.body;

    const newPost = {
        title,
        content,
        img_url: image,
        Author
    };

    posts.push(newPost);

    res.redirect("/");
});




app.listen(port, () => {
    console.log(`Listening on the port ${port}`);
});


