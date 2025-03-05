import { X } from "lucide-react"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"

interface LegalAnalysisModalProps {
  isOpen: boolean
  onClose: () => void
}

export function LegalAnalysisModal({ isOpen, onClose }: LegalAnalysisModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="w-[95vw] max-w-[80em] max-h-[90vh] overflow-y-auto p-0 border border-black rounded-none"
        style={{ width: "95vw", maxWidth: "80em" }}
      >
        <div className="container mx-auto p-4" style={{ fontFamily: "Arimo, sans-serif" }}>
          <div className="mb-6 flex justify-between items-center">
            <div>
              <h1 className="text-5xl font-medium mb-4" style={{ fontFamily: "IBM Plex Sans, sans-serif" }}>
                Legal Analysis
              </h1>
              <p className="text-gray-500">Contract law principles and their application in active inference</p>
            </div>
            <DialogClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </div>

          <div className="space-y-8">
            <section>
              <p className="text-gray-700 mb-6">
                Contract law governs legally enforceable agreements between parties, ensuring clarity in obligations and
                remedies in case of breaches. The foundation of contract law rests on offer, acceptance, consideration,
                and intention to create legal relations. Various legal principles and doctrines shape the enforceability
                and interpretation of contractual terms, particularly in commercial settings.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-medium mb-4" style={{ fontFamily: "IBM Plex Sans, sans-serif" }}>
                1. Contract Formation and Validity
              </h2>
              <p className="text-gray-700 mb-6">
                For a contract to be legally binding, it must meet the requirements of offer and acceptance, supported
                by consideration (a benefit exchanged between parties). Additionally, parties must have legal capacity
                (competence to contract) and the contract's purpose must be lawful. In commercial settings, courts
                presume an intention to create legal relations.
              </p>
              <div className="border border-black p-6 space-y-3">
                <p className="text-gray-700">
                  <strong>Statute of Frauds (UCC § 2-201):</strong> Some contracts, particularly for the sale of goods
                  over $500, must be in writing to be enforceable.
                </p>
                <p className="text-gray-700">
                  <strong>Parol Evidence Rule:</strong> Prevents the introduction of prior agreements or negotiations
                  that contradict a final written contract unless an exception applies.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-medium mb-4" style={{ fontFamily: "IBM Plex Sans, sans-serif" }}>
                2. Contract Interpretation & Enforceability
              </h2>
              <p className="text-gray-700 mb-6">
                Contract disputes often involve interpreting ambiguous or disputed terms. Courts apply the following
                principles:
              </p>
              <div className="bg-yellow-200/50 p-6 border border-black my-6">
                <ul className="list-disc pl-5 space-y-3">
                  <li>
                    <strong>Plain Meaning Rule:</strong> Words in a contract are interpreted by their ordinary meaning
                    unless ambiguity exists.
                  </li>
                  <li>
                    <strong>Contra Proferentem:</strong> Ambiguous terms are construed against the party who drafted
                    them.
                  </li>
                  <li>
                    <strong>Course of Dealing & Trade Usage:</strong> Courts may look at prior dealings between parties
                    or industry customs to clarify contractual obligations.
                  </li>
                  <li>
                    <strong>Good Faith & Fair Dealing:</strong> Implied duty requiring parties to act honestly in
                    enforcing contract terms.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-medium mb-4" style={{ fontFamily: "IBM Plex Sans, sans-serif" }}>
                3. Price Adjustment Mechanisms & Enforceability
              </h2>
              <p className="text-gray-700 mb-6">
                Contracts may contain price adjustment clauses, which allow for changes in price due to inflation,
                market conditions, or cost variations. The enforceability of these clauses depends on:
              </p>
              <div className="grid md:grid-cols-3 gap-6 my-6">
                <div className="border border-black p-6">
                  <h3 className="font-medium mb-3 text-xl" style={{ fontFamily: "IBM Plex Sans, sans-serif" }}>
                    Clarity of Language
                  </h3>
                  <p className="text-gray-700">
                    Courts scrutinize vague or discretionary pricing clauses. If a clause is ambiguous, it may be deemed
                    unenforceable.
                  </p>
                </div>
                <div className="border border-black p-6">
                  <h3 className="font-medium mb-3 text-xl" style={{ fontFamily: "IBM Plex Sans, sans-serif" }}>
                    Regulatory Compliance
                  </h3>
                  <p className="text-gray-700">
                    Some price changes require statutory notice or compliance with industry regulations.
                  </p>
                </div>
                <div className="border border-black p-6">
                  <h3 className="font-medium mb-3 text-xl" style={{ fontFamily: "IBM Plex Sans, sans-serif" }}>
                    Notice Requirements
                  </h3>
                  <p className="text-gray-700">
                    If a contract requires prior notice for price changes, failure to comply may render an adjustment
                    unenforceable.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-medium mb-4" style={{ fontFamily: "IBM Plex Sans, sans-serif" }}>
                4. Contract Breach & Remedies
              </h2>
              <p className="text-gray-700 mb-6">
                A breach occurs when a party fails to fulfill contractual obligations. Remedies include:
              </p>
              <div className="border border-black p-6 space-y-3">
                <p className="text-gray-700">
                  <strong>Damages:</strong> Compensation for losses suffered due to the breach.
                </p>
                <p className="text-gray-700">
                  <strong>Specific Performance:</strong> A court order requiring the breaching party to fulfill its
                  obligations (common in real estate or unique goods contracts).
                </p>
                <p className="text-gray-700">
                  <strong>Rescission & Restitution:</strong> Cancellation of the contract with parties restored to
                  pre-contract positions.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-medium mb-4" style={{ fontFamily: "IBM Plex Sans, sans-serif" }}>
                5. Active Inference & Contract Law
              </h2>
              <p className="text-gray-700 mb-6">
                Legal AI, such as Legal Tech Labs, applies active inference to contract law by assessing contract
                validity, enforceability, and compliance. By integrating legal principles (deductive reasoning) with
                empirical contract data (inductive reasoning), the system predicts enforceability, identifies risks, and
                provides automated legal analysis.
              </p>
              <div className="bg-yellow-200/50 p-6 border border-black my-6">
                <p className="text-gray-700 mb-4">This framework improves contract analysis by:</p>
                <ul className="list-disc pl-5 space-y-3">
                  <li>Reducing uncertainty</li>
                  <li>Ensuring compliance with legal standards</li>
                  <li>Identifying potential disputes before they arise</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

