"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { FileText, Users, FileCheck, AlertTriangle, Calendar, Clock, Zap, MinusCircle, PlusCircle } from "lucide-react"

export default function OntologyVisualization() {
  const [zoomLevel, setZoomLevel] = useState(1)

  const zoomIn = () => {
    if (zoomLevel < 1.5) {
      setZoomLevel(zoomLevel + 0.1)
    }
  }

  const zoomOut = () => {
    if (zoomLevel > 0.5) {
      setZoomLevel(zoomLevel - 0.1)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-normal" style={{ fontFamily: "IBM Plex Sans, sans-serif" }}>
            Contract Ontology Model
          </h2>
          <p className="text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
            Semantic structure of legal contract data
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={zoomOut}
            className="border border-black bg-white text-black hover:bg-gray-100"
            style={{ fontFamily: "Arimo, sans-serif" }}
          >
            <MinusCircle className="h-4 w-4 mr-2" />
            Zoom Out
          </Button>
          <span className="text-sm" style={{ fontFamily: "Arimo, sans-serif" }}>
            {Math.round(zoomLevel * 100)}%
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={zoomIn}
            className="border border-black bg-white text-black hover:bg-gray-100"
            style={{ fontFamily: "Arimo, sans-serif" }}
          >
            <PlusCircle className="h-4 w-4 mr-2" />
            Zoom In
          </Button>
        </div>
      </div>

      <Tabs defaultValue="visual">
        <TabsList className="mb-6 bg-white border border-black" style={{ fontFamily: "Arimo, sans-serif" }}>
          <TabsTrigger
            value="visual"
            className="data-[state=active]:bg-black data-[state=active]:text-white"
            style={{ fontFamily: "Arimo, sans-serif" }}
          >
            Visual Model
          </TabsTrigger>
          <TabsTrigger
            value="schema"
            className="data-[state=active]:bg-black data-[state=active]:text-white"
            style={{ fontFamily: "Arimo, sans-serif" }}
          >
            Schema Definition
          </TabsTrigger>
          <TabsTrigger
            value="relationships"
            className="data-[state=active]:bg-black data-[state=active]:text-white"
            style={{ fontFamily: "Arimo, sans-serif" }}
          >
            Relationships
          </TabsTrigger>
        </TabsList>

        <TabsContent value="visual">
          <div className="border border-black bg-white">
            <div className="border-b border-black p-4 bg-[#fdf8e9]">
              <h3 className="text-lg font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                Ontology Visualization
              </h3>
              <p className="text-sm text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
                Interactive model of contract data relationships
              </p>
            </div>
            <div className="p-6">
              <div
                className="relative border border-black bg-white p-4 min-h-[600px] overflow-auto"
                style={{ transform: `scale(${zoomLevel})`, transformOrigin: "center top" }}
              >
                {/* Central Contract Object */}
                <div className="absolute left-1/2 top-10 -translate-x-1/2 w-64">
                  <div className="bg-white border border-black p-4 shadow-md">
                    <div className="flex items-center justify-center mb-2">
                      <FileText className="h-6 w-6 text-black mr-2" />
                      <h3 className="font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                        Contract
                      </h3>
                    </div>
                    <div className="text-xs text-gray-600 space-y-1" style={{ fontFamily: "Arimo, sans-serif" }}>
                      <div className="flex justify-between">
                        <span>ID:</span>
                        <span className="font-mono">String</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Title:</span>
                        <span className="font-mono">String</span>
                      </div>
                      <div className="flex justify-between">
                        <span>EffectiveDate:</span>
                        <span className="font-mono">Date</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ExpiryDate:</span>
                        <span className="font-mono">Date</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Status:</span>
                        <span className="font-mono">Enum</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Party Object - Left */}
                <div className="absolute left-1/4 top-40 -translate-x-1/2 w-56">
                  <div className="bg-white border border-black p-4 shadow-md">
                    <div className="flex items-center justify-center mb-2">
                      <Users className="h-6 w-6 text-black mr-2" />
                      <h3 className="font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                        Party
                      </h3>
                    </div>
                    <div className="text-xs text-gray-600 space-y-1" style={{ fontFamily: "Arimo, sans-serif" }}>
                      <div className="flex justify-between">
                        <span>Name:</span>
                        <span className="font-mono">String</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Type:</span>
                        <span className="font-mono">Enum</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ContactPerson:</span>
                        <span className="font-mono">String</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Email:</span>
                        <span className="font-mono">String</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clause Object - Right */}
                <div className="absolute right-1/4 top-40 translate-x-1/2 w-56">
                  <div className="bg-white border border-black p-4 shadow-md">
                    <div className="flex items-center justify-center mb-2">
                      <FileCheck className="h-6 w-6 text-black mr-2" />
                      <h3 className="font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                        Clause
                      </h3>
                    </div>
                    <div className="text-xs text-gray-600 space-y-1" style={{ fontFamily: "Arimo, sans-serif" }}>
                      <div className="flex justify-between">
                        <span>Type:</span>
                        <span className="font-mono">Enum</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Text:</span>
                        <span className="font-mono">String</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Location:</span>
                        <span className="font-mono">String</span>
                      </div>
                      <div className="flex justify-between">
                        <span>IsRPI:</span>
                        <span className="font-mono">Boolean</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Obligation Object - Bottom */}
                <div className="absolute left-1/2 top-[250px] -translate-x-1/2 w-56">
                  <div className="bg-[#fdf8e9] border border-black p-4 shadow-md">
                    <div className="flex items-center justify-center mb-2">
                      <AlertTriangle className="h-6 w-6 text-black mr-2" />
                      <h3 className="font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                        Obligation
                      </h3>
                    </div>
                    <div className="text-xs text-gray-600 space-y-1" style={{ fontFamily: "Arimo, sans-serif" }}>
                      <div className="flex justify-between">
                        <span>Type:</span>
                        <span className="font-mono">Enum</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Description:</span>
                        <span className="font-mono">String</span>
                      </div>
                      <div className="flex justify-between">
                        <span>DueDate:</span>
                        <span className="font-mono">Date</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Status:</span>
                        <span className="font-mono">Enum</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Object - Bottom Left */}
                <div className="absolute left-1/4 top-[350px] -translate-x-1/2 w-56">
                  <div className="bg-white border border-black p-4 shadow-md">
                    <div className="flex items-center justify-center mb-2">
                      <Zap className="h-6 w-6 text-black mr-2" />
                      <h3 className="font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                        Action
                      </h3>
                    </div>
                    <div className="text-xs text-gray-600 space-y-1" style={{ fontFamily: "Arimo, sans-serif" }}>
                      <div className="flex justify-between">
                        <span>Type:</span>
                        <span className="font-mono">Enum</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Description:</span>
                        <span className="font-mono">String</span>
                      </div>
                      <div className="flex justify-between">
                        <span>DueDate:</span>
                        <span className="font-mono">Date</span>
                      </div>
                      <div className="flex justify-between">
                        <span>AssignedTo:</span>
                        <span className="font-mono">String</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Object - Bottom Right */}
                <div className="absolute right-1/4 top-[350px] translate-x-1/2 w-56">
                  <div className="bg-white border border-black p-4 shadow-md">
                    <div className="flex items-center justify-center mb-2">
                      <Calendar className="h-6 w-6 text-black mr-2" />
                      <h3 className="font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                        Timeline
                      </h3>
                    </div>
                    <div className="text-xs text-gray-600 space-y-1" style={{ fontFamily: "Arimo, sans-serif" }}>
                      <div className="flex justify-between">
                        <span>Event:</span>
                        <span className="font-mono">String</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Date:</span>
                        <span className="font-mono">Date</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Description:</span>
                        <span className="font-mono">String</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Status:</span>
                        <span className="font-mono">Enum</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Notice Object - Bottom Center */}
                <div className="absolute left-1/2 top-[450px] -translate-x-1/2 w-56">
                  <div className="bg-white border border-black p-4 shadow-md">
                    <div className="flex items-center justify-center mb-2">
                      <Clock className="h-6 w-6 text-black mr-2" />
                      <h3 className="font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                        Notice
                      </h3>
                    </div>
                    <div className="text-xs text-gray-600 space-y-1" style={{ fontFamily: "Arimo, sans-serif" }}>
                      <div className="flex justify-between">
                        <span>Type:</span>
                        <span className="font-mono">Enum</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Period:</span>
                        <span className="font-mono">Integer</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Method:</span>
                        <span className="font-mono">String</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Recipient:</span>
                        <span className="font-mono">Reference</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Legend */}
                <div className="absolute right-4 bottom-4 bg-white border border-black p-2 shadow-md">
                  <div className="text-xs font-normal mb-1" style={{ fontFamily: "Arimo, sans-serif" }}>
                    Legend
                  </div>
                  <div className="space-y-1" style={{ fontFamily: "Arimo, sans-serif" }}>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-white border border-black mr-1"></div>
                      <span className="text-xs">Contract</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-white border border-black mr-1"></div>
                      <span className="text-xs">Party</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-white border border-black mr-1"></div>
                      <span className="text-xs">Clause</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-[#fdf8e9] border border-black mr-1"></div>
                      <span className="text-xs">Obligation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="schema">
          <div className="border border-black bg-white">
            <div className="border-b border-black p-4 bg-[#fdf8e9]">
              <h3 className="text-lg font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                Schema Definition
              </h3>
              <p className="text-sm text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
                JSON schema for contract data model
              </p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-normal mb-2" style={{ fontFamily: "Arimo, sans-serif" }}>
                    Contract
                  </h3>
                  <pre className="bg-gray-50 p-4 border border-black text-sm overflow-auto">
                    {`{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "title": { "type": "string" },
    "effectiveDate": { "type": "string", "format": "date" },
    "expiryDate": { "type": "string", "format": "date" },
    "status": { 
      "type": "string", 
      "enum": ["Draft", "Active", "Expired", "Terminated"] 
    },
    "parties": {
      "type": "array",
      "items": { "$ref": "#/definitions/Party" }
    },
    "clauses": {
      "type": "array",
      "items": { "$ref": "#/definitions/Clause" }
    },
    "obligations": {
      "type": "array",
      "items": { "$ref": "#/definitions/Obligation" }
    }
  },
  "required": ["id", "title", "effectiveDate", "status"]
}`}
                  </pre>
                </div>

                <div>
                  <h3 className="font-normal mb-2" style={{ fontFamily: "Arimo, sans-serif" }}>
                    Clause
                  </h3>
                  <pre className="bg-gray-50 p-4 border border-black text-sm overflow-auto">
                    {`{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "type": { 
      "type": "string", 
      "enum": ["Price", "Term", "Termination", "Notice", "Other"] 
    },
    "text": { "type": "string" },
    "location": { "type": "string" },
    "isRPI": { "type": "boolean" },
    "noticeRequired": { "type": "string" },
    "noticeMethod": { "type": "string" }
  },
  "required": ["id", "type", "text"]
}`}
                  </pre>
                </div>

                <div>
                  <h3 className="font-normal mb-2" style={{ fontFamily: "Arimo, sans-serif" }}>
                    Party
                  </h3>
                  <pre className="bg-gray-50 p-4 border border-black text-sm overflow-auto">
                    {`{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "name": { "type": "string" },
    "type": { 
      "type": "string", 
      "enum": ["Supplier", "Reseller", "Customer", "Other"] 
    },
    "contactPerson": { "type": "string" },
    "email": { "type": "string", "format": "email" },
    "phone": { "type": "string" },
    "address": { "type": "string" }
  },
  "required": ["id", "name", "type"]
}`}
                  </pre>
                </div>

                <div>
                  <h3 className="font-normal mb-2" style={{ fontFamily: "Arimo, sans-serif" }}>
                    Obligation
                  </h3>
                  <pre className="bg-gray-50 p-4 border border-black text-sm overflow-auto">
                    {`{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "type": { 
      "type": "string", 
      "enum": ["Payment", "Delivery", "Notice", "Other"] 
    },
    "description": { "type": "string" },
    "dueDate": { "type": "string", "format": "date" },
    "status": { 
      "type": "string", 
      "enum": ["Pending", "Completed", "Overdue", "Waived"] 
    },
    "obligor": { "$ref": "#/definitions/Party" },
    "obligee": { "$ref": "#/definitions/Party" }
  },
  "required": ["id", "type", "description"]
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="relationships">
          <div className="border border-black bg-white">
            <div className="border-b border-black p-4 bg-[#fdf8e9]">
              <h3 className="text-lg font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                Entity Relationships
              </h3>
              <p className="text-sm text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
                Connections between contract data entities
              </p>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-normal mb-2" style={{ fontFamily: "Arimo, sans-serif" }}>
                    Entity Relationships
                  </h3>
                  <div className="bg-gray-50 p-4 border border-black">
                    <ul className="space-y-2" style={{ fontFamily: "Arimo, sans-serif" }}>
                      <li className="flex items-center">
                        <Badge className="bg-white text-black border border-black mr-2">Contract</Badge>
                        <span className="text-gray-500 mx-2">has many</span>
                        <Badge className="bg-white text-black border border-black">Party</Badge>
                      </li>
                      <li className="flex items-center">
                        <Badge className="bg-white text-black border border-black mr-2">Contract</Badge>
                        <span className="text-gray-500 mx-2">contains many</span>
                        <Badge className="bg-white text-black border border-black">Clause</Badge>
                      </li>
                      <li className="flex items-center">
                        <Badge className="bg-white text-black border border-black mr-2">Contract</Badge>
                        <span className="text-gray-500 mx-2">defines many</span>
                        <Badge className="bg-[#fdf8e9] text-black border border-black">Obligation</Badge>
                      </li>
                      <li className="flex items-center">
                        <Badge className="bg-white text-black border border-black mr-2">Clause</Badge>
                        <span className="text-gray-500 mx-2">may create</span>
                        <Badge className="bg-[#fdf8e9] text-black border border-black">Obligation</Badge>
                      </li>
                      <li className="flex items-center">
                        <Badge className="bg-[#fdf8e9] text-black border border-black mr-2">Obligation</Badge>
                        <span className="text-gray-500 mx-2">may require</span>
                        <Badge className="bg-white text-black border border-black">Notice</Badge>
                      </li>
                      <li className="flex items-center">
                        <Badge className="bg-[#fdf8e9] text-black border border-black mr-2">Obligation</Badge>
                        <span className="text-gray-500 mx-2">triggers</span>
                        <Badge className="bg-white text-black border border-black">Action</Badge>
                      </li>
                      <li className="flex items-center">
                        <Badge className="bg-white text-black border border-black mr-2">Party</Badge>
                        <span className="text-gray-500 mx-2">receives</span>
                        <Badge className="bg-white text-black border border-black">Notice</Badge>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="font-normal mb-2" style={{ fontFamily: "Arimo, sans-serif" }}>
                    Semantic Layers
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border border-black p-4">
                      <h4 className="font-normal mb-2" style={{ fontFamily: "Arimo, sans-serif" }}>
                        Semantic Layer
                      </h4>
                      <p className="text-sm text-gray-600 mb-2" style={{ fontFamily: "Arimo, sans-serif" }}>
                        Defines what things are and their properties
                      </p>
                      <div className="space-y-1">
                        <Badge className="bg-white text-black border border-black mr-1">Contract</Badge>
                        <Badge className="bg-white text-black border border-black mr-1">Party</Badge>
                        <Badge className="bg-white text-black border border-black mr-1">Clause</Badge>
                      </div>
                    </div>

                    <div className="border border-black p-4">
                      <h4 className="font-normal mb-2" style={{ fontFamily: "Arimo, sans-serif" }}>
                        Kinetic Layer
                      </h4>
                      <p className="text-sm text-gray-600 mb-2" style={{ fontFamily: "Arimo, sans-serif" }}>
                        Defines actions and processes
                      </p>
                      <div className="space-y-1">
                        <Badge className="bg-[#fdf8e9] text-black border border-black mr-1">Obligation</Badge>
                        <Badge className="bg-white text-black border border-black mr-1">Action</Badge>
                        <Badge className="bg-white text-black border border-black mr-1">Notice</Badge>
                      </div>
                    </div>

                    <div className="border border-black p-4">
                      <h4 className="font-normal mb-2" style={{ fontFamily: "Arimo, sans-serif" }}>
                        Dynamic Layer
                      </h4>
                      <p className="text-sm text-gray-600 mb-2" style={{ fontFamily: "Arimo, sans-serif" }}>
                        Defines time-based events and monitoring
                      </p>
                      <div className="space-y-1">
                        <Badge className="bg-white text-black border border-black mr-1">Timeline</Badge>
                        <Badge className="bg-white text-black border border-black mr-1">Alert</Badge>
                        <Badge className="bg-white text-black border border-black mr-1">Report</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

