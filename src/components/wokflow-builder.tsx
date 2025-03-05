"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HelpCircle, BarChart4 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModelTab } from "@/components/model-tab"
import { PrinciplesTab } from "@/components/principles-tab"
import { EvidenceTab } from "@/components/evidence-tab"
import { AnalysisTab } from "@/components/analysis-tab"
import { HowItWorksModal } from "./how-it-works-modal"
import { LegalAnalysisModal } from "./legal-analysis-modal"
import type { LegalPrinciple, CaseEvidence, Inference } from "./types"

export default function ActiveInferenceWorkflow() {
  // Level 2 - Legal Principles (Deduction)
  const [legalPrinciples, setLegalPrinciples] = useState<LegalPrinciple[]>([
    {
      id: "principle-1",
      name: "Contract Validity Requirements",
      description: "Legal standards for valid contract formation",
      source: "UCC § 2-201",
      confidence: 90,
    },
    {
      id: "principle-2",
      name: "Price Adjustment Mechanisms",
      description: "Legal standards for price adjustment clauses",
      source: "Case Law: Smith v. Jones",
      confidence: 85,
    },
    {
      id: "principle-3",
      name: "Notice Requirements",
      description: "Standards for providing notice of price changes",
      source: "Regulatory Compliance",
      confidence: 95,
    },
  ])

  // Level 1 - Case Evidence (Induction)
  const [caseEvidence, setCaseEvidence] = useState<CaseEvidence[]>([
    {
      id: "evidence-1",
      name: "Contract Document",
      description: "Signed agreement between parties",
      type: "Document",
      timePoint: "past",
      confidence: 95,
    },
    {
      id: "evidence-2",
      name: "Price Adjustment Clause",
      description: "Section 4.3 with RPI language",
      type: "Contract Clause",
      timePoint: "present",
      confidence: 75,
    },
    {
      id: "evidence-3",
      name: "Email Notification",
      description: "Notice of price change sent to client",
      type: "Communication",
      timePoint: "past",
      confidence: 90,
    },
    {
      id: "evidence-4",
      name: "Client Response",
      description: "Acknowledgment of price change",
      type: "Communication",
      timePoint: "present",
      confidence: 85,
    },
    {
      id: "evidence-5",
      name: "Projected Price Impact",
      description: "Financial analysis of price change",
      type: "Analysis",
      timePoint: "future",
      confidence: 70,
    },
  ])

  // Inferences - Connecting Level 2 and Level 1
  const [inferences, setInferences] = useState<Inference[]>([
    {
      id: "inference-1",
      title: "Contract Validity Analysis",
      description: "Contract meets validity requirements",
      prediction: "Contract meets validity requirements",
      confidence: 92,
      principleIds: ["principle-1"],
      evidenceIds: ["evidence-1"],
    },
    {
      id: "inference-2",
      title: "Price Adjustment Enforceability",
      description: "RPI clause may have limited enforceability due to ambiguous language",
      prediction: "RPI clause may have limited enforceability due to ambiguous language",
      confidence: 68,
      principleIds: ["principle-2"],
      evidenceIds: ["evidence-2", "evidence-5"],
    },
    {
      id: "inference-3",
      title: "Notice Compliance",
      description: "Notice requirements have been satisfied",
      prediction: "Notice requirements have been satisfied",
      confidence: 88,
      principleIds: ["principle-3"],
      evidenceIds: ["evidence-3", "evidence-4"],
    },
  ])

  const [activeTab, setActiveTab] = useState("model")
  const [selectedInference, setSelectedInference] = useState<string | null>(null)
  const [selectedPrinciple, setSelectedPrinciple] = useState<string | null>(null)
  const [selectedEvidence, setSelectedEvidence] = useState<string | null>(null)
  const [howItWorksOpen, setHowItWorksOpen] = useState(false)
  const [legalAnalysisOpen, setLegalAnalysisOpen] = useState(false)

  return (
    <>
      {/* Add Arimo font import directly in the component */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Arimo:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap');
        
        .vertical-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          text-orientation: mixed;
        }
      `}</style>

      <div className="container mx-auto p-4 max-w-[80em]" style={{ fontFamily: "Arimo, sans-serif" }}>
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-5xl font-medium mb-4" style={{ fontFamily: "IBM Plex Sans, sans-serif" }}>
              Legal Inference Model
            </h1>
            <p className="text-gray-500">Hierarchical legal reasoning framework</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="flex items-center gap-2 border border-black"
              style={{ fontFamily: "Arimo, sans-serif" }}
              onClick={() => setHowItWorksOpen(true)}
            >
              <HelpCircle className="h-4 w-4" />
              <span>How It Works</span>
            </Button>
            <Button
              className="flex items-center gap-2 border border-black bg-white text-black hover:bg-gray-100"
              style={{ fontFamily: "Arimo, sans-serif" }}
              onClick={() => setLegalAnalysisOpen(true)}
            >
              <BarChart4 className="h-4 w-4" />
              <span>Legal Analysis</span>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="model" value={activeTab} onValueChange={setActiveTab}>
          <TabsList
            className="mb-6 bg-white border border-black rounded-none flex divide-x divide-black"
            style={{ fontFamily: "Arimo, sans-serif" }}
          >
            <TabsTrigger
              value="model"
              className="data-[state=active]:bg-yellow-200/50 data-[state=active]:text-black shadow-none rounded-none flex-1"
              style={{ fontFamily: "Arimo, sans-serif" }}
            >
              Active Inference Model
            </TabsTrigger>
            <TabsTrigger
              value="principles"
              className="data-[state=active]:bg-yellow-200/50 data-[state=active]:text-black shadow-none rounded-none flex-1"
              style={{ fontFamily: "Arimo, sans-serif" }}
            >
              Legal Principles (Level 2)
            </TabsTrigger>
            <TabsTrigger
              value="evidence"
              className="data-[state=active]:bg-yellow-200/50 data-[state=active]:text-black shadow-none rounded-none flex-1"
              style={{ fontFamily: "Arimo, sans-serif" }}
            >
              Case Evidence (Level 1)
            </TabsTrigger>
            <TabsTrigger
              value="analysis"
              className="data-[state=active]:bg-yellow-200/50 data-[state=active]:text-black shadow-none rounded-none flex-1"
              style={{ fontFamily: "Arimo, sans-serif" }}
            >
              Analysis & Recommendations
            </TabsTrigger>
          </TabsList>

          <TabsContent value="model">
            <ModelTab
              legalPrinciples={legalPrinciples}
              caseEvidence={caseEvidence}
              inferences={inferences}
              selectedInference={selectedInference}
              setSelectedInference={setSelectedInference}
              selectedPrinciple={selectedPrinciple}
              setSelectedPrinciple={setSelectedPrinciple}
              selectedEvidence={selectedEvidence}
              setSelectedEvidence={setSelectedEvidence}
            />
          </TabsContent>

          <TabsContent value="principles">
            <PrinciplesTab legalPrinciples={legalPrinciples} setLegalPrinciples={setLegalPrinciples} />
          </TabsContent>

          <TabsContent value="evidence">
            <EvidenceTab caseEvidence={caseEvidence} setCaseEvidence={setCaseEvidence} />
          </TabsContent>

          <TabsContent value="analysis">
            <AnalysisTab inferences={inferences} />
          </TabsContent>
        </Tabs>

        {/* How It Works Modal */}
        <HowItWorksModal isOpen={howItWorksOpen} onClose={() => setHowItWorksOpen(false)} />

        {/* Legal Analysis Modal */}
        <LegalAnalysisModal isOpen={legalAnalysisOpen} onClose={() => setLegalAnalysisOpen(false)} />
      </div>
    </>
  )
}

