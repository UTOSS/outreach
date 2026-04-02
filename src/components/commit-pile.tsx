"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { stats } from "@/lib/mock";

const GRID_COLS = 50;
const GRID_ROWS = 30;
const DURATION_MS = 6500;

const CELL_SIZE = 15;
const CELL_GAP = 1;
const CELL_RADIUS = 2;
const CANVAS_WIDTH = GRID_COLS * CELL_SIZE + (GRID_COLS - 1) * CELL_GAP;
const CANVAS_HEIGHT = GRID_ROWS * CELL_SIZE + (GRID_ROWS - 1) * CELL_GAP;

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const getPrefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const gaussian = (x: number, sigma: number) =>
  Math.exp(-(x * x) / (2 * sigma * sigma));

const hexToRgb = (hex: string) => {
  const normalized = hex.replace("#", "");
  const value =
    normalized.length === 3
      ? normalized
          .split("")
          .map((c) => c + c)
          .join("")
      : normalized;
  const num = parseInt(value, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
};

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const lerpColor = (from: string, to: string, t: number) => {
  const a = hexToRgb(from);
  const b = hexToRgb(to);
  const r = Math.round(lerp(a.r, b.r, t));
  const g = Math.round(lerp(a.g, b.g, t));
  const bch = Math.round(lerp(a.b, b.b, t));
  return `rgb(${r}, ${g}, ${bch})`;
};

export function CommitPile() {
  const targetCommits = stats.commitsThisMonth;
  const [displayCount, setDisplayCount] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const readyRef = useRef(false);

  const order = useMemo(() => {
    const heights = new Array<number>(GRID_COLS).fill(0);
    const result: number[] = [];
    const center = (GRID_COLS - 1) / 2;
    const sigma = GRID_COLS / 5;

    const weights = Array.from({ length: GRID_COLS }, (_, col) => {
      const distance = Math.abs(col - center);
      return gaussian(distance, sigma);
    });
    const totalWeight = weights.reduce((sum, value) => sum + value, 0);
    const cumulative: number[] = [];
    let running = 0;
    weights.forEach((value) => {
      running += value / totalWeight;
      cumulative.push(running);
    });

    const pickColumn = () => {
      const r = Math.random();
      for (let i = 0; i < cumulative.length; i += 1) {
        if (r <= cumulative[i]) return i;
      }
      return cumulative.length - 1;
    };

    let guard = 0;
    while (guard < GRID_COLS * GRID_ROWS * 10) {
      guard += 1;
      const col = pickColumn();
      const height = heights[col];
      if (height >= GRID_ROWS) {
        break;
      }
      const row = GRID_ROWS - 1 - height;
      const cellId = row * GRID_COLS + col;
      heights[col] += 1;
      result.push(cellId);
    }

    return result;
  }, []);

  const totalFill = order.length;

  const rank = useMemo(() => {
    const map = new Array<number>(GRID_COLS * GRID_ROWS).fill(
      Number.POSITIVE_INFINITY,
    );
    order.forEach((cellId, index) => {
      map[cellId] = index;
    });
    return map;
  }, [order]);

  const positions = useMemo(() => {
    return Array.from({ length: GRID_COLS * GRID_ROWS }, (_, cellId) => {
      const row = Math.floor(cellId / GRID_COLS);
      const col = cellId % GRID_COLS;
      return {
        x: col * (CELL_SIZE + CELL_GAP),
        y: row * (CELL_SIZE + CELL_GAP),
      };
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = CANVAS_WIDTH;
    const height = CANVAS_HEIGHT;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const styles = getComputedStyle(document.documentElement);
    const bright = "#6dff6d";
    const dark = "#1f7a2f";
    const empty = "rgba(255,255,255,0.03)";

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const drawCell = (x: number, y: number, color: string) => {
      ctx.fillStyle = color;
      const r = CELL_RADIUS;
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + CELL_SIZE, y, x + CELL_SIZE, y + CELL_SIZE, r);
      ctx.arcTo(x + CELL_SIZE, y + CELL_SIZE, x, y + CELL_SIZE, r);
      ctx.arcTo(x, y + CELL_SIZE, x, y, r);
      ctx.arcTo(x, y, x + CELL_SIZE, y, r);
      ctx.closePath();
      ctx.fill();
    };

    const drawFrame = (fillCount: number) => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < GRID_COLS * GRID_ROWS; i += 1) {
        const pos = positions[i];
        const rankIndex = rank[i];
        if (rankIndex < fillCount) {
          const age = 1 - rankIndex / Math.max(fillCount - 1, 1);
          const color = lerpColor(dark, bright, age);
          drawCell(pos.x, pos.y, color);
        } else {
          drawCell(pos.x, pos.y, empty);
        }
      }
    };

    if (getPrefersReducedMotion()) {
      drawFrame(totalFill);
      setDisplayCount(targetCommits);
      readyRef.current = true;
      setIsReady(true);
      return;
    }

    let frameId = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / DURATION_MS, 1);
      const eased = easeOutCubic(progress);
      const fillCount = Math.floor(eased * totalFill);

      setDisplayCount(Math.floor(eased * targetCommits));
      drawFrame(fillCount);
      if (!readyRef.current) {
        readyRef.current = true;
        setIsReady(true);
      }

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [positions, rank, targetCommits, totalFill]);

  return (
    <div className="space-y-4">
      <div>
        <div className=" flex items-baseline gap-3">
          <p className="text-3xl font-semibold md:text-4xl">{displayCount}</p>
          <p className="text-sm text-[var(--utoss-muted)]">
            commits this month
          </p>
        </div>
        <p className="mt-2 text-xs text-[var(--utoss-muted)]">
          A live snapshot of our community output.
        </p>
      </div>
      <div
        className="relative"
        style={{ width: CANVAS_WIDTH, height: CANVAS_HEIGHT }}
      >
        <canvas
          ref={canvasRef}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          className="block"
        />
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 rounded-[8px] bg-white/5 transition-opacity duration-500 ${
            isReady ? "opacity-0" : "opacity-100 animate-pulse"
          }`}
        />
      </div>
    </div>
  );
}
