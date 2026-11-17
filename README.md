# 📈 Quantara AI — Institutional Quantitative Research Platform

**Quantara AI** is an end-to-end quantitative research and algorithmic trading platform designed for systematic trend forecasting and risk evaluation across high-liquidity National Stock Exchange of India (NSE) equities (e.g., RELIANCE, TCS, HDFCBANK, INFY).

### 🚀 Key Features
- **Predictive ML & Deep Learning Core:** Benchmarking Logistic Regression, LightGBM, Random Forest, LSTM, and GRU architectures on multi-horizon forward returns (1D, 5D, 20D).
- **Leakage-Free Validation:** Strict chronological train/validation/test split policies and audited walk-forward validation.
- **FastAPI Backend:** Real-time quote inference engine, RESTful endpoints, and WebSocket market feeds.
- **Next.js 14 Financial Terminal:** Modern institutional dashboard with interactive charts, strategy equity curves, performance blotters, and model metrics.
- **Dynamic Prediction Envelope:** Monte Carlo forward cone with 50% inner and 90% outer confidence intervals projecting price drift over T+1D, T+5D, and T+30D horizons.
- **What-If Macro Stress Lab:** Real-time interactive counterfactual simulation adjusting volatility scaling, volume pressure bias, and sentiment drift.
- **Dynamic Kelly Criterion Position Sizer:** Mathematically sound fractional capital budgeting calibrated to model win probability and rolling ATR stop-losses.
- **Terminal User Guide (`/guide`):** Comprehensive interactive operating manual and viva defense reference.

---

## 🛠️ Technology Stack
- **Frontend:** Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, Lucide Icons, D3.js, Lightweight Charts, Three.js
- **Backend:** FastAPI (Python 3.10+), PyTorch (LSTM & GRU), Scikit-Learn, LightGBM, Pandas, NumPy, Uvicorn
- **Market Data:** NSE 8-Stock Suite (BHARTIARTL, HDFCBANK, ICICIBANK, INFY, ITC, RELIANCE, SBIN, TCS)

---

## ⚡ Quick Start Guide

### 1. Prerequisites
- Python 3.10+
- Node.js 18+ & npm
- Git

### 2. Backend Setup (FastAPI)
```bash
# Navigate to project root
cd QUANTARA---AI

# Activate virtual environment
# Windows:
.venv\Scripts\activate
# Linux/macOS:
source .venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Launch FastAPI Backend
uvicorn web_app.api:app --reload --host 127.0.0.1 --port 8000
```
Backend API will be live at: `http://127.0.0.1:8000` (Docs at `http://127.0.0.1:8000/docs`).

### 3. Frontend Setup (Next.js Financial Terminal)
```bash
# Open a new terminal and navigate to frontend
cd frontend

# Install dependencies
npm install

# Build for production
npm run build

# Start production server
npm run start -- -p 3000
```
Financial Terminal will be live at:
- **Terminal Dashboard:** `http://localhost:3000/dashboard`
- **User Guide & Presentation Manual:** `http://localhost:3000/guide`
- **Landing Page:** `http://localhost:3000`

---

## 📊 Project Architecture
```
QUANTARA---AI/
├── config/              # Feature dictionaries & data configurations
├── data/                # Audited historical data & chronological splits
├── models/              # Pretrained PyTorch & Scikit-Learn weights
├── scripts/             # Data audit & build pipelines
├── web_app/             # FastAPI inference server & REST endpoints
└── frontend/            # Next.js 14 Institutional Trading Terminal
    ├── src/
    │   ├── app/         # Next.js App Router (/, /dashboard, /guide)
    │   ├── components/  # D3 charts, Command palette, Three.js visuals
    │   ├── features/    # Prediction, What-If, Kelly Sizer, Backtest
    │   └── store/       # Zustand real-time market store
```

---

## ⚖️ License & Disclaimer
This platform is for academic quantitative research and educational demonstration only. No live order placement or financial advice is provided. Past simulation results do not guarantee future returns.
