import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';

import errorHandler from './middleware/error.middleware.js';

import adminRoutes from './modules/admin/admin.routes.js';
import authRoutes from './modules/auth/auth.routes.js';
import appsRoutes from './modules/apps/apps.routes.js';
import notificationRoutes from './modules/notification/notification.routes.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.get("/health", (req, res)=>{
    res.json({
        message:"Hello From Backend"
    })
})

app.use("/api/admins", authRoutes);

app.use("/api/apps", appsRoutes);

app.use('/api/notifications', notificationRoutes);



// Landing page
const landingPagePath = path.join(__dirname, "../../frontend/dist") ;
app.use(express.static(landingPagePath))

app.get("/", (req, res)=>{
    res.sendFile(
        path.join(landingPagePath, "index.html")
    )
})

// Admin panel
const adminPanelPath = path.join(__dirname, '../../frontend-Admin/dist');
app.use(express.static(adminPanelPath));

app.get("/admin", (req, res)=>{
    res.sendFile(
        path.join(adminPanelPath, "index.html")
    )
})


app.use(errorHandler);

export default app;