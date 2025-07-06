# 📘 Chronicle

**Chronicle**  
A modern, all-in-one productivity web application that combines habit tracking, journaling, Pomodoro timer, to-dos, and daily insights—helping you track, reflect, and achieve with ease.

- **Purpose:**  
  Chronicle streamlines your daily productivity and self-improvement by unifying essential tools into a single, beautiful interface. No more switching between apps for habits, journals, or tasks.

- **Tech Stack:**

  - **Frontend:** Next.js 14, React 18, Tailwind CSS, TypeScript
  - **Backend:** Supabase (PostgreSQL, Auth)
  - **UI Libraries:** Radix UI, Lucide Icons, Tiptap, Recharts, @uiw/react-heat-map
  - **Other:** UploadThing (file uploads), Zod (validation)

- **Status:**  
  🚧 MVP / Work in Progress (WIP)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9+ (or yarn/pnpm/bun)
- **Supabase** project (for database and auth)
- (Optional) Vercel account for deployment

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/chronicle.git
cd chronicle

# 2. Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Running Locally

```bash
# Start the development server
npm run dev

# Open http://localhost:3000 in your browser
```

---

## ⚙️ Configuration / Environment Variables

Chronicle requires several environment variables to connect to Supabase and configure deployment URLs.

### Required Environment Variables

- `NEXT_PUBLIC_SUPABASE_URL` – Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` – Supabase public anon key
- `NEXT_PUBLIC_SITE_URL` – (Optional) Your site's public URL (for production)
- `NEXT_PUBLIC_VERCEL_URL` – (Optional) Set automatically by Vercel

### Sample `.env.example`

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
# NEXT_PUBLIC_VERCEL_URL is set automatically on Vercel deployments
```

**Setup Instructions:**

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
2. Fill in your Supabase credentials and URLs.

---

## 🧱 Project Structure

```
chronicle/
├── app/                # Next.js app directory (routes, pages, API)
│   ├── habits/         # Habit tracker pages & logic
│   ├── journals/       # Journal pages & logic
│   ├── pomodoro/       # Pomodoro timer & tasks
│   ├── insights/       # Analytics & insights
│   ├── settings/       # User settings
│   └── api/            # API routes (e.g., file uploads)
├── components/         # Reusable React components
│   ├── Habits/         # Habit-related UI
│   ├── Journals/       # Journal-related UI
│   ├── Pomodoro/       # Pomodoro UI
│   ├── Insights/       # Insights UI
│   ├── Settings/       # Settings UI
│   ├── Sidebar/        # Sidebar navigation
│   └── ui/             # Shared UI primitives (button, card, etc.)
├── database/           # Database schema (SQL)
├── lib/                # Utility libraries
├── public/             # Static assets (images, icons)
├── utils/              # Helper functions, Supabase client
├── types/              # TypeScript types
├── LICENSE             # MIT License
├── package.json        # Project metadata and scripts
└── README.md           # Project documentation
```

**Key Folders:**

- `app/` – Main application logic and routing
- `components/` – Modular, reusable UI components
- `utils/` – Utility functions and Supabase integration
- `database/` – Database schema and migrations

---

## 📚 Usage / Features

### Main Features

- **🟢 Habit Tracker:**  
  Track daily habits, visualize progress, and gain insights.

- **📓 Journals:**  
  Write daily reflections, set moods, and review past entries.

- **⏳ Pomodoro Timer:**  
  Boost productivity with customizable work/break cycles and task management.

- **✅ To-dos:**  
  Manage your daily tasks alongside your Pomodoro sessions.

- **📊 Insights:**  
  Visualize your habit and journal activity with heatmaps and analytics.

- **⚙️ Settings:**  
  Personalize your experience, including dark/light mode.

### Example Usage

- **Sign up** and log in to your account.
- **Add habits** and check them off daily.
- **Write journals** and track your mood.
- **Start a Pomodoro session** and manage your to-dos.
- **View insights** to analyze your progress.

---

## 🧪 Testing

> **Note:** No automated test framework is currently set up.  
> Add your preferred testing tools (e.g., Jest, Playwright) and scripts as needed.

### How to Add Tests

1. Install your preferred test framework:
   ```bash
   npm install --save-dev jest @testing-library/react
   ```
2. Add test files in the relevant directories (e.g., `components/ComponentName.test.tsx`).
3. Add test scripts to `package.json` and run with:
   ```bash
   npm test
   ```

---

## 🛠️ Contributing

### Development Workflow

1. **Fork** the repository on GitHub.
2. **Clone** your fork:
   ```bash
   git clone https://github.com/yourusername/chronicle.git
   ```
3. **Create a new branch** for your feature or fix:
   ```bash
   git checkout -b feature/your-feature
   ```
4. **Install dependencies** and start developing.

### Coding Standards

- **Formatting:**
  - Use Prettier and ESLint (add config if not present).
  - Consistent naming and TypeScript types.
- **UI:**
  - Use existing UI components and follow the design system.

### Pull Requests

- Describe your changes clearly.
- Reference related issues (if any).
- Ensure your branch is up to date with `main`.
- One feature/fix per PR.

### Commit Messages

- Use clear, descriptive messages (e.g., `feat: add Pomodoro timer`, `fix: journal date bug`).

---

## 📄 License

**MIT License**  
See [`LICENSE`](./LICENSE) for full text.

---

## 📬 Contact / Authors

- **Anish Dangol**
  - GitHub: [anishdangol](https://github.com/anishdangol)
  - Email: (add your email here if desired)

---

## 🧠 FAQs / Troubleshooting

### Frequently Asked Questions

- **Q: I get a Supabase connection error.**  
  A: Double-check your `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in `.env.local`.

- **Q: The app won't start on port 3000.**  
  A: Make sure nothing else is running on that port, or set a different port with `PORT=xxxx npm run dev`.

- **Q: How do I reset my data?**  
  A: Clear your Supabase tables or create a new project.

### Common Errors

- **Missing environment variables:**  
  Ensure `.env.local` is set up correctly.

- **Build errors after pulling changes:**  
  Run `npm install` to update dependencies.

---

## 📎 Optional Sections

### Changelog

> _Add a `CHANGELOG.md` to track major updates and releases._

### Roadmap

- [ ] Add automated tests
- [ ] Mobile app version
- [ ] More integrations (e.g., Google Calendar)
- [ ] Enhanced analytics

### API Documentation

#### Example: Add a Habit

```ts
POST / api / habits;
Body: {
  habitName, habitQuestion, habitNote;
}
```

#### Example: Add a Journal

```ts
POST / api / journals;
Body: {
  content, currentMood;
}
```

> _See `app/habits/actions.ts`, `app/journals/actions.ts`, etc. for more endpoints._

### Credits

- [Next.js](https://nextjs.org/)
- [Supabase](https://supabase.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Tiptap](https://tiptap.dev/)
- [UploadThing](https://uploadthing.com/)
- [Lucide Icons](https://lucide.dev/)
- [@uiw/react-heat-map](https://uiwjs.github.io/react-heat-map/)

---

> _This documentation is designed for both beginners and experienced developers. For questions, open an issue or contact the maintainer._
