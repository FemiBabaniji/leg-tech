"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  CheckCircle,
  XCircle,
  HelpCircle,
  Clock,
  FileText,
} from "lucide-react"

// Sample contract data
const contracts = [
  {
    id: "JTZ-R-2023-089",
    reseller: "Marine Supplies Ltd",
    date: "2023-05-12",
    status: "Completed",
    rpiClause: "Yes",
    noticeRequired: "60 days",
    assignedTo: "Sarah J.",
  },
  {
    id: "JTZ-R-2022-156",
    reseller: "Nautical Essentials",
    date: "2022-11-30",
    status: "Flagged",
    rpiClause: "Unclear",
    noticeRequired: "Unknown",
    assignedTo: "Michael T.",
  },
  {
    id: "JTZ-R-2023-042",
    reseller: "SailPro Equipment",
    date: "2023-02-18",
    status: "Completed",
    rpiClause: "Yes",
    noticeRequired: "30 days",
    assignedTo: "Priya K.",
  },
  {
    id: "JTZ-R-2021-278",
    reseller: "Coastal Outfitters",
    date: "2021-09-05",
    status: "Completed",
    rpiClause: "No",
    noticeRequired: "N/A",
    assignedTo: "Sarah J.",
  },
  {
    id: "JTZ-R-2022-391",
    reseller: "Harbor Supplies Co.",
    date: "2022-12-15",
    status: "In Progress",
    rpiClause: "Pending",
    noticeRequired: "Pending",
    assignedTo: "Michael T.",
  },
  {
    id: "JTZ-R-2023-201",
    reseller: "Maritime Gear Inc.",
    date: "2023-07-22",
    status: "In Progress",
    rpiClause: "Pending",
    noticeRequired: "Pending",
    assignedTo: "Priya K.",
  },
  {
    id: "JTZ-R-2021-099",
    reseller: "Sailor's Depot",
    date: "2021-04-10",
    status: "Flagged",
    rpiClause: "Yes",
    noticeRequired: "90 days",
    assignedTo: "Sarah J.",
  },
  {
    id: "JTZ-R-2022-344",
    reseller: "Ocean Equipment Ltd",
    date: "2022-10-28",
    status: "Completed",
    rpiClause: "No",
    noticeRequired: "N/A",
    assignedTo: "Michael T.",
  },
  {
    id: "JTZ-R-2023-157",
    reseller: "Yacht Supplies Co.",
    date: "2023-06-14",
    status: "In Progress",
    rpiClause: "Pending",
    noticeRequired: "Pending",
    assignedTo: "Priya K.",
  },
  {
    id: "JTZ-R-2022-229",
    reseller: "Boating Essentials",
    date: "2022-08-03",
    status: "Completed",
    rpiClause: "Yes",
    noticeRequired: "45 days",
    assignedTo: "Sarah J.",
  },
]

interface ContractListProps {
  onSelectContract: (contractId: string) => void
}

export default function ContractList({ onSelectContract }: ContractListProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const totalPages = Math.ceil(contracts.length / itemsPerPage)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return (
          <div className="flex items-center">
            <CheckCircle className="h-4 w-4 text-black mr-1" />
            <span style={{ fontFamily: "Arimo, sans-serif" }}>Completed</span>
          </div>
        )
      case "In Progress":
        return (
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-black mr-1" />
            <span style={{ fontFamily: "Arimo, sans-serif" }}>In Progress</span>
          </div>
        )
      case "Flagged":
        return (
          <div className="flex items-center">
            <XCircle className="h-4 w-4 text-black mr-1" />
            <span style={{ fontFamily: "Arimo, sans-serif" }}>Flagged</span>
          </div>
        )
      default:
        return <span style={{ fontFamily: "Arimo, sans-serif" }}>{status}</span>
    }
  }

  const getRPIBadge = (rpiStatus: string) => {
    switch (rpiStatus) {
      case "Yes":
        return (
          <div className="flex items-center">
            <CheckCircle className="h-4 w-4 text-black mr-1" />
            <span style={{ fontFamily: "Arimo, sans-serif" }}>Yes</span>
          </div>
        )
      case "No":
        return (
          <div className="flex items-center">
            <XCircle className="h-4 w-4 text-black mr-1" />
            <span style={{ fontFamily: "Arimo, sans-serif" }}>No</span>
          </div>
        )
      case "Unclear":
        return (
          <div className="flex items-center">
            <HelpCircle className="h-4 w-4 text-black mr-1" />
            <span style={{ fontFamily: "Arimo, sans-serif" }}>Unclear</span>
          </div>
        )
      case "Pending":
        return (
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-black mr-1" />
            <span style={{ fontFamily: "Arimo, sans-serif" }}>Pending</span>
          </div>
        )
      default:
        return <span style={{ fontFamily: "Arimo, sans-serif" }}>{rpiStatus}</span>
    }
  }

  return (
    <div>
      <div className="border border-black bg-white">
        <div className="border-b border-black p-4 bg-[#fdf8e9]">
          <h3 className="text-lg font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
            Contract List
          </h3>
          <p className="text-sm text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
            Reseller agreements with RPI clause analysis
          </p>
        </div>
        <div className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-black">
                <TableHead className="font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                  Contract ID
                </TableHead>
                <TableHead className="font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                  Reseller
                </TableHead>
                <TableHead className="font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                  Date
                </TableHead>
                <TableHead className="font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                  Status
                </TableHead>
                <TableHead className="font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                  RPI Clause
                </TableHead>
                <TableHead className="font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                  Notice Required
                </TableHead>
                <TableHead className="font-normal" style={{ fontFamily: "Arimo, sans-serif" }}>
                  Assigned To
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contracts.map((contract) => (
                <TableRow
                  key={contract.id}
                  className="cursor-pointer hover:bg-gray-50 border-b border-black last:border-b-0"
                  onClick={() => onSelectContract(contract.id)}
                >
                  <TableCell className="flex items-center">
                    <FileText className="h-4 w-4 text-black mr-2" />
                    <span style={{ fontFamily: "Arimo, sans-serif" }}>{contract.id}</span>
                  </TableCell>
                  <TableCell style={{ fontFamily: "Arimo, sans-serif" }}>{contract.reseller}</TableCell>
                  <TableCell style={{ fontFamily: "Arimo, sans-serif" }}>{contract.date}</TableCell>
                  <TableCell>{getStatusBadge(contract.status)}</TableCell>
                  <TableCell>{getRPIBadge(contract.rpiClause)}</TableCell>
                  <TableCell style={{ fontFamily: "Arimo, sans-serif" }}>{contract.noticeRequired}</TableCell>
                  <TableCell style={{ fontFamily: "Arimo, sans-serif" }}>{contract.assignedTo}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-gray-500" style={{ fontFamily: "Arimo, sans-serif" }}>
          Showing {Math.min(contracts.length, itemsPerPage)} of {contracts.length} contracts
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="border border-black bg-white text-black hover:bg-gray-100"
            style={{ fontFamily: "Arimo, sans-serif" }}
          >
            <ChevronsLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="border border-black bg-white text-black hover:bg-gray-100"
            style={{ fontFamily: "Arimo, sans-serif" }}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm" style={{ fontFamily: "Arimo, sans-serif" }}>
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="border border-black bg-white text-black hover:bg-gray-100"
            style={{ fontFamily: "Arimo, sans-serif" }}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className="border border-black bg-white text-black hover:bg-gray-100"
            style={{ fontFamily: "Arimo, sans-serif" }}
          >
            <ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

