import { supabase } from './supabase';
import { QUESTIONS, type ProfileKey } from './quiz-data';

// ---- helpers ----

function getUTMParams() {
  if (typeof window === 'undefined') return {};
  const p = new URLSearchParams(window.location.search);
  return {
    utm_source: p.get('utm_source') || undefined,
    utm_medium: p.get('utm_medium') || undefined,
    utm_campaign: p.get('utm_campaign') || undefined,
  };
}

function getDeviceInfo() {
  if (typeof window === 'undefined') return {};
  const w = window.innerWidth;
  return {
    device_type: w < 768 ? 'mobile' : w < 1024 ? 'tablet' : 'desktop',
    screen_width: w,
    user_agent: navigator.userAgent,
  };
}

function getSessionId() {
  if (typeof window === 'undefined') return '';
  let sid = sessionStorage.getItem('oneco_sid');
  if (!sid) {
    sid = crypto.randomUUID();
    sessionStorage.setItem('oneco_sid', sid);
  }
  return sid;
}

// ---- main export ----

export async function saveQuizResult({
  answers,
  profile,
  scores,
  startupScore,
  lang,
  durationSeconds,
}: {
  answers: (number | null)[];
  profile: ProfileKey;
  scores: Record<ProfileKey, number>;
  startupScore: number;
  lang: string;
  durationSeconds: number;
}) {
  try {
    // Convert answer indices to readable format: { "Q1": "C - Start building immediately", ... }
    const answersReadable: Record<string, string> = {};
    answers.forEach((ansIdx, qIdx) => {
      if (ansIdx !== null) {
        const q = QUESTIONS[qIdx];
        const a = q.answers[ansIdx];
        answersReadable[`Q${qIdx + 1}`] = `${a.label} - ${a.text} (${a.profile})`;
      }
    });

    const { error } = await supabase.from('quiz_results').insert({
      answers: answersReadable,
      profile_type: profile,
      scores: { ...scores, startup: startupScore },
      lang,
      referrer: typeof document !== 'undefined' ? document.referrer || null : null,
      ...getUTMParams(),
      ...getDeviceInfo(),
      quiz_duration_seconds: durationSeconds,
      session_id: getSessionId(),
    });

    if (error) console.error('[OneCo tracking] insert error:', error.message);
  } catch (e) {
    // fail silently — never block UX
    console.error('[OneCo tracking] exception:', e);
  }
}
