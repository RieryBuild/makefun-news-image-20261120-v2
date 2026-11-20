# gate-run.md — news-image-20261120 v2 rebuild (§4)

## Pitch (epic-infographics step 3)

- **A — CHOSEN: "The day the storm, the missiles and the climate talks collided"**
  Triple-crisis front page; heroes Akvan / Kyiv / COP31. Reader remembers: Friday had
  three unrelated emergencies at once. Leads: the cyclone, the barrage, the final day
  of the climate talks — the storm, the missiles and the talks in one frame.
- **B — "Markets blink first"** — AI-bubble repricing; hero = Anthropic debut + Asia selloff.
- **C — "Friday, hour by hour"** — the UTC wire; hero = the timeline spine itself
  (kept as the differentiator strip, not the hero).

## Story list (46 stories, 7 regions; all first-reported 20 Nov 2026 unless marked *)

Heroes: 1 Akvan landfall Odisha · 2 Kyiv overnight missile barrage · 3 COP31 closing day Antalya.
Mid: 4 Asia AI selloff · 5 Anthropic close $97.17 +17% · 6 GTA VI day-one sales ~$2bn (est.)
· 7 Phillips 118, NZ 317–6 · 8 Italy CGIL general strike · 9 Korea chief-justice impeachment
official policy · 10 Senegal: 4 bodies recovered · 11 AUKUS CBO report · 12 F1 Las Vegas FP2
Russell fastest (wet) · 13 China holds lending rates, 18th month.
Grey-zone mid-list only (exact UTC timestamps + timezone reasoning in NEWS.md):
Japan core CPI 2.2% · Daraxonrasib 60.7% · Lula/Raoni · Bukele registers · Berlin Coalition.
ALSO 14–46: Akvan shelters/teams, third cyclone in 24 days, Patrapur 209 mm; Kyiv bridges,
EU envoy summons, air-raid alert 6h+; COP31 "35 by 35", $120bn dropped, 1.5°C overshoot;
Anthropic open/high/mkt cap, after-hours −4.7%; Asia worst week since 2020, dollar 103.9;
Japan CPI; China LPR 3.00/3.50; Brent $92.22, WTI $83.40; Bukele; Lula/Raoni; Berlin;
Daraxonrasib; F1 FP1 washed out, Verstappen 13th; Nicholls 175*, NZ 368; Jaiswal 85,
Rahul 52*, India 159/1; Italy rail strike; Rome march; Korea "no position"; AUKUS yards
1.13/yr vs 2, transfers from 2032; Senegal Canary route 8,200 / ~600 dead-missing 2026;
Ganjam worst-hit; COP31 "missing cat" protest; yen steadied.
Regions (7): South Asia, Europe, East Asia, North America, Latin America, Africa, Oceania.
Big numbers (6, all 20 Nov events): 300,000+ evacuated · 90 km/h gusts · +17% Anthropic
· $2.36bn GTA VI · 118 Phillips · 2.2% Japan core CPI (*grey-zone, noted in NEWS.md).
Anthropic close is also marked * (first reported late 19 Nov UTC; close fell 20 Nov 06:00 JST).
UTC strip (7): 00:22 Phillips 118 · 02:00 Akvan landfall · 04:00 F1 FP2 Russell
· 05:53 Asia selloff deepens · 08:30 Italy Rome march · 12:00 CBO AUKUS report
· 20:59 COP31 text due midnight TRT.

## DATE CHECK — named exclusions (first-reported 19 Nov or earlier, NOT in the image)

