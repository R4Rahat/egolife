import {
  Fingerprint,
  HeartPulse,
  Landmark,
  Shirt,
  Lightbulb,
  ShoppingBag,
  Laptop,
  Building,
  ShieldCheck,
} from "lucide-react";

export const defaultCategories = [
  "All Services",
  "Aadhaar & Citizen ID",
  "Healthcare & PAN (UTI)",
  "Banking & DRA Recovery",
  "Govt Supply & Uniforms",
  "Manufacturing & E-Commerce",
  "IT Consulting & Tax",
];

export const defaultServices = [
  {
    id: "aadhaar-enrolment",
    category: "Aadhaar & Citizen ID",
    title: "Aadhaar Enrolment Manpower & Kit Deployment",
    partner: "Government Authorized Agency",
    icon: Fingerprint,
    color: "from-blue-600 to-indigo-700",
    badge: "Official Enrolment Consortium",
    districts: ["Baksa", "Udalguri", "Tamulpur", "Barpeta", "Goalpara", "Nalbari"],
    summary:
      "Turnkey vendor of certified manpower and biometric kits for Aadhaar generation under Deputy Commissioners and District Commissioners of India.",
    points: [
      "Operating in consortium with BNK Capital Markets Ltd (Government Authorized Agency).",
      "Empanelled under Deputy Commissioners of Baksa, Udalguri, Tamulpur, Barpeta, Goalpara, and District Commissioner Nalbari.",
      "Complete deployment of certified operators, biometric Iris scanners, slap fingerprint scanners, and GPS-enabled laptops.",
      "Execution of Aadhaar generation camps at Gram Panchayats, government schools, and block administration centers.",
    ],
  },
  {
    id: "alankit-aadhaar",
    category: "Aadhaar & Citizen ID",
    title: "Labour-Welfare Aadhaar Enrolment Centers",
    partner: "Alankit Limited | Labour-Welfare Dept",
    icon: ShieldCheck,
    color: "from-indigo-600 to-blue-600",
    badge: "India Labour Welfare",
    districts: ["Statewide India Districts"],
    summary:
      "Authorized vendor of Alankit Limited operating dedicated Aadhaar Enrolment Centers for workers and citizens under the Labour-Welfare Department of India.",
    points: [
      "Setup and management of specialized enrolment desks in designated labor welfare zones.",
      "Fast-track documentation, mobile/biometric updates, and mandatory biometrics for youth and unorganized workers.",
      "Dedicated helpdesk ensuring last-mile compliance with welfare scheme entitlements.",
    ],
  },
  {
    id: "pnb-enrolment",
    category: "Aadhaar & Citizen ID",
    title: "Punjab National Bank Enrolment & Kit Supply",
    partner: "Punjab National Bank | BNK Capital",
    icon: Building,
    color: "from-sky-600 to-blue-700",
    badge: "Banking Branch Operations",
    districts: ["Various PNB Branches Across India"],
    summary:
      "Appointed by BNK Capital Markets Ltd as the manpower and hardware kit supplier across Punjab National Bank branches throughout India.",
    points: [
      "Stationing certified banking enrolment operators inside Punjab National Bank branches.",
      "Supplying UIDAI-certified hardware kits, verification printers, and secure network infrastructure.",
      "Enabling bank customers and local citizens to complete Aadhaar linking, KYC updation, and new enrolments smoothly.",
    ],
  },
  {
    id: "ab-pmjay-ayushman",
    category: "Healthcare & PAN (UTI)",
    title: "AB-PMJAY Ayushman Bharat Health Project",
    partner: "UTIITSL (Govt of India Undertaking)",
    icon: HeartPulse,
    color: "from-emerald-600 to-teal-700",
    badge: "National Health Mission",
    districts: ["Goalpara", "Bongaigaon", "Dhubri", "Karimganj", "Hailakandi", "Cachar"],
    summary:
      "Official vendor under UTI Infrastructure Technology and Services Limited (UTIITSL) for implementing Ayushman Bharat (AB-PMJAY) health cards across 6 key India districts.",
    points: [
      "Field mobilization and beneficiary verification across Goalpara, Bongaigaon, Dhubri, Karimganj, Hailakandi, and Cachar.",
      "Issuance of Ayushman Golden Cards providing cashless health cover up to ₹5 Lakh per family per year.",
      "Gram Panchayat-level camp organization in collaboration with district health authorities and local administration.",
    ],
  },
  {
    id: "pan-card-agency",
    category: "Healthcare & PAN (UTI)",
    title: "PAN Card Agency (All India Basis)",
    partner: "UTI Infrastructure Technology & Services Ltd",
    icon: ShieldCheck,
    color: "from-teal-600 to-emerald-700",
    badge: "All-India Franchise",
    districts: ["All India Network"],
    summary:
      "Working as an authorized PAN Card service vendor on an All-India basis under UTIITSL for new PAN allocations, reprints, and corrections.",
    points: [
      "Processing new PAN applications for individuals, HUFs, companies, and trusts across India.",
      "Digital verification, document verification, biometric-enabled instant e-PAN generation.",
      "Correction of demographic details and seamless PAN-Aadhaar linking facilitation.",
    ],
  },
  {
    id: "dra-recovery-banking",
    category: "Banking & DRA Recovery",
    title: "DRA Certified Banking Debt Recovery Services",
    partner: "Scheduled Banks & NBFCs",
    icon: Landmark,
    color: "from-amber-500 to-orange-600",
    badge: "IIBF / DRA Certified Team",
    districts: ["India & Pan India Region"],
    summary:
      "Professional team of certified Debt Recovery Agents (DRA) adhering strictly to RBI ethical guidelines for non-performing asset (NPA) resolution.",
    points: [
      "Specialized handling of Personal Loans (PL), Credit Card outstandings (CC), and Business Loans.",
      "Certified DRA personnel trained in amicable negotiation, legal escalation, and compliance protocols.",
      "Comprehensive skip tracing, structured field visits, and audit-ready collection reporting for banking institutions.",
    ],
  },
  {
    id: "school-uniform-supply",
    category: "Govt Supply & Uniforms",
    title: "Government School Uniform Supply",
    partner: "Department of School Education, India",
    icon: Shirt,
    color: "from-orange-500 to-red-600",
    badge: "State Public Procurement",
    districts: ["Multiple Districts of India"],
    summary:
      "Large-scale manufacturing, tailoring, packaging, and direct distribution of quality school uniforms for government and provincialized schools.",
    points: [
      "Proven execution track record delivering institutional school uniforms across multiple districts of India.",
      "Standardized sizing, high-durability fabrics complying with departmental textile specifications.",
      "End-to-end logistics from regional manufacturing units straight to block educational offices and schools.",
    ],
  },
  {
    id: "it-accessories-govt-supply",
    category: "Govt Supply & Uniforms",
    title: "IT Accessories, Govt Supply & Construction",
    partner: "Public Works & State Nodal Departments",
    icon: Building,
    color: "from-indigo-600 to-slate-700",
    badge: "Hardware & Civil Projects",
    districts: ["Statewide Deployments"],
    summary:
      "Provisioning of IT hardware, office automation accessories, institutional supplies, and government civil/construction works.",
    points: [
      "Procurement and supply of institutional computers, biometric scanners, webcams, printers, and networking gear.",
      "Execution of institutional civil construction and infrastructure renovation projects for state premises.",
      "Strict compliance with government tender specifications and quality certifications.",
    ],
  },
  {
    id: "egolife-led-manufacturing",
    category: "Manufacturing & E-Commerce",
    title: "Egolife LED Bulb Manufacturing",
    partner: "Proprietary Brand: 'Egolife LED'",
    icon: Lightbulb,
    color: "from-amber-600 to-yellow-600",
    badge: "In-House Manufacturing",
    districts: ["All India & West Bengal"],
    summary:
      "Indigenous manufacturing and distribution of premium, energy-efficient LED lighting products under our registered brand 'Egolife LED'.",
    points: [
      "Manufactured with surge protection and high lumen-per-watt efficiency for rural and urban grids.",
      "Supplying commercial, institutional, municipal, and household lighting requirements.",
      "Rigorous quality assurance, extended warranty, and eco-friendly manufacturing processes.",
    ],
  },
  {
    id: "ecommerce-services",
    category: "Manufacturing & E-Commerce",
    title: "Egolife E-Commerce Partner (200+ Services)",
    partner: "Egolife E-Commerce Ltd",
    icon: ShoppingBag,
    color: "from-purple-600 to-indigo-700",
    badge: "200+ Digital Services",
    districts: ["All India & West Bengal"],
    summary:
      "Strategic partner of Egolife E-Commerce Ltd, delivering a comprehensive portfolio of over 200 consumer, commercial, and utility services.",
    points: [
      "Regional distribution network spanning all eight Pan Indiaern states and West Bengal.",
      "Digital payment gateways, utility bill collections, ticketing, and consumer goods distribution.",
      "Empowering local village-level entrepreneurs (VLEs) and retail outlets with high-margin digital services.",
    ],
  },
  {
    id: "it-consulting-training",
    category: "IT Consulting & Tax",
    title: "IT Consulting, System Deployment & Training",
    partner: "Corporate Houses & Government Bodies",
    icon: Laptop,
    color: "from-blue-600 to-cyan-700",
    badge: "11 years Industry Experience",
    districts: ["Corporate & Institutional Clients"],
    summary:
      "With 11 years of deep IT industry experience, our specialist team provides end-to-end consulting, system architecture deployment, and capacity building.",
    points: [
      "Consulting on digital transformation, enterprise software adoption, and administrative portal modernization.",
      "On-site deployment of secure databases, LAN/WAN architectures, and cloud-hosted portals.",
      "Comprehensive training for departmental officers, field executives, and administrative staff.",
    ],
  },
  {
    id: "tax-consultancy",
    category: "IT Consulting & Tax",
    title: "Tax Consultancy & Financial Compliance",
    partner: "Commercial & Business Enterprises",
    icon: ShieldCheck,
    color: "from-slate-700 to-zinc-800",
    badge: "Taxation & Legal Filings",
    districts: ["Pan India Business Sector"],
    summary:
      "Professional tax advisory, GST compliance, income tax e-filing, and regulatory auditing assistance for enterprises and contractors.",
    points: [
      "GST registration, monthly return filings, audit preparations, and input tax credit reconciliations.",
      "Direct tax consultancy, TDS filings, and corporate annual compliance documentation.",
      "Advisory on government tender financial eligibility, balance sheet optimization, and MSME benefits.",
    ],
  },
];

