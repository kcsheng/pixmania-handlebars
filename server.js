const express = require("express");
const app = express();
const PORT = 3000;

const exphbs = require("express-handlebars"); // require handlebars
app.engine(
  "handlebars",
  exphbs({
    helpers: {
      shortenComment(comment) {
        return comment.length <= 20
          ? comment
          : comment.substring(0, 20) + "...";
      },
    },
  })
); // assign handlebar as view engine, add helpers here
app.set("view engine", "handlebars"); // set handle bar as view engine
app.get("/", (req, res) => {
  res.render("home", {
    posts: [
      {
        author: "Janith Kasun",
        image: "https://picsum.photos/500/500",
        comments: [
          "First comment: plumi neco fermatenra",
          "Second comment: lor pasing eliot. Vestibulum ",
          "Lorem ipsum dolor sing elit. Vestibulum nec fermenrat lectus.",
        ],
      },
      {
        author: "John Doe",
        image: "https://picsum.photos/500/500?2",
        comments: [],
      },
    ],
  });
});

app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.status(200).send("index");
// });

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}...`);
});
