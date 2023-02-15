const { v4: uuidv4 } = require('uuid');
const express = require('express');
const router = express.Router();
const Blog = require('../model/Blogs')
// const { validateBlogData } = require("../validation/blogs");
// const { db } = require('../mongo');
// const { ObjectId } = require('mongodb');

// /* GET users listing. */
// router.get('/', async function(req, res, next) {
//     const blogsPulled = await db()
//     .collection('sample_Blogs')
//     .find({})
//     .limit(5)
//     .toArray(function(err, result){
//         if (err) {
//           res.status(400).send("error fetching blogs")
//         } else {
//           res.json(result);
//         }
//       }); 
//     res.json({
//     sucess:true,
//     blogs: blogsPulled
//     });
// });

// // returns 1 blog randomly from the db
// router.get('/get-one', async function(req, res, next) {
//     const blogsPulled = await db()
//     .collection('sample_Blogs')
//     .aggregate([{$sample : {size: 1}}])
//     .toArray(function(err, result){
//         if (err) {
//           res.status(400).send("error fetching blogs")
//         } else {
//           res.json(result);
//         }
//       }); 
//     res.json({
//     sucess:true,
//     blogs: blogsPulled
//     });
// });

// //get all blogs, if query is not undefined then 
// // get all blogs info appropriate to the query
// router.get('/all', async (req, res) => {
//     const blogs = await db()
//     .collection('sample_Blogs')
//     .find({})
//     .toArray(function(err, result){
//         if (err) {
//           res.status(400).send("error fetching blogs")
//         } else {
//           res.json(result);
//         }
//       }); 
//     try{
//         if(req.query.id !== undefined){
//             const allIds = blogs.map(blog => blog._id)
//             res.status(200).json({
//                 success: true,
//                 allIds: allIds
//             })
//             return;
//         }
//         if(req.query.title !== undefined){
//             const allTitles = blogs.map(blog => blog.title)
//             res.status(200).json({
//                 success: true, 
//                 allTitles: allTitles
//             })
//             return;
//         }
//         if(req.query.text !== undefined){
//             const allTexts = blogs.map(blog => blog.text)
//             res.status(200).json({
//                 succes: true,
//                 allTexts: allTexts
//             })
//             return;
//         }
//         if(req.query.author !== undefined){
//             const allAuthors = blogs.map(blog => blog.author)
//             res.status(200).json({
//                 success: true,
//                 allAuthors: allAuthors
//             })
//             return;
//         }
//         if(req.query.categories !== undefined){
//             const allCategory = blogs.map(blog => blog.categories)
//             res.status(200).json({
//                 success: true,
//                 allCategory: allCategory
//             })
//             return;
//         }
//         if(req.query.createdAt !== undefined){
//             const allCreatedAt = blogs.map(blog => blog.createdAt)
//             res.status(200).json({
//                 succces: true,
//                 allCreatedAt: allCreatedAt
//             })
//             return;
//         }
//         if(req.query.lastModified !== undefined){
//             const allLastModified = blogs.map(blog => blog.lastModified)
//             res.status(200).json({
//                 success: true,
//                 allLastModified: allLastModified
//             })
//             return;
//         }
//         if(Object.keys(req.query).length > 0){
//             throw new Error('Query could not be found');
//         }
//         res.status(200).json({
//             success: true,
//             blogsList: blogs
//         })
//     } catch(e) {
//         res.status(404).json({
//             success: false,
//             message: String(e)
//         })
//     }
// })

// // get single blog by title, if query is not undefined then get 
// // info appropriate to the query
// router.get('/single/:title', async (req, res) => {
//     const title = req.params.title;
//     const blog = await db()
//     .collection('sample_Blogs')
//     .find({"title" : String(title)})
//     .toArray(function(err, result){
//         if (err) {
//           res.status(400).send("error fetching blog")
//         } else {
//           res.json(result);
//         }
//     });
//     try{
//         if(blog.length < 1){
//             throw new Error('Could not find title');
//         }
//         if(req.query.title !== undefined){
//             res.status(200).json({
//                 success: true, 
//                 title: blog[0].title
//             })
//             return;
//         }
//         if(req.query.text !== undefined){
//             res.status(200).json({
//                 succes: true,
//                 text: blog[0].text
//             })
//             return;
//         }
//         if(req.query.author !== undefined){
//             res.status(200).json({
//                 success: true,
//                 author: blog[0].author
//             })
//             return;
//         }
//         if(req.query.categories !== undefined){
//             res.status(200).json({
//                 success: true,
//                 catefory: blog[0].categories
//             })
//             return;
//         }
//         if(req.query.createdAt !== undefined){
//             res.status(200).json({
//                 succces: true,
//                 createdAt: blog[0].createdAt
//             })
//             return;
//         }
//         if(req.query.lastModified !== undefined){
//             res.status(200).json({
//                 success: true,
//                 lastModified: blog[0].lastModified
//             })
//             return;
//         }
//         if(Object.keys(req.query).length > 0){
//             throw new Error('Query could not be found');
//         }
//         res.status(200).json({
//             success: true,
//             blogSearchedFor: blog
//         })
//     } catch (e) {
//         res.status(404).json({
//             success: false,
//             message: String(e)
//         })
//     }
// })

// //delete single blog post by title
// router.delete('/single/:title', async (req, res) => {
//     let title = req.params.title;
//     const blogToBeDeleted = await db()
//     .collection('sample_Blogs')
//     .find({'title' : String(title)})
//     .toArray(function(err, result){
//         if (err) {
//           res.status(400).send("error fetching blog")
//         } else {
//           res.json(result);
//         }
//     });
//     try{
//         if(blogToBeDeleted.length < 1){
//             throw new Error('Error title could not be found');
//         }
//         db()
//         .collection('sample_Blogs')
//         .deleteOne({
//             "title" : String(title)
//         })
//         res.status(200).json({
//             success: true,
//             message: `Blog titled ${title} has been deleted`
//         })
//     } catch(e) {
//         res.status(404).json({
//             succes: false,
//             message: String(e)
//         })
//     }
// })

