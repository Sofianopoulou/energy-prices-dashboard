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

## 🚀 Deployed on Vercel
[![Vercel](https://vercel.com/button)](https://energy-prices-dashboard.vercel.app/)

