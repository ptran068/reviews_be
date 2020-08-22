
const getActivePagination = (limit, keyword, page) => {
  const skip = (page - 1) * limit;

  return [
    {
      $match: {
        $and: [{
          $or: [
            { name: new RegExp(keyword, 'i') },
          ]
        }]
      }
    },
    {
      $facet: {
        meta: [
          { $count: 'total' },
        ],
        data: [
          { $sort: { createdAt: -1 } },
          { $skip: skip },
          { $limit: limit },
          {
            $lookup: {
              from: 'images',
              localField: 'logo',
              foreignField: '_id',
              as: 'logo'
            }
          },
          {
            $unwind: {
              path: '$logo',
              preserveNullAndEmptyArrays: true
            }
          },
        ]
      }
    }
  ]
}

export default {
  getActivePagination,
}
