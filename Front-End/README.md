# Coursify LMS - Learning Management System

A simple Learning Management System built with HTML, CSS, and JavaScript.

## Features

- **Dashboard**: Overview of courses and learning paths
- **Courses**: Create and manage lectures
- **Attendance**: Track student attendance
- **Marks**: View and manage student marks
- **Schedule**: View semester schedule

## How to Run

### Option 1: Simple File Server
1. Open the `Front-End` folder in any IDE (VS Code, WebStorm, etc.)
2. Right-click on `index.html` and select "Open with Live Server" or similar
3. Or simply open `index.html` in your web browser

### Option 2: Python Server (if Python is installed)
```bash
cd Front-End
python -m http.server 8000
```
Then open http://localhost:8000 in your browser

### Option 3: Node.js Server (if Node.js is installed)
```bash
cd Front-End
npx http-server
```

## File Structure

```
Front-End/
├── index.html          # Main dashboard
├── attendance.html     # Attendance tracking page
├── courses.html        # Course management page
├── marks.html         # Marks management page
├── schedule.html      # Schedule view page
├── header.html        # Header component
├── sidebar.html       # Navigation sidebar
├── footer.html        # Footer component
├── style.css          # Main stylesheet
├── attendance.css     # Attendance page styles
├── main.js           # Main JavaScript functionality
├── attendance.js     # Attendance page functionality
├── courses.js        # Courses page functionality
└── [images]          # Image assets
```

## Navigation

- **Dashboard**: Main page with course overview
- **Schedule**: View semester schedule
- **Courses**: Create new lectures
- **Marks**: Manage student marks
- **Attendance**: Track attendance (accessible from Courses page)

## Cross-IDE Compatibility

This project uses relative paths and standard web technologies, making it compatible with:
- VS Code
- WebStorm
- Sublime Text
- Atom
- Any text editor with a web server extension

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Notes
- All pages are self-contained and can be opened individually
- The project uses Bootstrap for responsive design
- Data is stored in localStorage for persistence
- No external dependencies beyond CDN resources
