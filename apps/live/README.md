# Tutors Live

A minimal SvelteKit application for real-time student activity tracking.

## Features

- **Live Activity**: View students and courses currently online across all Tutors courses
- **Course Activity**: Track student activity for specific courses (online now, today, this week, this month, this year)
- **Catalogue**: Browse all Tutors courses with visitor statistics

## Development

```bash
npm run dev
```

The app runs on http://localhost:5174

## Routes

- `/` - Live activity dashboard with tabs for Courses, Students, and Groups
- `/catalogue` - Course catalogue with visitor statistics
- `/live/[courseid]` - Course-specific activity tracking

## Architecture

This app uses the shared `@tutors/ui` components package and `@tutors/services` for all functionality. It's completely standalone with no authentication required.

## Building

```bash
npm run build
npm run preview
```
