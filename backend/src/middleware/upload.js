import multer, { diskStorage } from "multer";
import { extname } from "path";

const storage = diskStorage({
  destination: (req, file, cb) => {
    const dest = file.fieldname === "icon" ? "uploads/icons/" : "uploads/apps/";
    cb(null, dest);
  },
  filename: (req, file, cb) => {
    const unique = Date.now() + "-" + file.originalname.replace(/\s+/g, "-");
    cb(null, unique);
  },
});

const appFileFilter = (req, file, cb) => {
  if (file.fieldname === "appFile") {
    const allowed = [".apk", ".exe"];
    if (allowed.includes(extname(file.originalname).toLowerCase()))
      return cb(null, true);
    return cb(new Error("Only .apk or .exe allowed"));
  }
  cb(null, true); // icon - add image mimetype check if needed
};

const uploadApp = multer({ storage, fileFilter: appFileFilter });

const notificationStorage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/notifications/"),
  filename: (req, file, cb) => {
    const unique = Date.now() + "-" + file.originalname.replace(/\s+/g, "-");
    cb(null, unique);
  },
});

const pdfFileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") return cb(null, true);
  cb(new Error("Only PDF files allowed"));
};

const uploadNotification = multer({
  storage: notificationStorage,
  fileFilter: pdfFileFilter,
});


export default { uploadApp, uploadNotification };