// // create one blog post and put it into the db
// router.post('/create-one', (req, res) => {
//     try {
//         const blogToBeAdded = {};
//         blogToBeAdded.title = req.body.title;
//         blogToBeAdded.text = req.body.text;
//         blogToBeAdded.author = req.body.author;
//         blogToBeAdded.category = req.body.category;
//         blogToBeAdded.createdAt = new Date();
//         blogToBeAdded.lastModified = new Date();
//         blogToBeAdded.id = uuidv4();
//         const validation = validateBlogData(blogToBeAdded);
//         if(!validation.isValid){
//             throw new Error(validation.message)
//         }
//         db()
//         .collection('sample_Blogs')
//         .insertOne(blogToBeAdded);
//         res.status(201).json({
//             success: true,
//             message: `Blog titled ${blogToBeAdded.title} has been created`
//         })
//     } catch (e) {
//         res.status(400).json({
//             success: false,
//             message: String(e)
//         })
//     }
// })

// // update one blog post in the db based off of title
// router.put('/update-one/:title', async (req, res) => {
//     const title = req.params.title;
//     const oldBlog = await db()
//     .collection('sample_Blogs')
//     .find({"title" : String(title)})
//     .toArray(function(err, result){
//         if (err) {
//           res.status(400).send("error fetching blog")
//         } else {
//           res.json(result);
//         }
//     });
//     try {
//         const newBlog = {};
//         if(oldBlog.length < 1){
//             throw new Error("Title could not be found");
//         }
//         if(req.body.title !== undefined){
//             newBlog.title = req.body.title;
//         } else {
//             newBlog.title = oldBlog[0].title;
//         }
//         if(req.body.text !== undefined){
//             newBlog.text = req.body.text;
//         } else {
//             newBlog.text = oldBlog[0].text;
//         }
//         if(req.body.author !== undefined){
//             newBlog.author = req.body.author;
//         } else {
//             newBlog.author = oldBlog[0].author;
//         }
//         if(req.body.categories !== undefined){
//             newBlog.categories = req.body.categories;
//         } else {
//             newBlog.categories = oldBlog[0].categories;
//         }
//         newBlog.createdAt = oldBlog[0].createdAt;
//         newBlog.lastModified = new Date();
//         newBlog.id = oldBlog[0].id;
//         const validation = validateBlogData(newBlog);
//         if(!validation.isValid){
//             throw new Error(validation.message)
//         }
//         db()
//         .collection('sample_Blogs')
//         .updateOne(
//             {"title" : String(title)},
//             { $set: {"title": String(newBlog.title)}},
//             { $set: {"text": String(newBlog.text)}},
//             { $set: {"author": String(newBlog.author)}},
//             { $set: {"categories": Array(newBlog.categories)}},
//             { $set: {"createdAt": Date(newBlog.createdAt)}},
//             { $set: {"lastModified": Date(newBlog.lastModified)}},
//             { $set: {"id": String(newBlog.id)}}
//         )
//         res.status(200).json({
//             success: true,
//             message: `The blog titled ${oldBlog[0].title} has been updated`
//         })
//     } catch (e) {
//         if(e.message === 'Title could not be found'){
//             res.status(404).json({
//                 success: false,
//                 message: String(e)
//             })
//             return;
//         }
//         res.status(400).json({
//             success: false,
//             message: String(e)
//         })
//     }
// })

// // get single blog by id, if query is not undefined then get 
// // info appropriate to the query
// router.get('/get-one/:id', async (req, res) => {
//     const id = req.params.id;
//     const o_id = new ObjectId(id);
//     const blog = await db()
//     .collection('sample_Blogs')
//     .find({_id: o_id})
//     .toArray(function(err, result){
//         if (err) {
//           res.status(400).send("error fetching blog")
//         } else {
//           res.json(result);
//         }
//     });
//     try{
//         if(blog.length < 1){
//             throw new Error('Could not find id');
//         }
//         if(req.query.title !== undefined){
//             res.status(200).json({
//                 success: true, 
//                 title: blog[0].title
//             })
//             return;
//         }
//         if(req.query.text !== undefined){
//             res.status(200).json({
//                 succes: true,
//                 text: blog[0].text
//             })
//             return;
//         }
//         if(req.query.author !== undefined){
//             res.status(200).json({
//                 success: true,
//                 author: blog[0].author
//             })
//             return;
//         }
//         if(req.query.categories !== undefined){
//             res.status(200).json({
//                 success: true,
//                 catefory: blog[0].categories
//             })
//             return;
//         }
//         if(req.query.createdAt !== undefined){
//             res.status(200).json({
//                 succces: true,
//                 createdAt: blog[0].createdAt
//             })
//             return;
//         }
//         if(req.query.lastModified !== undefined){
//             res.status(200).json({
//                 success: true,
//                 lastModified: blog[0].lastModified
//             })
//             return;
//         }
//         if(Object.keys(req.query).length > 0){
//             throw new Error('Query could not be found');
//         }
//         res.status(200).json({
//             success: true,
//             blogSearchedFor: blog
//         })
//     } catch (e) {
//         res.status(404).json({
//             success: false,
//             message: String(e)
//         })
//     }
// })

// module.exports = router;

router.get('/all', async function(req, res, next) {
    try{
      const allBlogs = await Blog.find({});
      res.json({
        blogs: allBlogs
      })
    }catch (e) {
      console.log(e);
    }
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