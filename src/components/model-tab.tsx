import { Scale, FileText, FileSearch, ArrowRight } from "lucide-react"
import type { LegalPrinciple, CaseEvidence, Inference } from "../types"

interface ModelTabProps {
  legalPrinciples: LegalPrinciple[]
  caseEvidence: CaseEvidence[]
  inferences: Inference[]
  selectedInference: string | null
  setSelectedInference: (id: string | null) => void
  selectedPrinciple: string | null
  setSelectedPrinciple: (id: string | null) => void
  selectedEvidence: string | null
  setSelectedEvidence: (id: string | null) => void
}

export function ModelTab({
  legalPrinciples,
  caseEvidence,
  inferences,
  selectedInference,
  setSelectedInference,
  selectedPrinciple,
  setSelectedPrinciple,
  selectedEvidence,
  setSelectedEvidence,
}: ModelTabProps) {
  // Helper function to get related principles for an inference
  const getRelatedPrinciples = (inferenceId: string) => {
    const inference = inferences.find((inf) => inf.id === inferenceId)
    if (!inference) return []
    return legalPrinciples.filter((principle) => inference.principleIds?.includes(principle.id) || false)
  }

  // Helper function to get related evidence for an inference
  const getRelatedEvidence = (inferenceId: string) => {
    const inference = inferences.find((inf) => inf.id === inferenceId)
    if (!inference) return []
    return caseEvidence.filter((evidence) => inference.evidenceIds?.includes(evidence.id) || false)
  }

  return (
    <>
      {/* Add animation keyframes */}
      <style jsx global>{`
        @keyframes flowDown {
          0% {
            background-position: 0 -10px;
          }
          100% {
            background-position: 0 10px;
          }
        }
        
        @keyframes flowUp {
          0% {
            background-position: 0 10px;
          }
          100% {
            background-position: 0 -10px;
          }
        }
        
        .line-animated-down {
          background-image: linear-gradient(to bottom, transparent 50%, #888 50%);
          background-size: 1px 6px;
          animation: flowDown 0.8s linear infinite;
        }
        
        .line-animated-up {
          background-image: linear-gradient(to bottom, transparent 50%, #888 50%);
          background-size: 1px 6px;
          animation: flowUp 0.8s linear infinite;
        }
      `}</style>

      <div className="flex gap-6">
        {/* Main diagram - reduced width to make it appear taller */}
        <div className="flex-1 border border-black">
          <div className="flex">
            {/* Left column with labels */}
            <div className="w-12 border-r border-black">
              {/* Level 2: Principle Data */}
              <div className="h-[180px] border-b border-black flex items-center justify-center">
                <div className="vertical-text text-[11px] text-gray-600">Level 2: Principle Data</div>
              </div>

              {/* Active Inference Network */}
              <div className="h-[320px] border-b border-black flex items-center justify-center">
                <div className="vertical-text text-[11px] text-gray-600">Active Inference Network</div>
              </div>

              {/* Level 1: Empirical Case Data */}
              <div className="h-[180px] flex items-center justify-center">
                <div className="vertical-text text-[11px] text-gray-600">Level 1: Empirical Case Data</div>
              </div>
            </div>

            {/* Right content area */}
            <div className="flex-1">
              {/* Level 2: Principle Data content */}
              <div className="h-[180px] p-6 relative">
                <div className="grid grid-cols-3 gap-6 h-full">
                  {legalPrinciples.map((principle, index) => (
                    <div key={principle.id} className="relative">
                      <div
                        className={`bg-gray-100 p-3 flex flex-col h-full cursor-pointer transition-all duration-200 ${
                          selectedPrinciple === principle.id ? "ring-2 ring-gray-300 shadow-md" : "hover:shadow-md"
                        }`}
                        onClick={() => setSelectedPrinciple(selectedPrinciple === principle.id ? null : principle.id)}
                        style={{ fontFamily: "Arimo, sans-serif", position: "relative", zIndex: 20 }}
                      >
                        <div className="flex items-center mb-2">
                          <Scale className="h-4 w-4 text-black mr-2" />
                          <span className="text-sm font-medium">{principle.name}</span>
                        </div>
                        <div className="text-xs text-gray-600 mb-2 flex-grow">{principle.source}</div>
                        <div className="text-xs text-right self-end w-full">{principle.confidence}% confidence</div>
                      </div>
                      {/* Animated dotted line connecting from each principle card to inference layer */}
                      <div
                        className="absolute bottom-[-26px] left-1/2 transform -translate-x-1/2"
                        style={{ zIndex: 10 }}
                      >
                        <div className="w-[1px] h-[26px] line-animated-down"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Active Inference Network content */}
              <div className="h-[320px] p-6 relative">
                <div className="bg-[#fdf8e9] p-6 h-full relative">
                  <h3 className="text-lg font-normal mb-6" style={{ fontFamily: "Arimo, sans-serif" }}>
                    Inference Layer: Legal Predictions
                  </h3>

                  {/* Grid layout for the cards */}
                  <div className="grid grid-cols-3 gap-6 overflow-hidden">
                    {inferences.map((inference, index) => (
                      <div key={inference.id} className="relative">
                        <div
                          className={`bg-[#f8efc7] p-4 cursor-pointer transition-all duration-200 flex flex-col h-full ${
                            selectedInference === inference.id
                              ? "ring-2 ring-gray-300 shadow-md"
                              : "hover:shadow-md hover:-translate-y-1"
                          }`}
                          onClick={() => setSelectedInference(selectedInference === inference.id ? null : inference.id)}
                          style={{ fontFamily: "Arimo, sans-serif", position: "relative", zIndex: 20 }}
                        >
                          <h4 className="text-sm font-medium mb-2">{inference.title}</h4>
                          <p className="text-xs mb-4 text-gray-600 flex-grow">{inference.description}</p>
                          <p className="text-xs text-right self-end w-full">{inference.confidence}% confidence</p>
                        </div>
                        {/* Animated dotted line connecting from each inference card to evidence layer */}
                        <div
                          className="absolute bottom-[-26px] left-1/2 transform -translate-x-1/2"
                          style={{ zIndex: 10 }}
                        >
                          <div className="w-[1px] h-[26px] line-animated-down"></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end mt-6">
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Level 1: Empirical Case Data content */}
              <div className="h-[180px] p-6 relative">
                <div className="grid grid-cols-3 gap-6 h-full">
                  {caseEvidence.slice(0, 3).map((evidence, index) => (
                    <div key={evidence.id} className="relative">
                      {/* Animated dotted line extending upward from each evidence card to inference layer */}
                      <div className="absolute top-[-26px] left-1/2 transform -translate-x-1/2" style={{ zIndex: 10 }}>
                        <div className="w-[1px] h-[26px] line-animated-up"></div>
                      </div>
                      <div
                        className={`bg-gray-100 p-3 flex flex-col h-full cursor-pointer transition-all duration-200 ${
                          selectedEvidence === evidence.id ? "ring-2 ring-gray-300 shadow-md" : "hover:shadow-md"
                        }`}
                        onClick={() => setSelectedEvidence(selectedEvidence === evidence.id ? null : evidence.id)}
                        style={{ fontFamily: "Arimo, sans-serif", position: "relative", zIndex: 20 }}
                      >
                        <div className="flex items-center mb-2">
                          <FileText className="h-4 w-4 text-black mr-2" />
                          <span className="text-sm font-medium">{evidence.name}</span>
                        </div>
                        <div className="flex justify-between text-xs text-gray-600 mb-2 flex-grow">
                          <span>{evidence.type}</span>
                          <span>{evidence.timePoint}</span>
                        </div>
                        <div className="text-xs text-right self-end w-full">{evidence.confidence}% confidence</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Details sidebar - removed row dividers */}
        <div className="w-[300px] border border-black">
          <div className="p-6">
            <h3 className="text-sm font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
              Legal Details
            </h3>
            <p className="text-[11px] text-gray-500 mb-4" style={{ fontFamily: "Arimo, sans-serif" }}>
              Analysis of selected inference
            </p>
            <div className="border border-black h-32">
              {selectedInference ? (
                <div className="p-3 text-[11px]" style={{ fontFamily: "Arimo, sans-serif" }}>
                  {inferences
                    .filter((inf) => inf.id === selectedInference)
                    .map((inference) => (
                      <div key={inference.id}>
                        <p className="font-medium">{inference.title}</p>
                        <p className="mt-2">{inference.description}</p>
                        <p className="mt-2">Confidence score: {inference.confidence}%</p>
                      </div>
                    ))}
                </div>
              ) : (
                <div
                  className="flex flex-col items-center justify-center h-full text-gray-400"
                  style={{ fontFamily: "Arimo, sans-serif" }}
                >
                  <FileSearch className="h-6 w-6 mb-2" />
                  <p className="text-[11px]">Select an inference to view details</p>
                </div>
              )}
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xs font-normal mb-2" style={{ fontFamily: "Arimo, sans-serif" }}>
              Related Legal Principles:
            </h3>
            <div className="space-y-2">
              {selectedInference ? (
                getRelatedPrinciples(selectedInference).map((principle) => (
                  <div key={principle.id} className="border border-black p-2">
                    <div className="flex items-center">
                      <Scale className="h-3 w-3 text-black mr-2" />
                      <span className="text-[11px]" style={{ fontFamily: "Arimo, sans-serif" }}>
                        {principle.name}
                      </span>
                    </div>
                    <div className="text-[10px] text-gray-600 mt-1" style={{ fontFamily: "Arimo, sans-serif" }}>
                      {principle.source}
                    </div>
                  </div>
                ))
              ) : (
                <div className="border border-gray-300 h-16"></div>
              )}
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xs font-normal mb-2" style={{ fontFamily: "Arimo, sans-serif" }}>
              Related Case Evidence:
            </h3>
            <div className="space-y-2">
              {selectedInference ? (
                getRelatedEvidence(selectedInference).map((evidence) => (
                  <div key={evidence.id} className="border border-black p-2">
                    <div className="flex items-center">
                      <FileText className="h-3 w-3 text-black mr-2" />
                      <span className="text-[11px]" style={{ fontFamily: "Arimo, sans-serif" }}>
                        {evidence.name}
                      </span>
                    </div>
                    <div
                      className="flex justify-between text-[10px] text-gray-600 mt-1"
                      style={{ fontFamily: "Arimo, sans-serif" }}
                    >
                      <span>{evidence.type}</span>
                      <span>{evidence.timePoint}</span>
                    </div>
                  </div>
                ))
              ) : (
                <>
                  <div className="border border-gray-300 h-8"></div>
                  <div className="border border-gray-300 h-8"></div>
                  <div className="border border-gray-300 h-8"></div>
                  <div className="border border-gray-300 h-8"></div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

