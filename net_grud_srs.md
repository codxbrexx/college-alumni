# NetGrud — Software Requirements Specification (SRS)

**Document Version:** 1.0

**Date:** January 26, 2026

**Author:** Project Team — NetGrud

---

## Revision History

| Version | Date | Author | Notes |
|---|---:|---|---|
| 0.1 | 2025-12-01 | Draft | Initial outline (requirements intake) |
| 0.5 | 2026-01-15 | Draft | Detailed functional & non-functional sections added |
| 1.0 | 2026-01-26 | Final | Polished SRS for implementation handoff |

---

## Table of Contents

1. Introduction
   1. Purpose
   2. Intended Audience
   3. Scope
   4. Definitions, acronyms, abbreviations
2. Overall Description
   1. Product perspective
   2. User classes and characteristics
   3. Operating environment
   4. Design and implementation constraints
   5. Assumptions and dependencies
3. Functional Requirements (Feature list)
   1. Authentication & Authorization
   2. User Profiles & Onboarding
   3. Alumni Directory & Search
   4. Jobs Board
   5. News / Editorial Section
   6. Placement Analytics Dashboard
   7. Institutions & Admin Portal
   8. Notifications & Messaging
   9. Media management (Cloudinary)
  10. APIs & Integrations
4. Non-Functional Requirements
   1. Performance
   2. Scalability
   3. Security
   4. Reliability & Availability
   5. Maintainability & Observability
   6. Accessibility & UX
   7. Internationalization & Localization
5. Data Model & Schemas
   1. Key Mongoose Schemas (simplified)
6. API Design (Representative endpoints)
7. UI/UX Requirements & Design System
8. User Flows & Use Cases
9. Acceptance Criteria & Test Cases
10. Deployment, CI/CD & Operational Requirements
11. Legal, Compliance & Privacy
12. Appendix

---

# 1. Introduction

## 1.1 Purpose

This Software Requirements Specification (SRS) document describes the functional and non-functional requirements for **NetGrud**, a full-stack alumni networking and career platform. The SRS is the authoritative guide for designers, front-end and back-end engineers, QA, DevOps, and stakeholders for development, testing, and acceptance.

## 1.2 Intended Audience

- Product owner / stakeholders (colleges, alumni relations)
- Engineering team (frontend, backend, QA, DevOps)
- UI/UX designers
- Project managers
- External integrators (HR systems, SSO providers)

## 1.3 Scope

NetGrud provides a specialized social network for colleges to manage alumni relationships, job postings, news, and placement analytics. The platform supports three primary user roles (Students, Alumni, Institution Admins) and offers features such as a searchable alumni directory, jobs board, editorial news, placements analytics, and secure authentication.

## 1.4 Definitions, acronyms, abbreviations

- SRS — Software Requirements Specification
- JWT — JSON Web Token
- CDN — Content Delivery Network
- API — Application Programming Interface
- UI — User Interface
- UX — User Experience
- CRUD — Create, Read, Update, Delete
- MFA — Multi-Factor Authentication

---

# 2. Overall Description

## 2.1 Product perspective

NetGrud is a single product (SaaS) composed of a React + Vite frontend and a Node.js + Express backend with MongoDB persisting data. Media is stored on Cloudinary, and the system uses JWT for stateless session management (with refresh token flow). The product integrates with third-party identity providers (optional), analytics services, and email providers (SendGrid/SES).

## 2.2 User classes and characteristics

- **Student** — Current students (yearOfPassout > currentYear). Primary needs: find mentors, access jobs, view placements.
- **Alumni** — Graduates (yearOfPassout <= currentYear). Primary needs: networking, posting jobs, mentoring.
- **Institution Admin** — College staff who post news, manage placements, and moderate content.
- **Recruiter / Company Contact** — External accounts (can be associated to company profiles) that post jobs.
- **System Admin / DevOps** — Technical administrators for platform management (access to logs, metrics, backups).

## 2.3 Operating environment

