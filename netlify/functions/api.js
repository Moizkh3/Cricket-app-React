import express from 'express';
import serverless from 'serverless-http';
import { registerRoutes } from '../../server/routes.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Register all routes
registerRoutes(app);

// Export the handler function
export const handler = serverless(app);
