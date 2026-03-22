# Frodigy — Project Info (v1)

## Summary
**Frodigy** is a modern, dark-themed **offline** productivity app for **Windows desktop**. It focuses on a fast daily dashboard for tasks, a simple internal calendar with one daily note, and a multi-timer system with Windows notifications and sound.

**Tagline:** *Prodigy level of productivity by Fishy!*

---

## Platforms
- **Primary platform:** Windows desktop (Windows 11 as primary dev environment; Windows 10 compatibility is a bonus if achievable)
- **App behavior:** Desktop GUI with background/tray-style behavior so timers continue even when the window is closed/hidden.

---

## Core Modules (v1)
1. **Today Dashboard**
2. **Tasks**
   - Recurring tasks (habits)
   - One-time tasks (projects / unique tasks)
   - Subtasks (checkbox lists inside tasks)
   - Completed tasks history
3. **Calendar + Daily Note**
4. **Timers**
5. **Settings**

---

## Task System (v1)

### Task Types
#### 1) Recurring Tasks (“Rec”)
Used for routine/habit tasks (examples: brush teeth, shower, eat, homework).

**Behavior**
- Recurring tasks refresh each day.
- If a recurring task is missed today, it does **not** create a backlog; tomorrow is a fresh reset.
- Each recurring task is markable with a tick/checkbox.

**Recurrence controls**
- Default recurrence is **daily**.
- User can change recurrence duration (e.g., daily → weekly; flexible duration options can be supported depending on implementation).

#### 2) One-Time Tasks
Used for non-recurring tasks (examples: fix a bug, finish a project, send money, buy something important).

**Behavior**
- One-time tasks must **persist until completed**.
- If not completed on a day, they should appear on the next day automatically (carry-over).
- Completed one-time tasks move to a **Completed section/page**.

**Carry-over rule (confirmed)**
- Preserve original start/creation date.
- Task continues to show on subsequent days until completed.
- When completed, record completion date/time; display start date and completion date/time in completed history.

### Subtasks (confirmed)
- One-time tasks support **subtasks** (checkbox items inside a task).
- Task completion is a separate tick from subtasks (subtasks help track progress).

### Completed Tasks
- Completed tasks are retained as history (not deleted).
- Completed items show at least:
  - completion date/time
  - original start date (created date)
- Completed tasks should live in a dedicated “Completed” area (section and/or page), depending on dashboard space.

---

## UI / UX Requirements (v1)
- **Modern dark theme**
- Comfortable, clean layout
- Accent colors: cyan/teal/light tones for contrast and “beautiful vibes”
- The term “whiteboard” is only an analogy; the UI is a modern dashboard (not a drawing canvas).

**Suggested navigation/pages**
- Today
- Calendar / Notes
- Timers
- Completed
- Settings

---

## Calendar + Daily Note (v1)

### Internal Calendar (confirmed)
- A simple in-app calendar view (month grid).
- Clicking a day opens the note for that date.
- Calendar is purely visual/internal (no external calendar linking).

### Weekends setting (confirmed)
- Default: Saturday treated as holiday/weekend.
- Optional setting: Saturday + Sunday treated as holiday/weekend.

### Daily Note (confirmed)
- **One note per day**
- Text-only for v1
- Markdown-like writing and viewing (simple markdown editor experience)
- Each date maps to its single note

---

## Timers & Notifications (v1)

### Multi-timers (confirmed)
- Allow multiple timers to run simultaneously.
- Practical max: ~4–5 active timers at once.
- Timers should be easy to edit/update and reuse.

### Notifications & sound (confirmed)
- On timer completion:
  - Show **Windows notification**
  - Play a **default built-in sound** (user-uploaded sounds are optional later; v1 uses defaults)

### Background behavior (confirmed intent)
- When user closes the window, the app should stay running in the background (tray/minimize-to-tray behavior is appropriate).
- Timers/alarms must continue to work while the UI is closed/hidden.

---

## Data Storage (v1)
- Use **SQLite** for permanent local storage.
- Data stored locally on the device.
- Keep timestamps for:
  - task creation (start)
  - task completion
  - daily note updated time

---

## Packaging / Distribution
- Installer format: **MSI or EXE** (either is acceptable).
- Microsoft Store publishing is a possible later distribution path (not required for initial development).

---

## Development Notes (for autonomous agent)
- Build as a Windows desktop GUI app with background/tray capability.
- Implement data persistence with SQLite early.
- Ensure date-based logic is correct:
  - recurring tasks reset daily
  - one-time tasks carry over daily until completed
  - daily note is unique per date
- Keep resource usage reasonable when idle (minimal CPU background work).

---
End of INFO.md