/**
 * Helper to fetch services from an API secured via .env environment variables.
 * - If VITE_SERVICES_API_URL is configured, fetches live data from the API endpoint.
 * - If no API is called / configured, or if the API request fails, smoothly falls back to defaultServices.
 */
export async function fetchServicesFromApi() {
  const apiUrl = import.meta.env.VITE_SERVICES_API_URL;
  const apiKey = import.meta.env.VITE_SERVICES_API_KEY;

  if (!apiUrl || apiUrl.trim() === "") {
    return { data: defaultServices, source: "local" };
  }

  try {
    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json",
    };

    if (apiKey) {
      headers["Authorization"] = `Bearer ${apiKey}`;
      headers["X-API-Key"] = apiKey;
    }

    const response = await fetch(apiUrl, { headers });
    if (!response.ok) {
      throw new Error(`API returned HTTP status ${response.status}`);
    }

    const json = await response.json();

    // Support various API payload formats (array directly, or { data: [...] }, or { services: [...] })
    let rawList = null;
    if (Array.isArray(json)) {
      rawList = json;
    } else if (json && Array.isArray(json.data)) {
      rawList = json.data;
    } else if (json && Array.isArray(json.services)) {
      rawList = json.services;
    }

    // If API returned generic items (like JSONPlaceholder posts/todos), transform them
    if (rawList && rawList.length > 0) {
      const isGenericApi = rawList.some((item) => item.userId !== undefined || (item.body && !item.category));
      
      if (isGenericApi) {
        const transformed = transformGenericApiData(rawList);
        return { data: transformed, source: "api", rawCount: rawList.length };
      }

      // Map structured API service items
      const mappedServices = rawList.map((item, index) => ({
        id: item.id ? String(item.id) : `api-service-${index}`,
        category: item.category || item.department || "API Services",
        title: item.title || item.name || item.serviceName || `Service #${index + 1}`,
        partner: item.partner || item.authority || item.provider || "Government / Corporate Partner",
        icon: item.icon || "ShieldCheck",
        badge: item.badge || item.status || "API Verified",
        districts: Array.isArray(item.districts)
          ? item.districts
          : typeof item.districts === "string"
          ? item.districts.split(",").map((d) => d.trim())
          : ["Pan India Operations"],
        summary: item.summary || item.description || item.body || "Detailed service specification loaded via API.",
        points: Array.isArray(item.points)
          ? item.points
          : Array.isArray(item.features)
          ? item.features
          : [item.body || "End-to-end management & turnkey execution.", "Real-time compliance monitoring & verification."],
      }));

      return { data: mappedServices, source: "api", rawCount: rawList.length };
    }

    // Fallback if payload empty
    return { data: defaultServices, source: "local" };
  } catch (error) {
    console.warn("Service API call failed or unconfigured, falling back to default services:", error);
    return { data: defaultServices, source: "local", error: error.message };
  }
}