- Frontend: Modern browsers (Chrome, Firefox, Safari, Edge) — latest two major versions
- Backend: Node.js 20+ runtime
- Database: MongoDB 6+ (Atlas or self-hosted)
- Storage: Cloudinary or S3-compatible CDN for images
- Hosting: Cloud (AWS/GCP/Azure) or platform-as-a-service (Vercel, Render) for frontend and backend

## 2.4 Design and implementation constraints

- Use React 19 + Vite as build tooling and Tailwind CSS 4 for styling
- Express 5 and Mongoose for backend
- JWT-based stateless auth with refresh tokens stored securely (httpOnly cookies or secure storage)
- Cloudinary for media hosting; images served via CDN with lazy loading
- Accessibility: WCAG AA minimum

## 2.5 Assumptions and dependencies

- Institution will provide official domain(s) and branding assets
- Cloudinary account and API keys available prior to media features
- Institutions may provide CSV / bulk import of alumni (optional)
- Email service (SendGrid or AWS SES) provisioned for transactional emails

---

# 3. Functional Requirements

> Use the RFC-2119 keywords: **MUST**, **SHOULD**, **MAY** to indicate requirement priority.

## 3.1 Authentication & Authorization

1. **User registration**
   - The system **MUST** support user registration using email and password. (MUST)
   - The system **SHOULD** optionally support single sign-on (SSO) using OAuth providers (Google, Microsoft) for institution-branded accounts. (SHOULD)

2. **Login / Session**
   - The system **MUST** authenticate users using JWTs (access + refresh pattern). (MUST)
   - Access tokens expire after a short period (e.g., 15 minutes); refresh tokens expire after a configurable longer period (e.g., 30 days). (MUST)
   - Refresh tokens **MUST** be revocable (server-side store or rotation). (MUST)

3. **Password management**
   - Passwords **MUST** be hashed with bcrypt before storage. (MUST)
   - The system **MUST** provide password-reset functionality via email with single-use, time-limited tokens. (MUST)

4. **Role-based access control (RBAC)**
   - Roles: Student, Alumni, InstitutionAdmin, Recruiter, SystemAdmin. (MUST)
   - The system **MUST** restrict admin actions (posting authoritative news, approving recruiters, viewing placement dashboards) to InstitutionAdmin or SystemAdmin roles. (MUST)

5. **Multi-step profile wizard**
   - On first login, the user **SHOULD** be guided through a multi-step profile wizard (Personal → Professional → Social). (SHOULD)

6. **Security**
   - The system **MUST** support MFA for InstitutionAdmin and SystemAdmin roles. (MUST)

## 3.2 User Profiles & Onboarding

1. **Profile fields**
   - Each user profile **MUST** include: fullName, displayName, email, avatar (image), yearOfPassout, branch, profession, companyDetails, skills (array), aboutYou, linkedInProfileLink, gitHubProfileLink, city, state. (MUST)

2. **Student/Alumni detection**
   - The system **MUST** automatically assign role Student if yearOfPassout > currentYear, else Alumni. (MUST)

3. **Profile privacy controls**
   - Users **SHOULD** be able to mark fields as public / alumni-only / private. (SHOULD)

4. **Bulk import**
   - InstitutionAdmin **MAY** upload CSV files to bulk import alumni records with validation and duplicate detection. (MAY)

## 3.3 Alumni Directory & Search

1. **Directory listing**
   - The system **MUST** provide a paginated, searchable alumni directory. (MUST)

2. **Search capabilities**
   - Smart search by name, company, city, profession; global filters for graduation year and industry. (MUST)
   - Hero-based search (search bar in header) **SHOULD** provide debounced search (500ms) and incremental results. (SHOULD)

3. **Profile cards**
   - Directory results **SHOULD** display condensed profile cards with an expandable accordion view for quick details (bio, skills, social links). (SHOULD)

4. **Filters & sorting**
   - Filters: batch (yearOfPassout), city, industry, company, skills; Sorting: relevance, alphabetical, newest, most active. (MUST)

## 3.4 Jobs Board

1. **Job posting**
   - Alumni and authorized recruiters **MUST** be able to create job posts with title, company, location, type (Full-time/Contract/Internship/Remote), salary range, experience, required skills, description, application link, and contact. (MUST)

