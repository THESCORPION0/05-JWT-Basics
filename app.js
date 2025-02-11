import 'dotenv/config';
import 'express-async-errors'
import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
import connectDB from './db/connect.js';
import { mainRouter } from './routes/main.js';

const app = express();

// Middleware
app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1', mainRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);



const start = async () => {
  try {
    const port = process.env.PORT || 3000; 
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
    process.exit(1); // Exit with failure
  }
};

start();

