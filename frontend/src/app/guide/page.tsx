"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Sliders,
  Scale,
  LineChart,
  ShieldCheck,
  TrendingUp,
  TrendingDown,
  Layers,
  Sparkles,
  BookOpen,
  CheckCircle2,
} from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-background text-text-primary selection:bg-accent/30 selection:text-accent font-sans">
      {/* ── Top Navigation Bar ── */}
      <header className="sticky top-0 z-40 h-14 border-b border-border bg-surface/85 backdrop-blur-md px-4 sm:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs font-mono text-text-secondary hover:text-text-primary px-2.5 py-1 rounded bg-elevated/70 hover:bg-elevated border border-border transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-accent" />
            <span>Home</span>
          </Link>
          <div className="flex items-baseline gap-1.5 font-mono">
            <span className="font-extrabold text-base text-accent tracking-tight">QUANTARA</span>
            <span className="text-[10px] text-text-muted tracking-widest uppercase">// USER GUIDE</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/dashboard"
            className="px-3 py-1.5 rounded bg-accent/20 hover:bg-accent/30 border border-accent/40 text-accent font-mono text-xs font-bold flex items-center gap-1.5 transition-all shadow-[0_0_12px_rgba(0,240,255,0.15)]"
          >
            <span>Launch Dashboard</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </header>

      {/* ── Hero Banner ── */}
      <div className="border-b border-border bg-gradient-to-b from-surface via-surface/60 to-background py-10 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-mono">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Quantara AI Operational Manual & Viva Defense Guide</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary font-sans">
            How to Use & Demonstrate Quantara AI
          </h1>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            Step-by-step instructions for navigating the institutional research terminal, interpreting Deep Learning predictions, executing counterfactual stress tests, and sizing positions mathematically.
          </p>
        </div>
      </div>

      {/* ── Main Content Container ── */}
      <main className="max-w-4xl mx-auto px-4 sm:px-8 py-10 space-y-12">
        {/* SECTION 1: SYSTEM ARCHITECTURE & WORKFLOW */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-accent font-mono text-xs font-bold uppercase tracking-wider">
            <span className="px-2 py-0.5 rounded bg-accent/15 border border-accent/30">01</span>
            <span>Platform Overview & Workflow</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-text-primary">Terminal Layout At A Glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
            <div className="p-4 rounded-lg bg-surface border border-border space-y-2">
              <div className="flex items-center gap-1.5 text-accent font-bold">
                <Layers className="w-4 h-4" />
                <span>1. Left Sidebar</span>
              </div>
              <p className="text-text-muted leading-relaxed">
                Contains the <strong>NSE Watchlist</strong> and <strong>Universe Equities</strong>. Click any stock (e.g., RELIANCE, TCS, HDFCBANK) to switch the active context across all models and charts.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-surface border border-border space-y-2">
              <div className="flex items-center gap-1.5 text-gain font-bold">
                <Sliders className="w-4 h-4" />
                <span>2. Center Simulation</span>
              </div>
              <p className="text-text-muted leading-relaxed">
                Houses the <strong>Prediction & What-If Engine</strong> and the <strong>Dynamic Kelly Sizer</strong>. Displays real-time model inference, win probability rings, and capital budgeting.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-surface border border-border space-y-2">
              <div className="flex items-center gap-1.5 text-accent font-bold">
                <LineChart className="w-4 h-4" />
                <span>3. Right Envelope</span>
              </div>
              <p className="text-text-muted leading-relaxed">
                Shows the <strong>Dynamic Prediction Envelope (T+5D)</strong> with 50% inner and 90% outer Monte Carlo confidence cones dynamically colored green (Bullish) or red (Bearish).
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: HOW SIGNALS WORK */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-accent font-mono text-xs font-bold uppercase tracking-wider">
            <span className="px-2 py-0.5 rounded bg-accent/15 border border-accent/30">02</span>
            <span>Model Signals & Confidence</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-text-primary">How to Read "Buy" or "Sell" Signals</h2>
          <p className="text-sm text-text-secondary leading-relaxed">
            Every selected equity is evaluated across chronological features (past momentum, rolling volatility, ATR, technical indicators) by your chosen model (LSTM, GRU, LightGBM, Random Forest, or Logistic Regression).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
            <div className="p-4 rounded-lg bg-gain/10 border border-gain/30 space-y-1.5">
              <div className="flex items-center gap-1.5 text-gain font-bold text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>BULLISH / BUY</span>
              </div>
              <p className="text-text-secondary">
                Model predicts positive expected forward drift. Confidence ring turns green with winning probability &gt; 55%. Dynamic envelope slopes upward.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-loss/10 border border-loss/30 space-y-1.5">
              <div className="flex items-center gap-1.5 text-loss font-bold text-sm">
                <TrendingDown className="w-4 h-4" />
                <span>BEARISH / SELL</span>
              </div>
              <p className="text-text-secondary">
                Model forecasts downward price drift. Confidence ring turns red. Dynamic envelope displays "EXPECTED DRIFT DOWN" in crimson.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-warning/10 border border-warning/30 space-y-1.5">
              <div className="flex items-center gap-1.5 text-warning font-bold text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>NEUTRAL / HOLD</span>
              </div>
              <p className="text-text-secondary">
                Drift conviction is near zero (chop regime). The platform advises holding cash rather than risking institutional capital.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHAT-IF ENGINE */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-accent font-mono text-xs font-bold uppercase tracking-wider">
            <span className="px-2 py-0.5 rounded bg-accent/15 border border-accent/30">03</span>
            <span>Counterfactual Stress Testing</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-text-primary">Using the What-If Stress Lab</h2>
          <div className="p-5 rounded-lg bg-surface border border-border space-y-4 text-sm">
            <p className="text-text-secondary">
              The What-If engine lets you stress-test model inferences against macro shocks without retraining:
            </p>
            <ul className="space-y-2.5 text-xs font-mono text-text-muted">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">1. Volatility Scaling (0.5x – 2.5x):</span>
                <span>Expands or contracts the prediction envelope's confidence bands to reflect VIX spikes or market consolidation.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">2. Volume Pressure Bias (-100% to +100%):</span>
                <span>Injects simulated institutional buy or sell volume pressure to observe directional momentum shifts.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">3. Market Sentiment Bias (-1.0 to +1.0):</span>
                <span>Applies macroeconomic sentiment tilt (e.g. RBI interest rate decisions, global indices drift).</span>
              </li>
            </ul>
            <div className="p-3 rounded bg-elevated/70 border border-border text-xs text-text-secondary flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent shrink-0" />
              <span><strong>Action:</strong> Click <em>"Simulate Shift"</em> to recalculate the forward trajectory in real time, or click the refresh icon to reset to baseline.</span>
            </div>
          </div>
        </section>

        {/* SECTION 4: KELLY POSITION SIZER */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-gain font-mono text-xs font-bold uppercase tracking-wider">
            <span className="px-2 py-0.5 rounded bg-gain/15 border border-gain/30">04</span>
            <span>Capital Budgeting & Risk Management</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-text-primary">Dynamic Kelly Position Sizer</h2>
          <div className="p-5 rounded-lg bg-surface border border-border space-y-4 text-sm">
            <p className="text-text-secondary">
              Quantara replaces guesswork with the mathematical <strong>Kelly Criterion</strong>, calibrated against the active Deep Learning model's win probability:
            </p>
            <div className="p-3 rounded bg-elevated font-mono text-xs text-accent">
              Full Kelly Formula: f* = (p · b - q) / b &nbsp;|&nbsp; Half-Kelly = f* / 2
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded bg-elevated/50 border border-border">
                <div className="text-text-muted">p = Win Probability</div>
                <div className="text-text-primary font-bold mt-1">Calibrated from model conviction (40% to 85%)</div>
              </div>
              <div className="p-3 rounded bg-elevated/50 border border-border">
                <div className="text-text-muted">b = Payoff Ratio (1.80x)</div>
                <div className="text-text-primary font-bold mt-1">Target return vs. 14-day rolling ATR stop-loss</div>
              </div>
            </div>
            <div className="space-y-2 text-xs font-mono text-text-muted">
              <div className="flex items-center gap-2 text-text-primary font-bold">
                <CheckCircle2 className="w-4 h-4 text-gain" />
                <span>Custom Money Input:</span>
              </div>
              <p>
                You can select preset capital (₹5 Lakhs, ₹10 Lakhs, ₹25 Lakhs) or type any custom amount in the input box. The system automatically recalculates <strong>Allocated Capital</strong>, <strong>Recommended Shares</strong>, and <strong>Max Account Risk at Stop</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: PRO SHORTCUTS */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-text-muted font-mono text-xs font-bold uppercase tracking-wider">
            <span className="px-2 py-0.5 rounded bg-elevated border border-border">05</span>
            <span>Terminal Pro Shortcuts</span>
          </div>
          <div className="p-4 rounded-lg bg-surface border border-border grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono text-center">
            <div className="p-2.5 rounded bg-elevated border border-border">
              <kbd className="px-1.5 py-0.5 rounded bg-background border border-border text-accent font-bold">Cmd / Ctrl + K</kbd>
              <div className="text-text-muted text-[11px] mt-1">Search Command Palette</div>
            </div>
            <div className="p-2.5 rounded bg-elevated border border-border">
              <kbd className="px-1.5 py-0.5 rounded bg-background border border-border text-accent font-bold">?</kbd>
              <div className="text-text-muted text-[11px] mt-1">Shortcuts Cheat Sheet</div>
            </div>
            <div className="p-2.5 rounded bg-elevated border border-border">
              <kbd className="px-1.5 py-0.5 rounded bg-background border border-border text-accent font-bold">CSV Export</kbd>
              <div className="text-text-muted text-[11px] mt-1">Download Candle History</div>
            </div>
            <div className="p-2.5 rounded bg-elevated border border-border">
              <kbd className="px-1.5 py-0.5 rounded bg-background border border-border text-accent font-bold">1D / 5D / 30D</kbd>
              <div className="text-text-muted text-[11px] mt-1">Forecast Horizons</div>
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/dashboard"
            className="w-full sm:w-auto px-6 py-2.5 rounded bg-accent text-background font-mono font-bold text-xs flex items-center justify-center gap-2 hover:bg-accent/90 transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)]"
          >
            <span>Open Quantara Terminal</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/"
            className="w-full sm:w-auto px-4 py-2 rounded bg-elevated border border-border font-mono text-xs text-text-secondary hover:text-text-primary text-center transition-colors"
          >
            Return to Landing Page
          </Link>
        </div>
      </main>
    </div>
  );
}