2. **Moderation & approval**
   - Job posts **MAY** be subject to moderation by InstitutionAdmin prior to public listing. (MAY)

3. **Search & filters**
   - Intelligent filters by location, type, skills, salary range, remote flag, and posting date. Debounced search for performance. (MUST)

4. **Apply flow**
   - Students **MUST** be able to apply via an external link or in-app (upload CV / send message to poster). (MUST)

5. **Saved jobs**
   - Users **MUST** be able to save/bookmark jobs. (MUST)

## 3.5 News / Editorial Section

1. **Article creation**
   - InstitutionAdmins and authorized Alumni **MUST** be able to create News Posts with title, content (rich text / markdown), category (Achievement, Event, Update), image, and tags. (MUST)

2. **Magazine-style layout**
   - The UI **SHOULD** present news in an editorial, serif-typed layout with featured images and category filtering. (SHOULD)

3. **Comments & engagement**
   - Users **MAY** comment on news posts (configurable by InstitutionAdmin). Comment moderation tools required. (MAY)

## 3.6 Placement Analytics Dashboard

1. **Metrics**
   - Dashboard **MUST** show: average package, highest package, placement rate, offers per company, top recruiters, trend charts (year-by-year) and cohort comparisons. (MUST)

2. **Filtering & segmentation**
   - Ability to filter data by graduation year, branch, and recruiter. (MUST)

3. **Charts & interactivity**
   - Use Chart.js for interactive charts with hover tooltips and drill-downs. (SHOULD)

4. **Data import**
   - InstitutionAdmins **MUST** be able to upload placement CSVs. Uploaded data must be validated. (MUST)

## 3.7 Institution & Admin Portal

1. **Institution profile**
   - InstitutionAdmins **MUST** manage the institution profile, news, placement uploads, and user invitations. (MUST)

2. **Moderation & reporting**
   - Tools for approving user-generated content, jobs, and news; reports for abusive content and takedowns. (MUST)

3. **Engagement insights**
   - Simple analytics: monthly active users, job views, news engagement. (SHOULD)

## 3.8 Notifications & Messaging

1. **Notifications**
   - System **MUST** support in-app notifications and email digests (configurable frequency). (MUST)

2. **Direct messaging**
   - Scoped messaging between alumni and students **MAY** be provided; rate-limited and subject to user privacy controls. (MAY)

## 3.9 Media Management

1. **Profile & post images**
   - Uploads **MUST** be sent to Cloudinary with automatic transformations (thumbnail, webp) and public CDN delivery. (MUST)

2. **Lazy loading**
   - Images **SHOULD** be lazy-loaded on the client side to improve performance. (SHOULD)

## 3.10 APIs & Integrations

1. **RESTful API**
   - Backend **MUST** expose a versioned REST API for core features (v1). (MUST)

2. **Third-party integrations**
   - Integrations **MAY** include SSO/OAuth, LinkedIn auth (for profile import), email (SendGrid/SES), analytics (Mixpanel/Amplitude), and payments/billing (Stripe) for SaaS subscriptions. (MAY)

---

# 4. Non-Functional Requirements

## 4.1 Performance

- Page Time-to-Interactive (TTI) **SHOULD** be < 3s on 4G for key pages (Landing, Alumni Directory, Profile). (SHOULD)
- Search API responses **MUST** return within 300ms for prioritized queries under normal load. (MUST)
- Jobs and News listing endpoints **SHOULD** support cursor-based pagination.

## 4.2 Scalability

- The system **MUST** be horizontally scalable for stateless services. (MUST)
- MongoDB **SHOULD** be deployed as a managed cluster (Atlas) with read replicas for scaling reads. (SHOULD)

## 4.3 Security

- Transport security **MUST** use TLS 1.2+ for all endpoints. (MUST)
- Passwords **MUST** be salted and hashed (bcrypt). (MUST)
- Access tokens **MUST** be short-lived; refresh tokens stored securely and revocable. (MUST)
- Implement rate limiting on sensitive endpoints (login, password-reset, messaging) to mitigate abuse. (MUST)
- Audit logs **SHOULD** capture admin actions (news publish, job approval). (SHOULD)
- Protect against OWASP Top 10 classes (XSS, CSRF, injection). (MUST)

