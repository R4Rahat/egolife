import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Download,
  CheckCircle2,
  Search,
  Globe,
  Database,
  RefreshCw,
  Loader2,
  AlertCircle,
  Clock,
  Package,
} from "lucide-react";
import { useAppStore } from "../store/useAppStore";

export default function Apps() {
  const {
    apps,
    loading,
    error: storeError,
    dataSource,
    fetchApps,
    downloadApp,
  } = useAppStore();

  const [activeTab, setActiveTab] = useState("All"); // Sub-divisions: "All", "Active", "Inactive"
  const [searchQuery, setSearchQuery] = useState("");
  const [downloadingAppId, setDownloadingAppId] = useState(null);

  useEffect(() => {
    fetchApps();
  }, [fetchApps]);

  const handleDownload = async (app) => {
    const appId = app.id || app._id;
    setDownloadingAppId(appId);

    // If fileUrl is local path fallback, trigger direct anchor download
    if (app.fileUrl && (app.fileUrl.startsWith("/") || app.fileUrl.startsWith("http"))) {
      const link = document.createElement("a");
      link.href = app.fileUrl;
      link.download = app.fileUrl.split("/").pop() || `${app.name}.apk`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      await downloadApp(appId);
    }

    setTimeout(() => {
      setDownloadingAppId(null);
    }, 2000);
  };

  // Status Sub-divisions Tabs
  const statusTabs = [
    { id: "All", label: "All Software" },
    { id: "Active", label: "Active Apps" },
    { id: "Inactive", label: "Inactive / Archived" },
  ];

  const filteredApps = apps.filter((app) => {
    const matchesTab =
      activeTab === "All" ||
      (activeTab === "Active" && app.isActive) ||
      (activeTab === "Inactive" && !app.isActive);

    const matchesSearch =
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.version.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";
    try {
      return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      {/* Banner / Hero Header */}
      <div className="bg-gradient-to-r from-[#0B1121] via-[#10182C] to-[#1E293B] text-white py-14 sm:py-18 relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00AEEF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00AEEF]/15 border border-[#00AEEF]/30 text-[#00AEEF] text-xs font-bold uppercase tracking-wider mb-3">
                <Package className="w-3.5 h-3.5 text-[#00AEEF]" />
                <span>OFFICIAL APPLICATION CENTER</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Apps & Software Downloads
              </h1>
              <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl">
                Download official applications and software packages hosted directly on the Egolife backend server.
              </p>
            </div>

            {/* API Status Badge */}
            <div className="shrink-0 flex items-center gap-2 bg-white/5 backdrop-blur-md p-3 rounded-2xl border border-white/10">
              {dataSource === "api" ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                  <Globe className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  Live Apps API
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-700/60 text-slate-300 border border-slate-600">
                  <Database className="w-3.5 h-3.5 text-slate-400" />
                  Local Records
                </span>
              )}

              <button
                onClick={fetchApps}
                disabled={loading}
                title="Refresh Apps API"
                className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer disabled:opacity-50">
                <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin text-[#00AEEF]" : ""}`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 mt-8 sm:mt-10">
        {/* Controls Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-xs border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Status Sub-division Tabs */}
          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto">
            {statusTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-[#00AEEF] text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search apps by name..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00AEEF]/40 focus:bg-white transition-all"
            />
          </div>
        </div>

        {storeError && (
          <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-700 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
            <span>Apps API notice: {storeError}. Showing default packages.</span>
          </div>
        )}

        {/* Applications Grid */}
        {loading ? (
          <div className="mt-12 py-20 text-center bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col items-center justify-center gap-3">
            <Loader2 className="w-8 h-8 text-[#00AEEF] animate-spin" />
            <p className="text-sm font-semibold text-slate-600">Loading applications...</p>
          </div>
        ) : filteredApps.length === 0 ? (
          <div className="mt-8 bg-white rounded-2xl p-12 text-center border border-slate-200">
            <Smartphone className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-700">No Applications Found</h3>
            <p className="text-xs text-slate-500 mt-1">Try changing your search query or status filter.</p>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {filteredApps.map((app, idx) => {
              const appId = app.id || app._id;
              const isDownloading = downloadingAppId === appId;

              return (
                <motion.div
                  key={appId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:shadow-xl hover:border-[#00AEEF]/30 transition-all flex flex-col justify-between group">
                  <div>
                    {/* Header Row: Icon + Name + Version */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3.5">
                        {app.iconUrl ? (
                          <img
                            src={app.iconUrl}
                            alt={app.name}
                            className="w-12 h-12 rounded-2xl object-cover border border-slate-200 shadow-xs shrink-0"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00AEEF] to-sky-700 flex items-center justify-center text-white shrink-0 shadow-md shadow-sky-500/20">
                            <Smartphone className="w-6 h-6" />
                          </div>
                        )}
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-bold text-[#00AEEF]">
                              {app.version}
                            </span>
                            <span className="text-slate-300">•</span>
                            <span className="text-[11px] text-slate-400">
                              {formatDate(app.createdAt)}
                            </span>
                          </div>
                          <h3 className="text-lg sm:text-xl font-extrabold text-[#10182C] group-hover:text-[#00AEEF] transition-colors leading-snug">
                            {app.name}
                          </h3>
                        </div>
                      </div>

                      {app.isActive ? (
                        <span className="shrink-0 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          Active
                        </span>
                      ) : (
                        <span className="shrink-0 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500 border border-slate-200 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" />
                          Inactive
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {app.description}
                    </p>
                  </div>

                  {/* Download Footer */}
                  <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <span className="text-[11px] text-slate-400 font-medium">
                      Official Package
                    </span>

                    <button
                      onClick={() => handleDownload(app)}
                      disabled={isDownloading}
                      className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer ${
                        isDownloading
                          ? "bg-emerald-600 text-white"
                          : "bg-[#00AEEF] hover:bg-[#0092C8] text-white hover:scale-[1.02] active:scale-[0.98]"
                      }`}>
                      {isDownloading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Downloading Package...</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4" />
                          <span>Download App</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
