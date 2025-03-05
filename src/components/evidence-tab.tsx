"use client"

import type React from "react"

import { FileText, Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import type { CaseEvidence } from "../types"
import { useState } from "react"

interface EvidenceTabProps {
  caseEvidence: CaseEvidence[]
  setCaseEvidence: React.Dispatch<React.SetStateAction<CaseEvidence[]>>
}

export function EvidenceTab({ caseEvidence, setCaseEvidence }: EvidenceTabProps) {
  const [confidenceLevel, setConfidenceLevel] = useState(80)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="border border-black bg-white">
        <div className="border-b border-black p-4 bg-[#fdf8e9]">
          <h3 className="text-lg font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
            Case Evidence
          </h3>
          <p className="text-sm text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
            Level 1 inductive reasoning components
          </p>
        </div>
        <div className="p-0">
          <div className="divide-y divide-black">
            {caseEvidence.map((evidence) => (
              <div key={evidence.id} className="p-4">
                <div className="flex items-center mb-2">
                  <FileText className="h-5 w-5 text-black mr-2" />
                  <h3 className="font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                    {evidence.name}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-2" style={{ fontFamily: "Arimo, sans-serif" }}>
                  {evidence.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
                      {evidence.type}
                    </span>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
                      {evidence.timePoint}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={evidence.confidence} className="w-16 h-1" />
                    <span className="text-xs font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                      {evidence.confidence}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border border-black bg-white">
        <div className="border-b border-black p-4 bg-[#fdf8e9]">
          <h3 className="text-lg font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
            Add Case Evidence
          </h3>
          <p className="text-sm text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
            Define new Level 1 components
          </p>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-normal mb-1 block" style={{ fontFamily: "Arimo, sans-serif" }}>
                Evidence Name
              </label>
              <Input
                placeholder="e.g., Contract Document"
                className="border-black"
                style={{ fontFamily: "Arimo, sans-serif" }}
              />
            </div>

            <div>
              <label className="text-sm font-normal mb-1 block" style={{ fontFamily: "Arimo, sans-serif" }}>
                Description
              </label>
              <Textarea
                placeholder="Describe the evidence..."
                className="border-black"
                style={{ fontFamily: "Arimo, sans-serif" }}
              />
            </div>

            <div>
              <label className="text-sm font-normal mb-1 block" style={{ fontFamily: "Arimo, sans-serif" }}>
                Evidence Type
              </label>
              <Select defaultValue="document">
                <SelectTrigger className="border-black" style={{ fontFamily: "Arimo, sans-serif" }}>
                  <SelectValue placeholder="Select evidence type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="document">Document</SelectItem>
                  <SelectItem value="communication">Communication</SelectItem>
                  <SelectItem value="testimony">Testimony</SelectItem>
                  <SelectItem value="analysis">Analysis</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-normal mb-1 block" style={{ fontFamily: "Arimo, sans-serif" }}>
                Time Point
              </label>
              <Select defaultValue="present">
                <SelectTrigger className="border-black" style={{ fontFamily: "Arimo, sans-serif" }}>
                  <SelectValue placeholder="Select time point" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="past">Past</SelectItem>
                  <SelectItem value="present">Present</SelectItem>
                  <SelectItem value="future">Future</SelectItem>
                </SelectContent>
              </Select>
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
              Add Case Evidence
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

