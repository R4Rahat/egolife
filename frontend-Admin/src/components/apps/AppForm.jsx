import { useState } from "react";

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
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border bg-white p-6 shadow-sm"
    >
      <h2 className="mb-5 text-lg font-semibold">Add Application</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <input
          type="text"
          placeholder="Application name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="rounded-lg border p-3"
        />

        <input
          type="text"
          placeholder="Version"
          value={version}
          onChange={(e) => setVersion(e.target.value)}
          required
          className="rounded-lg border p-3"
        />
      </div>

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="mt-4 w-full rounded-lg border p-3"
        rows="3"
      />

      <div className="mt-4">
        <label className="mb-2 block text-sm font-medium">
          Application file
        </label>

        <input
          type="file"
          onChange={(e) => setAppFile(e.target.files[0])}
          required
          className="block w-full"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block text-sm font-medium">Icon</label>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setIcon(e.target.files[0])}
          className="block w-full"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 rounded-lg bg-black px-5 py-3 text-white disabled:opacity-50"
      >
        {submitting ? "Uploading..." : "Upload Application"}
      </button>
    </form>
  );
}
