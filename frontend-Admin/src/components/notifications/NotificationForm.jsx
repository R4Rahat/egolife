import { useState } from "react";
import { FileText, Upload } from "lucide-react";

import useNotificationStore from "../../store/notificationStore";

export default function NotificationForm() {
  const addNotification = useNotificationStore(
    (state) => state.addNotification,
  );

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pdf, setPdf] = useState(null);

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!pdf) {
      alert("Please select a PDF file.");
      return;
    }

    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("pdf", pdf);

    try {
      setSubmitting(true);

      await addNotification(formData);

      setTitle("");
      setDescription("");
      setPdf(null);

      e.target.reset();
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Title */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Notification title
        </label>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter notification title"
          required
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
        />
      </div>

      {/* Description */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Description
        </label>

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter a short description"
          rows={4}
          className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
        />
      </div>

      {/* PDF */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          PDF document
          <span className="ml-1 text-red-500">*</span>
        </label>

        <label className="group flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 px-5 py-8 text-center transition hover:border-blue-300 hover:bg-blue-50/50">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            <FileText size={23} />
          </div>

          {pdf ? (
            <>
              <p className="max-w-full truncate text-sm font-medium text-gray-800">
                {pdf.name}
              </p>

              <p className="mt-1 text-xs text-green-600">
                PDF selected successfully
              </p>
            </>
          ) : (
            <>
              <p className="text-sm font-medium text-gray-700">
                Choose a PDF document
              </p>

              <p className="mt-1 text-xs text-gray-400">
                Click to browse your files
              </p>
            </>
          )}

          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setPdf(e.target.files?.[0] || null)}
            required
            className="hidden"
          />
        </label>
      </div>

      {/* Submit */}
      <div className="flex justify-end border-t border-gray-100 pt-5">
        <button
          type="submit"
          disabled={submitting}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          <Upload size={17} />

          {submitting ? "Uploading..." : "Publish Notification"}
        </button>
      </div>
    </form>
  );
}
