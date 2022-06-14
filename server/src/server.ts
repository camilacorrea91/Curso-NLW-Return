import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//função criada para assim que o sevidor estiver no ar
app.listen(3333, () => { 
  console.log('HTTP server running!');
});

