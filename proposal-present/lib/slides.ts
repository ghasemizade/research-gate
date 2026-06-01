export interface Slide {
  id: number
  title: string
  subtitle?: string
  content: string | string[]
  type?: 'title' | 'content'
}

export const slides: Slide[] = [
  {
    id: 1,
    title: 'A Federated Learning Approach for Layer 2 Network Intrusion Detection with Explainable AI',
    subtitle: 'Distributed Network Segments',
    content: 'Designing a detection system for Layer 2 networks using federated learning and explainable AI, enabling secure operations across different network segments without transmitting raw network data to a central server.',
    type: 'title',
  },
  {
    id: 2,
    title: 'Introduction',
    content: [
      'With proliferation of computer networks, IoT, and online services, cyberattacks have increased dramatically',
      'Organizations use Intrusion Detection Systems (IDSs) to protect themselves',
      'IDSs analyze network traffic to identify suspicious behaviors',
      'However, traditional IDSs focus on higher network layers and ignore Layer 2 attacks',
    ],
  },
  {
    id: 3,
    title: 'Problem Statement',
    content: [
      'Layer 2 attacks (ARP Spoofing, MAC Flooding, DHCP Starvation) occur on local networks',
      'These attacks bypass firewalls and security layer systems',
      'They do not create observable features at the IP level',
      'Traditional IDSs cannot detect them before network access is compromised',
    ],
  },
  {
    id: 4,
    title: 'Research Gap',
    content: [
      'Extensive research exists in intrusion detection and federated learning separately',
      'Explainable AI research is well-established',
      'No research simultaneously combines:',
      '  Federated learning design',
      '  Layer 2 detection',
      '  Explainable AI in IDS systems',
    ],
  },
  {
    id: 5,
    title: 'Research Importance',
    content: [
      'Security Perspective: Layer 2 attacks can cause significant network damage',
      'Technical Perspective: Federated learning preserves privacy and reduces data transmission',
      'Scientific Perspective: Combining federated learning and explainable AI in IDS context is under-explored and could advance the field',
    ],
  },
  {
    id: 6,
    title: 'Research Objectives',
    content: [
      'Main Objective: Design and implement a Layer 2 intrusion detection system',
      'Sub-objectives:',
      '  Increase detection accuracy',
      '  Reduce false alarms',
      '  Preserve privacy across network segments',
      '  Improve model acceptance and transparency',
      '  Evaluate performance on lightweight hardware',
    ],
  },
  {
    id: 7,
    title: 'Research Questions',
    content: [
      'Can a federated model accurately identify Layer 2 attacks similar to centralized approaches?',
      'What impact does federated learning have on model performance across different networks?',
      'Can the SHAP method identify the most important detection features?',
      'Can the proposed system be implemented on lightweight hardware like Raspberry Pi?',
    ],
  },
  {
    id: 8,
    title: 'Research Hypotheses',
    content: [
      'CNN and Bi-LSTM architectures paired with Federated Learning will achieve high accuracy',
      'FedProx method will outperform FedAvg with non-uniform data distribution',
      'SHAP will increase transparency and explain system decisions effectively',
      'The system will achieve acceptable performance on resource-constrained devices',
    ],
  },
  {
    id: 9,
    title: 'Literature Review',
    content: [
      'Seven papers reviewed for comprehensive understanding',
      'Layer 2 Detection (2 papers): Baseline methodologies and techniques',
      'Deep Learning Models in IDS (2 papers): CNN-LSTM performance benchmarks',
      'Federated Learning & Privacy (3 papers): Distributed training approaches and concepts',
      'Finding: No comprehensive solution combining all three technologies',
    ],
  },
  {
    id: 10,
    title: 'Proposed Architecture',
    content: [
      'Three Main Components:',
      '',
      '1. Federated Nodes: Monitor individual network segments locally',
      '2. Aggregation Server: Combines local models using FedProx algorithm',
      '3. Explainable AI Module: Analyzes results and provides decision explanations',
    ],
  },
  {
    id: 11,
    title: 'Deep Learning Model',
    content: [
      'Combined Architecture: CNN + Bi-LSTM',
      '',
      'CNN Component: Recognizes important patterns in network traffic data',
      'Bi-LSTM Component: Analyzes temporal dependencies in network sequences',
      '',
      'Rationale: This combination achieved >95% accuracy in related work (CL2-IDS paper)',
    ],
  },
  {
    id: 12,
    title: 'Federated Learning Concept',
    content: [
      'Key Advantage: Raw network data remains local, only model updates transmitted',
      '',
      'Benefits:',
      '  • Increased privacy preservation',
      '  • Reduced data transfer bandwidth',
      '  • Improved system scalability',
      '',
      'Algorithm: FedProx chosen for non-uniform data distribution across segments',
    ],
  },
  {
    id: 13,
    title: 'Explainable AI & SHAP',
    content: [
      'Problem: Lack of transparency in ML-based security systems',
      '',
      'Solution: SHAP (SHapley Additive exPlanations) method',
      '',
      'Benefits:',
      '  • Explains why system classifies traffic as malicious',
      '  • Identifies most important features for detection',
      '  • Builds trust with security analysts',
    ],
  },
  {
    id: 14,
    title: 'Datasets & Evaluation',
    content: [
      'Data Sources:',
      '  • Layer 2 attack datasets',
      '  • Network traffic captures from diverse segments',
      '  • Balanced attack and normal traffic samples',
      '',
      'Evaluation Metrics:',
      '  • Accuracy, Precision, Recall, F1-Score',
      '  • True Positive Rate (TPR) and False Positive Rate (FPR)',
      '  • Model convergence in federated setting',
    ],
  },
  {
    id: 15,
    title: 'Expected Results',
    content: [
      'Detection Accuracy: >95% for Layer 2 attacks',
      'Privacy: Zero transmission of raw network data',
      'Explainability: Clear feature importance rankings via SHAP',
      'Hardware Performance: Successful deployment on Raspberry Pi',
      'Scalability: Effective with 5+ network segments',
    ],
  },
  {
    id: 16,
    title: 'Innovation & Contribution',
    content: [
      'First comprehensive system combining three key technologies:',
      '  Federated Learning: Privacy-preserving distributed training',
      '  Layer 2 Detection: Comprehensive network security coverage',
      '  Explainable AI: Transparent decision-making for analysts',
      'Practical contribution: Deployable on resource-constrained edge devices',
    ],
  },
  {
    id: 17,
    title: 'Conclusion',
    content: [
      'This research addresses a critical gap in network security by combining federated learning, Layer 2 detection, and explainable AI.',
      'Expected Outcomes:',
      '  More secure networks resistant to Layer 2 attacks',
      '  Privacy-preserving IDS implementations',
      '  Transparent and trustworthy AI systems for cybersecurity',
    ],
  },
  {
    id: 18,
    title: 'Thank You',
    subtitle: 'Questions?',
    content: 'Federated Learning for Layer 2 Network Intrusion Detection with Explainable AI',
    type: 'title',
  },
]
