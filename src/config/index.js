export default {
    db: 'mongodb://localhost:27017/reviews',
    bodyLimit: '100kb',
    statuses: {
      all: ['active', 'deactive', 'parentDeactive'],
      active: 'active',
      deactive: 'deactive',
      parentDeactive: 'parentDeactive',
    },

    regex: {
      objectId: /^[0-9a-fA-F]{24}$/,
      phone: /^\+?1?(\d{10,12}$)/,
      email: /\S+@\S+\.\S+/,
      password: /^[a-f0-9]{32}$/
    },

    format: {
      date: 'DD/MM/YYYY, HH:mm'
    },

    refreshTokenLife: '30d',

    role: {
      admin: 'Admin',
      user: 'User'
    },

    adminAccount: {
      email: 'admin@beauty.com',
      name: 'Admin',
      password: 'admin@beauty!@#' //3a7bcbcc6d1a1d14f994e1d5dee90864
    },

    pagination: {
      limit: 20,
      page: 1
    },
    youtube: {
      URL_YOUTUBE_API: 'https://www.googleapis.com/youtube/v3',
      KEY_YOUTUBE: 'AIzaSyCfGQgEYOOxCKGyilIEyy-3UES-8UdnmB8',
      FIELDS_SEARCH_YOUTUBE: 'items(snippet(title,thumbnails,description),id(videoId))'
    },
    errorResponse: {
      create: 'Create failed!',
      update: 'Update failed!',
      destroy: 'Delete failed!',
      show: 'Not Found!',
      existed: 'Data already existed!',
      common : 'Name field or Email field already existed!',
      format: 'SVG format is not supported',
      notMatchingPassword: 'Password must match repeatPassword',
      limit: 'File size must be smaller 5MB',
      invalidFile: 'File format must be png or jpg or gif or jpeg!',
      menu: 'Name or section fields already existed'
    },
    typesImage: {
      original: 'original',
      thumbnail: 'thumbnail',
      square: 'square'
    },
    statusCode : {
      badRequest : 400
    },
    fileSize : {
      limit: 1024 * 1024 * 5
    },
    secret: '8?@B##o!fV}5R8G',
    tokenVerifyFailed: {
      message: 'Authentication failed. Please login again'
    },
    noToken: {
      message: 'Authentication info not found'
    },
    apiNotFound: {
      message: 'API not found'
    },
    serverError: {
      message: 'Server error'
    },
    dataAlreadyExisted: {
      message: 'Data is already existed'
    }
}

