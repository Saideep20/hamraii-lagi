
import { Product, Seller } from './types';

export const SELLERS: Record<string, Seller> = {
  's1': {
    id: 's1',
    name: 'Aarav Sharma',
    profileImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    isVerified: true,
    college: 'Xavier Intl College',
    age: 18,
    major: 'Science (Phy)',
    bio: 'Selling my Grade 11 & 12 notes. I take really organized notes! 📝',
    creditScore: 780,
    joinedDate: 'Sept 2023',
    reviews: 45,
    responseRate: '98%'
  },
  's2': {
    id: 's2',
    name: 'Rohan Gupta',
    profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    isVerified: true,
    college: 'KMC',
    age: 19,
    major: 'Management',
    bio: 'Graduating soon, getting rid of heavy textbooks.',
    creditScore: 650,
    joinedDate: 'Jan 2023',
    reviews: 12,
    responseRate: '85%'
  },
  's3': {
    id: 's3',
    name: 'Sristi KC',
    profileImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
    isVerified: false,
    college: 'Global College of Science',
    age: 18,
    major: 'Biology',
    bio: 'Lab gear and bio textbooks for cheap.',
    creditScore: 500,
    joinedDate: 'Aug 2023',
    reviews: 3,
    responseRate: '60%'
  },
  's4': {
    id: 's4',
    name: 'Manish Basnet',
    profileImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
    isVerified: true,
    college: 'NIST',
    age: 19,
    major: 'Science',
    bio: 'Selling drafting supplies I no longer need.',
    creditScore: 720,
    joinedDate: 'Mar 2022',
    reviews: 28,
    responseRate: '92%'
  },
  's5': {
    id: 's5',
    name: 'Priya Adhikari',
    profileImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    isVerified: true,
    college: 'UniGlobe College',
    age: 20,
    major: 'Law',
    bio: 'Selling all my entrance preparation books.',
    creditScore: 810,
    joinedDate: 'Sep 2022',
    reviews: 56,
    responseRate: '100%'
  }
};

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Basic Physics for Grade XI',
    price: 650,
    originalPrice: 1200,
    description: 'Current Edition. Essential for Science students.',
    fullDescription: 'Required textbook for Grade XI Science. Heritage Publishers. I kept it in great condition, no markings or folded pages. Save money compared to the stationery store!',
    specs: {
      'Author': 'M.R. Shrestha',
      'Grade': 'XI',
      'Subject': 'Physics',
      'Condition': 'Like New'
    },
    images: [
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80', // Science Textbook Stack
      'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=800&q=80'  // Physics Formulas on Blackboard
    ],
    rating: 5.0,
    reviewCount: 2,
    sellerId: 's1',
    category: 'Textbooks'
  },
  {
    id: 'p2',
    name: 'Basic Chemistry Grade XI',
    price: 550,
    originalPrice: 950,
    description: 'Buddha Publications. Slightly used.',
    fullDescription: 'Complete Basic Chemistry textbook. Cover has minor wear but inside pages are clean. Includes practical manual for free.',
    specs: {
      'Publisher': 'Buddha',
      'Grade': 'XI',
      'Subject': 'Chemistry',
      'Condition': 'Good'
    },
    images: [
      'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=800&q=80', // Periodic Table
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80'  // Chemical Flasks
    ],
    rating: 4.8,
    reviewCount: 5,
    sellerId: 's3',
    category: 'Textbooks'
  },
  {
    id: 'p3',
    name: 'Principles of Mathematics XII',
    price: 700,
    originalPrice: 1500,
    description: 'Sukunda Pustak Bhawan. Hardcover.',
    fullDescription: 'Latest syllabus covering Calculus, Vectors, and Mechanics. Must have for Grade 12 science math. Very good condition.',
    specs: {
      'Subject': 'Mathematics',
      'Grade': 'XII',
      'Format': 'Hardcover',
      'Condition': 'Like New'
    },
    images: [
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80', // Math Formulas
      'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=800&q=80'  // Calculus Notes
    ],
    rating: 4.5,
    reviewCount: 8,
    sellerId: 's1',
    category: 'Textbooks'
  },
  {
    id: 'p4',
    name: 'Biology Lab Coat & Kit',
    price: 850,
    originalPrice: 1800,
    description: 'Size M. Required for Biology labs.',
    fullDescription: 'Standard white lab coat, size Medium with college logo patch (removable). Includes dissection kit and safety goggles. Don\'t buy new!',
    specs: {
      'Size': 'Medium',
      'Material': 'Cotton',
      'Condition': 'Used - Good',
      'Includes': 'Goggles, Kit'
    },
    images: [
      'https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&w=800&q=80', // Lab Coat / Doctor
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'  // Stethoscope/Med
    ],
    rating: 4.5,
    reviewCount: 3,
    sellerId: 's3',
    category: 'Supplies'
  },
  {
    id: 'p5',
    name: 'Meaning into Words (Old is Gold)',
    price: 200,
    originalPrice: 450,
    description: 'Grade 11 English solution set.',
    fullDescription: 'Old is Gold question bank for English. Includes summary of all stories and poems. Very helpful for exams.',
    specs: {
      'Subject': 'English',
      'Type': 'Guide Book',
      'Grade': 'XI',
      'Condition': 'Used'
    },
    images: [
      'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80', // Books open
      'https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=800&q=80'  // Book stack dark
    ],
    rating: 4.2,
    reviewCount: 12,
    sellerId: 's2',
    category: 'Books'
  },
  {
    id: 'p6',
    name: 'Engineering Drawing Set',
    price: 1200,
    originalPrice: 2500,
    description: 'Complete drafter and tools.',
    fullDescription: 'Includes mini-drafter, set squares, compass set, and T-scale. Used for one semester of Engineering Drawing. Everything works perfectly.',
    specs: {
      'Type': 'Drafting Tools',
      'Brand': 'Omega',
      'Condition': 'Excellent',
      'Case': 'Included'
    },
    images: [
      'https://images.unsplash.com/photo-1581092921461-eab62496096b?auto=format&fit=crop&w=800&q=80', // Technical Drawing
      'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=800&q=80'  // PC/Engineering
    ],
    rating: 4.9,
    reviewCount: 4,
    sellerId: 's4',
    category: 'Supplies'
  },
  {
    id: 'p7',
    name: 'Computer Science Grade XI',
    price: 400,
    originalPrice: 850,
    description: 'Asmita Publications. C Programming.',
    fullDescription: 'Textbook for Computer Science. Covers basics of computer architecture, logic gates, and C programming.',
    specs: {
      'Publisher': 'Asmita',
      'Grade': 'XI',
      'Subject': 'Computer Science',
      'Condition': 'Fair'
    },
    images: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80', // Code Screen
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80'  // Laptop Coding
    ],
    rating: 4.6,
    reviewCount: 5,
    sellerId: 's1',
    category: 'Textbooks'
  },
  {
    id: 'p8',
    name: 'Casio fx-991ES Plus Calculator',
    price: 1500,
    originalPrice: 3200,
    description: 'Scientific calculator allowed in exams.',
    fullDescription: 'Original Casio scientific calculator. Solar and battery dual power. Allowed in NEB exams. Essential for physics and math.',
    specs: {
      'Brand': 'Casio',
      'Model': 'fx-991ES Plus',
      'Condition': 'Used',
      'Power': 'Dual'
    },
    images: [
      'https://images.unsplash.com/photo-1587145820266-a7951b2265fa?auto=format&fit=crop&w=800&q=80', // Calculator
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80'  // Calculator Dark
    ],
    rating: 5.0,
    reviewCount: 15,
    sellerId: 's4',
    category: 'Supplies'
  }
];
