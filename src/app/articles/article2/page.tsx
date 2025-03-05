"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { ArrowLeft, Globe, ArrowUpRight } from "lucide-react"

export default function LegalAnalysisRelatedPartyTransactions() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [hoveredTerm, setHoveredTerm] = useState<string | null>(null)
  const [severityLevel, setSeverityLevel] = useState(50)
  const [isExplanationVisible, setIsExplanationVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Add click event listeners to all highlighted terms
    if (containerRef.current) {
      const spans = containerRef.current.querySelectorAll("span[data-term]")

      const handleClick = (e: Event) => {
        const target = e.target as HTMLElement
        if (target.dataset.term) {
          setHoveredTerm(target.dataset.term)
        }
      }

      spans.forEach((span) => {
        span.addEventListener("click", handleClick)
      })

      return () => {
        spans.forEach((span) => {
          span.removeEventListener("click", handleClick)
        })
      }
    }
  }, [])

  const terms = {
    "related party transaction":
      "Indicates transactions between the company and parties with a close relationship, requiring higher disclosure standards.",
    "adequate disclosure":
      "Implies that relevant facts were not sufficiently communicated, a key factor in assessing transparency.",
    "independent review":
      "Suggests that the process might have lacked an impartial assessment, a best practice in corporate governance.",
    "director duties":
      "Points to the legal obligation of directors to act in the best interests of the company and its shareholders.",
    "fiduciary duties":
      "Points to the legal obligation of directors to act in the best interests of the company and its shareholders.",
    breach: "Signals potential legal liability and need for remedial action.",
  }

  const severityDescriptions = {
    low: "Minor concern with limited legal implications",
    medium: "Moderate concern requiring attention and potential remediation",
    high: "Serious concern with significant legal and financial implications",
  }

  const getSeverityLevel = () => {
    if (severityLevel < 33) return "low"
    if (severityLevel < 66) return "medium"
    return "high"
  }

  const getSeverityColor = () => {
    if (severityLevel < 33) return "bg-green-500"
    if (severityLevel < 66) return "bg-yellow-500"
    return "bg-red-500"
  }

  const highlightTerms = (text: string) => {
    let highlightedText = text

    Object.keys(terms).forEach((term) => {
      const regex = new RegExp(`\\b${term}\\b`, "gi")
      highlightedText = highlightedText.replace(
        regex,
        (match) =>
          `<span 
    class="bg-yellow-300/40 text-white px-2 py-1 rounded cursor-pointer transition-all duration-300 hover:bg-yellow-400/70 hover:shadow-[0_0_8px_rgba(250,204,21,0.4)] border-r-2 border-yellow-400"
    data-term="${term}"
    onclick="document.dispatchEvent(new CustomEvent('termClick', {detail: '${term}'}))"
  >${match}</span>`,
      )
    })

    return { __html: highlightedText }
  }

  // Add a global event listener for the custom event
  useEffect(() => {
    const handleTermClick = (e: CustomEvent) => {
      if (hoveredTerm && isExplanationVisible) {
        // If sidebar is already open, just change the content without animation
        setHoveredTerm(e.detail)
        setSeverityLevel(50)
      } else {
        // If sidebar is closed, show the animation
        setHoveredTerm(e.detail)
        setSeverityLevel(50)
        setIsExplanationVisible(true)
      }
    }

    document.addEventListener("termClick", handleTermClick as EventListener)

    return () => {
      document.removeEventListener("termClick", handleTermClick as EventListener)
    }
  }, [hoveredTerm, isExplanationVisible])

  const clearHoveredTerm = () => {
    setIsExplanationVisible(false)
    setTimeout(() => {
      setHoveredTerm(null)
    }, 300) // Match this with the animation duration
  }

  const handleSeverityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeverityLevel(Number.parseInt(e.target.value))
  }

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <div
        className={`relative bg-[#5B6B8C] transition-all duration-500 ease-in-out mb-16 lg:mb-24 ${
          isScrolled ? "h-[30vh]" : "h-[50vh]"
        }`}
      >
        <header className="container mx-auto px-4 py-6 flex justify-between items-center relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a2230] text-white hover:bg-[#2a3a5a] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">BACK TO ALL</span>
          </Link>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-white">
              <Globe className="w-4 h-4" />
              <span className="text-sm">ENGLISH</span>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto w-full">
            <div className={`transition-all duration-500 ease-in-out ${isScrolled ? "scale-75 origin-left" : ""}`}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#f5f5dc] leading-tight mb-2">
                Legal Analysis of Related Party Transactions
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-white/80 leading-relaxed max-w-3xl">
                Explore the legal implications and analysis of related party transactions in the context of corporate
                governance and director duties.
              </p>
            </div>

            <div className="flex justify-center">
              <div
                className={`rounded-full bg-[#3b4b6c]/50 flex items-center justify-center transition-all duration-500 ease-in-out ${
                  isScrolled
                    ? "w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40"
                    : "w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56"
                }`}
              >
                <div
                  className={`bg-[#f5f5dc] clip-triangle transition-all duration-500 ease-in-out ${
                    isScrolled
                      ? "w-14 h-14 sm:w-18 sm:h-18 lg:w-24 lg:h-24 xl:w-32 xl:h-32"
                      : "w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48"
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 mt-8 lg:mt-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Link
            href="#context"
            className="block group bg-[#1a2230] rounded-2xl p-6 sm:p-8 mb-16 hover:bg-[#2a3a5a] transition-colors"
          >
            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
              <div className="space-y-4 flex-grow">
                <h2 className="text-4xl sm:text-5xl font-bold text-[#f5f5dc]">Sample Legal Problem Context</h2>
                <p className="text-lg text-white/60 font-mono tracking-wide">
                  ALPHATECH LTD | RELATED PARTY TRANSACTIONS CASE STUDY
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
                  A mid-sized company in the UK, AlphaTech Ltd, faces allegations that its board of directors approved a
                  related party transaction without adequate disclosure or independent review. The issue raises concerns
                  over director duties, conflicts of interest, and whether the transaction breaches the Companies Act
                  2006. A shareholder has brought a claim arguing that the lack of proper procedures and transparency
                  violates both statutory obligations and established case law on directors' fiduciary duties.
                </p>
              </div>
              <ArrowUpRight className="w-6 h-6 text-white/60 group-hover:text-white/90 transition-colors mt-2 flex-shrink-0" />
            </div>
          </Link>
          <article className="text-white">
            <section id="context" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Sample Legal Problem Context</h2>
              <p className="text-xl leading-relaxed mb-4">
                The scenario presented above outlines a complex legal issue involving related party transactions,
                corporate governance, and director duties. Let's break down the key elements and implications of this
                case.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Breakdown of the Linguistics of the Problem</h2>

              <div className="max-w-5xl mx-auto relative overflow-hidden">
                <div className="bg-[#1a2230] rounded-2xl p-6 sm:p-8 relative overflow-hidden" ref={containerRef}>
                  <div className={`transition-all duration-500 ease-out ${isExplanationVisible ? "pl-[32%]" : "pl-0"}`}>
                    <p
                      className="text-2xl text-white leading-relaxed font-light"
                      dangerouslySetInnerHTML={highlightTerms(
                        "A mid-sized company in the UK, AlphaTech Ltd, faces allegations that its board of directors approved a related party transaction without adequate disclosure or independent review. The issue raises concerns over director duties, conflicts of interest, and whether the transaction breaches the Companies Act 2006. A shareholder has brought a claim arguing that the lack of proper procedures and transparency violates both statutory obligations and established case law on directors' fiduciary duties.",
                      )}
                    />
                    <div className="text-sm text-white/60 mt-4 italic">
                      Click on any highlighted term to see its explanation
                    </div>
                  </div>

                  <div
                    className={`absolute top-0 left-0 bottom-0 bg-[#1a2230]/95 text-white p-6 rounded-r-2xl border-l-4 border-yellow-400 flex flex-col w-[30%] transition-all ${
                      isExplanationVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                    } ${hoveredTerm ? "duration-500 ease-out" : ""}`}
                    style={{
                      backdropFilter: "blur(8px)",
                      boxShadow: isExplanationVisible ? "5px 0 15px rgba(0, 0, 0, 0.2)" : "none",
                    }}
                  >
                    {hoveredTerm && (
                      <>
                        <button
                          onClick={clearHoveredTerm}
                          className="absolute top-2 left-2 text-gray-400 hover:text-white"
                        >
                          ✕
                        </button>
                        <h3 className="font-bold text-xl mb-3">{hoveredTerm}</h3>
                        <p className="text-base flex-grow">{terms[hoveredTerm as keyof typeof terms]}</p>

                        <div className="mt-4">
                          <div className="mb-2">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">Severity Level</span>
                              <span className="text-sm font-medium">{getSeverityLevel()}</span>
                            </div>
                            <input
                              type="range"
                              min="0"
                              max="100"
                              value={severityLevel}
                              onChange={handleSeverityChange}
                              className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                            />
                          </div>

                          <div className={`p-3 rounded-md ${getSeverityColor()} text-white mt-2`}>
                            <p className="font-medium">Impact Assessment:</p>
                            <p>{severityDescriptions[getSeverityLevel() as keyof typeof severityDescriptions]}</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Key Phrases:</h3>
              <ul className="list-disc list-inside text-xl leading-relaxed space-y-2">
                <li>"Without adequate disclosure": Focuses on the deficiency in meeting statutory requirements.</li>
                <li>
                  "Proper procedures and transparency": Highlights best practice standards in corporate governance.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Principles Underpinning the Argument</h2>
              <h3 className="text-2xl font-semibold mb-4">Deductive (Top-Down) Principles</h3>
              <h4 className="text-xl font-semibold mb-2">Case Law:</h4>
              <ul className="list-disc list-inside text-xl leading-relaxed mb-6 space-y-2">
                <li>
                  <strong>Regal (Hastings) Ltd v Gulliver (1942):</strong> Establishes that directors must not profit at
                  the company's expense.
                </li>
                <li>
                  Other precedents stress that directors must exercise independent judgment and avoid conflicts of
                  interest.
                </li>
              </ul>
              <h4 className="text-xl font-semibold mb-2">Statute:</h4>
              <ul className="list-disc list-inside text-xl leading-relaxed mb-6 space-y-2">
                <li>
                  <strong>Companies Act 2006:</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                    <li>
                      <strong>Section 172:</strong> Duty to promote the success of the company, emphasizing directors'
                      responsibilities to consider the impact of their decisions.
                    </li>
                    <li>
                      <strong>Section 177:</strong> Disclosure of interest, requiring directors to disclose any personal
                      interest in a proposed transaction.
                    </li>
                  </ul>
                </li>
              </ul>
              <h4 className="text-xl font-semibold mb-2">Best Practices:</h4>
              <ul className="list-disc list-inside text-xl leading-relaxed space-y-2">
                <li>
                  <strong>Corporate Governance Guidelines:</strong> Emphasize the need for transparent decision-making
                  processes, independent reviews, and robust conflict-of-interest policies. They recommend using
                  independent third parties to review and approve significant transactions.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Inductive (Bottom-Up) Observations</h2>
              <h3 className="text-2xl font-semibold mb-4">Factual Input:</h3>
              <ul className="list-disc list-inside text-xl leading-relaxed mb-6 space-y-2">
                <li>
                  <strong>Observed Transaction Details:</strong> Specifics about the transaction (amount, timing,
                  relationship between the parties) and evidence that the board did not involve an independent committee
                  or external auditor in reviewing the transaction.
                </li>
                <li>
                  <strong>Communication Records:</strong> Internal emails or minutes that indicate a rushed or
                  incomplete disclosure process.
                </li>
              </ul>
              <h3 className="text-2xl font-semibold mb-4">Sensory/Empirical Data:</h3>
              <ul className="list-disc list-inside text-xl leading-relaxed space-y-2">
                <li>
                  <strong>Market Reactions:</strong> Shareholder concerns or market skepticism following the
                  announcement of the transaction.
                </li>
                <li>
                  <strong>Audit Findings:</strong> Internal audit findings that question the adequacy of disclosure or
                  review procedures.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Integrating Deduction and Induction</h2>
              <h3 className="text-2xl font-semibold mb-4">Deductive Points (Top-Down)</h3>
              <p className="text-xl leading-relaxed mb-4">
                <strong>Legal Framework Application:</strong> The overarching legal principles derived from case law and
                the Companies Act 2006 provide a clear standard. Directors' fiduciary duties demand full disclosure and
                avoidance of conflicts, while statutory obligations under Sections 172 and 177 create an expectation for
                proper procedure.
              </p>
              <p className="text-xl leading-relaxed mb-4">
                <strong>Vector Representation (Downward Flow):</strong> Imagine these principles as downward-pointing
                vectors. Each vector represents a foundational legal norm that "pulls" the observed facts toward
                compliance. If a fact or action deviates from these norms, it creates a prediction error in the system.
              </p>
              <h3 className="text-2xl font-semibold mb-4">Inductive Points (Bottom-Up)</h3>
              <p className="text-xl leading-relaxed mb-4">
                <strong>Empirical Evidence Input:</strong> The specific details of the AlphaTech transaction—such as the
                lack of independent review and inadequate disclosure—form the sensory data.
              </p>
              <p className="text-xl leading-relaxed mb-4">
                <strong>Vector Representation (Upward Flow):</strong> Picture these observations as upward-pointing
                vectors. Each upward vector conveys the fresh, data-driven inputs from the case, signaling discrepancies
                between the observed practices and the expected legal standards.
              </p>
              <p className="text-xl leading-relaxed">
                <strong>Active Inference Process:</strong> The system dynamically adjusts through feedback loops where
                the upward induction vectors challenge the downward deduction vectors, prompting a reassessment.
                Minimizing prediction error iteratively updates the belief about whether directors met their fiduciary
                duties. A significant deviation signals a breach, warranting remedial action.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Demonstration Summary</h2>
              <ul className="list-disc list-inside text-xl leading-relaxed space-y-2">
                <li>
                  <strong>Context Establishment:</strong> We considered a company law scenario involving a questionable
                  related party transaction at AlphaTech Ltd.
                </li>
                <li>
                  <strong>Linguistic and Principle Breakdown:</strong> The language of the legal issue was dissected and
                  aligned with core legal principles from case law, statutory provisions, and best practices.
                </li>
                <li>
                  <strong>Vector Flow Visualization:</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                    <li>
                      <em>Deduction (Downward Vectors):</em> Represent fixed, top-down legal norms.
                    </li>
                    <li>
                      <em>Induction (Upward Vectors):</em> Represent observed, bottom-up evidence from the case.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Inference Outcome:</strong> By computing the interaction between these vectors, the system
                  highlights areas of misalignment (potential breaches in disclosure and procedure). The greater the
                  upward force from observed facts relative to the downward pull of established legal principles, the
                  stronger the case for legal non-compliance.
                </li>
              </ul>
            </section>
          </article>
          <div className="mt-24">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f5f5dc] mb-12">Takeaways</h2>
            <div className="grid gap-8">
              {[
                "Directors must exercise independent judgment and avoid conflicts of interest",
                "Adequate disclosure and independent review are crucial for related party transactions",
                "Breaches of director duties can lead to legal liability and shareholder claims",
                "Corporate governance best practices emphasize transparency and robust procedures",
              ].map((takeaway, index) => (
                <div key={index} className="grid md:grid-cols-[auto,1fr] gap-6 lg:gap-8 items-start">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f5f5dc] opacity-50">
                    {index + 1}
                  </div>
                  <div className="text-lg sm:text-xl lg:text-2xl text-white leading-relaxed">{takeaway}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

