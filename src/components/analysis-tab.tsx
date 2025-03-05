import { AlertTriangle, CheckCircle, BookOpen, Gavel } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import type { Inference } from "../types"

interface AnalysisTabProps {
  inferences: Inference[]
}

export function AnalysisTab({ inferences }: AnalysisTabProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 border border-black bg-white">
        <div className="border-b border-black p-4">
          <h3 className="text-lg font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
            Legal Recommendations
          </h3>
          <p className="text-sm text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
            Based on active inference analysis
          </p>
        </div>
        <div className="p-0">
          <div className="divide-y divide-black">
            <div className="p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                <div>
                  <h3 className="font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                    RPI Clause Ambiguity
                  </h3>
                  <p className="text-sm text-gray-700 mt-1" style={{ fontFamily: "Arimo, sans-serif" }}>
                    The RPI clause in Section 4.3 contains ambiguous language that may limit enforceability. The phrase
                    "in line with" does not specify whether the adjustment is capped at the RPI rate or can exceed it.
                  </p>
                  <div className="mt-3">
                    <h4 className="text-sm font-normal text-gray-800" style={{ fontFamily: "Arimo, sans-serif" }}>
                      Recommended Actions:
                    </h4>
                    <ul
                      className="list-disc list-inside text-sm text-gray-700 mt-1 space-y-1"
                      style={{ fontFamily: "Arimo, sans-serif" }}
                    >
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
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                    Notice Requirements Compliance
                  </h3>
                  <p className="text-sm text-gray-700 mt-1" style={{ fontFamily: "Arimo, sans-serif" }}>
                    The contract clearly specifies a 60-day notice period for price adjustments, and evidence shows this
                    requirement has been met. Email notifications were sent on March 13, 2023, which is more than 60
                    days before the price adjustment date.
                  </p>
                  <div className="mt-3">
                    <h4 className="text-sm font-normal text-gray-800" style={{ fontFamily: "Arimo, sans-serif" }}>
                      Recommended Actions:
                    </h4>
                    <ul
                      className="list-disc list-inside text-sm text-gray-700 mt-1 space-y-1"
                      style={{ fontFamily: "Arimo, sans-serif" }}
                    >
                      <li>Continue to maintain records of all notice communications</li>
                      <li>Consider implementing an automated notification system for future notices</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-start gap-3">
                <BookOpen className="h-5 w-5 text-black mt-0.5" />
                <div>
                  <h3 className="font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                    Overall Contract Assessment
                  </h3>
                  <p className="text-sm text-gray-700 mt-1" style={{ fontFamily: "Arimo, sans-serif" }}>
                    The contract is generally valid and enforceable, with the exception of the ambiguity in the RPI
                    clause. The active inference model indicates a 88% confidence in overall contract validity, with
                    specific concerns limited to the price adjustment mechanism.
                  </p>
                  <div className="mt-3">
                    <h4 className="text-sm font-normal text-gray-800" style={{ fontFamily: "Arimo, sans-serif" }}>
                      Recommended Strategy:
                    </h4>
                    <p className="text-sm text-gray-700 mt-1" style={{ fontFamily: "Arimo, sans-serif" }}>
                      Address the RPI clause ambiguity through a contract amendment or side letter that clarifies the
                      price adjustment mechanism. This approach maintains the overall validity of the contract while
                      resolving the specific area of concern.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-black bg-white">
        <div className="border-b border-black p-4">
          <h3 className="text-lg font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
            Model Confidence
          </h3>
          <p className="text-sm text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
            Inference reliability metrics
          </p>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                  Contract Validity
                </span>
                <span className="text-sm text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
                  92%
                </span>
              </div>
              <Progress value={92} className="h-1" />
              <p className="text-xs text-gray-500 mt-1" style={{ fontFamily: "Arimo, sans-serif" }}>
                High confidence based on clear documentation and signatures
              </p>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                  RPI Clause Enforceability
                </span>
                <span className="text-sm text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
                  68%
                </span>
              </div>
              <Progress value={68} className="h-1" />
              <p className="text-xs text-gray-500 mt-1" style={{ fontFamily: "Arimo, sans-serif" }}>
                Medium confidence due to ambiguous language in clause
              </p>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                  Notice Compliance
                </span>
                <span className="text-sm text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
                  88%
                </span>
              </div>
              <Progress value={88} className="h-1" />
              <p className="text-xs text-gray-500 mt-1" style={{ fontFamily: "Arimo, sans-serif" }}>
                High confidence based on email records and client acknowledgment
              </p>
            </div>

            <div className="p-3 border border-black">
              <h3 className="text-sm font-normal mb-1" style={{ fontFamily: "Arimo, sans-serif" }}>
                Hierarchical Consistency
              </h3>
              <div className="flex justify-between mb-1">
                <span className="text-xs text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
                  Level 2 ↔ Level 1 Alignment
                </span>
                <span className="text-xs font-medium" style={{ fontFamily: "Arimo, sans-serif" }}>
                  83%
                </span>
              </div>
              <Progress value={83} className="h-1" />
              <p className="text-xs text-gray-500 mt-1" style={{ fontFamily: "Arimo, sans-serif" }}>
                Strong alignment between legal principles and case evidence
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-black p-4">
          <Button variant="outline" className="w-full border border-black" style={{ fontFamily: "Arimo, sans-serif" }}>
            <Gavel className="h-4 w-4 mr-2" />
            Generate Legal Report
          </Button>
        </div>
      </div>
    </div>
  )
}

