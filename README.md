# Cambridge International A-Level Revision Tracker & Smart Guide
**Tailored for the May 2027 Examination Series**

A high-performance, private, zero-backend local web application to track revision coverage, log past paper scores, monitor mistake reflections, and prioritize study sessions for Cambridge International A-Level subjects:
- **Further Mathematics (9231)** (Papers 1, 2, 3, 4: FP1, FP2, FM, FPS)
- **Mathematics (9709)** (Papers 1, 3, 4, 5, 6: P1, P3, M1, S1, S2)
- **Information Technology (9626)** (Papers 1, 2, 3, 4: Theory & Practicals)

---

## 🚀 Quick Start / How to Run

You can launch the app immediately using either of the following methods:

### Option 1: Direct Double-Click (Easiest, Zero Setup)
1. Double-click `start.bat` (or double-click `index.html`).
2. The application opens directly in your default web browser (Chrome, Edge, Brave, Firefox, etc.).
3. No internet connection, server setup, or accounts required!

### Option 2: Local Server
If you prefer running via a local HTTP server:
```bash
node server.js
```
The server will start at `http://localhost:3000` and automatically open your default browser.

---

## 🌟 Core Features

### 1. Subject & Syllabus Tracker
* **Authentic Cambridge Syllabi**: Pre-populated with official papers, maximum marks, durations, and 70+ syllabus topics across 9231, 9709, and 9626.
* **4-Tier Status Tags**:
  - `Not Started` (Slate)
  - `Revising` (Amber)
  - `Confident` (Sky Blue)
  - `Mastered` (Emerald Green)
  - *Click any status badge to instantly cycle through statuses.*
* **Topic Reordering**: Use the ▲ / ▼ controls on each topic row to customize the study sequence to match your school or self-study order.
* **Custom Topics & Notes**: Add custom topics, edit syllabus notes, and filter by status or keyword search.

### 2. Past Paper Performance & Reflection Logger
* **Complete Exam Coverage**: Log papers from 2018 to 2026 across sessions (`m/j`, `o/n`, `f/m`) and variants (`11, 12, 13, 21, 22...`).
* **Automated Scoring**: Automatically computes percentages and estimates Cambridge grades ($A^*$, $A$, $B$, $C$, $D$, $E$, $U$).
* **Mistake Reflections & Syllabus Tagging**:
  - Write detailed reflections on why marks were lost (e.g. algebraic slip, missed formula, sign error).
  - Check off specific syllabus topics where marks were lost. Tagged topics are dynamically boosted in the Smart Revision Guide!

### 3. Smart Revision Guide ("What to Study Next")
* **Intelligent Priority Ranking**: Computes an actionable priority score for every topic using:
  1. **Topic Confidence**: Lowest confidence topics receive top priority.
  2. **Spaced Repetition Decay**: Topics not reviewed for 14+ or 28+ days are penalized with time decay urgency.
  3. **Past Paper Mistakes**: Topics with flagged past paper errors receive high urgency points.
  4. **Exam Weighting**: Core and High-Frequency Cambridge exam questions are weighted accordingly.
* **One-Click Study Session**: Click **"Study Now"** on any recommendation card to instantly load that topic into the Pomodoro timer.

### 4. Exam Countdown & Study Session Timer
* **May 2027 Countdown Banner**: Live breakdown of months, days, and hours remaining until May 1, 2027.
* **Built-in Pomodoro & Deep Work Modes**:
  - 25m Focus Block, 5m Short Break, 15m Long Break, or open-ended Stopwatch Deep Work.
  - Interactive circular progress ring.
  - **100% Offline Web Audio Chime**: Synthesizes a pleasant C-major harmonic chord upon session completion without needing audio files.
  - Automatically records completed study sessions and updates the topic's revision timestamp.
* **Analytics**: Tracks cumulative hours studied per subject, session logs, and history.

### 5. Local Storage & Complete Data Privacy
* **Browser IndexedDB**: Stores all data locally on your computer with instantaneous load times and zero network calls.
* **One-Click JSON Export**: Download a timestamped `.json` backup of your entire revision history.
* **One-Click JSON Restore**: Restore backups anytime or transfer your progress between computers.
* **Sample Data Loader**: Load realistic sample mock papers and study sessions to test the app features immediately.

---

## 📁 Project Structure

```
d:\A_level App\
├── index.html               # Main dashboard UI shell
├── start.bat                # Windows quick launcher
├── server.js                # Zero-dependency local HTTP static server
├── build.js                 # Offline bundler script
├── README.md                # Documentation & user manual
├── css/
│   └── styles.css           # Modern design system (Dark & Light mode, badges, cards, animations)
├── data/
│   └── defaultSyllabi.js    # Cambridge 9231, 9709, and 9626 syllabus data fixtures
└── js/
    ├── storage.js           # IndexedDB persistence engine & JSON backup/restore
    ├── recommendations.js   # "What to Study Next" algorithmic recommendation engine
    ├── timer.js             # Pomodoro timer, Web Audio chime, & countdown ticker
    ├── app.js               # Reactive UI controller & event handlers
    └── bundle.js            # Standalone offline bundle for direct browser execution
```
