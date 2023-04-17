const express = require("express");
const app = express();

app.set("view engine", "ejs");

const PORT = 4000;

app.listen(PORT, () => {
  console.log("Port listening", PORT);
});

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Prop loves eggs",
      snippet:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, facilis.",
    },
    {
      title: "Yoshi loves dogs",
      snippet:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, facilis.",
    },
    {
      title: "Hades go to school",
      snippet:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, facilis.",
    },
  ];
  res.render("index", { title: "Home", blogs });
});
app.get("/sample", (req, res) => {
  res.render("sample", { title: "Sample" });
});
app.get("/create", (req, res) => {
  res.render("create", { title: "New Blog" });
});

app.use((req, res) => {
  res.status(404).render("error", { title: "404(Page Not Found)" });
});
