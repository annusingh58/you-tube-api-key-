import express from "express";
import { getAboutChannel, getPlaylist, getSearch, getTrending, getVdeoComments, getVideoRelated, getchannel, getvideoinfo } from "../controllers/youtubeusercontroller.js";

const router=express.Router();


router.get('/getAboutChannel',getAboutChannel);
router.get('/getchannel',getchannel);
router.get('/getVideoRelated',getVideoRelated);
router.get('/getVdeoComments',getVdeoComments);
router.get('/getTrending',getTrending);
router.get('/getvideoinfo',getvideoinfo);
router.get('/getPlaylist',getPlaylist);
router.get('/getSearch',getSearch)

export default router;