export const defaultNotifications = [
  {
    id: "notif-101",
    title: "Official Notification: Special Aadhaar Enrolment Drives in Baksa & Nalbari",
    category: "Official Circular",
    date: "2026-09-20",
    author: "District Administration & Egolife Consortium",
    isUrgent: true,
    summary:
      "Notice regarding mandatory Aadhaar enrolment and biometric updation camps scheduled across Gram Panchayats in Baksa and Nalbari districts.",
    content: `Attention Citizens & Local Authorities,
    
Egolife Egovernance Private Limited, in consortium with BNK Capital Markets Ltd (Government Authorized Agency), announces special Aadhaar generation and biometric update camps.

Key Details:
• Locations: Block Development Offices & Gram Panchayat Centers in Baksa, Nalbari, Udalguri, and Tamulpur.
• Timings: 9:00 AM - 5:00 PM (Monday to Saturday).
• Documents Required: Proof of Identity (PoI), Proof of Address (PoA), and Date of Birth proof.
• Mandatory Biometrics: Children completing age 5 and age 15 must undergo mandatory biometric updates (MBU).

For queries or camp schedule details, contact your local Gram Panchayat VLE or reach out to Egolife support at info@egolife.in.`,
    attachmentUrl: "/downloads/Aadhaar_Camp_Schedule_2026.pdf",
    attachmentName: "Aadhaar_Camp_Schedule_2026.pdf",
  },
  {
    id: "notif-102",
    title: "Ayushman Bharat AB-PMJAY Golden Card Distribution Campaign",
    category: "Health Mission",
    date: "2026-09-15",
    author: "UTIITSL & National Health Mission",
    isUrgent: false,
    summary:
      "Empanelled verification teams deploying to Goalpara, Bongaigaon, and Dhubri for instant Ayushman Golden Card generation.",
    content: `Under the UTIITSL Ayushman Bharat initiative, Egolife field verification agents are active across 6 target districts.

Beneficiary Guidelines:
• Check eligibility on the NHA portal using your Ration Card or NFSA ID.
• Visit nearest Egolife mobile health desk with Aadhaar Card and linked mobile number.
• Cashless cover up to ₹5,000,000 per family per year at all empanelled government and private hospitals.

Empanelled teams are conducting spot registrations at Community Health Centers (CHCs) and Primary Health Centers (PHCs).`,
    attachmentUrl: "/downloads/Ayushman_Beneficiary_Guide.pdf",
    attachmentName: "Ayushman_Beneficiary_Guide.pdf",
  },
  {
    id: "notif-103",
    title: "Operator Empanelment & Hardware Kit Upgrade Notice for PNB Branches",
    category: "Banking Operations",
    date: "2026-09-10",
    author: "Banking Operations Division",
    isUrgent: false,
    summary:
      "Mandatory UIDAI L1 biometric scanner calibration for all Punjab National Bank branch enrolment operators.",
    content: `All stationed enrolment operators at Punjab National Bank branches are instructed to update their biometric iris and slap fingerprint hardware to UIDAI L1 compliance standards.

Action Required:
1. Run system diagnostic via the Egolife Operator Utility App v2.4.
2. Complete GPS verification & network latency audit before September 30, 2026.
3. Submit signed weekly enrolment logs to the state operations manager.`,
    attachmentUrl: "/downloads/PNB_Operator_Guidelines_2026.pdf",
    attachmentName: "PNB_Operator_Guidelines_2026.pdf",
  },
  {
    id: "notif-104",
    title: "Public Procurement Tender: Government School Uniform Logistics Phase II",
    category: "Government Supply",
    date: "2026-09-02",
    author: "Department of School Education",
    isUrgent: true,
    summary:
      "Delivery phase release for institutional uniform sets across designated educational blocks.",
    content: `Notice of dispatch and distribution phase for government school uniform supplies.

Logistics Schedule:
• Inspection and quality sign-off completed at regional manufacturing facilities.
• Direct delivery dispatched to Block Elementary Education Officer (BEEO) hubs.
• Quality assurance inspection sheets must be signed upon batch arrival.`,
    attachmentUrl: null,
    attachmentName: null,
  },
  {
    id: "notif-105",
    title: "Egolife VLE Partner Portal Upgrade & 200+ Service Suite Expansion",
    category: "E-Commerce & Digital",
    date: "2026-08-25",
    author: "Egolife Digital Innovations",
    isUrgent: false,
    summary:
      "Version 3.2 release for Village Level Entrepreneurs with enhanced commission tracking and instant utility bill payments.",
    content: `We are excited to launch the updated Egolife Digital VLE Mobile App (v3.2).

New Features:
• Expanded utility bill payments & instant PAN verification portal.
• Integrated Egolife LED bulb order inventory module for rural distributors.
• Real-time wallet settlement & automated GST invoice generator.`,
    attachmentUrl: "/downloads/VLE_Portal_Changelog_v3.2.pdf",
    attachmentName: "VLE_Portal_Changelog_v3.2.pdf",
  },
];

