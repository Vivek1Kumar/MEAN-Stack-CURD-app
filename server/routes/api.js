const express = require('express');
const video = require('../models/video');
const mongoose = require('mongoose');
const router = express.Router();

//const db = "mongodb://localhost/video";
mongoose.Promise = global.Promise; //this is avoid mongodb warrring
mongoose.connect("mongodb://localhost/video", function(err){
    if(err){
        console.error("Error!",  err);
    }
});


router.get('/videos/', function(req, res){
    // res.send('api works');
    console.log("Get request for all videos");
    video.find({})
    .exec(function(err, videos){
       // console.log("null all videos");
        if(err){
            console.log("Error retrieving videos");
        }else{
            console.log("null not all videos");
            console.log(videos);
            res.json(videos);
        }
    });
});
router.get('/videos/:id', function(req, res){
    console.log("Get a request video by id");
    video.findById(req.params.id)
    .exec(function(err, video){
        if(err){
            console.log("Error retriving videos");
        }else{
            res.json(video);
        }
    });
});

router.post('/videos', function(req, res){
    console.log("Post video data ");
    var newVideo = new video();
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;
    
    newVideo.save(function(err, insertedVideo){
        if(err){
            console.log("Error video data not posted");
        }else{
            res.json(insertedVideo);
        }
    });
});

router.put('/videos/:id', function(req, res){
    console.log("Update a video data");
    video.findByIdAndUpdate(req.params.id, {
        $set:{
                title: req.body.title, 
                url: req.body.url,
                description: req.body.description
            }
    },
    {
        new: true
    },
    function(err, UpdatedVideo){
        if(err){
            console.log("Error for upadating videos");
        }else{
            res.json(UpdatedVideo);
        }                
    });
});

router.delete('/videos/:id', function(req, res){
    console.log("Delete this video");
    video.findByIdAndRemove(req.params.id, function(err, deletedVideo){
            if(err){
                console.log("Error Deleted video");
            }else{
                res.json(deletedVideo);
            }
        });
});
module.exports = router;