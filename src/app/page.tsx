"use client"

import { useState } from "react"
import Link from "next/link"
import { Globe, Lock, Menu } from "lucide-react"

export default function LawsOfLegalTech() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div>
          <Link href="/" className="inline-block">
            <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
              <span className="font-bold text-xl">L</span>
            </div>
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <Menu className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Globe className="w-4 h-4" />
            <span className="text-sm">Oliver B</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-16 text-center">
            Legal Technology Labs is a curated collection of best practices and insights for legal tech practices.
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <Link href="/articles/article1" className="block">
              <div className="bg-[#8B7D39] rounded-lg overflow-hidden h-full flex flex-col">
                <div className="p-8 flex justify-center items-center">
                  <div className="w-32 h-32 bg-[#5F4B10] rounded-full flex items-center justify-center">
                    <div className="w-24 h-24 bg-[#BDB76B] clip-triangle"></div>
                  </div>
                </div>
                <div className="bg-[#1a2230] p-6 flex-grow">
                  <h2 className="text-2xl font-bold mb-4">JTZ Contract Analysis</h2>
                  <p className="text-gray-300">
                    Ontology-Driven Contract Review Platform with hierarchical legal reasoning framework. Leverages
                    Active Inference Model for comprehensive legal analysis and recommendations.
                  </p>
                </div>
              </div>
            </Link>

            {/* Locked Article 2 */}
            <div className="block cursor-not-allowed relative">
              <div className="bg-[#2a6d8f] rounded-lg overflow-hidden h-full flex flex-col opacity-70">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="bg-[#1a2230] p-4 rounded-full">
                    <Lock className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="p-8 flex justify-center items-center">
                  <div className="grid grid-cols-5 gap-2">
                    {Array(25)
                      .fill(0)
                      .map((_, i) => (
                        <div
                          key={i}
                          className={`w-8 h-8 rounded-full ${i % 2 === 0 ? "bg-[#f5f5dc]" : "bg-[#1a5a7a]"}`}
                        ></div>
                      ))}
                  </div>
                </div>
                <div className="bg-[#1a2230] p-6 flex-grow">
                  <h2 className="text-2xl font-bold mb-4">AI-Powered Legal Research</h2>
                  <p className="text-gray-300">
                    Leverage artificial intelligence to streamline legal research and empower decision-making.
                  </p>
                </div>
              </div>
            </div>

            {/* Locked Article 3 */}
            <div className="block cursor-not-allowed relative">
              <div className="bg-[#c25b4e] rounded-lg overflow-hidden h-full flex flex-col opacity-70">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="bg-[#1a2230] p-4 rounded-full">
                    <Lock className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="p-8 flex justify-center items-center">
                  <div className="grid grid-cols-7 gap-1">
                    {Array(49)
                      .fill(0)
                      .map((_, i) => {
                        const row = Math.floor(i / 7)
                        const col = i % 7
                        const isHighlighted = row < col

                        return (
                          <div
                            key={i}
                            className={`w-6 h-6 rounded-full ${isHighlighted ? "bg-[#a03c30]" : "bg-[#f5f5dc]"}`}
                          ></div>
                        )
                      })}
                  </div>
                </div>
                <div className="bg-[#1a2230] p-6 flex-grow">
                  <h2 className="text-2xl font-bold mb-4">Compliance Automation</h2>
                  <p className="text-gray-300">
                    Discover how automated systems can maintain regulatory compliance and enhance legal workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

