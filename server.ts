require('./src/database/index')
import express from 'express';
import router from './src/routes/routes'

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router)

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});