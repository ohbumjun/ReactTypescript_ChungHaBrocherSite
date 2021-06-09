const express = require('express');
const router = express.Router();
const path = require('path');
const connection = require('../db/db.js');
const {Album} = require('../model/Albums')



// 메인 페이지 
router.post('/', (req,res) => {

    const sortAlbumByDate = (array) => array.sort((a,b)=>new Date(b.albumOpenDate) - new Date(a.albumOpenDate));
    
    // 여기에 cache 기능 넣기 : cache object 따로 생성하기 

    console.log("post request reached")
    Album.find().exec((err,albums)=>{
        // 시간 순 정렬 + 6개 만 가져오기 
        albums = sortAlbumByDate(albums).slice(0,6)
        if(err){
            console.log("error")
            return res.status(400)
        }
        return res.status(200).json({albums})
    })
})

module.exports = router;