## 4.4 Reliability & Availability

- Target availability for user-facing services **SHOULD** be 99.9% (SLA set with hosting provider).
- Backups for MongoDB **MUST** be configured daily with point-in-time restore where supported. (MUST)

## 4.5 Maintainability & Observability

- Services **MUST** expose structured logs and metrics (Prometheus-compatible or hosted solution). (MUST)
- Tracing for slow API calls **SHOULD** be available (e.g., OpenTelemetry). (SHOULD)

## 4.6 Accessibility & UX

- All public UI **MUST** meet WCAG 2.1 AA accessibility standards. (MUST)
- Serif headings, editorial layout, and high-contrast colors per design system. (SHOULD)

## 4.7 Internationalization & Localization

- UI **MAY** support i18n; initial release targeted at English (en). Locale-aware dates and number formatting required. (MAY)

---

# 5. Data Model & Schemas (Simplified)

> The following are simplified Mongoose-style schemas for reference. Fields marked `required` indicate MUST.

```javascript
// User schema (simplified)
const User = {
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  passwordHash: { type: String, required: true },
  fullName: String,
  displayName: String,
  avatarUrl: String,
  rollNo: String,
  city: String,
  state: String,
  profession: String,
  yearOfPassout: Number,
  branch: String,
  companyDetails: {
    companyName: String,
    title: String,
    experienceYears: Number
  },
  skills: [String],
  aboutYou: String,
  linkedInProfileLink: String,
  gitHubProfileLink: String,
  role: { type: String, enum: ['Student','Alumni','InstitutionAdmin','Recruiter','SystemAdmin'], default: 'Alumni' },
  createdAt: Date,
  updatedAt: Date
};

// JobPost schema
const JobPost = {
  title: String,
  company: String,
  location: String,
  type: { type: String, enum: ['Full-time','Contract','Internship','Remote'] },
  salaryRange: { min: Number, max: Number },
  experience: String,
  skills: [String],
  description: String,
  postedBy: { type: Schema.Types.ObjectId, ref: 'User' },
  isApproved: { type: Boolean, default: false },
  createdAt: Date
};

// NewsPost schema
const NewsPost = {
  title: String,
  content: String,
  category: { type: String, enum: ['Achievement','Event','Update'] },
  imageUrl: String,
  postedBy: { type: Schema.Types.ObjectId, ref: 'User' },
  createdAt: Date,
  isFeatured: Boolean
};
```

---

# 6. API Design (Representative endpoints)

> All endpoints are under `/api/v1/`

### Authentication

```
POST /auth/register
POST /auth/login
POST /auth/refresh-token
POST /auth/logout
POST /auth/forgot-password
POST /auth/reset-password
```

### Users

```
GET /users/:id             // public profile (field-based privacy applied)
PUT /users/:id             // update own profile
GET /users                 // directory listing (search & filters)
POST /users/bulk-import    // admin CSV import
```

### Jobs

```
GET /jobs                  // list, filters, pagination
POST /jobs                 // create job (alumni/recruiter)
GET /jobs/:id
PUT /jobs/:id              // edit (owner or admin)
POST /jobs/:id/apply       // apply flow (save CV or external link)
```

### News

```
GET /news
POST /news                 // create (admin / authorized alumni)
GET /news/:id
```

### Placements

```
GET /placements/summary
POST /placements/import    // CSV upload by InstitutionAdmin
```

### Admin

```
GET /admin/reports
POST /admin/approve-job/:id
POST /admin/moderate-post/:id
```

Authentication: Bearer access token required for protected endpoints. Certain admin endpoints require InstitutionAdmin role.

---

# 7. UI/UX Requirements & Design System

