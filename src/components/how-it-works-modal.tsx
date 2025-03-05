import { X } from "lucide-react"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"

interface HowItWorksModalProps {
  isOpen: boolean
  onClose: () => void
}

export function HowItWorksModal({ isOpen, onClose }: HowItWorksModalProps) {
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
                How It Works
              </h1>
              <p className="text-gray-500">Understanding the Active Inference legal reasoning framework</p>
            </div>
            <DialogClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-medium mb-4" style={{ fontFamily: "IBM Plex Sans, sans-serif" }}>
                Active Inference Framework
              </h2>
              <p className="text-gray-700 mb-6">
                Active Inference is a computational framework that models how intelligent systems perceive, learn, and
                make decisions. In legal contexts, it provides a structured approach to reasoning that combines top-down
                principles with bottom-up evidence.
              </p>
              <div className="bg-yellow-200/50 p-6 border border-black rounded-none my-8">
                <h3 className="font-medium mb-3 text-xl" style={{ fontFamily: "IBM Plex Sans, sans-serif" }}>
                  Key Concepts
                </h3>
                <ul className="list-disc pl-5 space-y-3">
                  <li>
                    <strong>Hierarchical Processing:</strong> Information flows between different levels of abstraction,
                    from concrete evidence to abstract principles.
                  </li>
                  <li>
                    <strong>Predictive Coding:</strong> The system generates predictions based on prior knowledge and
                    updates them as new evidence emerges.
                  </li>
                  <li>
                    <strong>Precision Weighting:</strong> Evidence and principles are weighted by their reliability and
                    relevance to the case.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-medium mb-4" style={{ fontFamily: "IBM Plex Sans, sans-serif" }}>
                The Two-Level Model
              </h2>
              <div className="grid md:grid-cols-2 gap-8 my-6">
                <div className="border border-black p-6">
                  <h3 className="font-medium mb-3 text-xl" style={{ fontFamily: "IBM Plex Sans, sans-serif" }}>
                    Level 2: Legal Principles (Deduction)
                  </h3>
                  <p className="text-gray-700">
                    The top level contains abstract legal principles, statutes, and precedents that provide the
                    framework for legal reasoning. These principles are applied deductively to specific cases.
                  </p>
                  <div className="mt-4 text-gray-500">
                    Example: Contract validity requirements, notice standards, regulatory compliance rules
                  </div>
                </div>

                <div className="border border-black p-6">
                  <h3 className="font-medium mb-3 text-xl" style={{ fontFamily: "IBM Plex Sans, sans-serif" }}>
                    Level 1: Case Evidence (Induction)
                  </h3>
                  <p className="text-gray-700">
                    The bottom level contains specific evidence from the case at hand, including documents,
                    communications, and factual observations. These are analyzed inductively to identify patterns and
                    relevance.
                  </p>
                  <div className="mt-4 text-gray-500">
                    Example: Contract documents, email communications, financial analyses
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-medium mb-4" style={{ fontFamily: "IBM Plex Sans, sans-serif" }}>
                Inference Process
              </h2>
              <p className="text-gray-700 mb-6">
                The core of the system is the inference process that connects legal principles with case evidence to
                generate predictions and recommendations.
              </p>

              <div className="my-8 border-l-4 border-black pl-6 py-2">
                <blockquote className="text-xl text-gray-600">
                  "Active inference provides a formal framework for understanding how intelligent systems, including
                  legal reasoning systems, minimize surprise by updating their internal models based on new evidence."
                </blockquote>
              </div>

              <ol className="list-decimal pl-8 space-y-4">
                <li className="pl-2">
                  <strong>Evidence Collection:</strong>
                  <p className="mt-1">
                    Relevant case materials are gathered and categorized by type, time point, and reliability.
                  </p>
                </li>
                <li className="pl-2">
                  <strong>Principle Identification:</strong>
                  <p className="mt-1">
                    Applicable legal principles are identified based on the case domain and issues.
                  </p>
                </li>
                <li className="pl-2">
                  <strong>Prediction Generation:</strong>
                  <p className="mt-1">
                    The system generates predictions about legal outcomes by applying principles to evidence.
                  </p>
                </li>
                <li className="pl-2">
                  <strong>Confidence Assessment:</strong>
                  <p className="mt-1">
                    Each inference is assigned a confidence score based on the strength of evidence and clarity of
                    principles.
                  </p>
                </li>
                <li className="pl-2">
                  <strong>Recommendation Formulation:</strong>
                  <p className="mt-1">
                    Based on inferences, the system provides actionable recommendations for legal strategy.
                  </p>
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-3xl font-medium mb-4" style={{ fontFamily: "IBM Plex Sans, sans-serif" }}>
                Benefits of the Active Inference Approach
              </h2>
              <div className="grid md:grid-cols-3 gap-6 my-6">
                <div className="border border-black p-6">
                  <h3 className="font-medium mb-3 text-xl" style={{ fontFamily: "IBM Plex Sans, sans-serif" }}>
                    Transparency
                  </h3>
                  <p className="text-gray-700">
                    Clear connections between principles, evidence, and conclusions make reasoning transparent and
                    explainable.
                  </p>
                </div>
                <div className="border border-black p-6">
                  <h3 className="font-medium mb-3 text-xl" style={{ fontFamily: "IBM Plex Sans, sans-serif" }}>
                    Adaptability
                  </h3>
                  <p className="text-gray-700">
                    The system updates predictions as new evidence emerges, adapting to changing case circumstances.
                  </p>
                </div>
                <div className="border border-black p-6">
                  <h3 className="font-medium mb-3 text-xl" style={{ fontFamily: "IBM Plex Sans, sans-serif" }}>
                    Precision
                  </h3>
                  <p className="text-gray-700">
                    Confidence scores help prioritize strong arguments and identify areas requiring additional evidence.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-200/50 p-6 border border-black my-8">
                <h3 className="font-medium mb-3 text-xl" style={{ fontFamily: "IBM Plex Sans, sans-serif" }}>
                  Further Reading
                </h3>
                <p className="mb-4">
                  For more information on the Active Inference framework and its applications in legal reasoning,
                  consider exploring these resources:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Friston, K., et al. (2017). "Active inference, curiosity and insight." Neural Computation, 29(10),
                    2633-2683.
                  </li>
                  <li>
                    Ashley, K. D. (2017). "Artificial Intelligence and Legal Analytics: New Tools for Law Practice in
                    the Digital Age."
                  </li>
                  <li>
                    Bench-Capon, T., & Sartor, G. (2003). "A model of legal reasoning with cases incorporating theories
                    and values."
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

