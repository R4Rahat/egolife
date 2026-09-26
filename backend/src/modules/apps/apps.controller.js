import fs from "fs";
import path from "path";
import App from "./apps.model.js";


export const createApp = async (req, res) => {
  try {
    const { name, version, description } = req.body;

    const fileUrl = req.files.appFile[0].path;
    const icon = req.files.icon ? req.files.icon[0].path : null;

    const fileSize = req.files.appFile[0].size;

    const app = await App.create({
      name,
      version,
      description,
      fileUrl,
      icon,
      fileSize,
    });

    res.status(201).json(app);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

export const getApps = async (req, res) => {
  const apps = await App.find({ isActive: true }).sort({ createdAt: -1 });

  res.json(apps);
};

export const downloadApp = async (req, res) => {
  try {
    const app = await App.findById(req.params.id);

    if (!app) {
      return res.status(404).json({
        error: "Not found",
      });
    }

    res.download(
      path.resolve(app.fileUrl),
      `${app.name}-${app.version}${path.extname(app.fileUrl)}`,
    );
  } catch (error) {
    console.error(error)
  }
};

export const updateApp = async (req, res) => {
  const app = await App.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.json(app);
};

export const deleteApp = async (req, res) => {
  const app = await App.findByIdAndDelete(req.params.id);

  if (app) {
    fs.unlink(app.fileUrl, () => {});

    if (app.icon) {
      fs.unlink(app.icon, () => {});
    }
  }

  res.json({
    success: true,
  });
};
