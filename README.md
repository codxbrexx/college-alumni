# NetGrud Alumni Platform

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg) ![License](https://img.shields.io/badge/license-MIT-green.svg) ![Status](https://img.shields.io/badge/status-production--ready-success.svg)

**NetGrud** is a comprehensive, enterprise-grade alumni networking solution designed to bridge the gap between academic institutions and their graduates. It fosters professional growth, mentorship, and community engagement through a modern, seamless digital experience.

---

## 🚀 Project Overview

The platform addresses the challenge of disconnected alumni networks by providing a centralized hub for interaction. It features a high-performance frontend with an editorial design language and a scalable backend architecture capable of handling complex user relationships and content management.

### Key Capabilities

-   **Advanced Directory & Networking**: Semantic search and filtering for finding mentors and peers based on industry, location, or skills.
-   **Career Acceleration Portal**: A dedicated job board with intelligent filtering and a multi-step "Wizard" interface for posting opportunities.
-   **Editorial Content Engine**: A magazine-style news and events section to keep the community engaged with campus updates.
-   **Real-time Analytics**: Interactive placement statistics and recruiter insights to showcase institutional success.
-   **Secure Authentication**: Role-based access control with split-screen login/registration flows and dedicated support channels.

---

## 🛠️ Engineering Architecture

### Technology Stack

| Component | Technologies |
| :--- | :--- |
| **Frontend** | React 19, Vite 7, Tailwind CSS 4, Framer Motion, Chart.js |
| **Backend** | Node.js, Express 5, MongoDB, Mongoose |
| **Authentication** | JWT (Access/Refresh Tokens), Secure Password Hashing |
| **Infrastructure** | Vercel (Client), Cloudinary (Media CDN) |

### Design Philosophy

-   **"Sharp & Editorial"**: Moved away from generic glass-morphism to a high-contrast, serif-heavy aesthetic (`border-b-2` inputs, sharp corners) to convey professionalism and trust.
-   **Mobile-First Responsive**: Implemented a "Drawer" navigation pattern and scroll-locking mechanisms to ensure a native-app-like experience on mobile devices.
-   **Performance Optimized**: Utilizes static asset optimization and component lazy-loading to ensure sub-second interaction times.

---

## ⚡ Developer Setup

Follow these steps to set up the development environment locally.

### Prerequisites
-   Node.js (v18+)
-   MongoDB (Local or Atlas)

### Installation

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/codxbrexx/college-alumni.git
    cd college-alumni
    ```

2.  **Install Dependencies**
    ```bash
    # Install Client Dependencies
    cd Frontend && npm install

    # Install Server Dependencies
    cd ../Backend && npm install
    ```

3.  **Configuration**
    Create a `.env` file in the `Backend` directory with your MongoDB URI and Cloudinary credentials.

4.  **Start Development Servers**
    ```bash
    # Terminal 1: Frontend (http://localhost:5173)
    cd Frontend && npm run dev

    # Terminal 2: Backend (http://localhost:5000)
    cd Backend && npx nodemon index.js
    ```

---

## 🔮 Future Roadmap

-   [ ] **AI-Powered Matching**: Recommendation engine for mentorship connections.
-   [ ] **Real-time Messaging**: WebSocket integration for instant alumni-student chat.
-   [ ] **Donation Portal**: Payment gateway integration for alumni fundraising.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---
*Architected and developed with a focus on scalability and user experience.*