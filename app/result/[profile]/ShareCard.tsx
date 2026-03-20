"use client";

import { type Profile, type ProfileKey } from "@/lib/quiz-data";
import { RESULT_T, PROFILE_NAMES, PROFILES_I18N, t } from "@/lib/i18n";
import { useLang } from "@/components/LangProvider";

interface Props {
  profile: Profile;
  profileKey: ProfileKey;
}

export default function ShareCard({ profile, profileKey }: Props) {
  const { lang } = useLang();
  const profileName = PROFILE_NAMES[profileKey]?.[lang] ?? profile.name;
  const pi18n = PROFILES_I18N[profileKey];
  const tagline = pi18n?.tagline[lang] ?? profile.tagline;
  const traits = pi18n?.traits[lang] ?? profile.traits;

  const handleCopy = () => {
    const text = `${profileName} ${profile.emoji}\n"${tagline}"\n\n${traits.join(" · ")}\n\n${t(RESULT_T.are_you_built, lang)}\noneco.app`;
    navigator.clipboard.writeText(text).catch(() => {});
  };

  const handleSavePhoto = () => {
    const card = document.getElementById('oneco-share-card');
    if (!card) return;
    // Use html2canvas if available, else instruct user to screenshot
    alert('📸 Screenshot this card to save & share!');
  };

  const shareToInstagram = () => {
    // Instagram doesn't support direct web share — copy + open
    handleCopy();
    window.open('https://www.instagram.com/', '_blank');
  };

  const shareToXHS = () => {
    handleCopy();
    window.open('https://www.xiaohongshu.com/', '_blank');
  };

  const shareToX = () => {
    const text = encodeURIComponent(`I'm ${profileName} ${profile.emoji} — "${tagline}" oneco.app`);
    window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-3">
      <h3 className="text-white font-semibold text-sm">{t(RESULT_T.share_title, lang)}</h3>

      {/* Screenshot-worthy card */}
      <div id="oneco-share-card" className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-700 via-violet-800 to-indigo-900 p-6 shadow-xl shadow-violet-900/30">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 right-4 w-40 h-40 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-4 left-4 w-32 h-32 bg-indigo-300 rounded-full blur-2xl" />
        </div>

        <div className="relative z-10">
          {/* Profile */}
          <div className="text-center mb-5">
            <div className="text-5xl mb-2">{profile.emoji}</div>
            <h4 className="text-2xl font-bold text-white">{profileName}</h4>
            <p className="text-violet-200 text-sm mt-1">{tagline}</p>
          </div>

          {/* Traits */}
          <div className="space-y-2 mb-5">
            {traits.map((trait, i) => (
              <div key={i} className="flex items-center gap-2 text-white/90 text-sm">
                <span className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center text-xs">✓</span>
                <span>{trait}</span>
              </div>
            ))}
          </div>

          {/* Branding */}
          <div className="border-t border-white/20 pt-3 flex items-center justify-between">
            <span className="text-white/60 text-xs font-medium">OneCo · oneco.app</span>
            <span className="text-white/60 text-xs">{t(RESULT_T.are_you_built, lang)}</span>
          </div>
        </div>
      </div>

      {/* Social share buttons */}
      <div className="flex items-center justify-center gap-3">

        {/* Instagram */}
        <button
          onClick={shareToInstagram}
          className="flex flex-col items-center gap-1.5 group"
          title="Share to Instagram"
        >
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-lg" style={{background: 'linear-gradient(135deg, #f58529, #dd2a7b, #8134af, #515bd4)'}}>
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </div>
          <span className="text-slate-500 text-[10px]">Instagram</span>
        </button>

        {/* 小红书 */}
        <button
          onClick={shareToXHS}
          className="flex flex-col items-center gap-1.5 group"
          title="Share to 小红书"
        >
          <div className="w-12 h-12 rounded-2xl bg-red-500 flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-lg group-hover:bg-red-400">
            <span className="text-white font-bold text-lg leading-none">小</span>
          </div>
          <span className="text-slate-500 text-[10px]">小红书</span>
        </button>

        {/* X / Twitter */}
        <button
          onClick={shareToX}
          className="flex flex-col items-center gap-1.5 group"
          title="Share to X"
        >
          <div className="w-12 h-12 rounded-2xl bg-black border border-slate-700 flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-lg group-hover:border-slate-500">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
            </svg>
          </div>
          <span className="text-slate-500 text-[10px]">X</span>
        </button>

        {/* Save as photo */}
        <button
          onClick={handleSavePhoto}
          className="flex flex-col items-center gap-1.5 group"
          title="Save as photo"
        >
          <div className="w-12 h-12 rounded-2xl bg-slate-700 border border-slate-600 flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-lg group-hover:bg-slate-600">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/>
            </svg>
          </div>
          <span className="text-slate-500 text-[10px]">{lang === 'zh' ? '保存图片' : lang === 'es' ? 'Guardar' : lang === 'fr' ? 'Enregistrer' : 'Save'}</span>
        </button>
      </div>
    </div>
  );
}
