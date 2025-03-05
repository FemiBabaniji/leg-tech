"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { HierarchicalConnector } from "./hierarchical-connector"

interface InferenceModelWrapperProps {
  children: React.ReactNode
  selectedInference: string | null
  inferences: any[]
  legalPrinciples: any[]
  caseEvidence: any[]
}

export function InferenceModelWrapper({
  children,
  selectedInference,
  inferences,
  legalPrinciples,
  caseEvidence,
}: InferenceModelWrapperProps) {
  const [sourceIds, setSourceIds] = useState<string[]>([])
  const [targetIds, setTargetIds] = useState<string[]>([])

  useEffect(() => {
    if (selectedInference) {
      const inference = inferences.find((inf) => inf.id === selectedInference)
      if (inference) {
        // Get related principle IDs
        const principleIds = inference.principleIds?.map((id: string) => `principle-card-${id}`) || []
        // Get related evidence IDs
        const evidenceIds = inference.evidenceIds?.map((id: string) => `evidence-card-${id}`) || []

        setSourceIds(principleIds)
        setTargetIds([`inference-card-${selectedInference}`, ...evidenceIds])
      }
    } else {
      setSourceIds([])
      setTargetIds([])
    }
  }, [selectedInference, inferences])

  return (
    <div className="relative">
      {children}
      <HierarchicalConnector sourceIds={sourceIds} targetIds={targetIds} color="#000" animated={true} />
    </div>
  )
}

