import { useNavigate } from "react-router-dom";
export default function Unauthorized() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="text-center animate-slide-up">
        <p className="text-6xl mb-4">🚫</p>
        <h1 className="font-display font-bold text-white text-3xl mb-2">Akses Ditolak</h1>
        <p className="text-slate-400 mb-6">Anda tidak memiliki izin untuk mengakses halaman ini.</p>
        <button onClick={() => navigate(-1)} className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-semibold transition-colors">
          Kembali
        </button>
      </div>
    </div>
  );
}
