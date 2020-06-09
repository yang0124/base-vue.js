var express = require('express')
var router = express.Router()
var listD = require('../data/listData')

router.get('/',(req,res)=>{
    res.render('admin/pub.html')
})

router.get('/a',(req,res)=>{
    res.render('admin/a.html')
})
router.get('/b', (req, res) => {
    res.render('admin/b.html')
})
router.get('/c', (req, res) => {
    res.render('admin/c.html')
})

module.exports = router
