
export default async function returnError (res, data, e) {
  if (e) {
    return res.status(400).json({
      isSuccess: false,
      message: e.message || 'Have error', // Get message from new Error()
      // error: e.stack || e
    })
  }

  return res.json({
    isSuccess: true,
    status: 200,
    data: data
  })
}

