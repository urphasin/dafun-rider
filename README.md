# 🚗 Ride Share App (React + TypeScript + Speedy Web Compiler(SWC) + Vite)

I am using:

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

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
