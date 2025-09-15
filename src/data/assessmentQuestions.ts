import { Question } from "@/components/assessment/QuestionCard";

export interface AssessmentSection {
  id: string;
  name: string;
  description: string;
  questions: Question[];
}

export const assessmentSections: AssessmentSection[] = [
  {
    id: "communication_intelligence",
    name: "Communication Intelligence",
    description: "How you express ideas, listen, and adapt your communication style",
    questions: [
      {
        id: "comm_1",
        type: "multiple_choice",
        title: "You're briefing a colleague on a project. They say, 'I'm not sure I followed the middle part.' What do you do?",
        options: [
          { value: "a", label: "Say, 'You can read the deck later.'" },
          { value: "b", label: "Re-explain with simpler terms" },
          { value: "c", label: "Ask, 'Which part was unclear?'" },
          { value: "d", label: "Move on, assuming they'll catch up" }
        ],
        traits: ["Clarity", "Listening"]
      },
      {
        id: "comm_2",
        type: "multiple_choice",
        title: "Choose the best follow-up message after someone declines your request:",
        options: [
          { value: "a", label: "Disappointed you didn't help." },
          { value: "b", label: "Thanks for letting me know — we'll find another way." },
          { value: "c", label: "You've left us stuck." },
          { value: "d", label: "Well, that's not ideal." }
        ],
        traits: ["Tone Awareness"]
      },
      {
        id: "comm_3",
        type: "slider",
        title: "When I receive unexpected critical feedback, I stay open and curious rather than defensive.",
        sliderMin: 0,
        sliderMax: 10,
        traits: ["Feedback Handling"]
      },
      {
        id: "comm_4",
        type: "slider",
        title: "When chatting in a team channel, I reread messages to ensure they don't sound cold or abrupt.",
        sliderMin: 0,
        sliderMax: 10,
        traits: ["Tone Awareness", "Digital Communication"]
      }
    ]
  },
  {
    id: "collaboration_intelligence", 
    name: "Collaboration Intelligence",
    description: "Your ability to work effectively with others and build team cohesion",
    questions: [
      {
        id: "collab_1",
        type: "multiple_choice",
        title: "You're asked to switch roles mid-project due to a team gap. You:",
        options: [
          { value: "a", label: "Agree and support the shift" },
          { value: "b", label: "Resist unless compensated" },
          { value: "c", label: "Complain to peers" },
          { value: "d", label: "Do it but feel resentful" }
        ],
        traits: ["Team Adaptability"]
      },
      {
        id: "collab_2",
        type: "likert",
        title: "When a team goal succeeds, I feel proud even if my role was small.",
        traits: ["Shared Ownership"]
      },
      {
        id: "collab_3",
        type: "multiple_choice",
        title: "A colleague challenges your idea strongly. You:",
        options: [
          { value: "a", label: "Ask for clarification and build on their concern" },
          { value: "b", label: "Defend your point immediately" },
          { value: "c", label: "Go silent" },
          { value: "d", label: "Redirect discussion elsewhere" }
        ],
        traits: ["Conflict Management"]
      },
      {
        id: "collab_4",
        type: "slider",
        title: "I consistently follow through on commitments I make to my team, even when it's inconvenient.",
        sliderMin: 0,
        sliderMax: 10,
        traits: ["Trust Building", "Reliability"]
      }
    ]
  },
  {
    id: "contextual_intelligence",
    name: "Contextual Social Intelligence", 
    description: "How you adapt your behavior across different social and professional settings",
    questions: [
      {
        id: "context_1",
        type: "multiple_choice",
        title: "In tense meetings, I...",
        options: [
          { value: "a", label: "Escalate tone to match the energy" },
          { value: "b", label: "Stay silent and wait it out" },
          { value: "c", label: "Speak up calmly to de-escalate" },
          { value: "d", label: "Shift blame subtly to redirect tension" }
        ],
        traits: ["Conflict Context", "Emotional Regulation"]
      },
      {
        id: "context_2", 
        type: "slider",
        title: "I adapt my communication style naturally when speaking to different audiences (executives vs peers vs junior staff).",
        sliderMin: 0,
        sliderMax: 10,
        traits: ["Audience Awareness", "Adaptability"]
      },
      {
        id: "context_3",
        type: "multiple_choice",
        title: "When facilitating a virtual meeting with poor participation, you:",
        options: [
          { value: "a", label: "Continue with the agenda as planned" },
          { value: "b", label: "Directly ask quiet members to contribute" },
          { value: "c", label: "Use breakout rooms or interactive tools" },
          { value: "d", label: "End the meeting early due to low engagement" }
        ],
        traits: ["Digital Facilitation", "Group Dynamics"]
      },
      {
        id: "context_4",
        type: "slider", 
        title: "I'm equally comfortable building relationships in digital spaces as I am in person.",
        sliderMin: 0,
        sliderMax: 10,
        traits: ["Digital Relationship Building"]
      }
    ]
  },
  {
    id: "coach_diagnostic",
    name: "COACH Diagnostic",
    description: "Comprehensive assessment across five key collaboration dimensions",
    questions: [
      {
        id: "coach_1",
        type: "multiple_choice",
        title: "You receive harsh feedback after leading a group session. You:",
        options: [
          { value: "a", label: "Ask for more details to improve" },
          { value: "b", label: "Justify your approach" },
          { value: "c", label: "Disregard it as unfair criticism" },
          { value: "d", label: "Reflect silently but make no changes" }
        ],
        traits: ["Openness", "Feedback Receptivity"]
      },
      {
        id: "coach_2",
        type: "slider",
        title: "When explaining complex ideas, I check for understanding frequently and adjust my approach if needed.",
        sliderMin: 0,
        sliderMax: 10,
        traits: ["Clarity", "Comprehension"]
      },
      {
        id: "coach_3",
        type: "multiple_choice",
        title: "During a heated team debate, your primary instinct is to:",
        scenario: "Two team members are arguing about the project direction, and tensions are rising.",
        options: [
          { value: "a", label: "Listen to both sides and find common ground" },
          { value: "b", label: "Take a strong position to resolve quickly" },
          { value: "c", label: "Suggest taking a break to cool down" },
          { value: "d", label: "Let them work it out themselves" }
        ],
        traits: ["Conflict Navigation", "Mediation"]
      },
      {
        id: "coach_4",
        type: "likert",
        title: "I naturally sense when team members are feeling overwhelmed or disengaged.",
        traits: ["Empathy", "Emotional Intelligence"]
      }
    ]
  }
];

