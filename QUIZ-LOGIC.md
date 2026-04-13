# OneCo Quiz — Types & Logic Breakdown

## The 5 Profile Types

Each profile represents a distinct personality archetype for someone considering a one-person company:

| Key | Name | Emoji | Core Trait |
|-----|------|-------|------------|
| `visionary` | The Visionary | 🔭 | Thinks in possibilities, spots patterns, energized by blank canvases |
| `executor` | The Executor | ⚡ | Bias for action, ships consistently, turns chaos into systems |
| `connector` | The Connector | 🌐 | Builds trust fast, natural community builder, understands human motivation |
| `expert` | The Expert | 🎯 | Goes deep not wide, becomes the go-to person, depth is the differentiator |
| `creative` | The Creative | 🎨 | Communicates through craft, makes people feel things, design-driven |


## How Scoring Works

### Profile Score (which type are you?)

There are 10 questions, each with 4 answer options (A/B/C/D). Every answer is tagged with exactly one `profile` type.

When the user completes the quiz, we count how many times they chose each profile type:

```
visionary: 0, executor: 0, connector: 0, expert: 0, creative: 0
→ for each answer, increment the matching profile by 1
→ highest score wins = your profile type
```

The maximum score for any single profile is 10 (if every answer mapped to the same type), and the minimum is 0.

**Tie-breaking:** If two profiles tie, the one that appears first in the object (`visionary > executor > connector > expert > creative`) wins. This is because `Object.entries().sort()` is stable — equal values keep their original order.


### Startup Readiness Score (should you go solo?)

This is a separate, independent score (0–4) that measures how "startup-ready" someone is, regardless of their profile type.

Only **4 specific questions** contribute to this score: Q1, Q5, Q7, Q8 (0-indexed: 0, 4, 6, 7).

Only **1 specific answer** per question gives a startup point (marked `isStartupPoint: true`):

| Question | Startup Answer | Profile it maps to |
|----------|---------------|-------------------|
| Q1: "When you have a new idea, you..." | C: "Start building immediately" | executor |
| Q5: "Uncertainty makes you feel..." | A: "Excited — more possibilities!" | visionary |
| Q7: "Your relationship with money/risk..." | A: "Money follows great work" | creative |
| Q8: "You work best when..." | A: "You set your own rules" | executor |

So: startup readiness score = how many of these 4 you picked (0 to 4).

The startup score is displayed as a "readiness meter" on the results page:

| Score | Label | Meaning |
|-------|-------|---------|
| 3–4 | "One-Person Company material" | Full signal, go solo |
| 1–2 | "Make cash flow on the side" | Hybrid approach |
| 0 | "Build your foundation first" | Work first, then consider |


## Question-to-Profile Mapping (Complete)

Here's exactly which answer maps to which profile for all 10 questions:

### Q1: "When you have a new idea, you..."
- A: Research everything first → **expert**
- B: Tell everyone about it → **connector**
- C: Start building immediately → **executor** ⭐ startup point
- D: Write a detailed plan → **visionary**

### Q2: "Your biggest energy drain is..."
- A: Repetitive tasks → **visionary**
- B: Working alone → **connector**
- C: Too many rules → **executor**
- D: Unclear goals → **expert**

### Q3: "You make decisions by..."
- A: Gut feeling → **creative**
- B: Data and research → **expert**
- C: Asking others → **connector**
- D: Weighing pros and cons slowly → **visionary**

### Q4: "In a group project you naturally become..."
- A: The idea person → **visionary**
- B: The organizer → **expert**
- C: The one who actually does it → **executor**
- D: The one who keeps everyone connected → **connector**

### Q5: "Uncertainty makes you feel..."
- A: Excited — more possibilities! → **visionary** ⭐ startup point
- B: Anxious but I push through → **executor**
- C: I need to reduce it fast → **expert**
- D: Paralyzed until I have more info → **creative**

### Q6: "You're most proud of work that..."
- A: Changed how people think → **visionary**
- B: Helped someone directly → **connector**
- C: Shipped on time → **executor**
- D: Was beautifully crafted → **creative**

### Q7: "Your relationship with money/risk..."
- A: Money follows great work → **creative** ⭐ startup point
- B: I need stability before I take risks → **expert**
- C: Calculated risks only → **visionary**
- D: I'll bet big if I believe in it → **executor**

### Q8: "You work best when..."
- A: You set your own rules → **executor** ⭐ startup point
- B: There's a clear structure → **expert**
- C: You're collaborating → **connector**
- D: You have deep focus time → **creative**

### Q9: "Your superpower is..."
- A: Seeing patterns others miss → **visionary**
- B: Connecting people → **connector**
- C: Making things happen → **executor**
- D: Making things beautiful → **creative**

### Q10: "In 5 years you want to feel..."
- A: Free → **executor**
- B: Impactful → **connector**
- C: Respected → **expert**
- D: Creative → **creative**


## Profile Distribution per Question

How many times each profile appears as an answer option across all 10 questions:

| Profile | Total appearances (out of 40 answers) |
|---------|--------------------------------------|
| visionary | 8 |
| executor | 9 |
| connector | 8 |
| expert | 8 |
| creative | 7 |

**Note:** Executor has a slight edge (9 vs 7–8 for others), meaning statistically it's slightly easier to get "Executor" as a result. Creative has the fewest options (7), making it the hardest profile to get.


## Result Page Logic

The URL format is `/result/{profileKey}?startup={score}`.

Each profile shows two paths:
1. **"If you go solo"** — startup path advice, business type, suggested roles
2. **"If you build experience first"** — work-first path advice, target job roles, what to look for

Plus a startup readiness meter (the volume tunnel visualization) and a Jobpilot CTA.


## Data Tracked (Supabase)

When a user completes the quiz, this data is saved to the `quiz_results` table:
- `answers` — readable format like `{ "Q1": "C - Start building immediately (executor)" }`
- `profile_type` — the winning profile key
- `scores` — all 5 profile scores + startup score
- `lang` — which language the user was using
- `referrer` — where they came from (e.g., Xiaohongshu)
- `utm_source`, `utm_medium`, `utm_campaign` — UTM tracking
- `device_type` — mobile / tablet / desktop
- `screen_width` — viewport width
- `user_agent` — browser info
- `quiz_duration_seconds` — how long the quiz took
- `session_id` — unique per browser session
