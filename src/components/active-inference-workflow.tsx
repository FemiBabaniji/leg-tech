"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import {
  Scale,
  FileText,
  AlertTriangle,
  CheckCircle,
  Plus,
  BookOpen,
  Gavel,
  FileSearch,
  BarChart4,
  ArrowUpRight,
  ArrowDownRight,
  HelpCircle,
  Info,
} from "lucide-react"

// Define the types for our model elements
interface LegalPrinciple {
  id: string
  name: string
  description: string
  source: string
  confidence: number
}

interface CaseEvidence {
  id: string
  name: string
  description: string
  type: string
  timePoint: "past" | "present" | "future"
  confidence: number
}

interface Inference {
  id: string
  name: string
  description: string
  prediction: string
  confidence: number
  principleIds: string[]
  evidenceIds: string[]
}

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
      name: "Contract Validity Analysis",
      description: "Assessment of contract's legal validity",
      prediction: "Contract meets validity requirements",
      confidence: 92,
      principleIds: ["principle-1"],
      evidenceIds: ["evidence-1"],
    },
    {
      id: "inference-2",
      name: "Price Adjustment Enforceability",
      description: "Analysis of RPI clause enforceability",
      prediction: "RPI clause may have limited enforceability due to ambiguous language",
      confidence: 68,
      principleIds: ["principle-2"],
      evidenceIds: ["evidence-2", "evidence-5"],
    },
    {
      id: "inference-3",
      name: "Notice Compliance",
      description: "Assessment of notice requirement compliance",
      prediction: "Notice requirements have been satisfied",
      confidence: 88,
      principleIds: ["principle-3"],
      evidenceIds: ["evidence-3", "evidence-4"],
    },
  ])

  const [activeTab, setActiveTab] = useState("model")
  const [selectedInference, setSelectedInference] = useState<string | null>(null)

  // Helper function to get related principles for an inference
  const getRelatedPrinciples = (inferenceId: string) => {
    const inference = inferences.find((inf) => inf.id === inferenceId)
    if (!inference) return []
    return legalPrinciples.filter((principle) => inference.principleIds.includes(principle.id))
  }

  // Helper function to get related evidence for an inference
  const getRelatedEvidence = (inferenceId: string) => {
    const inference = inferences.find((inf) => inf.id === inferenceId)
    if (!inference) return []
    return caseEvidence.filter((evidence) => inference.evidenceIds.includes(evidence.id))
  }

  return (
    <div className="container mx-auto p-4 bg-secondary font-alliance">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold font-alliance">Legal Active Inference Model</h1>
          <p className="text-gray-500 font-alliance">Hierarchical analysis of legal principles and case evidence</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2 border border-border font-alliance">
            <HelpCircle className="h-4 w-4" />
            <span>How It Works</span>
          </Button>
          <Button className="flex items-center gap-2 font-alliance">
            <BarChart4 className="h-4 w-4" />
            <span>Run Analysis</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="model" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6 bg-secondary text-secondary-foreground font-alliance">
          <TabsTrigger value="model" className="font-alliance">
            Active Inference Model
          </TabsTrigger>
          <TabsTrigger value="principles" className="font-alliance">
            Legal Principles (Level 2)
          </TabsTrigger>
          <TabsTrigger value="evidence" className="font-alliance">
            Case Evidence (Level 1)
          </TabsTrigger>
          <TabsTrigger value="analysis" className="font-alliance">
            Analysis & Recommendations
          </TabsTrigger>
        </TabsList>

        <TabsContent value="model">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Model Visualization */}
            <div className="md:col-span-2 border border-border bg-gray-50">
              <div className="border-b border-border p-4">
                <h3 className="text-lg font-medium font-alliance">Active Inference Model</h3>
                <p className="text-sm text-muted-foreground font-alliance">Hierarchical legal reasoning framework</p>
              </div>
              <div className="p-0">
                <div className="bg-gray-50 p-6">
                  {/* Level 2 - Legal Principles */}
                  <div className="mb-8">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 bg-primary-light mr-2"></div>
                      <span className="text-sm font-medium font-alliance">Level 2: Legal Principles (Deduction)</span>
                    </div>
                    <div className="flex gap-4 overflow-x-auto pb-4">
                      {legalPrinciples.map((principle) => (
                        <div key={principle.id} className="min-w-[200px] p-3 bg-primary-light border border-border">
                          <div className="flex items-center mb-2">
                            <Scale className="h-4 w-4 text-primary mr-2" />
                            <span className="font-medium text-sm font-alliance">{principle.name}</span>
                          </div>
                          <div className="text-xs text-gray-600 mb-2 font-alliance">{principle.source}</div>
                          <div className="text-xs font-alliance">{principle.confidence}% confidence</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Connecting Arrows */}
                  <div className="flex justify-center mb-8">
                    <div className="flex flex-col items-center">
                      <ArrowDownRight className="h-8 w-8 text-gray-400" />
                      <span className="text-xs text-gray-500 font-alliance">Deduction</span>
                    </div>
                    <div className="flex flex-col items-center ml-16">
                      <ArrowUpRight className="h-8 w-8 text-gray-400" />
                      <span className="text-xs text-gray-500 font-alliance">Induction</span>
                    </div>
                  </div>

                  {/* Inferences - Middle Layer */}
                  <div className="mb-8">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 bg-palantir-green mr-2"></div>
                      <span className="text-sm font-medium font-alliance">Inference Layer: Legal Predictions</span>
                    </div>
                    <div className="flex gap-4 overflow-x-auto pb-4">
                      {inferences.map((inference) => (
                        <div
                          key={inference.id}
                          className={`
                            min-w-[200px] p-3 border cursor-pointer
                            ${
                              selectedInference === inference.id
                                ? "border-primary bg-secondary"
                                : "border-border bg-gray-50 hover:bg-secondary/50"
                            }
                          `}
                          onClick={() => setSelectedInference(inference.id)}
                        >
                          <div className="flex items-center mb-2">
                            <BarChart4 className="h-4 w-4 text-primary mr-2" />
                            <span className="font-medium text-sm font-alliance">{inference.name}</span>
                          </div>
                          <div className="text-xs text-gray-600 mb-2 line-clamp-2 font-alliance">
                            {inference.prediction}
                          </div>
                          <div className="text-xs font-alliance">{inference.confidence}% confidence</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Connecting Arrows */}
                  <div className="flex justify-center mb-8">
                    <ArrowDownRight className="h-8 w-8 text-gray-400" />
                  </div>

                  {/* Level 1 - Case Evidence */}
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 bg-palantir-yellow mr-2"></div>
                      <span className="text-sm font-medium font-alliance">Level 1: Case Evidence (Induction)</span>
                    </div>
                    <div className="flex gap-4 overflow-x-auto pb-4">
                      {caseEvidence.map((evidence) => (
                        <div key={evidence.id} className="min-w-[200px] p-3 bg-gray-50 border border-border">
                          <div className="flex items-center mb-2">
                            <FileText className="h-4 w-4 text-muted-foreground mr-2" />
                            <span className="font-medium text-sm font-alliance">{evidence.name}</span>
                          </div>
                          <div className="flex justify-between text-xs text-gray-600 mb-2 font-alliance">
                            <span>{evidence.type}</span>
                            <span className="text-xs">{evidence.timePoint}</span>
                          </div>
                          <div className="text-xs font-alliance">{evidence.confidence}% confidence</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 border-t border-border text-xs text-muted-foreground py-2 px-4 font-alliance">
                <Info className="h-4 w-4 mr-2 inline-block" />
                This model implements a hierarchical active inference framework with Level 2 (legal principles) and
                Level 1 (case evidence) connected through predictive inferences.
              </div>
            </div>

            {/* Selected Inference Details */}
            <div className="border border-border bg-gray-50">
              <div className="border-b border-border p-4">
                <h3 className="text-lg font-medium font-alliance">Inference Details</h3>
                <p className="text-sm text-muted-foreground font-alliance">
                  {selectedInference ? "Analysis of selected inference" : "Select an inference to view details"}
                </p>
              </div>
              <div className="p-6">
                {selectedInference ? (
                  <div className="space-y-4">
                    {/* Selected Inference */}
                    {inferences
                      .filter((inf) => inf.id === selectedInference)
                      .map((inference) => (
                        <div key={inference.id} className="space-y-4">
                          <div className="p-3 border border-border">
                            <h3 className="font-medium font-alliance">{inference.name}</h3>
                            <p className="text-sm text-gray-600 mt-1 font-alliance">{inference.description}</p>
                            <div className="mt-2">
                              <div className="text-sm font-medium font-alliance">Prediction:</div>
                              <p className="text-sm font-alliance">{inference.prediction}</p>
                            </div>
                            <div className="mt-2 flex justify-between items-center">
                              <span className="text-sm text-gray-600 font-alliance">Confidence:</span>
                              <Progress value={inference.confidence} className="w-32 h-1" />
                              <span className="text-sm font-medium font-alliance">{inference.confidence}%</span>
                            </div>
                          </div>

                          {/* Related Legal Principles */}
                          <div>
                            <h3 className="text-sm font-medium mb-2 font-alliance">Related Legal Principles:</h3>
                            <div className="space-y-2">
                              {getRelatedPrinciples(inference.id).map((principle) => (
                                <div key={principle.id} className="p-2 bg-primary-light border border-border">
                                  <div className="flex items-center">
                                    <Scale className="h-4 w-4 text-primary mr-2" />
                                    <span className="text-sm font-alliance">{principle.name}</span>
                                  </div>
                                  <div className="text-xs text-gray-600 mt-1 font-alliance">{principle.source}</div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Related Case Evidence */}
                          <div>
                            <h3 className="text-sm font-medium mb-2 font-alliance">Related Case Evidence:</h3>
                            <div className="space-y-2">
                              {getRelatedEvidence(inference.id).map((evidence) => (
                                <div key={evidence.id} className="p-2 bg-gray-50 border border-border">
                                  <div className="flex items-center">
                                    <FileText className="h-4 w-4 text-muted-foreground mr-2" />
                                    <span className="text-sm font-alliance">{evidence.name}</span>
                                  </div>
                                  <div className="flex justify-between text-xs text-gray-600 mt-1 font-alliance">
                                    <span>{evidence.type}</span>
                                    <span className="text-xs">{evidence.timePoint}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-64 text-gray-400 font-alliance">
                    <FileSearch className="h-12 w-12 mb-2" />
                    <p>Select an inference from the model to view details</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="principles">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-border bg-gray-50">
              <div className="border-b border-border p-4">
                <h3 className="text-lg font-medium font-alliance">Legal Principles</h3>
                <p className="text-sm text-muted-foreground font-alliance">Level 2 deductive reasoning components</p>
              </div>
              <div className="p-0">
                <div className="divide-y divide-border">
                  {legalPrinciples.map((principle) => (
                    <div key={principle.id} className="p-4">
                      <div className="flex items-center mb-2">
                        <Scale className="h-5 w-5 text-primary mr-2" />
                        <h3 className="font-medium font-alliance">{principle.name}</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-2 font-alliance">{principle.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500 font-alliance">{principle.source}</span>
                        <span className="text-xs font-medium font-alliance">{principle.confidence}% confidence</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border border-border bg-gray-50">
              <div className="border-b border-border p-4">
                <h3 className="text-lg font-medium font-alliance">Add Legal Principle</h3>
                <p className="text-sm text-muted-foreground font-alliance">Define new Level 2 components</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block font-alliance">Principle Name</label>
                    <Input placeholder="e.g., Contract Validity Requirements" />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block font-alliance">Description</label>
                    <Textarea placeholder="Describe the legal principle..." />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block font-alliance">Legal Source</label>
                    <Select defaultValue="statute">
                      <SelectTrigger>
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
                    <label className="text-sm font-medium mb-1 block font-alliance">Source Reference</label>
                    <Input placeholder="e.g., UCC § 2-201" />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 flex justify-between font-alliance">
                      <span>Confidence Level</span>
                      <span className="text-gray-500">85%</span>
                    </label>
                    <Slider defaultValue={[85]} max={100} step={1} />
                  </div>

                  <Button className="w-full font-alliance">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Legal Principle
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="evidence">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-border bg-gray-50">
              <div className="border-b border-border p-4">
                <h3 className="text-lg font-medium font-alliance">Case Evidence</h3>
                <p className="text-sm text-muted-foreground font-alliance">Level 1 inductive reasoning components</p>
              </div>
              <div className="p-0">
                <div className="divide-y divide-border">
                  {caseEvidence.map((evidence) => (
                    <div key={evidence.id} className="p-4">
                      <div className="flex items-center mb-2">
                        <FileText className="h-5 w-5 text-muted-foreground mr-2" />
                        <h3 className="font-medium font-alliance">{evidence.name}</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-2 font-alliance">{evidence.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500 font-alliance">{evidence.type}</span>
                          <span className="text-xs text-gray-500">•</span>
                          <span className="text-xs text-gray-500 font-alliance">{evidence.timePoint}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Progress value={evidence.confidence} className="w-16 h-1" />
                          <span className="text-xs font-medium font-alliance">{evidence.confidence}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border border-border bg-gray-50">
              <div className="border-b border-border p-4">
                <h3 className="text-lg font-medium font-alliance">Add Case Evidence</h3>
                <p className="text-sm text-muted-foreground font-alliance">Define new Level 1 components</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block font-alliance">Evidence Name</label>
                    <Input placeholder="e.g., Contract Document" />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block font-alliance">Description</label>
                    <Textarea placeholder="Describe the evidence..." />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block font-alliance">Evidence Type</label>
                    <Select defaultValue="document">
                      <SelectTrigger>
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
                    <label className="text-sm font-medium mb-1 block font-alliance">Time Point</label>
                    <Select defaultValue="present">
                      <SelectTrigger>
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
                    <label className="text-sm font-medium mb-1 flex justify-between font-alliance">
                      <span>Confidence Level</span>
                      <span className="text-gray-500">80%</span>
                    </label>
                    <Slider defaultValue={[80]} max={100} step={1} />
                  </div>

                  <Button className="w-full font-alliance">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Case Evidence
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="analysis">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 border border-border bg-gray-50">
              <div className="border-b border-border p-4">
                <h3 className="text-lg font-medium font-alliance">Legal Recommendations</h3>
                <p className="text-sm text-muted-foreground font-alliance">Based on active inference analysis</p>
              </div>
              <div className="p-0">
                <div className="divide-y divide-border">
                  <div className="p-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-palantir-red mt-0.5" />
                      <div>
                        <h3 className="font-medium font-alliance">RPI Clause Ambiguity</h3>
                        <p className="text-sm text-gray-700 mt-1 font-alliance">
                          The RPI clause in Section 4.3 contains ambiguous language that may limit enforceability. The
                          phrase "in line with" does not specify whether the adjustment is capped at the RPI rate or can
                          exceed it.
                        </p>
                        <div className="mt-3">
                          <h4 className="text-sm font-medium text-gray-800 font-alliance">Recommended Actions:</h4>
                          <ul className="list-disc list-inside text-sm text-gray-700 mt-1 space-y-1 font-alliance">
                            <li>Seek legal review of the RPI clause language</li>
                            <li>Consider amending the contract to clarify the price adjustment mechanism</li>
                            <li>Document any verbal agreements regarding price adjustments</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-palantir-green mt-0.5" />
                      <div>
                        <h3 className="font-medium font-alliance">Notice Requirements Compliance</h3>
                        <p className="text-sm text-gray-700 mt-1 font-alliance">
                          The contract clearly specifies a 60-day notice period for price adjustments, and evidence
                          shows this requirement has been met. Email notifications were sent on March 13, 2023, which is
                          more than 60 days before the price adjustment date.
                        </p>
                        <div className="mt-3">
                          <h4 className="text-sm font-medium text-gray-800 font-alliance">Recommended Actions:</h4>
                          <ul className="list-disc list-inside text-sm text-gray-700 mt-1 space-y-1 font-alliance">
                            <li>Continue to maintain records of all notice communications</li>
                            <li>Consider implementing an automated notification system for future notices</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start gap-3">
                      <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium font-alliance">Overall Contract Assessment</h3>
                        <p className="text-sm text-gray-700 mt-1 font-alliance">
                          The contract is generally valid and enforceable, with the exception of the ambiguity in the
                          RPI clause. The active inference model indicates a 88% confidence in overall contract
                          validity, with specific concerns limited to the price adjustment mechanism.
                        </p>
                        <div className="mt-3">
                          <h4 className="text-sm font-medium text-gray-800 font-alliance">Recommended Strategy:</h4>
                          <p className="text-sm text-gray-700 mt-1 font-alliance">
                            Address the RPI clause ambiguity through a contract amendment or side letter that clarifies
                            the price adjustment mechanism. This approach maintains the overall validity of the contract
                            while resolving the specific area of concern.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-border bg-gray-50">
              <div className="border-b border-border p-4">
                <h3 className="text-lg font-medium font-alliance">Model Confidence</h3>
                <p className="text-sm text-muted-foreground font-alliance">Inference reliability metrics</p>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium font-alliance">Contract Validity</span>
                      <span className="text-sm text-gray-500 font-alliance">92%</span>
                    </div>
                    <Progress value={92} className="h-1" />
                    <p className="text-xs text-gray-500 mt-1 font-alliance">
                      High confidence based on clear documentation and signatures
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium font-alliance">RPI Clause Enforceability</span>
                      <span className="text-sm text-gray-500 font-alliance">68%</span>
                    </div>
                    <Progress value={68} className="h-1" />
                    <p className="text-xs text-gray-500 mt-1 font-alliance">
                      Medium confidence due to ambiguous language in clause
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium font-alliance">Notice Compliance</span>
                      <span className="text-sm text-gray-500 font-alliance">88%</span>
                    </div>
                    <Progress value={88} className="h-1" />
                    <p className="text-xs text-gray-500 mt-1 font-alliance">
                      High confidence based on email records and client acknowledgment
                    </p>
                  </div>

                  <div className="p-3 border border-border">
                    <h3 className="text-sm font-medium mb-1 font-alliance">Hierarchical Consistency</h3>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-gray-500 font-alliance">Level 2 ↔ Level 1 Alignment</span>
                      <span className="text-xs font-medium font-alliance">83%</span>
                    </div>
                    <Progress value={83} className="h-1" />
                    <p className="text-xs text-gray-500 mt-1 font-alliance">
                      Strong alignment between legal principles and case evidence
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-t border-border p-4">
                <Button variant="outline" className="w-full font-alliance">
                  <Gavel className="h-4 w-4 mr-2" />
                  Generate Legal Report
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

