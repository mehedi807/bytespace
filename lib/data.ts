export interface Instructor {
  id: string;
  name: string;
  handle: string;
  role: string;
  avatar: string;
  banner?: string;
  bio: string;
  aboutText?: string;
  stats: {
    courses: number;
    students: number;
    rating: number;
    reviews: number;
    followers: number;
  };
  socialLinks?: {
    website?: string;
    twitter?: string;
    github?: string;
    linkedin?: string;
    dribbble?: string;
  };
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  isPreview?: boolean;
  videoUrl?: string;
  description?: string;
  completed?: boolean;
}

export interface CourseModule {
  id: string;
  moduleNumber: string;
  title: string;
  duration: string;
  description: string;
  lessons: Lesson[];
}

export interface CourseReview {
  id: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  helpfulCount: number;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  duration: string;
  totalLessons: number;
  rating: number;
  reviewCount: number;
  studentsCount: number;
  price: number;
  originalPrice: number;
  image: string;
  videoPreviewImage?: string;
  badge?: string;
  instructor: Instructor;
  keyPoints: string[];
  requirements: string[];
  modules: CourseModule[];
  reviews: CourseReview[];
  featured?: boolean;
  popular?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  coursesCount: number;
  studentsCount: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  comment: string;
  rating: number;
}

export const creators: Instructor[] = [
  {
    id: "purepearl-studio",
    name: "PurePearl Studio",
    handle: "@purepearl",
    role: "Passionate UI/UX, Web designer & Digital Creator",
    avatar: "/images/img_55_4251.png",
    banner: "/images/img_55_4202.png",
    bio: "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together! Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story.",
    aboutText: "With over 8 years of industry experience crafting intuitive software and high-conversion digital experiences, PurePearl Studio empowers thousands of modern makers, designers, and developers around the globe.",
    stats: {
      courses: 6,
      students: 12450,
      rating: 4.8,
      reviews: 1420,
      followers: 12800,
    },
    socialLinks: {
      website: "https://bytespace.dev/purepearl",
      twitter: "https://twitter.com",
      github: "https://github.com",
      dribbble: "https://dribbble.com",
    },
  },
  {
    id: "sarah-mitchell",
    name: "Sarah Mitchell",
    handle: "@sarahm",
    role: "Senior Product Designer & Design System Lead",
    avatar: "/images/img_49_141.png",
    bio: "Specializing in scalable Figma design systems, interaction tokens, and accessible interface engineering.",
    stats: {
      courses: 4,
      students: 8900,
      rating: 4.9,
      reviews: 620,
      followers: 9400,
    },
  },
  {
    id: "marcus-vance",
    name: "Marcus Vance",
    handle: "@marcusv",
    role: "Principal Data Architect & Cloud Engineer",
    avatar: "/images/img_49_142.png",
    bio: "Teaching enterprise big data pipelines, machine learning models, and real-time distributed analytics.",
    stats: {
      courses: 5,
      students: 15300,
      rating: 4.9,
      reviews: 1100,
      followers: 14200,
    },
  },
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    handle: "@elenar",
    role: "Startup Founder & Venture Advisor",
    avatar: "/images/img_49_143.png",
    bio: "Guiding early-stage founders from validation and initial product build to venture capital fundraising.",
    stats: {
      courses: 3,
      students: 6700,
      rating: 4.8,
      reviews: 490,
      followers: 7800,
    },
  },
];

export const categories: Category[] = [
  { id: "all", name: "All Courses", slug: "all", coursesCount: 70, studentsCount: "12K+" },
  { id: "design", name: "Design", slug: "design", coursesCount: 24, studentsCount: "4.5K+", badge: "Popular" },
  { id: "development", name: "Development", slug: "development", coursesCount: 19, studentsCount: "3.8K+" },
  { id: "it-software", name: "IT & Software", slug: "it-software", coursesCount: 12, studentsCount: "2.1K+" },
  { id: "business", name: "Business", slug: "business", coursesCount: 15, studentsCount: "2.9K+" },
  { id: "marketing", name: "Marketing", slug: "marketing", coursesCount: 8, studentsCount: "1.4K+" },
  { id: "photography", name: "Photography", slug: "photography", coursesCount: 6, studentsCount: "950+" },
];

