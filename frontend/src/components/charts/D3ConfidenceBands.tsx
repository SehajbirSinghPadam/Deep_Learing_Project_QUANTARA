"use client";

import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { ConfidenceBandPoint } from "@/lib/types";

interface Props {
  points: ConfidenceBandPoint[];
  width?: number;
  height?: number;
}

export function D3ConfidenceBands({ points, height = 260 }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!svgRef.current || points.length === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const parentWidth = containerWidth || containerRef.current?.clientWidth || svgRef.current.parentElement?.clientWidth || 400;
    const isMobile = parentWidth < 450;
    const margin = { top: 20, right: isMobile ? 15 : 30, bottom: 30, left: isMobile ? 40 : 55 };
    const w = Math.max(10, parentWidth - margin.left - margin.right);
    const h = height - margin.top - margin.bottom;

    const g = svg
      .attr("width", parentWidth)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleLinear()
      .domain([0, d3.max(points, (d) => d.day) || 5])
      .range([0, w]);

    const yMin = d3.min(points, (d) => d.lower90) || 0;
    const yMax = d3.max(points, (d) => d.upper90) || 100;
    const yPadding = (yMax - yMin) * 0.08;

    const y = d3
      .scaleLinear()
      .domain([yMin - yPadding, yMax + yPadding])
      .range([h, 0]);

    // 90% confidence envelope
    const area90 = d3
      .area<ConfidenceBandPoint>()
      .x((d) => x(d.day))
      .y0((d) => y(d.lower90))
      .y1((d) => y(d.upper90))
      .curve(d3.curveMonotoneX);

    // 50% confidence envelope
    const area50 = d3
      .area<ConfidenceBandPoint>()
      .x((d) => x(d.day))
      .y0((d) => y(d.lower50))
      .y1((d) => y(d.upper50))
      .curve(d3.curveMonotoneX);

    // Median line
    const lineMedian = d3
      .line<ConfidenceBandPoint>()
      .x((d) => x(d.day))
      .y((d) => y(d.median))
      .curve(d3.curveMonotoneX);

    // Directional color scheme
    const lastPt = points[points.length - 1];
    const firstPt = points[0];
    const diff = lastPt && firstPt ? lastPt.median - firstPt.median : 0;
    const isBull = diff > 0.5;
    const isBear = diff < -0.5;
    const strokeColor = isBull ? "#00e676" : isBear ? "#ff334b" : "#00f0ff";
    const fill90 = isBull
      ? "rgba(0, 230, 118, 0.08)"
      : isBear
      ? "rgba(255, 51, 75, 0.08)"
      : "rgba(0, 240, 255, 0.08)";
    const fill50 = isBull
      ? "rgba(0, 230, 118, 0.22)"
      : isBear
      ? "rgba(255, 51, 75, 0.22)"
      : "rgba(0, 240, 255, 0.18)";

    // Render 90% band
    g.append("path")
      .datum(points)
      .attr("fill", fill90)
      .attr("d", area90);

    // Render 50% band
    g.append("path")
      .datum(points)
      .attr("fill", fill50)
      .attr("d", area50);

    // Render Median line
    g.append("path")
      .datum(points)
      .attr("fill", "none")
      .attr("stroke", strokeColor)
      .attr("stroke-width", 2)
      .attr("d", lineMedian);

    // Base point marker
    g.selectAll(".dot")
      .data(points)
      .enter()
      .append("circle")
      .attr("cx", (d) => x(d.day))
      .attr("cy", (d) => y(d.median))
      .attr("r", 3)
      .attr("fill", strokeColor);

    // X Axis
    g.append("g")
      .attr("transform", `translate(0,${h})`)
      .call(
        d3
          .axisBottom(x)
          .ticks(5)
          .tickFormat((d) => `T+${d}d`)
      )
      .call((axis) => axis.select(".domain").attr("stroke", "rgba(255,255,255,0.1)"))
      .call((axis) => axis.selectAll(".tick line").attr("stroke", "rgba(255,255,255,0.05)"))
      .call((axis) =>
        axis
          .selectAll(".tick text")
          .attr("fill", "#64748b")
          .attr("font-family", "JetBrains Mono")
          .attr("font-size", "10px")
      );

    // Y Axis
    g.append("g")
      .call(d3.axisLeft(y).ticks(5).tickFormat((d) => `₹${Math.round(Number(d))}`))
      .call((axis) => axis.select(".domain").attr("stroke", "rgba(255,255,255,0.1)"))
      .call((axis) => axis.selectAll(".tick line").attr("stroke", "rgba(255,255,255,0.05)"))
      .call((axis) =>
        axis
          .selectAll(".tick text")
          .attr("fill", "#64748b")
          .attr("font-family", "JetBrains Mono")
          .attr("font-size", "10px")
      );
  }, [points, height, containerWidth]);

  return (
    <div ref={containerRef} className="w-full overflow-hidden">
      <svg ref={svgRef} className="w-full" />
    </div>
  );
}

