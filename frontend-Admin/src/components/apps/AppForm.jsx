import { useState } from "react";
import { Upload, Image, FileArchive } from "lucide-react";

import useAppStore from "../../store/appStore";

export default function AppForm() {
  const addApp = useAppStore((state) => state.addApp);

  const [name, setName] = useState("");
  const [version, setVersion] = useState("");
  const [description, setDescription] = useState("");

  const [appFile, setAppFile] = useState(null);
  const [icon, setIcon] = useState(null);

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!appFile) {
      alert("Please select an application file.");
      return;
    }

    const formData = new FormData();

    formData.append("name", name);
    formData.append("version", version);
    formData.append("description", description);
    formData.append("appFile", appFile);

    if (icon) {
      formData.append("icon", icon);
    }

    try {
      setSubmitting(true);

      await addApp(formData);

      setName("");
      setVersion("");
      setDescription("");
      setAppFile(null);
      setIcon(null);

      e.target.reset();
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Basic Information */}
      <div className="grid gap-5 md:grid-cols-2">
        {/* Name */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Application name
          </label>

          <input
            type="text"
            placeholder="e.g. My Desktop App"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
          />
        </div>

        {/* Version */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Version
          </label>

          <input
            type="text"
            placeholder="e.g. 1.0.0"
            value={version}
            onChange={(e) => setVersion(e.target.value)}
            required
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
          />
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Description
        </label>

        <textarea
          placeholder="Describe the application..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
        />
      </div>

      {/* Files */}
      <div className="grid gap-5 md:grid-cols-2">
        {/* Application File */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Application file
            <span className="ml-1 text-red-500">*</span>
          </label>

          <label className="group flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 px-5 py-7 text-center transition hover:border-blue-300 hover:bg-blue-50/50">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <FileArchive size={21} />
            </div>

            <p className="text-sm font-medium text-gray-700">
              {appFile ? appFile.name : "Choose application file"}
            </p>

            <p className="mt-1 text-xs text-gray-400">
              Click to browse your files
            </p>

            <input
              type="file"
              onChange={(e) => setAppFile(e.target.files?.[0] || null)}
              required
              className="hidden"
            />
          </label>
        </div>

        {/* Icon */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Application icon
            <span className="ml-1 text-gray-400">(optional)</span>
          </label>

          <label className="group flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 px-5 py-7 text-center transition hover:border-blue-300 hover:bg-blue-50/50">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <Image size={21} />
            </div>

            <p className="max-w-full truncate text-sm font-medium text-gray-700">
              {icon ? icon.name : "Choose application icon"}
            </p>

            <p className="mt-1 text-xs text-gray-400">
              PNG, JPG, SVG or other image
            </p>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setIcon(e.target.files?.[0] || null)}
              className="hidden"
            />
          </label>
        </div>
      </div>

      {/* Submit */}
      <div className="flex justify-end border-t border-gray-100 pt-5">
        <button
          type="submit"
          disabled={submitting}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          <Upload size={17} />

          {submitting ? "Uploading..." : "Upload Application"}
        </button>
      </div>
    </form>
  );
}
