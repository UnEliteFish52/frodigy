# Frodigy Agent Prompt

You are an AI coding agent working inside the Frodigy project directory.

## Mission
Build and improve Frodigy as a focused productivity application. The current project is an offline-first Windows desktop app built with Electron, and the user is also exploring a web-app version of the same product. Work from the existing codebase, preserve the current product direction, and do not invent unrelated features.

## Project Summary
Frodigy is a productivity app for tasks, daily notes, calendar views, timers, and settings. The app is designed around a fast daily dashboard, a simple internal calendar, recurring and one-time tasks, completed task history, and multiple timers with background behavior.

The application should feel modern, clean, and practical. The established direction is a dark UI with cyan, teal, and light accent colors.

## Current Stack
- Electron
- Node.js
- Vanilla JavaScript
- SQLite via better-sqlite3
- Markdown rendering via marked

## Existing App Structure
The project already includes these main renderer pages:
- Dashboard
- Schedule
- Calendar
- Timers
- Completed
- Summary
- Settings
- About

Main process behavior already includes:
- a desktop window
- tray/background-style behavior
- database initialization
- IPC handlers

## Core Product Requirements
### Tasks
- Support recurring tasks for habits and daily routines.
- Support one-time tasks that stay visible until completed.
- One-time tasks must carry over from day to day until finished.
- Preserve original creation date and completion date/time.
- Support subtasks inside one-time tasks.
- Keep completed tasks in a history area instead of deleting them.

### Calendar and Daily Notes
- Provide an internal calendar view.
- One note per day.
- Notes should be simple text or markdown-like editing for v1.
- A date should map to exactly one note.

### Timers
- Support multiple active timers at once.
- Timers should continue working when the UI is hidden or minimized.
- On completion, show a notification and play a default sound.

### Settings
- Keep settings simple and practical.
- Include theme control and any app preferences needed for the product flow.

## UX and Design Direction
- Modern dark theme.
- Clear hierarchy and low-friction daily usage.
- Clean dashboard layout, not a canvas or whiteboard.
- Accent colors should lean cyan and teal.
- Keep the interface calm, readable, and efficient.

## If You Are Building the Web Version
If the user asks you to build a web application version of Frodigy, adapt the desktop-specific behavior to the browser without changing the core product model.

Important web adaptation notes:
- Replace Electron-only tray/background behavior with web-friendly equivalents.
- Keep the same product areas, tasks, calendar, notes, timers, completed, settings.
- Preserve the local/offline-first mindset where possible.
- Avoid adding extra pages or unrelated product ideas.
- Keep the UI modern and responsive for desktop first, then mobile as needed.

## Working Rules for the Agent
- Read the existing code before editing.
- Make the smallest useful change that satisfies the request.
- Prefer root-cause fixes over temporary patches.
- Keep the data model and date logic correct.
- Do not add features that are not part of Frodigy’s current scope.
- If a requirement is unclear, stop and ask instead of guessing.

## Expected Output When Working
When you make changes, report:
- what changed
- which files were touched
- what behavior was verified
- any remaining risks or follow-up tasks

## Useful Project References
- Project overview and v1 requirements: INFO.md
- Current application entry points and structure: src/main/ and src/renderer/

## Short Version of the Prompt
If you need a compact instruction for another AI agent, use this:

Build and improve Frodigy inside this directory. Frodigy is a productivity app for tasks, recurring habits, one-time carry-over tasks, subtasks, a one-note-per-day calendar, timers, completed history, and settings. The current app is Electron-based, but if you are asked to create a web version, adapt the same product model to the browser without adding unrelated features. Keep the UI modern, dark, and efficient, with cyan and teal accents. Read the code first, make minimal focused changes, preserve date logic, and ask before guessing.
