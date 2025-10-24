# 🏔️ The Wild Hotel

A modern, luxury cabin booking platform built with Next.js 14, offering seamless reservation management and an elegant user experience.

![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat&logo=tailwind-css)
![Supabase](https://img.shields.io/badge/Supabase-Database-3ECF8E?style=flat&logo=supabase)

## ✨ Features

- 🏡 **Browse Cabins** - Explore a curated collection of luxury mountain cabins with detailed information and stunning imagery
- 🔐 **Authentication** - Secure Google OAuth integration with NextAuth v5
- 📅 **Reservation System** - Intuitive date selection and booking management
- 👤 **Guest Area** - Personalized dashboard for managing profile and reservations
- ✏️ **Edit Reservations** - Modify guest count and special observations for upcoming bookings
- 🎨 **Modern UI** - Beautiful, responsive design with glassmorphism effects and smooth animations
- 🌐 **Server Components** - Leveraging Next.js 14 App Router for optimal performance
- 🚀 **Optimistic Updates** - Instant UI feedback for better user experience

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Frontend:** React 18, Tailwind CSS
- **Authentication:** NextAuth v5 with Google Provider
- **Database:** Supabase (PostgreSQL)
- **Icons:** Heroicons
- **Date Handling:** date-fns, react-day-picker
- **Styling:** Custom animations, glassmorphism effects

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18+ 
- npm or yarn
- A Supabase account
- Google OAuth credentials


### 3. Environment Variables

Create a `.env.local` file in the root directory and add the following:

```env
# Supabase
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key

# NextAuth
AUTH_SECRET=your_nextauth_secret
AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_client_secret

# App URL
NEXTAUTH_URL=http://localhost:3000
```

### 4. Set up Supabase

1. Create a new Supabase project
2. Run the database schema (create tables for cabins, guests, bookings, settings)
3. Add your Supabase credentials to `.env.local`

### 5. Configure Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs: `http://localhost:3000/api/auth/callback/google`
6. Add credentials to `.env.local`

### 6. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
the-wild-hotel-website/
├── app/
│   ├── _components/          # Reusable React components
│   ├── _lib/                 # Utilities, actions, and data services
│   ├── _styles/              # Global styles and animations
│   ├── about/                # About page
│   ├── account/              # User dashboard and profile
│   │   ├── profile/          # Profile management
│   │   └── reservations/     # Booking management
│   ├── api/                  # API routes (NextAuth)
│   ├── cabins/               # Cabin browsing and details
│   └── login/                # Authentication page
├── public/                   # Static assets
└── middleware.js             # Next.js middleware for auth
```

## 🎯 Key Features Explained

### Authentication Flow
- Google OAuth integration via NextAuth
- Protected routes with middleware
- Session management with server components

### Reservation Management
- Date range selection with visual calendar
- Guest count and observation notes
- Real-time availability checking
- Optimistic UI updates for instant feedback

### User Dashboard
- Overview of booking statistics
- Quick access to profile and reservations
- Upcoming and past bookings categorization

## 🎨 Design System

The project uses a custom design system with:
- **Primary Colors:** Grays and blues for base elements
- **Accent Colors:** Purple tones for highlights and CTAs
- **Animations:** Custom keyframes for fade, slide, and scale effects
- **Responsive:** Mobile-first approach with Tailwind breakpoints

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and not licensed for public use.

## 👨‍💻 Author

**Abdallah Zeiada**

- GitHub: [@abdallahzeiada](https://github.com/abdallahzeiada)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment
- Supabase for the backend infrastructure
- The open-source community

---

⭐ If you like this project, please consider giving it a star on GitHub!