async function returnSuccess(res, data) {
  return res.json({
      status: 200,
      data: data,
      isSuccess: true
  })
}


async function returnError(res, message) {
  return res.status(400).json({
    isSuccess: false,
    message: message
  })
}

export {
  returnSuccess,
  returnError
}
