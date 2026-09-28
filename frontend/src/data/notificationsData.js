/**
 * Default notification data matching MongoDB Schema:
 * Schema:
 *  - title: String (required)
 *  - fileUrl: String (required - path to PDF)
 *  - description: String
 *  - isActive: Boolean (default: true)
 *  - createdAt: Date (default: Date.now)
 */
export const defaultNotifications = [
  {
    id: "notif-101",
    title: "Official Notification: Special Aadhaar Enrolment Drives in Baksa & Nalbari",
    fileUrl: "/downloads/Aadhaar_Camp_Schedule_2026.pdf",
    description:
      "Notice regarding mandatory Aadhaar enrolment and biometric updation camps scheduled across Gram Panchayats in Baksa and Nalbari districts.",
    isActive: true,
    createdAt: "2026-09-20T09:00:00.000Z",
  },
  {
    id: "notif-102",
    title: "Ayushman Bharat AB-PMJAY Golden Card Distribution Campaign",
    fileUrl: "/downloads/Ayushman_Beneficiary_Guide.pdf",
    description:
      "Empanelled verification teams deploying to Goalpara, Bongaigaon, and Dhubri for instant Ayushman Golden Card generation.",
    isActive: true,
    createdAt: "2026-09-15T10:30:00.000Z",
  },
  {
    id: "notif-103",
    title: "Operator Empanelment & Hardware Kit Upgrade Notice for PNB Branches",
    fileUrl: "/downloads/PNB_Operator_Guidelines_2026.pdf",
    description:
      "Mandatory UIDAI L1 biometric scanner calibration for all Punjab National Bank branch enrolment operators.",
    isActive: true,
    createdAt: "2026-09-10T14:15:00.000Z",
  },
  {
    id: "notif-104",
    title: "Public Procurement Tender: Government School Uniform Logistics Phase II",
    fileUrl: "/downloads/School_Uniform_Logistics_Tender.pdf",
    description:
      "Delivery phase release for institutional uniform sets across designated educational blocks.",
    isActive: true,
    createdAt: "2026-09-02T11:00:00.000Z",
  },
  {
    id: "notif-105",
    title: "Egolife VLE Partner Portal Upgrade & 200+ Service Suite Expansion",
    fileUrl: "/downloads/VLE_Portal_Changelog_v3.2.pdf",
    description:
      "Version 3.2 release for Village Level Entrepreneurs with enhanced commission tracking and instant utility bill payments.",
    isActive: false,
    createdAt: "2026-08-25T08:45:00.000Z",
  },
];

/**
 * Fetch notifications list from API or fall back to defaultNotifications.
 */
export async function fetchNotificationsFromApi() {
  const apiUrl = import.meta.env.VITE_NOTIFICATIONS_API_URL;

  if (!apiUrl || apiUrl.trim() === "" || apiUrl.includes("jsonplaceholder")) {
    return { data: defaultNotifications, source: "local" };
  }

  try {
    const res = await fetch(apiUrl);
    if (!res.ok) throw new Error(`API returned ${res.status}`);

    const json = await res.json();
    let rawList = Array.isArray(json) ? json : json.data || json.notifications || [];

    if (rawList.length === 0) {
      return { data: defaultNotifications, source: "local" };
    }

    const notifications = rawList.map((item, idx) => ({
      id: item._id || item.id || `notif-${idx + 1}`,
      title: item.title || `Notification #${idx + 1}`,
      fileUrl: item.fileUrl || "/downloads/notice.pdf",
      description: item.description || "Official notification notice description.",
      isActive: item.isActive !== undefined ? item.isActive : true,
      createdAt: item.createdAt || new Date().toISOString(),
    }));

    return { data: notifications, source: "api" };
  } catch (err) {
    console.warn("Notifications API call failed, using default notifications:", err);
    return { data: defaultNotifications, source: "local", error: err.message };
  }
}

/**
 * Fetch a single notification by ID
 */
export async function fetchSingleNotification(id) {
  const listRes = await fetchNotificationsFromApi();
  const list = listRes.data || defaultNotifications;

  const found = list.find((n) => String(n.id) === String(id) || String(n._id) === String(id));
  if (found) {
    return { data: found, source: listRes.source };
  }

  return { data: defaultNotifications[0], source: "local" };
}
