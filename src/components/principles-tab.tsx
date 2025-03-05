"use client"

import type React from "react"

import { Scale, Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import type { LegalPrinciple } from "../types"
import { useState } from "react"

interface PrinciplesTabProps {
  legalPrinciples: LegalPrinciple[]
  setLegalPrinciples: React.Dispatch<React.SetStateAction<LegalPrinciple[]>>
}

export function PrinciplesTab({ legalPrinciples, setLegalPrinciples }: PrinciplesTabProps) {
  const [confidenceLevel, setConfidenceLevel] = useState(85)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="border border-black bg-white">
        <div className="border-b border-black p-4 bg-[#fdf8e9]">
          <h3 className="text-lg font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
            Legal Principles
          </h3>
          <p className="text-sm text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
            Level 2 deductive reasoning components
          </p>
        </div>
        <div className="p-0">
          <div className="divide-y divide-black">
            {legalPrinciples.map((principle) => (
              <div key={principle.id} className="p-4">
                <div className="flex items-center mb-2">
                  <Scale className="h-5 w-5 text-black mr-2" />
                  <h3 className="font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                    {principle.name}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-2" style={{ fontFamily: "Arimo, sans-serif" }}>
                  {principle.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
                    {principle.source}
                  </span>
                  <span className="text-xs font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                    {principle.confidence}% confidence
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border border-black bg-white">
        <div className="border-b border-black p-4 bg-[#fdf8e9]">
          <h3 className="text-lg font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
            Add Legal Principle
          </h3>
          <p className="text-sm text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
            Define new Level 2 components
          </p>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-normal mb-1 block" style={{ fontFamily: "Arimo, sans-serif" }}>
                Principle Name
              </label>
              <Input
                placeholder="e.g., Contract Validity Requirements"
                className="border-black"
                style={{ fontFamily: "Arimo, sans-serif" }}
              />
            </div>

            <div>
              <label className="text-sm font-normal mb-1 block" style={{ fontFamily: "Arimo, sans-serif" }}>
                Description
              </label>
              <Textarea
                placeholder="Describe the legal principle..."
                className="border-black"
                style={{ fontFamily: "Arimo, sans-serif" }}
              />
            </div>

            <div>
              <label className="text-sm font-normal mb-1 block" style={{ fontFamily: "Arimo, sans-serif" }}>
                Legal Source
              </label>
              <Select defaultValue="statute">
                <SelectTrigger className="border-black" style={{ fontFamily: "Arimo, sans-serif" }}>
                  <SelectValue placeholder="Select source type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="statute">Statute</SelectItem>
                  <SelectItem value="case-law">Case Law</SelectItem>
                  <SelectItem value="regulation">Regulation</SelectItem>
                  <SelectItem value="best-practice">Best Practice</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-normal mb-1 block" style={{ fontFamily: "Arimo, sans-serif" }}>
                Source Reference
              </label>
              <Input
                placeholder="e.g., UCC § 2-201"
                className="border-black"
                style={{ fontFamily: "Arimo, sans-serif" }}
              />
            </div>

            <div>
              <label
                className="text-sm font-normal mb-1 flex justify-between"
                style={{ fontFamily: "Arimo, sans-serif" }}
              >
                <span>Confidence Level</span>
                <span className="text-gray-500">{confidenceLevel}%</span>
              </label>
              <Slider
                defaultValue={[confidenceLevel]}
                max={100}
                step={1}
                onValueChange={(value) => setConfidenceLevel(value[0])}
              />
            </div>

            <Button
              className="w-full border border-black bg-white text-black hover:bg-gray-100"
              style={{ fontFamily: "Arimo, sans-serif" }}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Legal Principle
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

