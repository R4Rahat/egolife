import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Download,
  Share2,
  Bell,
  CheckCircle2,
  Loader2,
  AlertTriangle,
  Globe,
  Database,
  Clock,
} from "lucide-react";
import { useNotificationStore } from "../store/useNotificationStore";

export default function NotificationDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    currentNotification: notification,
    loading,
    error,
    dataSource,
    fetchNotificationById,
    downloadNotification,
  } = useNotificationStore();

  useEffect(() => {
    if (id) {
      fetchNotificationById(id);
    }
  }, [id, fetchNotificationById]);

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

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] py-24 flex flex-col items-center justify-center">
        <Loader2 className="w-10 h-10 text-[#00AEEF] animate-spin mb-3" />
        <p className="text-slate-600 font-semibold text-sm">Loading Notification Details...</p>
      </div>
    );
  }

  if (error || !notification) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] py-24 flex flex-col items-center justify-center text-center px-4">
        <AlertTriangle className="w-12 h-12 text-amber-500 mb-3" />
        <h2 className="text-xl font-bold text-slate-800">Notification Not Found</h2>
        <p className="text-slate-500 text-sm mt-1 max-w-md">
          The requested notification could not be retrieved from the server.
        </p>
        <Link
          to="/notifications"
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00AEEF] text-white text-xs font-bold hover:bg-[#0092C8] transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Notifications</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-24">
      {/* Header Navigation */}
      <div className="bg-[#0B1121] text-white py-10 border-b border-slate-800">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between gap-4 mb-4">
            <button
              onClick={() => navigate("/notifications")}
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-[#00AEEF] transition-colors cursor-pointer">
              <ArrowLeft className="w-4 h-4" />
              <span>All Notifications</span>
            </button>

            {dataSource === "api" ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                Live Single Notice API
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                <Database className="w-3.5 h-3.5 text-slate-400" />
                Local Record
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 mb-3">
            {notification.isActive ? (
              <span className="px-3 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-extrabold uppercase border border-emerald-400/40">
                Active Notice
              </span>
            ) : (
              <span className="px-3 py-0.5 rounded-full bg-slate-800 text-slate-400 text-[11px] font-extrabold uppercase border border-slate-700">
                Inactive / Archived
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
            {notification.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400 pt-4 border-t border-slate-800">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#00AEEF]" />
              Date: {formatDate(notification.createdAt)}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 mt-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs">
          
          {/* Description Box */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-[#00AEEF] mb-2">
              Notice Description
            </p>
            <p className="text-sm sm:text-base text-slate-800 font-normal leading-relaxed whitespace-pre-line">
              {notification.description}
            </p>
          </div>

          {/* Verification Badge */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-500 bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>
              This is an official notice issued under standard administration guidelines.
            </span>
          </div>

          {/* Action Bar / PDF Download */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            {notification.fileUrl ? (
              <button
                onClick={() => downloadNotification(notification.id || notification._id)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer">
                <Download className="w-4 h-4" />
                <span>Download Attached PDF</span>
              </button>
            ) : (
              <span className="text-xs text-slate-400">No attached file for this notification.</span>
            )}

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href);
                  alert("Notification URL copied to clipboard!");
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer">
                <Share2 className="w-4 h-4" />
                <span>Share Notice</span>
              </button>

              <Link
                to="/notifications"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#00AEEF] hover:bg-[#0092C8] text-white text-xs font-bold transition-colors">
                <Bell className="w-4 h-4" />
                <span>All Notifications</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