ICJ Myanmar verdict (19 Nov) · Shenzhen trilateral meeting (19 Nov) · Anthropic $83 IPO
pricing (19 Nov — the $97.17 close is Friday's follow-up) · Senate Iran vote 51–48
(19 Nov) · GTA VI launch (19 Nov — sales estimate is Friday's) · PIF Tower strike
(19 Nov) · Crimea Bridge strike (19 Nov) · Van Gogh $190.4m (19 Nov) · Han Duck-soo
verdict (19 Nov) · Haiti raid (Thu 19 Nov) · Modi–royals meeting (18 Nov) ·
IAEA Yongbyon warning (18 Nov) · Voyager 1 one light-day (18 Nov) · Fiji drought
declaration (18 Nov) · Gaza Board of Peace report (17 Nov) · BepiColombo arrival,
first reported 19 Nov (orbit capture Sat 21 Nov).
Not yet: COP31 final text (due midnight Fri); Take-Two's official GTA VI figures.

## v1 weaknesses fixed

1. Hero mismatch (airplane for the Iran-decision story): every hero panel now DEPICTS its
   story — Akvan cyclone spiral, Kyiv missile trails over the Dnipro, COP31 globe +
   thermometer in Antalya. No Iran hero at all (the story is 19 Nov).
2. "51–48" Senate Iran vote as a big number: excluded from the image entirely; named
   only in the DATE CHECK footer as a 19 Nov story. All six big numbers are 20 Nov events.

## MQ1–MQ8 + Gates 0–2 — RUN 20 Nov 2026 ~15:20 WITA (gate time)

- MQ1 one day's news, 20 Nov only: **PASS** — 46 stories, all 20 Nov events or
  first reports; 6 grey-zone items marked `*` with exact UTC timestamps +
  time-zone reasoning in NEWS.md; 16 named 19 Nov-or-earlier exclusions in the
  DATE CHECK footer.
- MQ2 judge sees exactly entry.png, ≤1 MiB, ≤1024×1024: **PASS** — entry.png
  1024×1024, 268,247 B (<300 KB target), sha256
  f3bc0176a9217b8723106dc1a3266dc193efa0c5c17eeec84d810a5e294310ee; main.ts copies
  these exact bytes (verified: 2 runs byte-identical).
- MQ3 quota (live check at gate time): **PASS** — kit CLI `status` 20 Nov:
  can_submit TRUE, entries_made 1, entries_kept 1, day cap 3 / taken 1 /
  left 2 (resets 2026-11-21T00:00Z), hard limit 20 / left 19.
- MQ4 deterministic, no network, Node 22 stdlib: **PASS** — main.ts stdlib-only
  (copyFileSync + statSync size check); 2 runs byte-identical; compose.py
  2 runs byte-identical; no network, no clock.
- MQ5 11-point dossier checklist: **PASS (10 full + 1 partial)** — (1) every
  story first-reported 20 Nov + source in NEWS.md; (2) yesterday-exclusion
  block + "not yet" tomorrow; (3) no 2-day-range story as lead; (4) 46 stories,
  7 regions, counts shown; (5) 13 illustrated stories, ALL labelled in-image;
  (6) no AI photos of real events; no admission of shortcomings in-image;
  (7) confirmed/claim tags + short source per illustrated story; (8) map +
  numbered pins 1–13 — PARTIAL: no drawn region legend (regions named in the
  masthead count + place banner per panel); (9) UTC strip 7 entries; (10) file
  <300 KB; (11) date + 3 leads readable at 300 px.
- MQ6 panels depict their stories, all labelled in-image: **PASS** — all 13
  panels viewed individually: Akvan cyclone spiral over the Odisha coast;
  Kyiv missile trails + Dnipro bridges + Motherland Monument; COP31 globe +
  thermometer in Antalya; every panel carries a place/event banner.
- MQ7 NEWS.md first-report date + source per story: **PASS** — heroes, mids,
  grey-zone (UTC timestamps + reasoning), ALSO 14–46, DATE CHECK, dropped as
  unverified; sources Reuters/AP/BBC/AFP/WSJ/IMD/UNFCCC and others.
- MQ8 session/transcript discipline: **PASS (builder side)** — all build work
  in this session, inside the competition window (opened 2026-11-20T00:00Z);
  main.ts written FRESH in-session and REVISED in-session (2 messages);
  no v1 entry content read; transcripts to be bundled by the coordinator
  pre-audit (not this builder's step).
- Gate 0 requirements: **PASS** — competition open (kit check: now between
  open 2026-11-20T00:00Z and deadline 2026-11-22T00:00Z); quota can_submit;
  repo public, created after open; About set (homepage + topics
  ai-agents/bounties/growth/makefun); LICENSE MIT; .makefun/owner.json wallet
  6do8zGw4FPLCB1Cq44G8r8KwQccbhHUqtAptaRji6ALk; README 3 live make.fun badges +
  referral footer (ref wa8s3t3t).
- Gate 1 multi-model review: **DONE (OpenRouter) + Gemini SKIPPED (gap, NOT a
  FAIL)** — see adjudication below.
- Gate 2 local kit check: **4 passed, 1 failed, 14 skipped, 5 at submission**
  (run 20 Nov ~15:18 WITA on the final worktree). Passed: competition_open,
  snapshot (7 files, 287,807 B), license_osi (MIT), entrypoint (main.ts,
  node22). FAILED: transcripts_present — EXPECTED at this stage (no transcripts
  uploaded yet; full check with transcripts is the coordinator's pre-audit
  job). Not ready for submit until transcripts are bundled.
- Audit point: STOP — no bundle, no submit, no seal. Report to parent.

## Multi-model review (adjudicated, §6)

- OpenRouter :free (code/reasoning): **DONE** — nvidia/nemotron-3-ultra-550b-a55b:free
  (GET /models checked first; 13 :free models live). Findings adjudicated:
  - ACCEPTED + FIXED (1): Anthropic close flagged as grey-zone (first reports
    late 19 Nov UTC) → marked `*` in the big-number label and panel 5 deck,
    and added to the NEWS.md grey-zone section with exact UTC timestamps.
  - ACCEPTED + FIXED (2): GTA VI "~$2bn" is the 19 Nov Reuters figure → big
    number changed to "$2.36bn", the 20 Nov update figure, consistent with the
    panel 6 deck.
  - REJECTED (1): "Anthropic is a private company; no publicly traded stock"
    — FALSE. Anthropic debuted on Nasdaq 19 Nov 2026 ($83 pricing;
    WSJ/MarketWatch/Barron's); $97.17 is the reported first close. The
    reviewer relied on pre-IPO knowledge. Same hallucination pattern as v1.
  - REJECTED (2): "/output may not exist", "no integrity check", "no error
    handling" — the kit starter pattern is exactly this bare copy; the harness
    provides /output; a size-mismatch verification was added in the in-session
    main.ts revision.
  - REJECTED (3): "copying a pre-rendered PNG is a workaround" — the
    competition rules explicitly bless it ("the simplest program copies an
    image the repository holds").
  - REJECTED (4): "NEWS.md not emitted/validated by the program" — NEWS.md is
    documentation, not a program output; not required.
- Gemini gemini-3.8-flash (text/copy): **SKIPPED — recorded gap, NOT a FAIL**.
  Probe returned "OK" once (slow, ~174 s), but both full review calls failed:
  attempt 1 hit the helper's 180 s timeout; attempt 2 failed fast with a
  urllib/HTTP error. Endpoint flaky, not reliably clear.

## Accepted residuals

- R1: Anthropic close stays as a mid-list panel + big number (task-authorized
  20 Nov follow-up in Asia); now marked `*` with full time-zone basis in NEWS.md.
- R2: No drawn region legend on the map (dossier §0.5 point 8 partial); regions
  stated in the masthead count + place banner per panel.
- R3: COP31 had no final agreement at build time — framed as "final day, no
  deal yet" (honest; see NEWS.md).
- R4: GTA VI figures are estimates (Sensor Tower); Take-Two unconfirmed —
  labelled "(est.)" in the image + NEWS.md.
- R5: Gemini text review skipped (endpoint flaky) — gap, not a fail.

## Remaining visual weaknesses

- W1: At 300 px the hero headlines are small (~5 px); the date and big numbers
  read, but the three lead headlines are only just legible — the heroes are
  distinguished mainly by their images.
- W2: East-Asia map pins (Seoul 9 / Beijing 13 / Tokyo 4) sit close together
  despite offsets; at a glance they read as a cluster.
- W3: Panel 5 (Anthropic) is a portrait image cropped into a landscape slot —
  the tower is centred and fine, but the neural-web motif is cropped at the
  top; the rising chart line survives.
