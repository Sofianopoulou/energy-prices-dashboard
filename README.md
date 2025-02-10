# Energy Price Dashboard

## 📌 Project Overview  
This project is a web-based dashboard that displays energy price data in a structured format. It consists of:  
- A **table** that presents timeseries data.  
- A **line chart** for visualizing trends in energy prices over time.

## 🚀 Features  
### 1️⃣ Data Representation  
- Reads data from a JSON file containing three timeseries datasets.  
- Displays data with timestamps formatted as: **`DD-MM-YYYY HH:mm`**.  

### 2️⃣ Table View  
- Uses `@tanstack/react-table` for a structured display.  
- The timeseries datasets (energy prices) are shown as columns in the table.  

### 3️⃣ Data Visualization  
- Implements a **line chart** to show trends over time.  
- Uses `chart.js` and `react-chartjs-2` libraries to visualize the timeseries data.

## 🛠️ Tech Stack  
- **React + TypeScript** for building the UI  
- **Tailwind CSS** for styling  
- **@tanstack/react-table** for table representation  
- **chart.js** and **react-chartjs-2** for chart visualization  

## 📈 Setup and Run  
1. Clone the repository:  
   git clone https://github.com/Sofianopoulou/energy-prices-dashboard

2. Navigate into the project folder:
   cd .\tdv-app\
   
3. Install dependencies:
   npm install
   
4. Start the development server:
   npm run dev
=======
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
>>>>>>> feature/date-data-filtering
