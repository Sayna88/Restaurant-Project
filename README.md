# 🍽️ Restaurant & Café Menu App

A modern, responsive, and interactive digital menu application built with React and TypeScript. This project features a beautifully designed UI for browsing both restaurant meals and café treats, complete with smooth scrolling navigation and a functional shopping cart system.

## 🚀 Features

- **Interactive Digital Menu:** Premium UI for browsing different food and beverage categories.
- **Smooth Scrolling Navigation:** A sticky, horizontal scrollable category navbar that smoothly glides to the selected section.
- **State Management:** Integrated Shopping Cart using React Context API to handle "Add to Order" functionality.
- **Fully Responsive:** Optimized for all devices (Mobile, Tablet, Desktop) using Tailwind CSS.
- **Custom Assets:** Utilizes custom SVG icons and dynamic hover effects for a modern user experience.
- **Dynamic Routing:** Built with React Router for seamless transitions between different sections (e.g., Restaurant vs. Café).

## 🛠️ Tech Stack

- **Framework:** React.js
- **Language:** TypeScript (`.tsx`)
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM (`react-router-dom`)
- **State Management:** React Context API

## 📂 Project Structure

Here is a brief overview of the core project structure:

```text
src/
├── components/
│   └── pages/
│       ├── restaurantMenu/
│       │   └── RestaurantMenu.tsx
│       └── cafeMenu/
│           └── CafeMenu.tsx
├── context/
│   └── CartContext.tsx         # Global state for shopping cart
├── data/
│   ├── RestaurantData.ts       # Mock data for restaurant items
│   └── CafeData.ts             # Mock data for cafe items
└── App.tsx                     # Main application entry and routing
