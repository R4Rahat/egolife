import { useState } from "react";

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
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Create Notification
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Upload a new notice with its PDF document.
        </p>
      </div>

      <div className="grid gap-5">
        {/* Title */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Title
          </label>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter notification title"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Description */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Description
          </label>

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter a short description"
            rows={3}
            className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* PDF */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            PDF Document
          </label>

          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setPdf(e.target.files?.[0] || null)}
            required
            className="block w-full cursor-pointer rounded-lg border border-slate-300 bg-slate-50 text-sm text-slate-600 file:mr-4 file:border-0 file:bg-slate-900 file:px-4 file:py-3 file:text-sm file:font-medium file:text-white"
          />

          {pdf && (
            <p className="mt-2 text-xs text-slate-500">Selected: {pdf.name}</p>
          )}
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          disabled={submitting}
          className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {submitting ? "Uploading..." : "Publish Notification"}
        </button>
      </div>
    </form>
  );
}
