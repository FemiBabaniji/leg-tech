export interface LegalPrinciple {
    id: string
    name: string
    source: string
    description: string
    confidence: number
  }
  
  export interface CaseEvidence {
    id: string
    name: string
    description: string  // ✅ Make sure this is included
    type: string
    timePoint: string
    confidence: number
  }
  
  
  export interface Inference {
    id: string
    title: string
    description: string
    prediction: string // ✅ Added this field
    confidence: number
    principleIds?: string[]
    evidenceIds?: string[]
  }
  