// Mock results for demonstration
export const mockResults = {
  communication: {
    score: 79,
    style: "Empathic Clarifier",
    subscores: {
      clarity: 85,
      listening: 70,
      toneAwareness: 80,
      feedbackHandling: 68
    },
    strengths: ["Clarity", "Tone Awareness"],
    blindSpots: ["Feedback Defensiveness"]
  },
  collaboration: {
    score: 82,
    style: "Adaptive Harmonizer",
    subscores: {
      teamAdaptability: 87,
      trustBuilding: 80,
      conflictManagement: 76,
      sharedOwnership: 85
    }
  },
  contextual: {
    score: 75,
    digitalVsInPersonGap: "High",
    contexts: {
      oneOnOne: 80,
      groupMeetings: 78,
      conflictZones: 66,
      digitalEnvironments: 55
    }
  },
  coach: {
    profile: "Diplomatic Executor",
    scores: {
      clarityComprehension: 83,
      opennessFeedback: 68,
      alignmentEmpathy: 80,
      conflictNavigation: 72,
      harmonyFollowthrough: 86
    }
  },
  overall: {
    collaborationQuotient: 80,
    recommendation: "Collaborate Confidently",
    topGrowthArea: "Digital Tone Calibration",
    teamFit: ["Agile Teams", "Cross-functional", "Remote Work"]
  }
};