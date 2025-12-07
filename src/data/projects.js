/**
 * Projects Data
 * Each project contains title, description, tech stack, and links
 * Map over this array in Projects.jsx component
 */

export const projects = [
  {
    id: 1,
    title: "AI-Enabled Potato Disease Detection",
    description:
      "Cross-platform application enabling farmers to scan potato leaves via smartphone to detect health status. The AI-powered system analyzes images and predicts whether leaves show signs of early blight, late blight, or are healthy.",
    highlights: [
      "Research paper published in an academic journal",
      "Selected and funded (~₹10,000) by Karnataka State Technological Council",
      "Presented at state-level event in Kalburgi",
    ],
    tech: ["Python", "Flask", "Jupyter Notebook", "JavaScript", "ReactJS", "Bootstrap"],
    liveUrl: "#",
    codeUrl: "https://github.com/NithishSagar/potato-disease-detection",
    featured: true,
  },
  {
    id: 2,
    title: "IoT-Based Soil Fertility Detection",
    description:
      "An integrated IoT and web application that measures soil fertility through NPK (Nitrogen, Phosphorus, Potassium) values. IoT sensors transmit real-time data to a web dashboard where farmers can visualize and monitor soil health.",
    highlights: [],
    tech: ["MQTT", "React", "MongoDB", "JavaScript", "CSS", "SCSS", "HTML", "REST APIs"],
    liveUrl: "#",
    codeUrl: "https://github.com/NithishSagar/soil-fertility-iot",
    featured: true,
  },
  {
    id: 3,
    title: "Student Attendance Management System",
    description:
      "A comprehensive web application deployed at a college to digitize attendance tracking. Replaced traditional paper registers with an efficient digital solution for managing and storing student attendance records.",
    highlights: [],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
    liveUrl: "#",
    codeUrl: "https://github.com/NithishSagar/attendance-system",
    featured: false,
  },
  {
    id: 4,
    title: "Hostel Management System",
    description:
      "A web-based application developed for college hostel administration. Streamlines the process of maintaining student records, room allocations, and hostel data in a virtual, easily accessible format.",
    highlights: [],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
    liveUrl: "#",
    codeUrl: "https://github.com/NithishSagar/hostel-management",
    featured: false,
  },
  {
    id: 5,
    title: "More Projects",
    description:
      "Explore additional experiments, mini-projects, and utilities on my GitHub profile. From web apps to automation scripts, there's always something new in the works.",
    highlights: [],
    tech: ["Various Technologies"],
    liveUrl: null,
    codeUrl: "https://github.com/NithishSagar",
    featured: false,
    isMore: true,
  },
];