- **Design language**: "Sharp & Editorial" with high-contrast palettes (Red, Black, White) and serif headings for authority. Use `font-serif` for headings, `font-sans` for body.
- **Component system**: Tailwind utilities, shared components for Hero, Search, Card, Modal, Table, and responsive grid components.
- **Animations**: Framer Motion for subtle entrance, hover, and page transitions. Keep motion preferences accessible (reduce motion for users that request it).
- **Responsive behavior**: All pages must be mobile-first, with breakpoints for tablet and desktop.
- **Forms**: Multi-step wizard for onboarding; show progress indicator and inline validation messages.
- **Accessibility**: Keyboard navigation, focus states, ARIA roles for interactive components.
- **Typography**: Serif headline font (large weight), body copy legible at 16px base. Maintain consistent scale.

---

# 8. User Flows & Use Cases

Provide a selection of primary flows (happy path) and edge cases.

## 8.1 Alumni — Post a Job (Happy Path)
1. Alumni logs in.
2. Clicks "Post Job" in Jobs Board.
3. Completes form (title, company, description, location, skills)
4. Submits — job appears in "My Jobs" with `isApproved=false`.
5. InstitutionAdmin reviews and approves job.
6. Job becomes public and notifications sent to interested users.

## 8.2 Student — Find Mentor & Apply (Happy Path)
1. Student logs in and uses hero search to find alumni at "Google".
2. Filters by batch and city.
3. Opens profile card, sends connection request or message (if allowed) and bookmarks job.
4. Applies to job via in-app upload or external link.

## 8.3 InstitutionAdmin — Upload Placement Data
1. Admin navigates to Placements → Import.
2. Upload CSV with columns: studentId, company, package, offerDate.
3. System validates rows, shows preview and errors.
4. Admin confirms import; charts update.

---

# 9. Acceptance Criteria & Test Cases

> Representative acceptance tests — QA to expand into test-runner format.

## 9.1 Authentication
- Register with valid email → user created, receives verification email.
- Login with valid credentials → returns access + refresh token.
- Refresh token invalid after logout → new requests fail.

## 9.2 Directory Search
- Searching `name=John` returns relevant results within 300ms (under nominal load).
- Filtering by `yearOfPassout=2020` restricts results to that cohort.

## 9.3 Job Posting
- Create job as alumni → job created with `isApproved=false`.
- InstitutionAdmin approves job → job appears in public job listing.

## 9.4 Placement Import
- Upload malformed CSV → system warns and rejects invalid rows; valid rows imported.

---

# 10. Deployment, CI/CD & Operational Requirements

- **Repository structure**: monorepo with `frontend/` and `backend/` folders (or separate repos if preferred).
- **CI**: Run linting, unit tests, and security checks on PRs. Use GitHub Actions/GitLab CI. (MUST)
- **CD**: Deploy frontend to Vercel/Netlify, backend to scalable Node host (ECS/managed container). (SHOULD)
- **Secrets management**: Use environment secrets (AWS Secrets Manager, Vault, or platform secret store). (MUST)
- **Backups**: Automated daily DB backups; test restore quarterly. (MUST)
- **Monitoring**: Error tracking (Sentry), metrics (Prometheus/Grafana or hosted), uptime checks. (MUST)

---

# 11. Legal, Compliance & Privacy

- Collect and store personal data minimised to required fields.
- Provide Privacy Policy and Terms of Use pages.
- Provide a mechanism for account deletion and data export (GDPR-style portability). (MUST)
- Securely store PII and ensure encryption in transit and at rest (where supported). (MUST)
- Age restrictions: Require confirmation if user is under 13; comply with applicable laws. (MUST)

---

# 12. Appendix

## 12.1 Prioritization matrix

- **MUST**: Authentication, User profiles, Alumni directory, Jobs board basic CRUD, News basic CRUD, Placement import, Security controls.
- **SHOULD**: SSO, detailed analytics, Chart.js interactivity, advanced moderation tools, recruiter workflows.
- **MAY**: Direct messaging, payments/billing, i18n, external HRIS integrations.

## 12.2 Next steps for implementation

1. Convert this SRS into epics & user stories in the project management tool (Jira / ClickUp).
2. Produce API contract spec (OpenAPI/Swagger) from the representative endpoints.
3. Create detailed UI component inventory and design tokens in Figma.
4. Prepare database migration scripts and seed datasets for development.
5. Implement CI pipeline and staging environment prior to production launch.

---

*End of SRS (v1.0)*

