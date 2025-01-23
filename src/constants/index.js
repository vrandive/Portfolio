import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    mongodb,
    git,
    figma,
    
  } from "../assets";
  import momskart from "../assets/momskart.png";
  import dezerv from '../assets/dezerv.jpeg';
  import UMass from "../assets/UMass.jpg";
  import blount from '../assets/blount.jpeg';
  import snowflake from '../assets/snowflake.png';
  import aws from '../assets/aws.png';
  import python from '../assets/python.png';
  import msexcel from "../assets/msexcel.png";
  import sql from "../assets/sql.png";
  import flutter from '../assets/flutter.png';
  import tableau from '../assets/tableau.png';
  import powerbi from "../assets/powerbi.png";
  import sales from "../assets/sales.png";
  import bankruptcy from "../assets/bankruptcy.png";
  import covid from "../assets/covid.png";
  import credits from "../assets/credits.png";
  import airline from "../assets/airline.jpeg";
  import car from "../assets/car.jpg";
  import expense from "../assets/expense.png";

  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Analytics",
      icon: creator,
    },
    {
      title: "Software Developement",
      icon: mobile,
    },
    {
      title: "Automation",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Flutter",
      icon: flutter,
    },
    {
      name: "Tableau",
      icon: tableau,
    },
    {
      name: "Power BI",
      icon: powerbi,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
   
    {
      name: "snowflake",
      icon: snowflake,
    },
    {
      name:"aws",
      icon: aws,
    },
    {
      name:'python',
      icon: python,
    },
    {
      name:'msexcel',
      icon: msexcel,
    },
    {
      name:'sql',
      icon:sql,
    },
    
    
  ];
  
  const experiences = [
    {
      title: "Digital Marketing Intern",
      company_name: "Momskart",
      icon: momskart,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - March 2021",
      points: [
        "Implemented SEO and SEM strategies that increased website traffic and improved search engine rankings.",
        "Performed keyword analysis and optimized website content to improve organic search rankings and visibility.",
        "Utilized analytics tools to monitor social media performance and adjust strategies accordingly.",
        "Analyzed website and campaign performance using tools like Google Analytics, providing insights to guide marketing strategies.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "DEZERV",
      icon: dezerv,
      iconBg: "#000000",
      date: "Dec 2021 - Nov 2022",
      points: [
        "Designed, developed, and maintained Android applications using Kotlin.",
        "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Successfully transitioned from native Android development using Kotlin to Flutter, leveraging Dart for cross-platform mobile app development.",
        "Participated in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "IT Service Analyst",
      company_name: "University of Massachusetts Boston",
      icon: UMass,
      iconBg: "#005A8B",
      date: "June 2023 - Oct 2024",
      points: [
        "Automated IT processes using command-line scripts, PowerShell, and Linux, resulting an increase in operational efficiency.",
        "Leveraged ServiceNow CRM to manage IT incidents and service requests, improving IT service delivery and reducing issue resolution time.",
        "Collaborated with cross-functional teams to address complex IT issues and implement effective solutions.",
        "Analyzed IT support data to identify trends, track performance metrics, and provide insights for continuous improvement.",
      ],
    },
    {
      title: "Supply Chain Intern",
      company_name: "Blount Fine Foods",
      icon: blount,
      iconBg: "#6C712F",
      date: "Oct 2024 - Present",
      points: [
        "Developed comprehensive reports and dashboards to monitor key performance indicators (KPIs).",
        "Assisted in maintaining relationships with vendors and evaluated their performance through scorecards and data insights.",
        "Compiled and organized market research data to inform supply chain strategies.",
        "Worked closely with procurement, logistics, and production teams to ensure alignment in supply chain operations.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Sales Insight",
      description:
        "This project focuses on creating an interactive and visually compelling Sales Insights Dashboard using Microsoft Power BI. The dashboard empowers businesses to make data-driven decisions by providing actionable insights into sales performance, customer trends, and market opportunities.",
      tags: [
        {
          name: "Power BI",
          color: "blue-text-gradient",
        },
        {
          name: "sql",
          color: "green-text-gradient",
        },
      ],
      image: sales,
      source_code_link: "https://github.com/vrandive/Sales-Insight",
    },
    {
      name: "Bankruptcy Analysis",
      description:
        "The project employs Python to analyze and predict bankruptcy risks for businesses based on financial data and other key indicators. The solution helps organizations, investors, and financial analysts identify potential insolvency risks, enabling proactive decision-making and risk mitigation.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "excel",
          color: "green-text-gradient",
        },
      ],
      image: bankruptcy,
      source_code_link: "https://github.com/vrandive/Bankruptcy-Analysis",
    },
    {
      name: "Covid-19 Mortality vs Gender",
      description:
        "R based project to examine the connection between gender and COVID-19 mortality rates. By analyzing comprehensive public health datasets, it identifies patterns and disparities in how the pandemic affected different genders. The findings offer valuable insights for shaping public health policies and implementing targeted interventions.",
      tags: [
        {
          name: "R",
          color: "blue-text-gradient",
        },
        {
          name: "excel",
          color: "green-text-gradient",
        },
      ],
      image: covid,
      source_code_link: "https://github.com/vrandive/Covid-19-Mortality-vs-Gender",
    },
    {
      name: "Customer Loans and Credits",
      description:
        "An analysis project that employs Python to analyze customer loans and assess credit risk by examining financial behavior, repayment history, and other key factors. The solution enables banks and financial institutions to identify high-risk customers, optimize loan approvals, and minimize defaults.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "excel",
          color: "green-text-gradient",
        },
      ],
      image: credits,
      source_code_link: "https://github.com/vrandive/Customer-Loans-and-Credits",
    },
    {
      name: "Airline Reservation System",
      description:
        "This project implements a robust Airline Reservation System using SQL to manage flight bookings, customer information, and schedules. It is designed to simplify the management of reservations, improve customer experiences, and ensure data integrity for airline operations.",
      tags: [
        {
          name: "sql",
          color: "blue-text-gradient",
        },
      ],
      image: airline,
      source_code_link: "https://github.com/vrandive/Airline-Reservation-System-DB",
    },
    {
      name: "Road Accidents in US",
      description:
        "The project leverages Tableau to visualize and analyze road accident data across the United States. By exploring key patterns and trends in accident frequency, severity, and contributing factors, the analysis helps policymakers, transportation agencies, and public safety organizations identify high-risk areas and develop targeted strategies to reduce accidents.",
      tags: [
        {
          name: "Tableau",
          color: "blue-text-gradient",
        },
        {
          name: "excel",
          color: "green-text-gradient",
        },
      ],
      image: car,
      source_code_link: "https://github.com/vrandive/Car-Accidents-in-the-US",
    },
    {
      name: "Expense Management",
      description:
        "A Mobile Expense Management Application using Flutter, allowing users to easily track and manage their personal or business expenses. The app provides an intuitive interface to input, categorize, and analyze financial transactions, helping users stay within their budget and optimize spending.",
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
      ],
      image: expense,
      source_code_link: "https://github.com/vrandive/Expense-Management",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };