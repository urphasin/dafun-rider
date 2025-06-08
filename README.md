# 🚗 Ride Share App (React + TypeScript + Speedy Web Compiler(SWC) + Vite)

I am using:

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
- TailwindCSS
- React Router V7

Welcome! This project is the frontend for a ride-sharing app built with React and Vite. It will communicate with a C++ backend via REST APIs.

## 📁 Folder Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── RideCard.tsx
│   ├── RideRequestForm.tsx
│   ├── LocationPicker.tsx
│   └── Button.tsx
├── pages/               # Page views (routed with React Router)
│   ├── Home.tsx
│   ├── FindRide.tsx
│   ├── OfferRide.tsx
│   └── Login.tsx
├── styles/              # Global & component-specific styles
│   └── globals.css
├── App.tsx
├── main.tsx
└── vite.config.js
```

## 🧩 Suggested Components

| Component | Description |
|----------|-------------|
| `Header.jsx` | Navigation bar with app name, links |
| `Footer.jsx` | Optional footer with links/contact |
| `RideCard.jsx` | UI block to show a ride (driver, time, location) |
| `RideRequestForm.jsx` | Form to input pickup/dropoff & submit request |
| `LocationPicker.jsx` | Optional component for selecting a location (dropdown/map) |
| `Button.jsx` | Reusable styled button component |

``` ```


# 🛠️ How to Start Building Your Ride Share App

## 1. Build `Header.jsx` and `Footer.jsx`

- Add these components to **all pages** for consistent layout and navigation.

## 2. Create `RideCard.jsx`

- A small, reusable UI component for displaying **one ride's information** (e.g. driver, route, time, price).

## 3. Build `RideRequestForm.jsx` or `OfferRideForm.jsx`

- A form that allows users to request or offer a ride with input fields:
  - 📍 **Pickup location**
  - 🏁 **Dropoff location**
  - ⏰ **Preferred time**
  - ✅ **Submit button** to trigger a `POST` to the backend.

### ➕ Include `LocationPicker.jsx` as a Sub-Component

#### 🎯 Purpose of `LocationPicker.jsx`:
Handles how users select pickup and dropoff locations through:

- 🗂️ A **dropdown** of popular or saved locations  
- 🔍 A **search input** with autocomplete (e.g., Google Places API)  
- 🗺️ An **interactive map** (e.g., Leaflet or Google Maps)

Use this in both `RideRequestForm` and `OfferRideForm` as needed.

## 4. Set Up Routing (in `pages/`)

Configure `react-router-dom` to navigate between routes:

- `/` – Home  
- `/find` – Find a ride  
- `/offer` – Offer a ride  
- `/login` – User authentication (for later)

## 5. Style Everything

- Use **Tailwind CSS** or your own CSS system  
- Ensure a **clean, mobile-friendly** design

---

# ✅ Next Features to Add

- [ ] User **login/signup** page  
- [ ] Store **ride requests and offers** in app state  
- [ ] Integrate with your **C++ backend**  
- [ ] Add **map features** (optional; Leaflet or Google Maps API)  
- [ ] Show **nearby available rides**
