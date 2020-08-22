import bcrypt from 'bcrypt';
import repo from './repository'
import genUserTokenData from '../../utils/gen-user-token-data'
import config from '../../config';
import {verify} from 'jsonwebtoken'
import axios from 'axios'

async function login(req) {
  const { email , password } = req.body;
    const user = await repo.findOne({ email })
    if (!user) {
      throw new Error('Invalid email!')
    }
    const isCorrectPassword = bcrypt.compareSync(password, user.password) ;
    if (!isCorrectPassword) {
      throw new Error('Password is not correct!')
    }

    return genUserTokenData(user)
}

async function create(req) {
  const body = req.body
  const hash = bcrypt.hashSync(body.password, 10);
  const data = {
    name: body.name,
    email: body.email,
    password: hash
  }
  const user = await repo.create(data)
  if (user) {
    return genUserTokenData(user)
  }

  throw new Error(config.errorResponse.create)
}

async function decodeToken(req) {
  const {token} = req.body
  const user = verify(token, config.secret)
  return user
}

async function crawlVideo(req) {
  const {key} = req.body
  const videos = await axios.get(`${config.youtube.URL_YOUTUBE_API}/search?part=snippet&maxResults=25&q=${key}&key=${config.youtube.KEY_YOUTUBE}&fields=${config.youtube.FIELDS_SEARCH_YOUTUBE}&pageToken= ''`)
  
  if (videos) {
    return videos.data
  }

  throw new Error(config.errorResponse.create)
}


export default {
  login,
  create,
  decodeToken,
  crawlVideo
}