export const defaultApps = [
  {
    id: "egolife-vle-app",
    name: "Egolife VLE Digital Services App",
    tagline: "Mobile Portal for Village Level Entrepreneurs (200+ Services)",
    platform: "Android APK",
    platformType: "android",
    version: "v3.2.1",
    fileSize: "18.4 MB",
    releaseDate: "2026-09-15",
    downloadUrl: "/downloads/egolife-vle-v3.2.1.apk",
    iconName: "Smartphone",
    badge: "Official Mobile App",
    downloadCount: "15,400+",
    summary:
      "All-in-one digital services application for VLEs, retail outlets, and field partners to deliver utility bill payments, PAN registration, Aadhaar status tracking, and LED lighting distribution.",
    features: [
      "Instant wallet recharge & UPI payment gateway integration.",
      "Biometric finger scanner integration for customer verification.",
      "Real-time transaction history, commission ledgers, and GST receipts.",
      "Offline draft mode for rural locations with low network connectivity.",
    ],
    requirements: "Android 7.0 (Nougat) or higher, 2GB RAM minimum",
  },
  {
    id: "aadhaar-kit-utility",
    name: "Aadhaar Enrolment Hardware Diagnostic Suite",
    tagline: "UIDAI L1 Biometric Iris & Fingerprint Hardware Suite",
    platform: "Windows EXE",
    platformType: "windows",
    version: "v4.1.0",
    fileSize: "64.2 MB",
    releaseDate: "2026-09-01",
    downloadUrl: "/downloads/aadhaar-hardware-suite-v4.1.exe",
    iconName: "Laptop",
    badge: "Government Consortium Tool",
    downloadCount: "4,200+",
    summary:
      "Desktop diagnostic software deployed for operators at Punjab National Bank branches and Gram Panchayat camps to test biometric scanners, GPS dongles, and UIDAI client latency.",
    features: [
      "Automated L0 to L1 biometric scanner driver check & firmware updater.",
      "GPS timestamp verification required for UIDAI center audit compliance.",
      "Daily enrolment count summary generator and secure CSV log exporter.",
    ],
    requirements: "Windows 10 / 11 (64-bit), .NET Framework 4.8+, 2 USB ports",
  },
  {
    id: "ayushman-health-verifier",
    name: "Ayushman Bharat Field Beneficiary Assistant",
    tagline: "Golden Card Verification & Spot Registration Utility",
    platform: "Android APK",
    platformType: "android",
    version: "v2.0.4",
    fileSize: "14.8 MB",
    releaseDate: "2026-08-28",
    downloadUrl: "/downloads/ayushman-verifier-v2.0.apk",
    iconName: "HeartPulse",
    badge: "UTIITSL Health Desk",
    downloadCount: "8,900+",
    summary:
      "Dedicated verification tool for field teams operating across Goalpara, Bongaigaon, Dhubri, Karimganj, Hailakandi, and Cachar to issue Ayushman Golden Cards.",
    features: [
      "Instant Ration Card / NFSA family ID lookup.",
      "Demographic matching and document photo uploader.",
      "Direct sync with National Health Authority verification gateway.",
    ],
    requirements: "Android 8.0 or higher, Camera with autofocus",
  },
  {
    id: "dra-recovery-field-app",
    name: "DRA Debt Recovery Manager Mobile",
    tagline: "IIBF Certified Agent Field Visit Logger & Case Tracker",
    platform: "Android APK",
    platformType: "android",
    version: "v1.8.2",
    fileSize: "12.1 MB",
    releaseDate: "2026-08-10",
    downloadUrl: "/downloads/dra-field-manager-v1.8.apk",
    iconName: "ShieldCheck",
    badge: "Banking Ethical Protocol",
    downloadCount: "2,100+",
    summary:
      "Secured field agent application for certified Debt Recovery Agents (DRA) handling banking NPA resolution with geotagged visit logs and audit compliance.",
    features: [
      "Geotagged field visit check-ins with photo proof & visit notes.",
      "RBI ethical protocol checklist enforcement before initiating customer contact.",
      "Encrypted settlement terms calculator & bank slip upload portal.",
    ],
    requirements: "Android 7.0+, GPS enabled",
  },
  {
    id: "egolife-led-distributor",
    name: "Egolife LED Bulb Inventory & Order Manager",
    tagline: "Commercial & Retail LED Supply Chain Portal",
    platform: "Android APK",
    platformType: "android",
    version: "v2.1.0",
    fileSize: "16.5 MB",
    releaseDate: "2026-07-22",
    downloadUrl: "/downloads/egolife-led-manager-v2.1.apk",
    iconName: "Lightbulb",
    badge: "In-House Brand Suite",
    downloadCount: "5,600+",
    summary:
      "Supply chain and order booking mobile application for Egolife LED lighting product stockists, distributors, and municipal contractors.",
    features: [
      "Direct factory order booking with real-time stock availability.",
      "Warranty registration and QR code batch scanner.",
      "Bulk institutional pricing calculator and GST invoice download.",
    ],
    requirements: "Android 7.0 or higher",
  },
];

/**
 * Fetch downloadable apps list from API endpoint or fall back to defaultApps.
 */
export async function fetchAppsFromApi() {
  const apiUrl = import.meta.env.VITE_APPS_API_URL;
  const apiKey = import.meta.env.VITE_APPS_API_KEY;

  if (!apiUrl || apiUrl.trim() === "") {
    return { data: defaultApps, source: "local" };
  }

  try {
    const headers = { "Content-Type": "application/json" };
    if (apiKey) {
      headers["Authorization"] = `Bearer ${apiKey}`;
    }

    const res = await fetch(apiUrl, { headers });
    if (!res.ok) throw new Error(`API returned ${res.status}`);

    const json = await res.json();
    let rawList = Array.isArray(json) ? json : json.data || json.apps || [];

    if (rawList.length === 0) {
      return { data: defaultApps, source: "local" };
    }

    const apps = rawList.map((item, idx) => ({
      id: item.id ? String(item.id) : `api-app-${idx}`,
      name: item.name || item.title || `Egolife App ${idx + 1}`,
      tagline: item.tagline || item.subtitle || "Official Mobile & Desktop Portal",
      platform: item.platform || (idx % 2 === 0 ? "Android APK" : "Windows EXE"),
      platformType: item.platformType || (idx % 2 === 0 ? "android" : "windows"),
      version: item.version || `v${idx + 1}.0.0`,
      fileSize: item.fileSize || "15 MB",
      releaseDate: item.releaseDate || new Date().toISOString().split("T")[0],
      downloadUrl: item.downloadUrl || `/downloads/app-${idx + 1}.apk`,
      iconName: item.iconName || (idx % 2 === 0 ? "Smartphone" : "Laptop"),
      badge: item.badge || "Live Backend App",
      downloadCount: item.downloadCount || "1,000+",
      summary: item.summary || item.description || "Official backend-hosted mobile app download.",
      features: Array.isArray(item.features)
        ? item.features
        : ["Hosted on secure Egolife backend server.", "Certified malware-free build.", "Automatic update support."],
      requirements: item.requirements || "Android 7.0+ or Windows 10+",
    }));

    return { data: apps, source: "api" };
  } catch (err) {
    console.warn("Apps API call failed, using default apps:", err);
    return { data: defaultApps, source: "local", error: err.message };
  }
}
