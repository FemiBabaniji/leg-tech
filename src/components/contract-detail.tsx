"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { FileText, Calendar, User, Building, Scale, AlertTriangle, CheckCircle } from "lucide-react"

interface ContractDetailProps {
  contractId: string
  onClose: () => void
}

export default function ContractDetail({ contractId, onClose }: ContractDetailProps) {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock contract data - in a real app, this would be fetched from an API
  const contract = {
    id: contractId,
    title: "Reseller Agreement",
    status: "In Review",
    type: "Reseller",
    effectiveDate: "2022-05-15",
    expirationDate: "2024-05-14",
    parties: [
      { name: "JTZ Technologies Ltd", role: "Supplier" },
      { name: "Acme Distribution Inc", role: "Reseller" },
    ],
    clauses: [
      {
        id: "clause-1",
        title: "RPI Price Adjustment",
        content:
          "Prices may be adjusted annually in line with the Retail Price Index (RPI) as published by the Office for National Statistics.",
        category: "Price Adjustment",
        risk: "medium",
      },
      {
        id: "clause-2",
        title: "Notice Period",
        content: "A minimum of 60 days written notice must be provided prior to any price adjustment.",
        category: "Notice Requirement",
        risk: "low",
      },
      {
        id: "clause-3",
        title: "Termination",
        content: "Either party may terminate this agreement with 90 days written notice.",
        category: "Termination",
        risk: "low",
      },
    ],
    notes: [
      {
        id: "note-1",
        user: "Sarah J.",
        date: "2023-06-10",
        content:
          "RPI clause language is somewhat ambiguous. Does not specify if adjustments are capped at RPI or can exceed it.",
      },
      {
        id: "note-2",
        user: "Michael T.",
        date: "2023-06-12",
        content: "Confirmed with legal that the 60-day notice period is sufficient for our planned price adjustments.",
      },
    ],
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return (
          <div className="flex items-center">
            <CheckCircle className="h-4 w-4 text-black mr-1" />
            <span style={{ fontFamily: "Arimo, sans-serif" }}>Completed</span>
          </div>
        )
      case "In Review":
        return (
          <div className="flex items-center">
            <FileText className="h-4 w-4 text-black mr-1" />
            <span style={{ fontFamily: "Arimo, sans-serif" }}>In Review</span>
          </div>
        )
      case "Flagged":
        return (
          <div className="flex items-center">
            <AlertTriangle className="h-4 w-4 text-black mr-1" />
            <span style={{ fontFamily: "Arimo, sans-serif" }}>Flagged</span>
          </div>
        )
      default:
        return <span style={{ fontFamily: "Arimo, sans-serif" }}>{status}</span>
    }
  }

  const getRiskBadge = (risk: string) => {
    switch (risk) {
      case "high":
        return (
          <div className="flex items-center">
            <AlertTriangle className="h-4 w-4 text-black mr-1" />
            <span style={{ fontFamily: "Arimo, sans-serif" }}>High Risk</span>
          </div>
        )
      case "medium":
        return (
          <div className="flex items-center">
            <AlertTriangle className="h-4 w-4 text-black mr-1" />
            <span style={{ fontFamily: "Arimo, sans-serif" }}>Medium Risk</span>
          </div>
        )
      case "low":
        return (
          <div className="flex items-center">
            <CheckCircle className="h-4 w-4 text-black mr-1" />
            <span style={{ fontFamily: "Arimo, sans-serif" }}>Low Risk</span>
          </div>
        )
      default:
        return <span style={{ fontFamily: "Arimo, sans-serif" }}>{risk}</span>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-normal" style={{ fontFamily: "IBM Plex Sans, sans-serif" }}>
            {contract.title}
          </h1>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
              {contract.id}
            </span>
            <div className="border border-black px-2 py-0.5 text-xs" style={{ fontFamily: "Arimo, sans-serif" }}>
              {contract.status}
            </div>
            <div className="border border-black px-2 py-0.5 text-xs" style={{ fontFamily: "Arimo, sans-serif" }}>
              {contract.type}
            </div>
          </div>
        </div>
        <Button
          variant="outline"
          onClick={onClose}
          className="border border-black bg-white text-black hover:bg-gray-100"
          style={{ fontFamily: "Arimo, sans-serif" }}
        >
          Close
        </Button>
      </div>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6 bg-white border border-black" style={{ fontFamily: "Arimo, sans-serif" }}>
          <TabsTrigger
            value="overview"
            className="data-[state=active]:bg-black data-[state=active]:text-white"
            style={{ fontFamily: "Arimo, sans-serif" }}
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="clauses"
            className="data-[state=active]:bg-black data-[state=active]:text-white"
            style={{ fontFamily: "Arimo, sans-serif" }}
          >
            Clauses
          </TabsTrigger>
          <TabsTrigger
            value="notes"
            className="data-[state=active]:bg-black data-[state=active]:text-white"
            style={{ fontFamily: "Arimo, sans-serif" }}
          >
            Notes
          </TabsTrigger>
          <TabsTrigger
            value="documents"
            className="data-[state=active]:bg-black data-[state=active]:text-white"
            style={{ fontFamily: "Arimo, sans-serif" }}
          >
            Documents
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-black bg-white">
              <div className="border-b border-black p-4 bg-[#fdf8e9]">
                <h3 className="text-lg font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                  Contract Details
                </h3>
              </div>
              <div className="p-6">
                <dl className="space-y-4">
                  <div className="flex items-start">
                    <dt
                      className="w-1/3 flex items-center text-sm font-normal text-gray-500"
                      style={{ fontFamily: "Arimo, sans-serif" }}
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Effective Date
                    </dt>
                    <dd className="flex-1 text-sm" style={{ fontFamily: "Arimo, sans-serif" }}>
                      {new Date(contract.effectiveDate).toLocaleDateString()}
                    </dd>
                  </div>
                  <div className="flex items-start">
                    <dt
                      className="w-1/3 flex items-center text-sm font-normal text-gray-500"
                      style={{ fontFamily: "Arimo, sans-serif" }}
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Expiration Date
                    </dt>
                    <dd className="flex-1 text-sm" style={{ fontFamily: "Arimo, sans-serif" }}>
                      {new Date(contract.expirationDate).toLocaleDateString()}
                    </dd>
                  </div>
                  <div className="flex items-start">
                    <dt
                      className="w-1/3 flex items-center text-sm font-normal text-gray-500"
                      style={{ fontFamily: "Arimo, sans-serif" }}
                    >
                      <Scale className="h-4 w-4 mr-2" />
                      Status
                    </dt>
                    <dd className="flex-1 text-sm" style={{ fontFamily: "Arimo, sans-serif" }}>
                      {contract.status}
                    </dd>
                  </div>
                  <div className="flex items-start">
                    <dt
                      className="w-1/3 flex items-center text-sm font-normal text-gray-500"
                      style={{ fontFamily: "Arimo, sans-serif" }}
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      Contract Type
                    </dt>
                    <dd className="flex-1 text-sm" style={{ fontFamily: "Arimo, sans-serif" }}>
                      {contract.type}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="border border-black bg-white">
              <div className="border-b border-black p-4 bg-[#fdf8e9]">
                <h3 className="text-lg font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                  Parties
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {contract.parties.map((party, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-10 h-10 border border-black flex items-center justify-center mr-3">
                        {party.role === "Supplier" ? (
                          <Building className="h-5 w-5 text-black" />
                        ) : (
                          <User className="h-5 w-5 text-black" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-sm font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                          {party.name}
                        </h3>
                        <p className="text-xs text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
                          {party.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border border-black bg-white md:col-span-2">
              <div className="border-b border-black p-4 bg-[#fdf8e9]">
                <h3 className="text-lg font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                  Key Clauses
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {contract.clauses.map((clause) => (
                    <div key={clause.id} className="border border-black p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-sm font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                          {clause.title}
                        </h3>
                        {getRiskBadge(clause.risk)}
                      </div>
                      <p className="text-sm text-gray-600 mb-2" style={{ fontFamily: "Arimo, sans-serif" }}>
                        {clause.content}
                      </p>
                      <div className="flex items-center">
                        <div
                          className="border border-black px-2 py-0.5 text-xs"
                          style={{ fontFamily: "Arimo, sans-serif" }}
                        >
                          {clause.category}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="clauses">
          <div className="border border-black bg-white">
            <div className="border-b border-black p-4 bg-[#fdf8e9]">
              <h3 className="text-lg font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                Contract Clauses
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {contract.clauses.map((clause) => (
                  <div key={clause.id} className="border border-black p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-base font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                          {clause.title}
                        </h3>
                        <div
                          className="border border-black px-2 py-0.5 text-xs mt-1 inline-block"
                          style={{ fontFamily: "Arimo, sans-serif" }}
                        >
                          {clause.category}
                        </div>
                      </div>
                      {getRiskBadge(clause.risk)}
                    </div>
                    <p className="text-sm text-gray-600 mb-4" style={{ fontFamily: "Arimo, sans-serif" }}>
                      {clause.content}
                    </p>
                    <div className="flex justify-between">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border border-black bg-white text-black hover:bg-gray-100"
                        style={{ fontFamily: "Arimo, sans-serif" }}
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        View in Document
                      </Button>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border border-black bg-white text-black hover:bg-gray-100"
                          style={{ fontFamily: "Arimo, sans-serif" }}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border border-black bg-white text-black hover:bg-gray-100"
                          style={{ fontFamily: "Arimo, sans-serif" }}
                        >
                          Flag
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="notes">
          <div className="border border-black bg-white">
            <div className="border-b border-black p-4 bg-[#fdf8e9]">
              <h3 className="text-lg font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                Contract Notes
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {contract.notes.map((note) => (
                  <div key={note.id} className="border border-black p-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <div className="w-8 h-8 border border-black flex items-center justify-center mr-2">
                          <User className="h-4 w-4 text-black" />
                        </div>
                        <span className="text-sm font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                          {note.user}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
                        {new Date(note.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm" style={{ fontFamily: "Arimo, sans-serif" }}>
                      {note.content}
                    </p>
                  </div>
                ))}

                <div className="mt-6">
                  <h3 className="text-sm font-normal mb-2" style={{ fontFamily: "Arimo, sans-serif" }}>
                    Add Note
                  </h3>
                  <Textarea
                    placeholder="Type your note here..."
                    className="mb-2 border-black"
                    style={{ fontFamily: "Arimo, sans-serif" }}
                  />
                  <Button
                    className="border border-black bg-white text-black hover:bg-gray-100"
                    style={{ fontFamily: "Arimo, sans-serif" }}
                  >
                    Add Note
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="documents">
          <div className="border border-black bg-white">
            <div className="border-b border-black p-4 bg-[#fdf8e9]">
              <h3 className="text-lg font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                Contract Documents
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="border border-black p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 border border-black flex items-center justify-center mr-3">
                      <FileText className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <h3 className="text-sm font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                        Reseller_Agreement_JTZ_Acme.pdf
                      </h3>
                      <p className="text-xs text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
                        Uploaded on May 15, 2022
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border border-black bg-white text-black hover:bg-gray-100"
                    style={{ fontFamily: "Arimo, sans-serif" }}
                  >
                    View
                  </Button>
                </div>

                <div className="border border-black p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 border border-black flex items-center justify-center mr-3">
                      <FileText className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <h3 className="text-sm font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                        Reseller_Terms_Appendix.pdf
                      </h3>
                      <p className="text-xs text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
                        Uploaded on May 15, 2022
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border border-black bg-white text-black hover:bg-gray-100"
                    style={{ fontFamily: "Arimo, sans-serif" }}
                  >
                    View
                  </Button>
                </div>

                <div className="border border-black p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 border border-black flex items-center justify-center mr-3">
                      <FileText className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <h3 className="text-sm font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                        Price_Schedule_2022.xlsx
                      </h3>
                      <p className="text-xs text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
                        Uploaded on May 15, 2022
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border border-black bg-white text-black hover:bg-gray-100"
                    style={{ fontFamily: "Arimo, sans-serif" }}
                  >
                    View
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

