const express = require('express')
const path = require('path')
const router = express.Router()
const blogs = require('../data/blogs')  

router.get('/', (req, res) => {
    res.render('home')
})
router.get('/blog', (req, res) => {
    res.render('blogHome', {
        blogs: blogs.blogs
    })
})
router.get('/blogpost/:slug', (req, res) => {
    const blog = blogs.blogs.find((blog) => {
        return blog.slug == req.params.slug
    })
    res.render('blogPage', {
        blog: blog
    })  
})
module.exports = router