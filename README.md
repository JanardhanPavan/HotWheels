🏎️ Hotwheels - Automotive Showcase Project
A high-performance, visually dynamic web application dedicated to automotive enthusiasts, built with:
🖥️ Frontend: React.js
🎨 Styling: Tailwind CSS
It allows users to explore vehicle collections, view detailed specifications, and manage a personalized garage through a modern, responsive interface.

🚀 How to Run This Project (Locally)
To get the development environment running, ensure you have Node.js installed.

🎨 Running the Application
Clone the repository:

Bash
git clone https://github.com/JanardhanPavan/HotWheels
Navigate to the project directory:

Bash
cd hotwheels
Install dependencies:

Bash
npm install
Start the development server:

Bash
npm run dev
Then open your browser and go to:
👉 http://localhost:5173 (or the URL shown in your terminal)

📡 Features & Functionality
The project leverages React's component-based architecture and Tailwind's utility-first styling for a premium feel.

Key Modules
🧾 Vehicle Catalog

Description: A dynamic gallery showcasing various car models with high-quality imagery.

Logic: Built with React components for efficient rendering and state management of vehicle lists.

🛠️ Advanced Filtering & Search

Description: Users can filter cars based on make, model, or performance specs.

Styling: Tailwind CSS provides a seamless, mobile-first responsive layout for the filter sidebars and grids.

🏎️ "My Garage" / Favorites

Description: A personalized section where users can add vehicles they are interested in.

Logic: Uses React useState and useEffect (and potentially localStorage) to persist user selections during the session.

⚙️ Assumptions Made
🧩 Project Structure
The project follows a modern React directory pattern:

/src/components → Reusable UI elements (Buttons, Cards, Navbar).

/src/pages → Main views (Home, Vehicle Details, Garage).

/src/assets → Optimized vehicle assets and brand logos.

tailwind.config.js → Custom theme configurations for the "Hotwheels" brand identity.

🎨 UI/UX Assumptions
Utility-First Styling: Tailwind CSS was used to achieve a "dark mode" or high-contrast automotive aesthetic without writing bulky CSS files.

Component Reusability: Each vehicle card is a reusable component, making the app easily scalable for hundreds of items.

Fast Performance: React's Virtual DOM ensures smooth transitions and fast loading times when navigating between car categories.

🗄️ State Management
React Hooks: Leveraged for handling UI states like search queries, loading spinners, and modal views.

🧑‍💻 Author
Developed by Pavan — Hotwheels Project
Built with ❤️ using React.js and Tailwind CSS.

🔗 LINKS
Repository: https://github.com/JanardhanPavan/HotWheels
