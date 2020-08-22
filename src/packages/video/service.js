import repo from './repository'
import config from '../../config'
import axios from 'axios'
import cateRepo from '../cate/repository'

async function create(req) {
  let data = req.body
  const file = req.file
  if (!file) {
    throw new Error(config.errorResponse.create)
  }
  data.name = file.filename

  return repo.create(data)
}

async function upload(req) {
  const videos = await axios.get(`${config.youtube.URL_YOUTUBE_API}/search?part=snippet&maxResults=25&q=${req.body.key}&key=${config.youtube.KEY_YOUTUBE}&fields=${config.youtube.FIELDS_SEARCH_YOUTUBE}&pageToken= ''`)
  
  if (videos && videos.data) {
    const data = videos.data.items.map(e => ({
      author: req.user._id,
      name: e.snippet.title,
      youtubeId: e.id.videoId,
      des: e.snippet.description,
      thumbnail: e.snippet.thumbnails.medium.url,
      largeThumbnail: e.snippet.thumbnails.high.url,
      cate: req.body.cate
    }))

   return repo.createMany(data)
  }

  throw new Error(config.errorResponse.create)
}


async function show(req) {
  const cates = await cateRepo.find()
  const data = []
  for (const cate of cates) {

    const videos = await repo.find({ cate: cate._id })
    data[data.length] = {
        cate,
        videos
    }
  } 
  return data
}

async function getOne(req) {
  let {id} = req.params
  const video = await repo.findById(id)
  const relatedVideo = await repo.find({cate: video.cate._id, _id: { $nin: video._id }})
  if (video) {
    return {
      video,
      relatedVideo
    }
  }

  throw new Error(config.errorResponse.create)
}


export default {
  create,
  upload,
  show,
  getOne,
  
};
