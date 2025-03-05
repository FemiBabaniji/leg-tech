"use client"

import { useState } from "react"
import { Search, Filter, FileText, AlertCircle, CheckCircle, Clock, Plus, Users } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import ContractDetail from "./contract-detail"
import ContractList from "./contract-list"
import OntologyVisualization from "@/components/ontology-visualization"
import WorkflowBuilder from "@/components/wokflow-builder"

export default function ContractAnalysisPrototype() {
  const [activeTab, setActiveTab] = useState("workflow")
  const [selectedContract, setSelectedContract] = useState<string | null>(null)

  // If a contract is selected, show the contract detail view
  if (selectedContract) {
    return (
      <div className="container mx-auto p-4">
        <Button
          variant="outline"
          onClick={() => setSelectedContract(null)}
          className="mb-4 border border-black bg-white text-black hover:bg-gray-100"
          style={{ fontFamily: "Arimo, sans-serif" }}
        >
          Back to {activeTab === "contracts" ? "Contract List" : "Dashboard"}
        </Button>
        <ContractDetail contractId={selectedContract} onClose={() => setSelectedContract(null)} />
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <Tabs defaultValue="workflow" value={activeTab} onValueChange={setActiveTab}>
        <header className="mb-6 border-b border-black pb-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-normal" style={{ fontFamily: "IBM Plex Sans, sans-serif" }}>
                JTZ Contract Analysis
              </h1>
              <p className="text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
                Ontology-Driven Contract Review Platform
              </p>
            </div>
            <div>
              <TabsList className="bg-white border border-black" style={{ fontFamily: "Arimo, sans-serif" }}>
                <TabsTrigger
                  value="dashboard"
                  className="data-[state=active]:bg-black data-[state=active]:text-white"
                  style={{ fontFamily: "Arimo, sans-serif" }}
                >
                  Dashboard
                </TabsTrigger>
                <TabsTrigger
                  value="contracts"
                  className="data-[state=active]:bg-black data-[state=active]:text-white"
                  style={{ fontFamily: "Arimo, sans-serif" }}
                >
                  Contracts
                </TabsTrigger>
                <TabsTrigger
                  value="ontology"
                  className="data-[state=active]:bg-black data-[state=active]:text-white"
                  style={{ fontFamily: "Arimo, sans-serif" }}
                >
                  Ontology
                </TabsTrigger>
                <TabsTrigger
                  value="workflow"
                  className="data-[state=active]:bg-black data-[state=active]:text-white"
                  style={{ fontFamily: "Arimo, sans-serif" }}
                >
                  Workflow Builder
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
        </header>

        <TabsContent value="dashboard">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="border border-black bg-white">
              <div className="border-b border-black p-4 bg-[#fdf8e9]">
                <h3 className="text-lg font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                  Contract Review Progress
                </h3>
                <p className="text-sm text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
                  Overall completion status
                </p>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
                    312 of 500 reviewed
                  </span>
                  <span className="text-sm font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                    62%
                  </span>
                </div>
                <Progress value={62} className="h-2 bg-gray-200" />
                <div className="mt-4 grid grid-cols-3 text-center">
                  <div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-black mr-1" />
                      <span className="text-sm font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                        312
                      </span>
                    </div>
                    <span className="text-xs text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
                      Completed
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center justify-center">
                      <Clock className="h-4 w-4 text-black mr-1" />
                      <span className="text-sm font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                        138
                      </span>
                    </div>
                    <span className="text-xs text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
                      In Progress
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center justify-center">
                      <AlertCircle className="h-4 w-4 text-black mr-1" />
                      <span className="text-sm font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                        50
                      </span>
                    </div>
                    <span className="text-xs text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
                      Flagged
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-black bg-white">
              <div className="border-b border-black p-4 bg-[#fdf8e9]">
                <h3 className="text-lg font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                  RPI Clause Analysis
                </h3>
                <p className="text-sm text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
                  Price adjustment mechanisms found
                </p>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
                    187 contracts with RPI clauses
                  </span>
                  <span className="text-sm font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                    60%
                  </span>
                </div>
                <Progress value={60} className="h-2 bg-gray-200" />
                <div className="mt-4 grid grid-cols-3 text-center">
                  <div>
                    <div className="text-sm font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                      187
                    </div>
                    <span className="text-xs text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
                      RPI Clause
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                      78
                    </div>
                    <span className="text-xs text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
                      Fixed Price
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                      47
                    </div>
                    <span className="text-xs text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
                      Other
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-black bg-white">
              <div className="border-b border-black p-4 bg-[#fdf8e9]">
                <h3 className="text-lg font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                  Workflow Builder
                </h3>
                <p className="text-sm text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
                  Create and manage contract workflows
                </p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 border border-black flex items-center justify-center">
                        <FileText className="h-4 w-4 text-black" />
                      </div>
                      <span className="text-sm" style={{ fontFamily: "Arimo, sans-serif" }}>
                        Contract Review
                      </span>
                    </div>
                    <div className="h-4 w-4 border-l-2 border-black"></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 border border-black flex items-center justify-center">
                        <Users className="h-4 w-4 text-black" />
                      </div>
                      <span className="text-sm" style={{ fontFamily: "Arimo, sans-serif" }}>
                        Legal Review
                      </span>
                    </div>
                    <div className="h-4 w-4 border-l-2 border-black"></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 border border-black flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-black" />
                      </div>
                      <span className="text-sm" style={{ fontFamily: "Arimo, sans-serif" }}>
                        Approval
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-7 px-2 border border-black bg-white text-black hover:bg-gray-100"
                      style={{ fontFamily: "Arimo, sans-serif" }}
                    >
                      <Plus className="h-4 w-4" />
                      <span className="ml-1">Add Step</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-black bg-white md:col-span-2">
              <div className="border-b border-black p-4 bg-[#fdf8e9]">
                <h3 className="text-lg font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                  Recent Activity
                </h3>
                <p className="text-sm text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
                  Latest contract reviews and actions
                </p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {[
                    { id: "JTZ-R-2023-089", action: "RPI clause verified", user: "Sarah J.", time: "10 minutes ago" },
                    { id: "JTZ-R-2022-156", action: "Flagged for review", user: "Michael T.", time: "32 minutes ago" },
                    {
                      id: "JTZ-R-2023-042",
                      action: "Notice requirements extracted",
                      user: "Priya K.",
                      time: "1 hour ago",
                    },
                    { id: "JTZ-R-2021-278", action: "Completed review", user: "Sarah J.", time: "2 hours ago" },
                    {
                      id: "JTZ-R-2022-391",
                      action: "Added reseller contact details",
                      user: "Michael T.",
                      time: "3 hours ago",
                    },
                  ].map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-2 border-b border-black last:border-b-0"
                    >
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 text-black mr-2" />
                        <div>
                          <button
                            className="text-sm font-normal hover:bg-gray-100"
                            onClick={() => setSelectedContract(activity.id)}
                            style={{ fontFamily: "Arimo, sans-serif" }}
                          >
                            {activity.id}
                          </button>
                          <p className="text-xs text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
                            {activity.action}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm" style={{ fontFamily: "Arimo, sans-serif" }}>
                          {activity.user}
                        </div>
                        <div className="text-xs text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
                          {activity.time}
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
                  Priority Contracts
                </h3>
                <p className="text-sm text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
                  Contracts needing immediate attention
                </p>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {[
                    { id: "JTZ-R-2022-156", issue: "Ambiguous RPI language", daysLeft: 5 },
                    { id: "JTZ-R-2023-201", issue: "30-day notice required", daysLeft: 7 },
                    { id: "JTZ-R-2021-099", issue: "Expires in 2 weeks", daysLeft: 14 },
                    { id: "JTZ-R-2022-344", issue: "Missing contact details", daysLeft: 15 },
                  ].map((contract, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-2 border-b border-black last:border-b-0"
                    >
                      <div>
                        <button
                          className="text-sm font-normal hover:bg-gray-100"
                          onClick={() => setSelectedContract(contract.id)}
                          style={{ fontFamily: "Arimo, sans-serif" }}
                        >
                          {contract.id}
                        </button>
                        <p className="text-xs text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
                          {contract.issue}
                        </p>
                      </div>
                      <div
                        className="border border-black px-2 py-0.5 text-xs"
                        style={{ fontFamily: "Arimo, sans-serif" }}
                      >
                        {contract.daysLeft} days
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="contracts">
          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search contracts..."
                className="pl-8 border-black"
                style={{ fontFamily: "Arimo, sans-serif" }}
              />
            </div>
            <Button
              variant="outline"
              className="flex items-center gap-2 border border-black bg-white text-black hover:bg-gray-100"
              style={{ fontFamily: "Arimo, sans-serif" }}
            >
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </Button>
          </div>

          <ContractList onSelectContract={setSelectedContract} />
        </TabsContent>

        <TabsContent value="ontology">
          <OntologyVisualization />
        </TabsContent>

        <TabsContent value="workflow">
          <WorkflowBuilder />
        </TabsContent>
      </Tabs>
    </div>
  )
}

