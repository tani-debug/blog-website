import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

const posts = []; // Store blog posts in memory

// Home page
app.get("/", (req, res) => {
    res.render("index", { posts });
});

// Create post page
app.get("/post", (req, res) => {
    res.render("post");
});

// Handle post submission
app.post("/submit", (req, res) => {
    const { title, content, img_url, Author } = req.body;
    const newPost = {
        _id: posts.length + 1, // Simple unique id
        title,
        content,
        img_url,
        Author
    };
    posts.push(newPost);
    res.redirect("/");
});

// View a single blog post
app.get("/post/:id", (req, res) => {
    const post = posts.find(p => p._id == req.params.id);
    if (!post) {
        return res.status(404).send("Post not found");
    }
    res.render("Blog.ejs", { post });
});

// Home page (optional: improved home.ejs)
app.get("/home", (req, res) => {
    res.render("Home");
});

// Newsletter page (optional)
app.get("/newsletter", (req, res) => {
    res.render("newsletter");
});

// About page (optional)
app.get("/about", (req, res) => {
    res.render("about");
});

// Resources page (optional)
app.get("/resources", (req, res) => {
    res.render("resources");
});

// Start server
app.listen(port, () => {
    console.log(`Listening on the port ${port}`);
});