export const allSubCategories = [
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "+ More",
];

export const courses: Course[] = [
  {
    id: "learn-figma-basic",
    slug: "learn-figma-basic",
    title: "Learn Figma from Basic",
    subtitle: "From zero to building complete interactive design systems",
    description: "Start your UI/UX journey with a complete guide to Figma. Learn auto layout, component variants, smart animations, and developer handoff.",
    fullDescription: "Figma is the industry-standard collaborative design tool. In this hands-on course, you'll master Figma from the ground up: canvas navigation, vector networks, typography styles, color tokens, responsive auto layout, component properties, interactive prototypes, and production asset exports.",
    category: "Design",
    level: "Beginner",
    duration: "2 hours 16 mins",
    totalLessons: 17,
    rating: 4.5,
    reviewCount: 59,
    studentsCount: 1890,
    price: 25,
    originalPrice: 49,
    image: "/images/course_thumb_1.png",
    videoPreviewImage: "/images/course_thumb_1.png",
    badge: "Popular",
    featured: true,
    popular: true,
    instructor: creators[0],
    keyPoints: [
      "Figma UI, Canvas, and Tooling Overview",
      "Vector Networks and Shape Boolean Operations",
      "Auto Layout Mastery & Responsive Containers",
      "Component Variants, Properties & Design Tokens",
      "Interactive Smart Animate Prototyping",
      "Developer Handoff and CSS Spec Exports",
    ],
    requirements: ["A web browser and free Figma account"],
    modules: [
      {
        id: "m-figma-1",
        moduleNumber: "01",
        title: "Figma Fundamentals & Canvas Navigation",
        duration: "45 mins",
        description: "Get acquainted with the Figma workspace, frames, layers, and basic vector shapes.",
        lessons: [
          { id: "l-f-1", title: "Touring the Figma Workspace", duration: "10 mins", isPreview: true, completed: true },
          { id: "l-f-2", title: "Frames, Groups, and Layer Hierarchy", duration: "15 mins", isPreview: true, completed: false },
          { id: "l-f-3", title: "Vector Tools & Shape Manipulation", duration: "20 mins", isPreview: false, completed: false },
        ],
      },
      {
        id: "m-figma-2",
        moduleNumber: "02",
        title: "Auto Layout & Component Architecture",
        duration: "1 hour 31 mins",
        description: "Build flexible, unbreakable UI components that resize flawlessly across screen sizes.",
        lessons: [
          { id: "l-f-4", title: "Auto Layout Directions, Gap & Padding", duration: "25 mins", isPreview: false, completed: false },
          { id: "l-f-5", title: "Component Variants and Property Binding", duration: "35 mins", isPreview: false, completed: false },
          { id: "l-f-6", title: "Interactive States (Hover, Active, Focused)", duration: "31 mins", isPreview: false, completed: false },
        ],
      },
    ],
    reviews: [
      {
        id: "rev-f-1",
        author: "Devon Lane",
        role: "Junior Designer",
        avatar: "/images/img_49_144.png",
        rating: 5,
        date: "4 months ago",
        comment: "The auto layout explanations alone saved me hundreds of hours. Absolutely worth every penny!",
        helpfulCount: 15,
      },
    ],
  },
  {
    id: "build-digital-asset",
    slug: "build-digital-asset",
    title: "Build Digital Asset",
    subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
    description: "Embark on an enlightening exploration into the world of digital creation with our comprehensive course. Master design principles, visual production, interactive media, and asset monetization.",
    fullDescription: "Embark on an enlightening exploration into the world of digital creation with our comprehensive course. From foundational vector design and typography to advanced user-centric prototypes, platform optimization, and monetization strategies, this masterclass equips you with the complete end-to-end toolkit to build, launch, and profit from high-value digital products.",
    category: "Design",
    level: "Beginner",
    duration: "2 hours 16 mins",
    totalLessons: 17,
    rating: 4.5,
    reviewCount: 59,
    studentsCount: 3420,
    price: 25,
    originalPrice: 49,
    image: "/images/course_thumb_2.png",
    videoPreviewImage: "/images/course_thumb_2.png",
    badge: "Bestseller",
    featured: true,
    popular: true,
    instructor: creators[0],
    keyPoints: [
      "Foundational Concepts of Digital Assets & Formats",
      "Design Principles Mastery (Grid, Hierarchy, Color Harmony)",
      "Advanced Techniques in Digital Creation & Vector Craft",
      "Interactive Media, Presentation & Micro-interactions",
      "Optimizing for Web, Mobile, and Social Platforms",
      "Digital Asset Management & Version Control Best Practices",
      "Monetization, Licensing & Creator Marketplace Strategies",
      "Capstone Project: Building Your Complete Public Portfolio",
    ],
    requirements: [
      "No prior design or coding experience required",
      "A computer (Mac, Windows, or Linux) with internet access",
      "Free Figma account and a modern web browser",
      "Passion to create and publish digital products",
    ],
    modules: [
      {
        id: "mod-1",
        moduleNumber: "01",
        title: "Introduction to Digital Assets",
        duration: "2 hours 15 mins",
        description: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
        lessons: [
          { id: "les-1-1", title: "Understanding Digital Elements & Vectors", duration: "12 mins", isPreview: true, completed: true },
          { id: "les-1-2", title: "Navigating Modern Design Software Tools", duration: "18 mins", isPreview: true, completed: true },
          { id: "les-1-3", title: "Setting Up Your Production Workspace", duration: "15 mins", isPreview: false, completed: true },
          { id: "les-1-4", title: "File Formats: SVG, WebP, PNG & Resolution Scales", duration: "20 mins", isPreview: false, completed: false },
        ],
      },
    ],
    reviews: [
      {
        id: "rev-1",
        author: "Albert Flores",
        role: "UI/UX Designer",
        avatar: "/images/img_60_1377.png",
        rating: 5,
        date: "a year ago",
        comment: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience.",
        helpfulCount: 42,
      },
    ],
  },
  {
    id: "the-power-of-big-data",
    slug: "the-power-of-big-data",
    title: "the Power of Big Data",
    subtitle: "Scale analytics, data pipelines, and intelligence architectures",
    description: "Harness modern big data platforms. Learn distributed data engineering, streaming pipelines, query optimization, and predictive analytics.",
    fullDescription: "Data is the lifeblood of modern technology. This course covers everything from big data fundamentals, SQL at scale, Spark clusters, real-time event streaming with Kafka, to cloud data warehousing with Snowflake and BigQuery.",
    category: "IT & Software",
    level: "Beginner",
    duration: "2 hours 16 mins",
    totalLessons: 17,
    rating: 4.5,
    reviewCount: 59,
    studentsCount: 2600,
    price: 25,
    originalPrice: 49,
    image: "/images/course_thumb_3.png",
    videoPreviewImage: "/images/course_thumb_3.png",
    badge: "Trending",
    featured: true,
    popular: true,
    instructor: creators[0],
    keyPoints: [
      "Distributed Computing & MapReduce Principles",
      "Apache Spark, PySpark, and Cluster Workloads",
      "Streaming Ingestion with Apache Kafka",
      "Modern Cloud Data Lakehouse Architecture",
      "Data Modeling for High-Performance Queries",
    ],
    requirements: ["Basic knowledge of Python and SQL"],
    modules: [
      {
        id: "m-data-1",
        moduleNumber: "01",
        title: "Big Data Landscape & Architecture",
        duration: "3 hours 15 mins",
        description: "Overview of distributed computing, storage formats (Parquet, Iceberg), and pipeline orchestration.",
        lessons: [
          { id: "l-d-1", title: "The 5 Vs of Big Data & System Topologies", duration: "25 mins", isPreview: true, completed: false },
          { id: "l-d-2", title: "Distributed Storage: HDFS to Object Storage", duration: "35 mins", isPreview: false, completed: false },
        ],
      },
    ],
    reviews: [
      {
        id: "rev-d-1",
        author: "Guy Hawkins",
        role: "Data Analyst",
        avatar: "/images/img_49_145.png",
        rating: 5,
        date: "2 months ago",
        comment: "Crystal clear breakdown of complex data architectures. Helped me transition into a data engineering role!",
        helpfulCount: 22,
      },
    ],
  },
  {
    id: "balancing-productivity-and-self-care",
    slug: "balancing-productivity-and-self-care",
    title: "Balancing Productivity and Self-Care",
    subtitle: "Achieve ambitious goals while nurturing mental clarity and wellness",
    description: "Discover sustainable routines, time blocking, deep focus rituals, and stress resilience strategies for modern creatives and professionals.",
    fullDescription: "Avoid burnout and build enduring peak performance. Learn science-backed habit loops, attention management, energy rhythms, boundary setting, and mindful workflows designed for modern knowledge workers.",
    category: "Business",
    level: "Beginner",
    duration: "2 hours 16 mins",
    totalLessons: 17,
    rating: 4.5,
    reviewCount: 59,
    studentsCount: 1450,
    price: 25,
    originalPrice: 49,
    image: "/images/course_thumb_4.png",
    videoPreviewImage: "/images/course_thumb_4.png",
    badge: "Wellness",
    featured: true,
    popular: false,
    instructor: creators[0],
    keyPoints: [
      "Deep Work Protocols & Distraction Elimination",
      "Circadian Energy Management vs. Time Management",
      "Establishing Work-Life Boundaries for Remote Workers",
      "Stress Recovery & Micro-Rest Practices",
    ],
    requirements: ["An open mindset and willingness to audit daily habits"],
    modules: [
      {
        id: "m-prod-1",
        moduleNumber: "01",
        title: "Attention Architecture & Habit Design",
        duration: "1 hour 45 mins",
        description: "Reclaim your mental bandwidth from digital clutter and reactive notifications.",
        lessons: [
          { id: "l-p-1", title: "The Psychology of Distraction", duration: "18 mins", isPreview: true, completed: false },
          { id: "l-p-2", title: "Designing Your Ideal Daily Flow", duration: "22 mins", isPreview: false, completed: false },
        ],
      },
    ],
    reviews: [
      {
        id: "rev-p-1",
        author: "Kristin Watson",
        role: "Freelance Copywriter",
        avatar: "/images/img_34_1184.png",
        rating: 5,
        date: "5 months ago",
        comment: "This course completely transformed how I structure my work week. I get more done with zero burnout.",
        helpfulCount: 18,
      },
    ],
  },
  {
    id: "mastering-money-management",
    slug: "mastering-money-management",
    title: "Mastering Money Management",
    subtitle: "Personal finance, investments, and wealth-building fundamentals",
    description: "Gain financial confidence with budgeting systems, smart debt elimination, index fund investing, tax optimization, and wealth compounding.",
    fullDescription: "Take full control of your financial destiny. This practical guide covers cash flow tracking, emergency funds, investment vehicles (ETFs, index funds, retirement accounts), real estate basics, and automated financial systems.",
    category: "Business",
    level: "Beginner",
    duration: "2 hours 16 mins",
    totalLessons: 17,
    rating: 4.5,
    reviewCount: 59,
    studentsCount: 2200,
    price: 25,
    originalPrice: 49,
    image: "/images/course_thumb_5.png",
    videoPreviewImage: "/images/course_thumb_5.png",
    badge: "Finance",
    featured: true,
    popular: true,
    instructor: creators[0],
    keyPoints: [
      "Building a Zero-Based Automated Budget",
      "High-Yield Savings & Emergency Cash Reservoirs",
      "Index Fund Investing & Dollar-Cost Averaging",
      "Tax-Advantaged Retirement Strategies",
    ],
    requirements: ["No financial background needed"],
    modules: [
      {
        id: "m-money-1",
        moduleNumber: "01",
        title: "Cash Flow Mastery & Debt Elimination",
        duration: "2 hours 10 mins",
        description: "Establish a bulletproof foundation for your personal and business cash flow.",
        lessons: [
          { id: "l-m-1", title: "Tracking Net Worth & Monthly Cash Flow", duration: "20 mins", isPreview: true, completed: false },
          { id: "l-m-2", title: "Avalanche vs. Snowball Debt Strategies", duration: "25 mins", isPreview: false, completed: false },
        ],
      },
    ],
    reviews: [
      {
        id: "rev-m-1",
        author: "Floyd Miles",
        role: "Operations Manager",
        avatar: "/images/img_34_1196.png",
        rating: 5,
        date: "1 month ago",
        comment: "Actionable, jargon-free personal finance advice that anyone can implement immediately.",
        helpfulCount: 14,
      },
    ],
  },
  {
    id: "from-idea-to-startup-success",
    slug: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    subtitle: "Validate, launch, acquire customers, and scale your venture",
    description: "Turn ideas into scalable businesses. Learn customer discovery, minimum viable products (MVPs), product-market fit, and pitching investors.",
    fullDescription: "The definitive roadmap for modern founders. Learn how to identify painful market problems, validate demand before writing code, build lean MVPs, acquire early adopters, design pricing models, and pitch angel investors and venture capitalists.",
    category: "Business",
    level: "Beginner",
    duration: "2 hours 16 mins",
    totalLessons: 17,
    rating: 4.5,
    reviewCount: 59,
    studentsCount: 3100,
    price: 25,
    originalPrice: 49,
    image: "/images/course_thumb_6.png",
    videoPreviewImage: "/images/course_thumb_6.png",
    badge: "Startup",
    featured: true,
    popular: true,
    instructor: creators[0],
    keyPoints: [
      "Customer Discovery & Pain Point Validation",
      "Building Fast No-Code & Lean MVPs",
      "Go-To-Market (GTM) Strategy & Early Distribution",
      "Unit Economics, SaaS Metrics & Pitch Deck Creation",
    ],
    requirements: ["An entrepreneurial aspiration or existing startup concept"],
    modules: [
      {
        id: "m-startup-1",
        moduleNumber: "01",
        title: "Validation & Market Sizing",
        duration: "2 hours 40 mins",
        description: "Prove demand and quantify market size before committing resources.",
        lessons: [
          { id: "l-s-1", title: "The Mom Test: Conducting Unbiased Interviews", duration: "30 mins", isPreview: true, completed: false },
          { id: "l-s-2", title: "Landing Page Smoke Tests & Pre-Orders", duration: "35 mins", isPreview: false, completed: false },
        ],
      },
    ],
    reviews: [
      {
        id: "rev-s-1",
        author: "Darlene Robertson",
        role: "Founder, SaaS Pulse",
        avatar: "/images/img_49_141.png",
        rating: 5,
        date: "2 months ago",
        comment: "This course helped us get our first 100 paying customers in under 6 weeks. Indispensable guide!",
        helpfulCount: 39,
      },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/images/img_34_1184.png",
    comment: "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
    rating: 5,
  },
  {
    id: "test-2",
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/images/img_49_142.png",
    comment: "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
    rating: 5,
  },
  {
    id: "test-3",
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/images/img_34_1196.png",
    comment: "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
    rating: 5,
  },
];

export const platformStats = [
  { value: "12K+", label: "Happy Students", sublabel: "Enrolled in top courses" },
  { value: "70+", label: "Expert Courses", sublabel: "Spanning high-demand topics" },
  { value: "16+", label: "Top Creators", sublabel: "Industry-leading instructors" },
  { value: "4.8", label: "Average Rating", sublabel: "Across 10,000+ reviews" },
];
