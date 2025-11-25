# Industrial Engineering Tools

A comprehensive Nuxt.js web application for industrial engineering calculations, built by Rong ZHOU.

## Features

### Welcome Screen
- Displays the application title: "Industrial Engineering Tools"
- Shows current date and time (updates in real-time)
- Navigation to other screens
- Author information

### Reliability Calculator
- **Model Selection**: Choose between two reliability models:
  - **Exponential Model**: R(t) = e^(-λt)
  - **Linear Model**: R(t) = at + 1
- **Input Parameters**:
  - N₀: Total number of pieces
  - t: Time of verification
  - N₁: Number of pieces still functional
- **Calculations**:
  - Automatically calculates reliability equation parameters
  - Computes reliability at verification time
  - Generates interactive chart visualization
- **Export/Import**:
  - Export results as JSON
  - Export results as PDF
  - Import previous JSON results

### Procédure de Consignation (Lockout/Tagout Procedure)
- **Intervention Information**: Title, description, date, personnel, location
- **Safety Equipment (EPI/EPC)**: Searchable suggestions for safety equipment
- **Danger Identification**: Pre-defined danger categories with value inputs
- **Risk Analysis**: Markdown-supported text area for detailed risk analysis
- **Materials List**: Track required materials with quantities and pricing
- **Reference Documents**: Organize reference documents by type
- **Step-by-step Instructions**: Add, reorder, and attach photos to each step
- **Improvement Suggestions**: Track ideas for process improvement
- **Export/Import**: Save and load procedures as JSON files

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Generate static site
npm run generate
```

## Usage

1. Start the application:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

3. From the welcome screen, click on "Reliability Calculator" or "Procédure de Consignation" to access the tools

## Technology Stack

- **Framework**: Nuxt.js 4
- **Language**: Vue 3 + TypeScript
- **Charting**: Chart.js
- **Math Rendering**: KaTeX
- **Markdown**: marked

## Project Structure

```
├── app/
│   ├── pages/              # Page components
│   │   ├── index.vue       # Home page
│   │   ├── reliability-calculator.vue
│   │   └── consignment.vue
│   ├── app.vue             # Root component
│   └── components/         # Reusable components
├── assets/
│   └── css/
│       └── main.css        # Global styles
├── public/
│   ├── fonts/              # KaTeX fonts
│   └── js/                 # External libraries
├── nuxt.config.ts          # Nuxt configuration
└── package.json
```

## Author

Rong ZHOU

## License

ISC
