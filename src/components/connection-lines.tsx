// This is a utility component to draw connection lines between elements
"use client"

import { useEffect, useRef } from "react"

interface ConnectionLinesProps {
  sourceId: string
  targetId: string
  sourcePosition?: "top" | "right" | "bottom" | "left"
  targetPosition?: "top" | "right" | "bottom" | "left"
  color?: string
  dashed?: boolean
  thickness?: number
  animated?: boolean
}

export function ConnectionLines({
  sourceId,
  targetId,
  sourcePosition = "bottom",
  targetPosition = "top",
  color = "#000",
  dashed = true,
  thickness = 1.5,
  animated = false,
}: ConnectionLinesProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const drawLine = () => {
      const sourceElement = document.getElementById(sourceId)
      const targetElement = document.getElementById(targetId)
      const svg = svgRef.current

      if (!sourceElement || !targetElement || !svg) return

      const sourceRect = sourceElement.getBoundingClientRect()
      const targetRect = targetElement.getBoundingClientRect()
      const svgRect = svg.getBoundingClientRect()

      // Calculate source position
      let sourceX, sourceY
      switch (sourcePosition) {
        case "top":
          sourceX = sourceRect.left + sourceRect.width / 2 - svgRect.left
          sourceY = sourceRect.top - svgRect.top
          break
        case "right":
          sourceX = sourceRect.right - svgRect.left
          sourceY = sourceRect.top + sourceRect.height / 2 - svgRect.top
          break
        case "bottom":
          sourceX = sourceRect.left + sourceRect.width / 2 - svgRect.left
          sourceY = sourceRect.bottom - svgRect.top
          break
        case "left":
          sourceX = sourceRect.left - svgRect.left
          sourceY = sourceRect.top + sourceRect.height / 2 - svgRect.top
          break
      }

      // Calculate target position
      let targetX, targetY
      switch (targetPosition) {
        case "top":
          targetX = targetRect.left + targetRect.width / 2 - svgRect.left
          targetY = targetRect.top - svgRect.top
          break
        case "right":
          targetX = targetRect.right - svgRect.left
          targetY = targetRect.top + targetRect.height / 2 - svgRect.top
          break
        case "bottom":
          targetX = targetRect.left + targetRect.width / 2 - svgRect.left
          targetY = targetRect.bottom - svgRect.top
          break
        case "left":
          targetX = targetRect.left - svgRect.left
          targetY = targetRect.top + targetRect.height / 2 - svgRect.top
          break
      }

      // Create path
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path")

      // Calculate control points for a curved line
      const midY = (sourceY + targetY) / 2

      const d = `M ${sourceX} ${sourceY} C ${sourceX} ${midY}, ${targetX} ${midY}, ${targetX} ${targetY}`

      path.setAttribute("d", d)
      path.setAttribute("stroke", color)
      path.setAttribute("stroke-width", thickness.toString())
      path.setAttribute("fill", "none")

      if (dashed) {
        path.setAttribute("stroke-dasharray", "4")
      }

      if (animated) {
        const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate")
        animateElement.setAttribute("attributeName", "stroke-dashoffset")
        animateElement.setAttribute("from", "0")
        animateElement.setAttribute("to", "12")
        animateElement.setAttribute("dur", "1s")
        animateElement.setAttribute("repeatCount", "indefinite")
        path.appendChild(animateElement)
      }

      // Clear previous paths and add the new one
      while (svg.firstChild) {
        svg.removeChild(svg.firstChild)
      }
      svg.appendChild(path)
    }

    drawLine()
    window.addEventListener("resize", drawLine)

    return () => {
      window.removeEventListener("resize", drawLine)
    }
  }, [sourceId, targetId, sourcePosition, targetPosition, color, dashed, thickness, animated])

  return (
    <svg
      ref={svgRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    />
  )
}

