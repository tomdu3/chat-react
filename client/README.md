# React Chat Client

A beautifully designed, real-time chat application client built with React, Vite, and Socket.io.

## UI & Design Features

This client has been upgraded with a modern **Glassmorphism Dark-Mode** design system:

* **Theme**: Deep space/violet theme using harmonious HSL-based gradient backgrounds.
* **Glassmorphism**: Semi-translucent panels (`backdrop-filter: blur(20px)`) with subtle border highlights and glow effects.
* **Typography**: Integrated Google Fonts (`Outfit` for headings/branding, `Inter` for messages) for premium visual styling.
* **Chat Bubbles**: Distinct styles for sender messages (gradient purple-indigo bubble, right-aligned) and receiver messages (subtle dark glass bubble, left-aligned).
* **Interactive States**: Smooth scaling animations, glowing outline focus states, and keyframe slide-up animations for messages.
* **Empty State**: Beautiful SVG placeholder for rooms with no messages yet to guide user interaction.
* **Responsive Layout**: Adapts seamlessly from large screens to full-screen layouts on mobile viewports.

## Core Functionality

* **Real-time Communication**: Integrated `socket.io-client` for seamless state-driven message exchange.
* **Smart Scrolling**: Automatically scrolls down to show the latest message whenever one arrives.
* **Enter-to-Send**: Supports sending messages by pressing the `Enter` key or clicking the glowing arrow button.
* **Badging**: Displays the active Room ID directly in the header.
* **Form UX**: Prevents standard HTML form reloads, ensuring a single-page app experience.

## Running the Application

### 1. Start the Backend Server
In the `/server` directory:
```bash
npm install
npm start
```

### 2. Start the Frontend Client
In this directory (`/client`):
```bash
npm install
npm run dev
```
Open `http://localhost:5173` in multiple browser tabs to start chatting!
