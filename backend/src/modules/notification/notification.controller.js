import { createReadStream, unlink } from "fs";
import { basename, resolve } from "path";
import Notification from "./notification.model.js";

export async function createNotification(req, res) {
  try {
    const { title, description } = req.body;
    const fileUrl = req.file.path;

    const notification = await Notification.create({
      title,
      description,
      fileUrl,
    });
    res.status(201).json(notification);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getNotifications(req, res) {
  const notifications = await Notification.find({ isActive: true }).sort({
    createdAt: -1,
  });
  res.json(notifications);
}

export async function viewNotification(req, res) {
  const n = await Notification.findById(req.params.id);
  if (!n) return res.status(404).json({ error: "Not found" });
  res.setHeader(
    "Content-Disposition",
    'inline; filename="' + basename(n.fileUrl) + '"',
  );
  res.setHeader("Content-Type", "application/pdf");
  createReadStream(resolve(n.fileUrl)).pipe(res);
}

export async function downloadNotification(req, res) {
  const n = await Notification.findById(req.params.id);
  if (!n) return res.status(404).json({ error: "Not found" });
  res.download(resolve(n.fileUrl), `${n.title}.pdf`);
}

export async function updateNotification(req, res) {
  const notification = await Notification.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
  );
  res.json(notification);
}

export async function deleteNotification(req, res) {
  const n = await Notification.findByIdAndDelete(req.params.id);
  if (n) unlink(n.fileUrl, () => {});
  res.json({ success: true });
}
