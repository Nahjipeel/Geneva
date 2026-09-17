# Project Plan

**Status**: Integrated
**Created**: 2026-09-17
**Mode**: NEW

---

## 1. Project Overview

**Goal**: Create a polished, mobile-first Geneva Body Shop website that helps Batavia-area drivers understand collision, custom paint, and insurance services, view representative work, and request an estimate. The project is designed so that every module is independently testable.

**App Type**: Static + API

**API Login**: No

**Mode**: NEW

**Deployment Plan**: No deployment plan found

---

## 2. Frontend — Web App

| Component | Technology |
|-----------|-----------|
| **Language** | TypeScript |
| **Framework** | React + Vite |
| **Package Manager** | npm |
| **Test Runner** | vitest |
| **Mocking Library** | vi.mock |
| **Test Command** | npm test |

## 3. Services Required

| Azure Service | Role in App | Environment Variable | Default Value (Local) | Classification |
|---------------|------------|---------------------|----------------------|----------------|
| None | Static content and client-side estimate form require no Azure service or persistent datastore | — | — | Essential |

## 4. Prerequisites

### Run

| Tool | Service(s) | Installed | Version |
|------|------------|-----------|---------|
| Node.js | * | ✅ | v24.18.0 |
| npm | * | ✅ | 11.16.0 |

### Debug

| Tool | Service(s) | Installed | Version |
|------|------------|-----------|---------|
| Docker | * | ✅ | 29.6.1 |
| Docker Compose | * | ✅ | v5.3.0 |
| VS Code | * | ❓ | — |

Double-check any ❓ tools before proceeding.

## 5. Design System & UI

**Component Library**: Fluent UI v9
**Style Direction**: A confident, craft-led automotive service site with deep charcoal surfaces, warm safety-yellow accents, and documentary gallery moments. Use restrained 6px corners, strong dividers, generous whitespace, and clear call-to-action bands that feel trustworthy rather than glossy.
**Typography**: Segoe UI Variable, Segoe UI

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#F2B705` | Estimate and appointment actions, active navigation, repair-status accents |
| `accent` | `#D94F30` | Custom paint highlights, warning emphasis, and gallery tags |
| `surface` | `#F4F1EA` | Warm page background and reading surfaces |
| `text` | `#1D2428` | Body copy, headings, and service details |
| `muted` | `#667176` | Supporting copy, hours, captions, and metadata |
| `border` | `#D7D2C8` | Section dividers, form fields, and gallery boundaries |

### Pages

| Page | Route | Purpose | Layout |
|------|-------|---------|--------|
| Home | `/` | Establish trust quickly, show core services, and drive estimate requests. | `header, nav, hero, main, grid, card-list, actions, footer` |
| Services & Gallery | `/services` | Explain collision, insurance, custom paint, and airbrush work with representative examples. | `header, nav, main, tabs, grid, card-list, action-bar, footer` |
| Request an Estimate | `/estimate` | Capture a customer's contact details, vehicle information, and repair description. | `header, nav, main, two-column(form+card-list), actions, footer` |

### Sample Content

Home — service offering:
| Service | Promise | CTA |
| Collision Repair | Factory-quality body and paint repairs after an accident | Request an estimate |
| Insurance Claims | Guidance through the claim and repair process | Talk with the shop |
| Custom Paint | Custom paint and airbrush work for cars, motorcycles, and helmets | View the gallery |

Services & Gallery — project:
| Project | Medium | Work | State |
| 1965 Mustang restoration | Classic car | $90,000 restoration feature | Featured |
| Custom motorcycle tank | Motorcycle | Custom paint and airbrush finish | Featured |
| Painted helmet | Helmet | Airbrush artwork and clear coat | Featured |

Request an Estimate — estimate form:
Customer name: Jordan Miller · Phone: 630-555-0147 · Vehicle: 2018 Subaru Outback · Service: Collision repair · Preferred contact: Phone · Description: Rear bumper and liftgate damage after a parking-lot collision

## 6. Project Structure

```
geneva-body-shop/
├── .azure/
│   └── project-plan.md
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── vite.config.ts
├── src/
│   ├── app/
│   │   ├── App.tsx
│   │   ├── routes.tsx
│   │   └── theme.ts
│   ├── components/
│   │   ├── SiteHeader.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── GalleryCard.tsx
│   │   └── EstimateForm.tsx
│   ├── content/
│   │   └── siteContent.ts
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── ServicesPage.tsx
│   │   └── EstimatePage.tsx
│   ├── styles/
│   │   └── global.css
│   └── main.tsx
└── tests/
    ├── HomePage.test.tsx
    ├── ServicesPage.test.tsx
    └── EstimateForm.test.tsx
```

## 7. Route Definitions

| # | Method | Path | Description | Request Body | Response Body | Status Codes |
|---|--------|------|-------------|-------------|--------------|-------------|
| 1 | GET | `/` | Home page with shop positioning, services, hours, and primary contact actions | — | Rendered React page | 200 |
| 2 | GET | `/services` | Service descriptions and custom paint gallery | — | Rendered React page | 200 |
| 3 | GET | `/estimate` | Estimate request form | — | Rendered React page | 200 |
| 4 | POST | `/estimate` | Validate and submit an estimate request through the configured form adapter | `{ name, phone, email, vehicle, service, description, preferredContact }` | `{ submitted, reference }` | 201, 422 |

## 8. Next Steps

1. Run **azure-project-scaffold** to execute this plan
2. Run **azure-project-integrate** to wire the frontend to live data, smoke-test the backend, and create the migrations
3. Run **azure-debug-plan** → **azure-debug-generate** for Docker emulators and VS Code debugging
4. Run the **azure-deploy** agent when ready; it uses **azure-app-onboard** for architecture, cost estimation, IaC generation, provisioning, and health verification