# Job Listing Application

## Overview
A simple **React + Vite** application that showcases a list of job postings. Users can browse, view details, add new jobs, and edit existing ones. The project demonstrates modern React development practices, component-based architecture, and uses Tailwind CSS for styling.

## Tech Stack
- **React** – UI library
- **Vite** – Fast build tool and development server
- **Tailwind CSS** – Utility‑first CSS framework
- **ESLint** – Linting and code quality
- **JSON** – Sample data source (`src/jobs.json`)

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm (comes with Node) or Yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project folder
cd job-listing-application

# Install dependencies
npm install   # or `yarn`
```

### Development Server
```bash
npm run dev   # starts Vite dev server at http://localhost:5173
```
Open the URL in your browser to view the app. The server supports hot‑module replacement, so changes appear instantly.

### Building for Production
```bash
npm run build   # creates an optimized build in the `dist` folder
npm run preview # preview the production build locally
```

## Project Structure
```
job-listing-application/
├─ public/                # static assets (e.g., Vite logo)
├─ src/
│  ├─ assets/            # images and other assets
│  ├─ components/        # reusable UI components (Card, Navbar, etc.)
│  ├─ layouts/           # layout components
│  ├─ pages/             # page‑level components (HomePage, JobsPage, ...)
│  ├─ jobs.json          # sample job data used by the app
│  ├─ App.jsx            # root component
│  └─ main.jsx           # entry point
├─ tailwind.config.js    # Tailwind configuration
├─ vite.config.js        # Vite configuration
└─ package.json          # scripts and dependencies
```

## Usage
- **Home** – Displays featured jobs and a hero section.
- **Jobs** – Shows all job listings with pagination.
- **Job Details** – Click a job to see full description.
- **Add Job** – Fill the form to create a new posting (stored in local state).
- **Edit Job** – Modify an existing posting.

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to your fork and open a PR

## License
This project is licensed under the MIT License.