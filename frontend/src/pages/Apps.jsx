import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Laptop,
  Download,
  CheckCircle2,
  Search,
  ShieldCheck,
  Globe,
  Database,
  RefreshCw,
  Loader2,
  AlertCircle,
  FileCode2,
  Terminal,
  Server,
  ArrowRight,
} from "lucide-react";
import { fetchAppsFromApi, defaultApps } from "../data/appsData";

export default function Apps() {
  const [appsList, setAppsList] = useState(defaultApps);
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState("local");
  const [platformFilter, setPlatformFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [downloadingAppId, setDownloadingAppId] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const loadApps = async () => {
    setLoading(true);
    setErrorMsg(null);
    try {
      const res = await fetchAppsFromApi();
      setAppsList(res.data && res.data.length > 0 ? res.data : defaultApps);
      setDataSource(res.source || "local");
      if (res.error) setErrorMsg(res.error);
    } catch (err) {
      console.error("Failed to load apps:", err);
      setAppsList(defaultApps);
      setDataSource("local");
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadApps();
  }, []);

  const handleDownload = (app) => {
    setDownloadingAppId(app.id);
    
    // Trigger download link
    const link = document.createElement("a");
    link.href = app.downloadUrl;
    link.download = app.downloadUrl.split("/").pop() || `${app.id}.apk`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloadingAppId(null);
    }, 2000);
  };

  const filteredApps = appsList.filter((app) => {
    const matchesPlatform =
      platformFilter === "all" ||
      (platformFilter === "android" && app.platformType === "android") ||
      (platformFilter === "windows" && app.platformType === "windows");

    const matchesSearch =
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.summary.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesPlatform && matchesSearch;
  });

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#0B1121] via-[#10182C] to-[#1E293B] text-white py-14 sm:py-18 relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00AEEF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00AEEF]/15 border border-[#00AEEF]/30 text-[#00AEEF] text-xs font-bold uppercase tracking-wider mb-3">
                <Server className="w-3.5 h-3.5 text-[#00AEEF]" />
                <span>BACKEND-HOSTED APPLICATION CENTER</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Apps & Software Downloads
              </h1>
              <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl">
                Download official mobile APKs and desktop applications hosted directly on the Egolife backend server for VLE entrepreneurs, enrolment operators, and field agents.
              </p>
            </div>

            {/* API Status Badge */}
            <div className="shrink-0 flex items-center gap-2 bg-white/5 backdrop-blur-md p-3 rounded-2xl border border-white/10">
              {dataSource === "api" ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                  <Globe className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  Live Apps API (.env)
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-700/60 text-slate-300 border border-slate-600">
                  <Database className="w-3.5 h-3.5 text-slate-400" />
                  Backend Hosted Apps
                </span>
              )}

              <button
                onClick={loadApps}
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
          {/* Platform Tabs */}
          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto">
            {[
              { id: "all", label: "All Software", icon: FileCode2 },
              { id: "android", label: "Android Apps (.APK)", icon: Smartphone },
              { id: "windows", label: "Windows Suites (.EXE)", icon: Laptop },
            ].map((tab) => {
              const IconComp = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setPlatformFilter(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    platformFilter === tab.id
                      ? "bg-[#00AEEF] text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}>
                  <IconComp className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
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

        {errorMsg && (
          <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-700 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
            <span>Backend Apps API notice: {errorMsg}. Displaying default hosted packages.</span>
          </div>
        )}

        {/* Applications Grid */}
        {loading ? (
          <div className="mt-12 py-20 text-center bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col items-center justify-center gap-3">
            <Loader2 className="w-8 h-8 text-[#00AEEF] animate-spin" />
            <p className="text-sm font-semibold text-slate-600">Loading downloadable applications...</p>
          </div>
        ) : filteredApps.length === 0 ? (
          <div className="mt-8 bg-white rounded-2xl p-12 text-center border border-slate-200">
            <Smartphone className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-700">No Applications Found</h3>
            <p className="text-xs text-slate-500 mt-1">Try changing your search terms or platform filter.</p>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {filteredApps.map((app, idx) => {
              const isAndroid = app.platformType === "android";
              const isDownloading = downloadingAppId === app.id;

              return (
                <motion.div
                  key={app.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:shadow-xl hover:border-[#00AEEF]/30 transition-all flex flex-col justify-between group">
                  <div>
                    {/* Header Row: Platform Icon + Badge */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3.5">
                        <div
                          className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-md ${
                            isAndroid
                              ? "bg-gradient-to-br from-emerald-500 to-teal-600 shadow-emerald-500/20"
                              : "bg-gradient-to-br from-blue-600 to-indigo-700 shadow-blue-500/20"
                          }`}>
                          {isAndroid ? <Smartphone className="w-6 h-6" /> : <Laptop className="w-6 h-6" />}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#00AEEF]">
                              {app.platform}
                            </span>
                            <span className="text-slate-300">•</span>
                            <span className="text-[11px] font-bold text-slate-500">{app.version}</span>
                          </div>
                          <h3 className="text-lg sm:text-xl font-extrabold text-[#10182C] group-hover:text-[#00AEEF] transition-colors leading-snug">
                            {app.name}
                          </h3>
                        </div>
                      </div>

                      {app.badge && (
                        <span className="shrink-0 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
                          {app.badge}
                        </span>
                      )}
                    </div>

                    {/* Tagline */}
                    <p className="mt-3 text-xs sm:text-sm font-semibold text-[#F58220]">
                      {app.tagline}
                    </p>

                    {/* Meta info strip */}
                    <div className="mt-3.5 inline-flex flex-wrap items-center gap-3 px-3 py-1.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs text-slate-500">
                      <span>Size: <strong className="text-slate-700">{app.fileSize}</strong></span>
                      <span>•</span>
                      <span>Released: <strong className="text-slate-700">{app.releaseDate}</strong></span>
                      <span>•</span>
                      <span>Downloads: <strong className="text-emerald-600 font-bold">{app.downloadCount}</strong></span>
                    </div>

                    {/* Summary */}
                    <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {app.summary}
                    </p>

                    {/* Key Features */}
                    {app.features && app.features.length > 0 && (
                      <div className="mt-5 pt-4 border-t border-slate-100">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                          Key Capabilities:
                        </p>
                        <ul className="space-y-2">
                          {app.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Requirements & Download Footer */}
                  <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="text-[11px] text-slate-500">
                      <span className="font-semibold text-slate-700">System Req:</span> {app.requirements}
                    </div>

                    <button
                      onClick={() => handleDownload(app)}
                      disabled={isDownloading}
                      className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer ${
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
                          <span>Download App ({app.fileSize})</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Bottom Hosted Note */}
        <div className="mt-14 bg-gradient-to-r from-slate-900 to-[#1E293B] text-white rounded-3xl p-8 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Need Custom Enterprise Builds or Support?</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                All binaries are hosted on Egolife secure servers, digitally signed, and scanned for compliance. For custom VLE integration assistance, reach out to our IT team.
              </p>
            </div>
          </div>

          <a
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00AEEF] hover:bg-[#0092C8] text-white text-xs font-bold transition-colors shadow-md">
            <span>Contact IT Support</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
