
import { Product, Seller } from './types';

export const SELLERS: Record<string, Seller> = {
  's1': {
    id: 's1',
    name: 'Sarah Chen',
    profileImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    isVerified: true,
    college: 'Stanford University',
    age: 21,
    major: 'Computer Science',
    bio: 'Selling my notes from last semester. I take really organized notes! 📝',
    creditScore: 780,
    joinedDate: 'Sept 2021',
    reviews: 45,
    responseRate: '98%'
  },
  's2': {
    id: 's2',
    name: 'James Wilson',
    profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    isVerified: true,
    college: 'MIT',
    age: 22,
    major: 'Mechanical Engineering',
    bio: 'Graduating soon, getting rid of heavy textbooks.',
    creditScore: 650,
    joinedDate: 'Jan 2023',
    reviews: 12,
    responseRate: '85%'
  },
  's3': {
    id: 's3',
    name: 'Emily Davis',
    profileImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
    isVerified: false,
    college: 'NYU',
    age: 20,
    major: 'Biology',
    bio: 'Lab gear and bio textbooks for cheap.',
    creditScore: 500,
    joinedDate: 'Aug 2023',
    reviews: 3,
    responseRate: '60%'
  },
  's4': {
    id: 's4',
    name: 'Michael Brown',
    profileImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
    isVerified: true,
    college: 'UC Berkeley',
    age: 23,
    major: 'Architecture',
    bio: 'Selling drafting supplies I no longer need.',
    creditScore: 720,
    joinedDate: 'Mar 2022',
    reviews: 28,
    responseRate: '92%'
  },
  's5': {
    id: 's5',
    name: 'Olivia Martinez',
    profileImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    isVerified: true,
    college: 'Columbia Law',
    age: 24,
    major: 'Law',
    bio: 'Passed the bar! Selling all my outlines and study aids.',
    creditScore: 810,
    joinedDate: 'Sep 2020',
    reviews: 56,
    responseRate: '100%'
  }
};

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Calculus: Early Transcendentals',
    price: 650,
    originalPrice: 1800,
    description: '8th Edition. Essential for Math 101.',
    fullDescription: 'Required textbook for MATH 101/102. Hardcover. I kept it in great condition, no markings or folded pages. Save money compared to the bookstore!',
    specs: {
      'Author': 'James Stewart',
      'Edition': '8th',
      'Subject': 'Mathematics',
      'Condition': 'Like New'
    },
    images: [
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80'
    ],
    rating: 5.0,
    reviewCount: 2,
    sellerId: 's2',
    category: 'Textbooks'
  },
  {
    id: 'p2',
    name: 'CS 106A Handwritten Notes',
    price: 150,
    originalPrice: 300,
    description: 'Complete set of notes for Intro to Java.',
    fullDescription: 'My complete handwritten notes for the entire semester of CS 106A. Includes diagrams, code snippets, and exam cheat sheets. Scanned in high resolution or physical copy available.',
    specs: {
      'Format': 'Physical Spiral / PDF',
      'Pages': '45',
      'Course': 'CS 106A',
      'Handwriting': 'Cursive/Neat'
    },
    images: [
      'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80'
    ],
    rating: 4.9,
    reviewCount: 18,
    sellerId: 's1',
    category: 'Notes'
  },
  {
    id: 'p4',
    name: 'Biology Lab Coat & Goggles',
    price: 450,
    originalPrice: 900,
    description: 'Size M. Required for BIO 101 labs.',
    fullDescription: 'Standard white lab coat, size Medium. No stains, freshly laundered. Includes safety goggles that fit over glasses. Don\'t buy new from the student store!',
    specs: {
      'Size': 'Medium',
      'Material': 'Cotton Blend',
      'Condition': 'Used - Good',
      'Includes': 'Goggles'
    },
    images: [
      'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80'
    ],
    rating: 4.5,
    reviewCount: 3,
    sellerId: 's3',
    category: 'Supplies'
  },
  {
    id: 'p7',
    name: 'Campbell Biology',
    price: 800,
    originalPrice: 2200,
    description: '11th Edition. Heavy but comprehensive.',
    fullDescription: 'The bible of biology. Cover has some wear and tear, but pages are clean. No highlighting inside.',
    specs: {
      'Author': 'Lisa A. Urry',
      'Edition': '11th',
      'Subject': 'Biology',
      'Weight': '5 lbs'
    },
    images: [
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800&q=80'
    ],
    rating: 4.6,
    reviewCount: 12,
    sellerId: 's3',
    category: 'Textbooks'
  },
  {
    id: 'p8',
    name: 'Portable Whiteboard',
    price: 200,
    originalPrice: 450,
    description: 'A4 size, double sided. Good for calculations.',
    fullDescription: 'Small personal whiteboard. Great for working out math problems without wasting paper. Comes with a black marker.',
    specs: {
      'Size': '9x12 inches',
      'Surface': 'Magnetic',
      'Condition': 'Used',
      'Bonus': 'Marker included'
    },
    images: [
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80'
    ],
    rating: 4.0,
    reviewCount: 4,
    sellerId: 's1',
    category: 'Supplies'
  },
   {
    id: 'p9',
    name: 'Literature Classics Bundle',
    price: 500,
    originalPrice: 1200,
    description: '5 books required for English 101.',
    fullDescription: 'Includes 1984, Great Gatsby, To Kill a Mockingbird, Catcher in the Rye, and Lord of the Flies. Selling as a set only.',
    specs: {
      'Quantity': '5 Books',
      'Genre': 'Classic Lit',
      'Course': 'ENG 101',
      'Format': 'Paperback'
    },
    images: [
      'https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=800&q=80'
    ],
    rating: 4.9,
    reviewCount: 8,
    sellerId: 's2',
    category: 'Books'
  },
  {
    id: 'p10',
    name: 'Introduction to Psychology',
    price: 600,
    originalPrice: 1600,
    description: 'Lightly used, no highlighting.',
    fullDescription: 'Standard psych textbook for PSYCH 1. Very interesting read. Corners are a bit bumped but pages are crisp.',
    specs: {
      'Author': 'James W. Kalat',
      'Edition': '12th',
      'Subject': 'Psychology',
      'Format': 'Paperback'
    },
    images: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80'
    ],
    rating: 4.7,
    reviewCount: 5,
    sellerId: 's3',
    category: 'Textbooks'
  },
  {
    id: 'p11',
    name: 'Engineering Graph Paper Pad',
    price: 100,
    originalPrice: 200,
    description: 'Unopened pad, 100 sheets.',
    fullDescription: 'Green tint engineering paper. Essential for problem sets in engineering classes. Grid on back side only.',
    specs: {
      'Sheets': '100',
      'Size': '8.5 x 11',
      'Brand': 'Ampad',
      'Condition': 'New'
    },
    images: [
      'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80'
    ],
    rating: 5.0,
    reviewCount: 2,
    sellerId: 's2',
    category: 'Supplies'
  },
  {
    id: 'p12',
    name: 'Art History Flashcards',
    price: 120,
    originalPrice: 300,
    description: 'Handmade flashcards for ART 101.',
    fullDescription: 'Set of 50 flashcards covering major art movements from Renaissance to Modernism. Includes images on front and details on back.',
    specs: {
      'Count': '50 cards',
      'Subject': 'Art History',
      'Type': 'Handwritten',
      'Condition': 'Used'
    },
    images: [
      'https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?auto=format&fit=crop&w=800&q=80'
    ],
    rating: 4.3,
    reviewCount: 1,
    sellerId: 's1',
    category: 'Notes'
  },
  {
    id: 'p13',
    name: 'Physics 101: Mechanics Notes',
    price: 150,
    originalPrice: 350,
    description: 'Handwritten notes covering Newton\'s laws.',
    fullDescription: 'Detailed handwritten notes for the entire Mechanics semester. Includes free-body diagrams, formula derivations, and practice problem solutions for exams 1-3. A+ grade achieved with these notes.',
    specs: {
      'Subject': 'Physics',
      'Pages': '60',
      'Format': 'PDF/Physical',
      'Grade': 'A+'
    },
    images: [
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80'
    ],
    rating: 4.8,
    reviewCount: 15,
    sellerId: 's2',
    category: 'Notes'
  },
  {
    id: 'p14',
    name: 'Advanced Calculus II Textbook',
    price: 700,
    originalPrice: 1900,
    description: 'Hardcover, slightly worn corners.',
    fullDescription: 'Covers integration techniques, sequences, and series. This is the required text for MATH 201 at most state universities. Inside pages are clean.',
    specs: {
      'Subject': 'Calculus',
      'Edition': '10th',
      'Cover': 'Hardcover',
      'Condition': 'Good'
    },
    images: [
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800&q=80'
    ],
    rating: 4.4,
    reviewCount: 6,
    sellerId: 's1',
    category: 'Textbooks'
  },
  {
    id: 'p15',
    name: 'Biology 101: Cell Structure Notes',
    price: 100,
    originalPrice: 250,
    description: 'Beautifully drawn cell diagrams & cycles.',
    fullDescription: 'Focuses on cellular respiration, photosynthesis, and cell division. I used different colored pens for different structures. Super helpful for visualizing the Krebs cycle.',
    specs: {
      'Subject': 'Biology',
      'Pages': '30',
      'Style': 'Visual/Diagrams',
      'Color': 'Full Color'
    },
    images: [
      'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=800&q=80'
    ],
    rating: 4.9,
    reviewCount: 9,
    sellerId: 's3',
    category: 'Notes'
  },
  {
    id: 'p16',
    name: 'Linear Algebra: A Modern Intro',
    price: 500,
    originalPrice: 1500,
    description: 'Paperback. Good for Comp Sci majors.',
    fullDescription: 'The standard text for Linear Algebra. Explains matrices and vector spaces well. Some pencil underlining in the first few chapters.',
    specs: {
      'Subject': 'Math',
      'Author': 'David Poole',
      'Edition': '4th',
      'Condition': 'Fair'
    },
    images: [
      'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80'
    ],
    rating: 4.5,
    reviewCount: 4,
    sellerId: 's2',
    category: 'Textbooks'
  },
  {
    id: 'p17',
    name: 'Chemistry 1A Study Guide',
    price: 200,
    originalPrice: 400,
    description: 'Official study guide for final exam.',
    fullDescription: 'Contains summary of all chapters, practice questions, and answer key. Very useful for rapid review before the CHEM 1A final.',
    specs: {
      'Subject': 'Chemistry',
      'Type': 'Study Guide',
      'Pages': '120',
      'Publisher': 'Univ Press'
    },
    images: [
      'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=800&q=80'
    ],
    rating: 4.2,
    reviewCount: 3,
    sellerId: 's3',
    category: 'Books'
  },
  {
    id: 'p18',
    name: 'Quantum Physics Handouts',
    price: 100,
    originalPrice: 0,
    description: 'Lecture handouts for PHYS 137A.',
    fullDescription: 'Comprehensive handouts from the Quantum Mechanics course. Annotated with professor\'s comments during lectures. Essential for understanding wave functions.',
    specs: {
      'Subject': 'Physics',
      'Course': 'PHYS 137A',
      'Pages': '85',
      'Format': 'Physical'
    },
    images: [
      'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=800&q=80'
    ],
    rating: 4.7,
    reviewCount: 8,
    sellerId: 's2',
    category: 'Notes'
  },
  {
    id: 'p19',
    name: 'Torts & Contracts Outline',
    price: 350,
    originalPrice: 900,
    description: 'High distinction law school outline.',
    fullDescription: 'My personal outline that got me an A in Torts and Contracts. Organized by case law with key takeaways. 1L essential.',
    specs: {
      'Subject': 'Law',
      'Pages': '120',
      'Format': 'Digital PDF',
      'School': 'Columbia'
    },
    images: [
      'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80'
    ],
    rating: 5.0,
    reviewCount: 22,
    sellerId: 's5',
    category: 'Notes'
  },
  {
    id: 'p20',
    name: 'Medical Scrubs Set (Teal)',
    price: 750,
    originalPrice: 2400,
    description: 'Size S. Worn once for clinicals.',
    fullDescription: 'Figs brand scrub set in teal. Size Small. Extremely comfortable. I switched majors so no longer need these.',
    specs: {
      'Size': 'Small',
      'Brand': 'Figs',
      'Color': 'Teal',
      'Condition': 'Like New'
    },
    images: [
      'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=800&q=80'
    ],
    rating: 4.9,
    reviewCount: 4,
    sellerId: 's3',
    category: 'Supplies'
  }
];