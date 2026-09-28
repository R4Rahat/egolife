/**
 * Default apps data matching MongoDB Schema:
 * Schema:
 *  - name: String (required)
 *  - version: String (required)
 *  - description: String
 *  - iconUrl: String (optional path to icon image)
 *  - fileUrl: String (required path to APK/EXE)
 *  - isActive: Boolean (default: true)
 *  - createdAt: Date (default: Date.now)
 */
export const defaultApps = [
  {
    id: "app-101",
    name: "Egolife VLE Digital Services App",
    version: "v3.2.1",
    description:
      "Mobile portal for Village Level Entrepreneurs (200+ Services) including utility payments and biometric verification.",
    iconUrl: "",
    fileUrl: "/downloads/egolife-vle-v3.2.1.apk",
    isActive: true,
    createdAt: "2026-09-15T10:00:00.000Z",
  },
  {
    id: "app-102",
    name: "Aadhaar Enrolment Hardware Diagnostic Suite",
    version: "v4.1.0",
    description:
      "UIDAI L1 Biometric Iris & Fingerprint Hardware Suite for Punjab National Bank branch operators and Gram Panchayat camps.",
    iconUrl: "",
    fileUrl: "/downloads/aadhaar-hardware-suite-v4.1.exe",
    isActive: true,
    createdAt: "2026-09-01T11:30:00.000Z",
  },
  {
    id: "app-103",
    name: "Ayushman Bharat Field Beneficiary Assistant",
    version: "v2.0.4",
    description:
      "Golden Card verification and spot registration utility for field verification teams.",
    iconUrl: "",
    fileUrl: "/downloads/ayushman-verifier-v2.0.apk",
    isActive: true,
    createdAt: "2026-08-28T09:15:00.000Z",
  },
  {
    id: "app-104",
    name: "DRA Debt Recovery Manager Mobile",
    version: "v1.8.2",
    description:
      "IIBF Certified agent field visit logger and case tracker for geotagged recovery logs.",
    iconUrl: "",
    fileUrl: "/downloads/dra-field-manager-v1.8.apk",
    isActive: true,
    createdAt: "2026-08-10T14:00:00.000Z",
  },
  {
    id: "app-105",
    name: "Egolife LED Bulb Inventory & Order Manager",
    version: "v2.1.0",
    description:
      "Commercial and retail LED supply chain portal for order booking and inventory tracking.",
    iconUrl: "",
    fileUrl: "/downloads/egolife-led-manager-v2.1.apk",
    isActive: false,
    createdAt: "2026-07-22T16:20:00.000Z",
  },
];

/**
 * Fetch downloadable apps list from API endpoint or fall back to defaultApps.
 */
export async function fetchAppsFromApi() {
  const apiUrl = import.meta.env.VITE_APPS_API_URL;

  if (!apiUrl || apiUrl.trim() === "" || apiUrl.includes("jsonplaceholder")) {
    return { data: defaultApps, source: "local" };
  }

  try {
    const res = await fetch(apiUrl);
    if (!res.ok) throw new Error(`API returned ${res.status}`);

    const json = await res.json();
    let rawList = Array.isArray(json) ? json : json.data || json.apps || [];

    if (rawList.length === 0) {
      return { data: defaultApps, source: "local" };
    }

    const apps = rawList.map((item, idx) => ({
      id: item._id || item.id || `app-${idx + 1}`,
      name: item.name || `Application #${idx + 1}`,
      version: item.version || `v1.0.${idx}`,
      description: item.description || "Official application package hosted on server.",
      iconUrl: item.iconUrl || "",
      fileUrl: item.fileUrl || `/downloads/app-${idx + 1}.apk`,
      isActive: item.isActive !== undefined ? Boolean(item.isActive) : true,
      createdAt: item.createdAt || new Date().toISOString(),
    }));

    return { data: apps, source: "api" };
  } catch (err) {
    console.warn("Apps API call failed, using default apps:", err);
    return { data: defaultApps, source: "local", error: err.message };
  }
}
