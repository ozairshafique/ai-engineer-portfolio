# Ozair Shafique — AI Engineer Portfolio

> Personal portfolio of Ozair Shafique — AI & Backend Engineer with 3+ years of experience. Built with Next.js 14, MongoDB Atlas, TypeScript, and Tailwind CSS. Deployed on Vercel.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?logo=mongodb)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38bdf8?logo=tailwindcss)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel)

## 🔗 Live Site

**[ozairshafique.vercel.app](https://ozairshafique.vercel.app)**

---

## 👤 About

**Ozair Shafique** — AI & Backend Engineer specializing in:

- 🤖 NLP · RAG · Machine Learning · Data Science
- ⚙️ MLOps · Docker · MLflow · DVC · GitHub Actions
- 🚀 FastAPI · REST APIs · MongoDB · PostgreSQL
- 📊 Prometheus · Grafana · Alibi Detect · Great Expectations

**MSc Computer Science (AI) — University of Bari, 2025**
**EU Residence Permit · Open to AI Engineer roles across Europe**

---

## ✨ Features

- Dynamic projects — stored in MongoDB Atlas, managed via admin page
- Contact form — saves messages to MongoDB with email notification
- Admin dashboard — password protected, add and edit projects
- Messages viewer — see all contact submissions in admin
- Dark theme — modern professional design
- Neural network SVG logo — custom designed for AI identity
- Responsive design — mobile hamburger menu, works on all screens
- Smooth animations — page fade in, scroll behavior, nav transitions
- OpenStreetMap — location map of Bari, Italy
- CV download — Google Drive integration
- Active navbar — highlights current page automatically

---

## 🛠️ Tech Stack

| Category   | Technology               |
| ---------- | ------------------------ |
| Framework  | Next.js 14 App Router    |
| Language   | TypeScript               |
| Database   | MongoDB Atlas + Mongoose |
| Styling    | Tailwind CSS             |
| Fonts      | Geist Sans + Geist Mono  |
| Deployment | Vercel                   |
| Map        | OpenStreetMap            |
| CV         | Google Drive             |

---

## 📂 Project Structure

```
ai-engineer-portfolio/
├── app/
│   ├── page.tsx                  ← homepage
│   ├── projects/
│   │   └── page.tsx              ← all projects from MongoDB
│   ├── contact/
│   │   └── page.tsx              ← contact page
│   ├── admin/
│   │   └── page.tsx              ← password protected dashboard
│   ├── api/
│   │   ├── projects/
│   │   │   └── route.ts          ← GET + POST projects
│   │   ├── contact/
│   │   │   └── route.ts          ← POST + GET messages
│   │   └── auth/
│   │       └── route.ts          ← admin authentication
│   ├── globals.css               ← global styles + animations
│   └── layout.tsx                ← Navbar + Footer
├── components/
│   ├── Navbar.tsx                ← neural network SVG logo
│   ├── NavLinks.tsx              ← active page highlighting
│   ├── Hero.tsx                  ← photo + stats + buttons
│   ├── About.tsx                 ← bio + metrics + CV link
│   ├── Experience.tsx            ← work history timeline
│   ├── Contact.tsx               ← contact section wrapper
│   ├── ContactForm.tsx           ← form with validation
│   ├── ContactInfo.tsx           ← email LinkedIn GitHub icons
│   ├── ContactMap.tsx            ← OpenStreetMap iframe
│   ├── MessagesSection.tsx       ← admin messages with reply
│   └── Footer.tsx                ← footer
├── lib/
│   ├── mongodb.ts                ← cached MongoDB connection
│   └── models/
│       ├── Project.ts            ← Mongoose project schema
│       └── Contact.ts            ← Mongoose contact schema
├── public/
│   └── photos1.png               ← profile photo
├── .env.local                    ← environment variables — never commit
├── .gitignore                    ← includes .env.local
└── README.md                     ← this file
```

---

## 🚀 Getting Started

### Prerequisites

```
Node.js 18 or higher
MongoDB Atlas free account
```

### Installation

```bash
# Clone the repository
git clone https://github.com/ozairshafique/ai-engineer-portfolio.git
cd ai-engineer-portfolio

# Install dependencies
npm install
```

### Environment Variables

Create `.env.local` in the root folder:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
ADMIN_SECRET=your_admin_password_here
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📊 Pages

| Page         | URL             | Description                              |
| ------------ | --------------- | ---------------------------------------- |
| Homepage     | `/`             | Hero, About, Experience, Skills, Contact |
| Projects     | `/projects`     | All projects fetched from MongoDB        |
| Contact      | `/contact`      | Contact form, map, availability          |
| Admin        | `/admin`        | Password protected dashboard             |
| Projects API | `/api/projects` | GET all + POST new project               |
| Contact API  | `/api/contact`  | POST form + GET all messages             |
| Auth API     | `/api/auth`     | POST admin password check                |

---

## 🔐 Admin Dashboard

Access at `/admin` with your `ADMIN_SECRET` password.

- Add projects with title, description, tags, metrics
- Add GitHub repo URL and live demo URL
- Mark projects as featured — appears highlighted
- Set display order — controls which project shows first
- View all contact form submissions
- Reply directly to messages via email link

---

## 🗄️ Database Schema

### Project

```typescript
{
  title: String; // project name
  description: String; // what you built
  tags: [String]; // tech stack as array
  metrics: String; // F1, AUC, performance scores
  githubLink: String; // GitHub repo URL
  demoUrl: String; // live demo URL
  featured: Boolean; // show featured — default false
  order: Number; // display order — default 0
  createdAt: Date; // auto generated
  updatedAt: Date; // auto generated
}
```

### Contact

```typescript
{
  name: String; // sender full name
  email: String; // sender email address
  subject: String; // message subject
  message: String; // full message body
  createdAt: Date; // auto generated
}
```

---

## 🌍 Deployment

### Deploy to Vercel

```bash
# Push to GitHub first
git add .
git commit -m "Deploy portfolio"
git push origin main
```

Then on Vercel:

```
1. Go to vercel.com
2. Sign in with GitHub
3. Click Add New Project
4. Select ai-engineer-portfolio
5. Add environment variables:
   MONGODB_URI  →  your MongoDB Atlas connection string
   ADMIN_SECRET →  your chosen admin password
6. Click Deploy
7. Live in 2 minutes
```

---

## 📈 Projects Showcased

| Project                      | Stack                                                           | Metrics                            |
| ---------------------------- | --------------------------------------------------------------- | ---------------------------------- |
| Crop Classification MLOps    | DVC, MLflow, Docker, FastAPI, Prometheus, Grafana, Alibi Detect | Pylint 8.6/10 · 98% test coverage  |
| Amazon Sentiment Analysis    | FastAPI, MLflow, Docker, Scikit-learn, GitHub Actions           | F1: 0.858 · ROC-AUC: 0.967         |
| RAG Medical Search System    | FastAPI, MongoDB Atlas, Cohere API, HNSW indexing               | Privacy-preserving semantic search |
| Email Communication Analysis | Python, Pandas, NLP, EDA, Feature Engineering                   | Trend detection pipeline           |

---

## 🔒 Security

- MONGODB_URI stored in .env.local — never committed to GitHub
- ADMIN_SECRET stored in .env.local — never committed to GitHub
- Admin routes protected by server-side password verification
- .env.local listed in .gitignore — automatically excluded
- No sensitive data in any client-side component

---

## 📬 Contact

**Ozair Shafique — AI & Backend Engineer**

- 🌐 Portfolio: [ozairshafique.vercel.app](https://ozairshafique.vercel.app)
- 💼 LinkedIn: [linkedin.com/in/uzair-shafique-97836810a](https://www.linkedin.com/in/uzair-shafique-97836810a)
- 🐙 GitHub: [github.com/ozairshafique](https://github.com/ozairshafique)
- 📧 Email: uzairi_11@email.com
- 📍 Location: Bari, Italy 🇮🇹
- ✅ EU Residence Permit — Open to work across Europe

---

## 📄 License

MIT License — feel free to use this as inspiration for your own portfolio.

---

<p align="center">Built with Next.js · MongoDB Atlas · Tailwind CSS · Deployed on Vercel</p>