/**
 * Helper to adapt generic mock APIs (like jsonplaceholder, dummyjson, reqres) into services format
 */
function transformGenericApiData(items) {
  const sampleCategories = [
    "Aadhaar & Citizen ID",
    "Healthcare & PAN (UTI)",
    "Banking & DRA Recovery",
    "Govt Supply & Uniforms",
    "Manufacturing & E-Commerce",
    "IT Consulting & Tax",
  ];

  const sampleIcons = ["Fingerprint", "HeartPulse", "Landmark", "Shirt", "Lightbulb", "ShoppingBag", "Laptop", "ShieldCheck", "Building"];

  return items.slice(0, 10).map((item, idx) => {
    const catIndex = idx % sampleCategories.length;
    const category = sampleCategories[catIndex];
    const icon = sampleIcons[idx % sampleIcons.length];

    return {
      id: `api-${item.id || idx}`,
      category: category,
      title: item.title
        ? item.title.charAt(0).toUpperCase() + item.title.slice(1, 55)
        : `API Service ${idx + 1}`,
      partner: `API Source: Endpoint #${item.userId || item.id || idx + 1}`,
      icon: icon,
      badge: "Live API Data",
      districts: ["All India Network", `District Zone ${idx + 1}`],
      summary: item.body || "This service data was dynamically retrieved from the external API specified in your .env configuration file.",
      points: [
        `API Record ID: ${item.id || idx + 1}`,
        "Real-time synchronized data payload from remote API endpoint.",
        "Secured using env token VITE_SERVICES_API_KEY.",
      ],
    };
  });
}