/**
 * Fetch notifications list from API or fall back to defaultNotifications.
 */
export async function fetchNotificationsFromApi() {
  const apiUrl = import.meta.env.VITE_NOTIFICATIONS_API_URL;
  const apiKey = import.meta.env.VITE_NOTIFICATIONS_API_KEY;

  if (!apiUrl || apiUrl.trim() === "") {
    return { data: defaultNotifications, source: "local" };
  }

  try {
    const headers = { "Content-Type": "application/json" };
    if (apiKey) {
      headers["Authorization"] = `Bearer ${apiKey}`;
    }

    const res = await fetch(apiUrl, { headers });
    if (!res.ok) throw new Error(`API returned ${res.status}`);

    const json = await res.json();
    let rawList = Array.isArray(json) ? json : json.data || json.notifications || [];

    if (rawList.length === 0) {
      return { data: defaultNotifications, source: "local" };
    }

    // Map generic API items (e.g. JSONPlaceholder posts) into Notification objects
    const notifications = rawList.slice(0, 10).map((item, idx) => ({
      id: item.id ? String(item.id) : `api-notif-${idx}`,
      title: item.title ? item.title.charAt(0).toUpperCase() + item.title.slice(1) : `Notification #${idx + 1}`,
      category: item.category || (idx % 2 === 0 ? "Official Circular" : "Service Update"),
      date: item.date || new Date(Date.now() - idx * 86400000 * 2).toISOString().split("T")[0],
      author: item.author || "Egolife Government Affairs Office",
      isUrgent: idx % 3 === 0,
      summary: item.body ? item.body.slice(0, 120) + "..." : "Official notice payload received via live API endpoint.",
      content: item.body
        ? item.body + "\n\nAdditional operational instructions and compliance guidelines issued under public service protocols."
        : "Full notification content fetched from remote API.",
      attachmentUrl: item.attachmentUrl || null,
      attachmentName: item.attachmentName || null,
    }));

    return { data: notifications, source: "api" };
  } catch (err) {
    console.warn("Notifications API call failed, using default notifications:", err);
    return { data: defaultNotifications, source: "local", error: err.message };
  }
}

/**
 * Fetch a single notification by ID (from API or local)
 */
export async function fetchSingleNotification(id) {
  const listRes = await fetchNotificationsFromApi();
  const list = listRes.data || defaultNotifications;

  const found = list.find((n) => String(n.id) === String(id));
  if (found) {
    return { data: found, source: listRes.source };
  }

  // If not found in list, attempt direct API fetch if URL is configured
  const apiUrl = import.meta.env.VITE_NOTIFICATIONS_API_URL;
  if (apiUrl) {
    try {
      const singleUrl = `${apiUrl}/${id}`;
      const res = await fetch(singleUrl);
      if (res.ok) {
        const item = await res.json();
        return {
          data: {
            id: String(item.id || id),
            title: item.title || `Notification #${id}`,
            category: item.category || "Official Circular",
            date: item.date || new Date().toISOString().split("T")[0],
            author: item.author || "Egolife Administration",
            isUrgent: false,
            summary: item.body ? item.body.slice(0, 120) : "Single notification details.",
            content: item.body || "Detailed notice text retrieved from API server.",
          },
          source: "api",
        };
      }
    } catch (e) {
      console.warn("Single notification API fetch failed:", e);
    }
  }

  // Fallback to first default notification if not found
  return { data: defaultNotifications[0], source: "local" };
}
