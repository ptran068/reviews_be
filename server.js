import express from 'express';
import bodyParser from 'body-parser';
import ev from 'express-validation'
import connectToDb from './src/db/connect';
import route from './routes'
import cors from 'cors'

const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000
connectToDb().then(() => console.log('Connected db')).catch(e => {
  console.log(e)
	process.exit();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors())
app.use(route());
app.use(handleValidationError)


function handleValidationError(error, req, res, _) {
  if (error instanceof ev.ValidationError) {
    return res.status(error.status).json({
      code: error.status,
      message: error.errors[0].messages[0].split('"').join('').split('undefined').join('')
    })
  }
}
app.listen(PORT, () => {
    console.log(`Server started at: ${PORT}`);
});
