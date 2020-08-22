import User from '../packages/user/model';
import config from '../config'
import tokenGenerator from '../utils/token-generator'

export default async function genUserTokenData (user) {
    const tokenData = user.genTokenData()
    user = await User.commonUserData(user.toJSON())
    user.token = tokenGenerator.generate(tokenData)
    user.refreshToken = tokenGenerator.generate(tokenData, { expiresIn: config.refreshTokenLife })

    return user
}
