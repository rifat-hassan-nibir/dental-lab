# Dental Lab - Advanced Dental Laboratory Services

A modern, high-performance web application for a full-service dental laboratory, built with a focus on premium design, responsiveness, and performance.

Live Demo - https://dental-lab-nibir.vercel.app

## 🚀 Tech Stack & Design Choices

The project leverages a modern tech stack to ensure a seamless developer experience and a premium user interface:

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router) for optimized performance and SEO.
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) for a utility-first, highly maintainable design system.
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for smooth entrance animations and interactive micro-transitions.
- **Typography**:
  - **Bricolage Grotesque**: Used for headings to give a distinct, professional look.
  - **Inter**: Used for paragraphs to ensure maximum readability.
- **Icons**: [Lucide React](https://lucide.dev/) for consistent, scalable iconography.
- **Utilities**:
  - `clsx` & `tailwind-merge`: For robust Tailwind class management and conflict resolution.

## 🛠️ Setup Instructions

Follow these steps to get the project running locally:

### 1. Clone the Repository

```bash
git clone https://github.com/rifat-hassan-nibir/dental-lab
cd dental-lab
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### 4. Build for Production

```bash
npm run build
npm start
```

## 📂 Project Structure

- `app/`: Next.js App Router pages and layout configurations.
- `components/`: Reusable UI components grouped by feature (e.g., `common`, `home`).
- `constants/`: Centralized data for navigation links, testimonials, and section content.
- `lib/`: Utility functions (e.g., `cn` helper for Tailwind classes).
- `public/`: Assets including logos and images.

## 🌟 Improvements

Designed with a user-centric approach, several improvements were implemented to transform a standard landing page into a premium, high-conversion experience:

### 1. Navigation (Header & Topbar)

- **What**: Placed critical contact info and social links in a dedicated topbar; applied a glassmorphism effect to the main header.
- **Why**: To ensure contact details are discoverable instantly while maintaining a modern, professional, and trendy aesthetic.

### 2. Hero Section

- **What**: Integrated a primary Call to Action (CTA) that scrolls directly to the lead form and included an auto-playing image slider.
- **Why**: Improves UX by guiding users toward the conversion goal immediately and visually showcasing the laboratory's craftsmanship.

### 3. Our Features

- **What**: Organized service highlights into a grid with interactive hover effects and clear iconography.
- **Why**: Makes the lab's technical advantages (precision, speed, value) easy to scan and digest for busy dental professionals.

### 4. Stats Section

- **What**: Redesigned as a high-contrast, minimalist section highlighting "Why Top Dentists Trust Us".
- **Why**: Uses quantitative data (1,700+ partners, 64+ years experience) to establish industry authority and trust within seconds.

### 5. About Us (Heritage & Team)

- **What**: Split into "Our Partners" and "Our Technicians" with specific credibility badges for experience and reach.
- **Why**: Humanizes the brand by showcasing the experts behind the restorations and the scale of the dental practices supported.

### 6. Our Products (Services)

- **What**: Implemented a tabbed navigation system for Fixed, Implants, Removables, and Retainers with image galleries.
- **Why**: Allows for detailed exploration of a comprehensive service catalog without cluttering the screen or overwhelming the user.

### 7. Testimonials

- **What**: Redesigned as an infinite auto-scrolling slider to showcase nationwide trust.
- **Why**: Provides continuous social proof in a dynamic, modern format that keeps the page feeling active.

### 8. Contact & Newsletter

- **What**: Created a clean two-column contact layout and a focused newsletter subscription box.
- **Why**: Reduces friction for direct inquiries and offers a clear value proposition (exclusive lab tips/offers) for joining the mailing list.

### 9. Interactive Experience (Animations)

- **What**: Added consistent `whileInView` entrance animations across every section with optimized viewport triggers.
- **Why**: Makes the scroll experience feel responsive and "alive," gradually revealing content as the user explores the page.
