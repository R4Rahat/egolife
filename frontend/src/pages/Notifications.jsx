import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bell,
  Search,
  Calendar,
  FileText,
  Download,
  Globe,
  Database,
  RefreshCw,
  Loader2,
  AlertTriangle,
  X,
  ChevronRight,
  Share2,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { useNotificationStore } from "../store/useNotificationStore";

export default function Notifications() {
  const {
    notifications,
    loading,
    error: storeError,
    dataSource,
    fetchNotifications,
    downloadNotification,
  } = useNotificationStore();

  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All"); // Sub-divisions: "All", "Active", "Inactive"
  const [selectedNotification, setSelectedNotification] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  // Status Sub-divisions
  const statusTabs = [
    { id: "All", label: "All Notices" },
    { id: "Active", label: "Active Notices" },
    { id: "Inactive", label: "Inactive / Archived" },
  ];

  // Filtering based on sub-division status tab & search query
  const filteredNotifications = notifications.filter((item) => {
    const matchesTab =
      activeTab === "All" ||
      (activeTab === "Active" && item.isActive) ||
      (activeTab === "Inactive" && !item.isActive);

    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

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
      {/* Banner / Hero */}
      <div className="bg-gradient-to-r from-[#0B1121] via-[#10182C] to-[#1E293B] text-white py-14 sm:py-18 relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00AEEF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00AEEF]/15 border border-[#00AEEF]/30 text-[#00AEEF] text-xs font-bold uppercase tracking-wider mb-3">
                <Bell className="w-3.5 h-3.5 animate-bounce" />
                <span>OFFICIAL NOTIFICATIONS & ANNOUNCEMENTS</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Notifications
              </h1>
              <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl">
                Stay updated with official circulars, announcements, and public notices.
              </p>
            </div>

            {/* API Status Badge */}
            <div className="shrink-0 flex items-center gap-2 bg-white/5 backdrop-blur-md p-3 rounded-2xl border border-white/10">
              {dataSource === "api" ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                  <Globe className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  Live Backend API
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-700/60 text-slate-300 border border-slate-600">
                  <Database className="w-3.5 h-3.5 text-slate-400" />
                  Local Notifications
                </span>
              )}

              <button
                onClick={fetchNotifications}
                disabled={loading}
                title="Refresh Notifications"
                className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer disabled:opacity-50">
                <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin text-[#00AEEF]" : ""}`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 mt-8 sm:mt-10">
        {/* Controls: Search and Sub-divisions */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-xs border border-slate-200 flex flex-col gap-5">
          {/* Search Bar & Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search notifications by title or description..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00AEEF]/40 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="text-xs sm:text-sm font-medium text-slate-500 self-end sm:self-center">
              Showing <span className="font-bold text-[#10182C]">{filteredNotifications.length}</span> of {notifications.length} notices
            </div>
          </div>

          {/* Sub-division Status Tabs */}
          <div className="flex items-center gap-2 border-t border-slate-100 pt-4">
            {statusTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#00AEEF] text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {storeError && (
          <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-700 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 shrink-0 text-amber-500" />
            <span>Notice: API notice ({storeError}). Showing default notifications.</span>
          </div>
        )}

        {/* Notifications Grid / List */}
        {loading ? (
          <div className="mt-12 py-20 text-center bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col items-center justify-center gap-3">
            <Loader2 className="w-8 h-8 text-[#00AEEF] animate-spin" />
            <p className="text-sm font-semibold text-slate-600">Fetching notifications...</p>
          </div>
        ) : filteredNotifications.length === 0 ? (
          <div className="mt-8 bg-white rounded-2xl p-12 text-center border border-slate-200">
            <Bell className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-700">No Notifications Found</h3>
            <p className="text-xs text-slate-500 mt-1">Try resetting search query or sub-division filter.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveTab("All");
              }}
              className="mt-4 px-4 py-2 bg-[#00AEEF] text-white text-xs font-bold rounded-xl hover:bg-[#0092C8] transition-colors cursor-pointer">
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="mt-8 space-y-4">
            {filteredNotifications.map((notif, idx) => (
              <motion.div
                key={notif.id || notif._id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-[#00AEEF]/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-5 group">
                
                {/* Left Info */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2.5">
                    {notif.isActive ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-extrabold uppercase border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        Active Notice
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase border border-slate-200">
                        <Clock className="w-3 h-3 text-slate-400" />
                        Inactive / Archived
                      </span>
                    )}

                    <span className="text-slate-400 text-xs flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(notif.createdAt)}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => setSelectedNotification(notif)}
                    className="text-base sm:text-lg font-bold text-[#10182C] group-hover:text-[#00AEEF] transition-colors cursor-pointer leading-snug">
                    {notif.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {notif.description}
                  </p>
                </div>

                {/* Right Action Buttons */}
                <div className="flex items-center gap-2 self-start md:self-center shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-slate-100 w-full md:w-auto justify-between md:justify-end">
                  <button
                    onClick={() => navigate(`/notifications/${notif.id || notif._id}`)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-[#00AEEF] text-slate-700 hover:text-white text-xs font-bold transition-all cursor-pointer">
                    <span>View Notice</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setSelectedNotification(notif)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#00AEEF]/10 hover:bg-[#00AEEF] text-[#00AEEF] hover:text-white text-xs font-bold transition-all cursor-pointer">
                    <FileText className="w-4 h-4" />
                    <span>Quick Preview</span>
                  </button>

                  {notif.fileUrl && (
                    <button
                      onClick={() => downloadNotification(notif.id || notif._id)}
                      title="Download Attached PDF Document"
                      className="p-2.5 rounded-xl bg-slate-100 hover:bg-emerald-600 text-slate-600 hover:text-white transition-all cursor-pointer">
                      <Download className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Notification Preview Modal */}
      <AnimatePresence>
        {selectedNotification && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedNotification(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer">
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="pr-8">
                <div className="flex items-center gap-2 mb-3">
                  {selectedNotification.isActive ? (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold uppercase">
                      Active
                    </span>
                  ) : (
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-extrabold uppercase">
                      Inactive
                    </span>
                  )}
                  <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(selectedNotification.createdAt)}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-extrabold text-[#10182C] leading-snug">
                  {selectedNotification.title}
                </h2>
              </div>

              {/* Description Content */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Notice Description</p>
                <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200/80 text-xs sm:text-sm text-slate-800 leading-relaxed font-normal whitespace-pre-line">
                  {selectedNotification.description}
                </div>
              </div>

              {/* Action Footer */}
              <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                {selectedNotification.fileUrl ? (
                  <button
                    onClick={() => downloadNotification(selectedNotification.id || selectedNotification._id)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs cursor-pointer">
                    <Download className="w-4 h-4" />
                    <span>Download PDF File</span>
                  </button>
                ) : (
                  <span className="text-xs text-slate-400 font-medium">No PDF document attached.</span>
                )}

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  <button
                    onClick={() => {
                      navigator.clipboard?.writeText(window.location.href);
                      alert("Notice URL copied to clipboard!");
                    }}
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold transition-colors cursor-pointer"
                    title="Share Notice">
                    <Share2 className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => {
                      const id = selectedNotification.id || selectedNotification._id;
                      setSelectedNotification(null);
                      navigate(`/notifications/${id}`);
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#00AEEF] hover:bg-[#0092C8] text-white text-xs font-bold transition-colors cursor-pointer">
                    <span>Full Details Page</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
