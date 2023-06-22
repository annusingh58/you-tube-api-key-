import express from "express";
import { getAboutChannel, getPlaylist, getSearch, getTrending, getVideoComments, getVideoRelated, getchannel, getvideoinfo } from "../controllers/youtubeusercontroller.js";

const router=express.Router();


router.get('/getAboutChannel',getAboutChannel);
router.get('/getchannel',getchannel);
router.get('/getVideoRelated',getVideoRelated);
router.get('/getVideoComments',getVideoComments);
router.get('/getTrending',getTrending);
router.get('/getvideoinfo',getvideoinfo);
router.get('/getPlaylist',getPlaylist);
router.get('/getSearch',getSearch)

export default router;