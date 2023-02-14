const express = require('express');
const router = express.Router();
const Blog = require("./model/Blogs");


/* GET home page. */
router.get('/', async function(req, res, next) {
  try{
    const allBlogs = await Blog.find({});
    res.json({
      blogs: allBlogs
    })
  }catch (e) {
    console.log(e);
  }
  // res.render('index', { title: 'Express' });
});

router.post("/create-one", async function(req, res){
    try {
      //parse out fields from POST request
      const title  = req.body.title 
      const text = req.body.text 
      const author = req.body.author
      const categories = req.body.category
      const year =  req.body.year;
  
      //pass fields to new Blog model 
      //notice how it's way more organized and does the type checking for us
      const newBlog = new Blog({
          title,
          text,
          author,
          categories,
          year
      });
      //save our new entry to the database 
      const savedData =  await newBlog.save();
      //return the successful request to the user 
      res.json({
          success: true,
          blogs: savedData
      });
    } catch (e) {
      console.log(typeof e);
      console.log(e);
      res.json({
        error: e.toString(),
      });
    }
})


module.exports = router;
