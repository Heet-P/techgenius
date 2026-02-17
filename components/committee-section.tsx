"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Linkedin, Github, Mail } from "lucide-react"
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { PrimaryGlowButton } from '@/components/ui/glow-button'
import { ProfileGlowCard } from '@/components/ui/glow-card'

export function CommitteeSection() {
  const committeeMembers = [
    {
      name: "Dr. Amit Thakkar",
      role: "Convener",
      department: "Computer Science & Engineering",
      year: "Head of Department",
      bio: "Passionate about AI/ML and leading our community towards innovative solutions.",
      fullBio: "Dr. Amit Thakkar is the Head Of The Department of Computer Science & Engineering , known for his exceptional vision and dedication to advancing the field of Computer Science. His passion for these technologies has driven numerous groundbreaking initiatives within our community. Under his leadership, TechGenius has expanded its reach, formed strategic partnerships with industry leaders, and launched several successful programs that have benefited hundreds of students. Dr. Thakkar's commitment to fostering innovation and creating an inclusive environment has made him an inspirational leader who continues to guide our organization toward new heights of excellence.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "https://www.linkedin.com/in/dr-amit-thakkar-66b52622/",
      github: "#",
      email: "amitthakkar.it@charusat.ac.in",
    },
    {
      name: "Dr. Jigar Sarda",
      role: "Faculty Coordinator",
      department: "Computer Science & Engineering",
      year: "Assistant Professor",
      bio: "No Bio as Of now but we can also add anything that the professor wants just this is a trial one so .",
      fullBio: "Dr. Jigar Sarda is an Assistant Professor in the Department of Computer Science & Engineering, specializing in software engineering and project management. With a strong background in both academia and industry, he brings a wealth of knowledge to his role as Faculty Coordinator. Dr. Sarda is dedicated to fostering a collaborative learning environment and empowering students to achieve their full potential. His commitment to excellence in teaching and mentorship has made a significant impact on the TechGenius community.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "https://www.linkedin.com/in/dr-jigar-sarda-00384414/",
      github: "#",
      email: "jigarsarda.ee@charusat.ac.in",
    },
    {
      name: "Srushti Gajjar",
      role: "Faculty Coordinator",
      department: "Computer Science & Engineering",
      year: "Assistant Professor",
      bio: "Data enthusiast working on machine learning projects and organizing technical workshops.",
      fullBio: "Srushti Gajjar is an Assistant Professor in the Department of Computer Science & Engineering, specializing in machine learning and data analytics. Her expertise has been invaluable to TechGenius, where she has organized numerous workshops that have educated hundreds of students on cutting-edge technologies. Srushti's research work in predictive analytics and her ability to translate complex concepts into accessible learning materials has made her workshops some of the most popular events in our calendar. Her dedication to advancing technical knowledge within our community continues to inspire both beginners and advanced practitioners in the field of data science.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "https://linkedin.com/in/srushti-gajjar",
      github: "https://github.com/srushti-gajjar",
      email: "srushti@techgenius.edu",
    },
    {
      name: "Avani Khokhariya",
      role: "Faculty Coordinator",
      department: "Computer Science & Engineering",
      year: "Assistant Professor",
      bio: "Data enthusiast working on machine learning projects and organizing technical workshops.",
      fullBio: "Avani Khokhariya is an Assistant Professor in the Department of Computer Science & Engineering, specializing in machine learning and data analytics. Her expertise has been invaluable to TechGenius, where she has organized numerous workshops that have educated hundreds of students on cutting-edge technologies. Avani's research work in predictive analytics and her ability to translate complex concepts into accessible learning materials has made her workshops some of the most popular events in our calendar. Her dedication to advancing technical knowledge within our community continues to inspire both beginners and advanced practitioners in the field of data science.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "https://linkedin.com/in/avani-khokhariya",
      github: "https://github.com/avani-khokhariya",
      email: "avani@techgenius.edu",
    },
    {
      name: "Mishri Bhanwadia",
      role: "President",
      department: "Computer Science & Engineering",
      year: "2nd",
      bio: "Organizing hackathons, tech talks, and networking events to connect our community.",
      fullBio: "Mishri Bhanwadia, a 2nd-year Computer Science & Engineering student, has revolutionized how TechGenius approaches event management. Her innovative approach to organizing hackathons, tech talks, and networking events has significantly increased community engagement and participation. Despite being one of our younger committee members, Mishri's organizational skills and creative event planning have resulted in some of our most successful and memorable events. Her ability to coordinate with industry professionals and create meaningful networking opportunities has helped countless members advance their careers and expand their professional networks.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "https://www.linkedin.com/in/mishri-bhanwadia-24700631b/",
      github: "https://github.com/24CS008Mishri",
      email: "24cs008@charusat.edu.in",
    },
    {
      name: "Akshat Patel",
      role: "Vice President",
      department: "Computer Science & Engineering",
      year: "2nd",
      bio: "Building partnerships with industry leaders and expanding our club's reach.",
      fullBio: "Akshat Patel serves as our Vice President, where his exceptional leadership skills and strategic thinking have been crucial in building partnerships with industry leaders. As a 2nd-year Computer Science & Engineering student, he has successfully negotiated partnerships that have provided our members with internship opportunities, mentorship programs, and access to cutting-edge technologies. His work in expanding our club's reach has resulted in collaborations with major tech companies and increased visibility for TechGenius within the broader tech community. Akshat's dedication to creating opportunities for our members continues to open doors for career advancement and professional growth.",
      image: "/Akshat Patel.jpg?height=300&width=300",
      linkedin: "https://www.linkedin.com/in/akshat-patelx1405/",
      github: "https://github.com/Akshat14z",
      email: "24cs060@charusat.edu.in",
    },
    {
      name: "Harikesh Patel",
      role: "Treasurer",
      department: "Computer Science & Engineering",
      year: "2nd",
      bio: "Managing club finances and securing funding for our innovative projects and events.",
      fullBio: "Harikesh Patel, a 2nd-year Computer Science & Engineering student, has been instrumental in managing TechGenius's financial operations and securing funding for our ambitious projects. His background in business and technology gives him a unique perspective on resource allocation and strategic financial planning. Under his stewardship, the club has successfully secured grants and sponsorships that have enabled us to host larger events, provide better resources to our members, and expand our program offerings. Harikesh's meticulous approach to financial management and his ability to identify funding opportunities continues to ensure the long-term sustainability and growth of our organization.",
      image: "/Harikesh Patel.jpg?height=300&width=300",
      linkedin: "https://www.linkedin.com/in/harikesh-patel-059b0331a/",
      github: "https://github.com/Harikesh0501",
      email: "24cs064@charusat.edu.in",
    },
    {
      name: "Yashvi Tanna",
      role: "Secretary",
      department: "Computer Science & Engineering",
      year: "2nd",
      bio: "Managing club communications and ensuring smooth operations within the team.",
      fullBio: "Yashvi Tanna, a 2nd-year Computer Science & Engineering student, plays a vital role in managing TechGenius's internal communications and ensuring that all team members are aligned with the club's goals. Her strong organizational skills and attention to detail have been instrumental in streamlining our processes and improving collaboration among members. Yashvi's dedication to fostering a positive and inclusive environment within the club has made her a trusted point of contact for all members. Her efforts in coordinating meetings, managing schedules, and facilitating discussions have significantly contributed to the overall success of our initiatives.",
      image: "/Yashvi Tanna.jpg?height=300&width=300",
      linkedin: "https://www.linkedin.com/in/yashvi-tanna/",
      github: "https://github.com/YashviTanna",
      email: "24cs064@charusat.edu.in",
    },
    {
      name: "Heet Parikh",
      role: "Hackathon Coordinator",
      department: "Computer Science & Engineering",
      year: "2nd Year",
      bio: "Organizing hackathons, coding competitions, and tech challenges to foster innovation.",
      fullBio: "Heet Parikh, a 2nd Year Computer Science & Engineering student, is passionate about creating opportunities for students to showcase their skills and collaborate on innovative projects. As the Hackathon Coordinator, he is responsible for planning and executing hackathons and coding competitions that challenge participants to think creatively and work together. Heet's dedication to fostering a culture of innovation and collaboration within TechGenius has led to the successful organization of several high-profile events that have attracted participants from across the university. His ability to connect with students and industry professionals alike has been instrumental in securing sponsorships and resources for these events.",
      image: "/Garba_Goggles.jpg?height=300&width=300",
      linkedin: "https://linkedin.com/in/heetparikh",
      github: "https://github.com/Heet-P",
      email: "24cs058@charusat.edu.in",
    },
    {
      name: "Dhrumil Amin",
      role: "Hackathon Coordinator",
      department: "Computer Science & Engineering",
      year: "2nd Year",
      bio: "Organizing hackathons, coding competitions, and tech challenges to foster innovation.",
      fullBio: "Dhrumil Amin, a 2nd Year Computer Science & Engineering student, is passionate about creating opportunities for students to showcase their skills and collaborate on innovative projects. As the Hackathon Coordinator, he is responsible for planning and executing hackathons and coding competitions that challenge participants to think creatively and work together. Dhrumil's dedication to fostering a culture of innovation and collaboration within TechGenius has led to the successful organization of several high-profile events that have attracted participants from across the university. His ability to connect with students and industry professionals alike has been instrumental in securing sponsorships and resources for these events.",
      image: "/Dhrumil Amin.jpg?height=300&width=300",
      linkedin: "https://www.linkedin.com/in/dhrumil-amin-47429a260/",
      github: "https://github.com/dhrumil246",
      email: "24cs005@charusat.edu.in",
    },
    {
      name: "Hetvi Taank",
      role: "Hackathon Coordinator",
      department: "Computer Science & Engineering",
      year: "2nd Year",
      bio: "Organizing hackathons, coding competitions, and tech challenges to foster innovation.",
      fullBio: "Hetvi Taank, a 2nd Year Computer Science & Engineering student, is passionate about creating opportunities for students to showcase their skills and collaborate on innovative projects. As the Hackathon Coordinator, she is responsible for planning and executing hackathons and coding competitions that challenge participants to think creatively and work together. Hetvi's dedication to fostering a culture of innovation and collaboration within TechGenius has led to the successful organization of several high-profile events that have attracted participants from across the university. Her ability to connect with students and industry professionals alike has been instrumental in securing sponsorships and resources for these events.",
      image: "/Hetvi Tank.jpg?height=300&width=300",
      linkedin: "https://www.linkedin.com/in/hetvi-taank/",
      github: "https://github.com/HetviTaank",
      email: "24cs099@charusat.edu.in",
    },
    {
      name: "Yash Bharvada",
      role: "Hackathon Coordinator",
      department: "Computer Science & Engineering",
      year: "3rd Year",
      bio: "Organizing hackathons, coding competitions, and tech challenges to foster innovation.",
      fullBio: "Yash Bharvada, a 3rd Year Computer Science & Engineering student, is passionate about creating opportunities for students to showcase their skills and collaborate on innovative projects. As the Hackathon Coordinator, he is responsible for planning and executing hackathons and coding competitions that challenge participants to think creatively and work together. Yash's dedication to fostering a culture of innovation and collaboration within TechGenius has led to the successful organization of several high-profile events that have attracted participants from across the university. His ability to connect with students and industry professionals alike has been instrumental in securing sponsorships and resources for these events.",
      image: "/Yash Bharvada.jpg?height=300&width=300",
      linkedin: "https://www.linkedin.com/in/yash-bharvada/",
      github: "https://github.com/YashBharvada",
      email: "24cs099@charusat.edu.in",
    },
    {
      name: "Dhruv Bhagat",
      role: "Hackathon Coordinator",
      department: "Computer Science & Engineering",
      year: "3rd Year",
      bio: "Organizing hackathons, coding competitions, and tech challenges to foster innovation.",
      fullBio: "Dhruv Bhagat, a 3rd Year Computer Science & Engineering student, is passionate about creating opportunities for students to showcase their skills and collaborate on innovative projects. As the Hackathon Coordinator, he is responsible for planning and executing hackathons and coding competitions that challenge participants to think creatively and work together. Dhruv's dedication to fostering a culture of innovation and collaboration within TechGenius has led to the successful organization of several high-profile events that have attracted participants from across the university. His ability to connect with students and industry professionals alike has been instrumental in securing sponsorships and resources for these events.",
      image: "/Dhruv Bhagat.jpg?height=300&width=300",
      linkedin: "https://www.linkedin.com/in/dhruv-bhagat/",
      github: "https://github.com/DhruvBhagat",
      email: "24cs099@charusat.edu.in",
    },
    {
      name: "Mahek Hirpara",
      role: "Public Relations Head",
      department: "Computer Science & Engineering",
      year: "1st Year",
      bio: "Amplifying TechGenius's voice through strategic communications and community engagement.",
      fullBio: "Mahek, a 1st Year Computer Science & Engineering student, is passionate about creating opportunities for students to showcase their skills and collaborate on innovative projects. As the Hackathon Coordinator, she is responsible for planning and executing hackathons and coding competitions that challenge participants to think creatively and work together. Hetvi's dedication to fostering a culture of innovation and collaboration within TechGenius has led to the successful organization of several high-profile events that have attracted participants from across the university. Her ability to connect with students and industry professionals alike has been instrumental in securing sponsorships and resources for these events.",
      image: "/Mahek Hirpara.jpg?height=300&width=300",
      linkedin: "https://www.linkedin.com/in/hetvi-taank/",
      github: "https://github.com/HetviTaank",
      email: "24cs099@charusat.edu.in",
    },
    {
      name: "Priya Aghera",
      role: "Public Relations Head",
      department: "Computer Science & Engineering",
      year: "2nd Year",
      bio: "Managing external relations and building partnerships that drive our club's growth.",
      fullBio: "Priya, a 2nd Year Computer Science & Engineering student, is passionate about creating opportunities for students to showcase their skills and collaborate on innovative projects. As the Hackathon Coordinator, she is responsible for planning and executing hackathons and coding competitions that challenge participants to think creatively and work together. Hetvi's dedication to fostering a culture of innovation and collaboration within TechGenius has led to the successful organization of several high-profile events that have attracted participants from across the university. Her ability to connect with students and industry professionals alike has been instrumental in securing sponsorships and resources for these events.",
      image: "/Priya Aghera.jpg?height=300&width=300",
      linkedin: "https://www.linkedin.com/in/hetvi-taank/",
      github: "https://github.com/HetviTaank",
      email: "24cs099@charusat.edu.in",
    },
    {
      name: "Dhanya Vala",
      role: "Public Relations Head",
      department: "Computer Science & Engineering",
      year: "1st Year",
      bio: "Connecting our tech community with industry leaders and external opportunities.",
      fullBio: "Dhanya, a 1st Year Computer Science & Engineering student, is passionate about creating opportunities for students to showcase their skills and collaborate on innovative projects. As the Hackathon Coordinator, she is responsible for planning and executing hackathons and coding competitions that challenge participants to think creatively and work together. Dhanya's dedication to fostering a culture of innovation and collaboration within TechGenius has led to the successful organization of several high-profile events that have attracted participants from across the university. Her ability to connect with students and industry professionals alike has been instrumental in securing sponsorships and resources for these events.",
      image: "/Dhanya Vala.jpg?height=300&width=300",
      linkedin: "https://www.linkedin.com/in/hetvi-taank/",
      github: "https://github.com/HetviTaank",
      email: "24cs099@charusat.edu.in",
    },
    {
      name: "Yash Patel",
      role: "Public Relations Head",
      department: "Computer Science & Engineering",
      year: "1st Year",
      bio: "Building external partnerships and enhancing TechGenius's digital presence.",
      fullBio: "Yash Patel, a 1st Year Computer Science & Engineering student, brings enthusiasm and fresh perspectives to TechGenius's public relations efforts. As Public Relations Head, he specializes in building external partnerships with tech companies, educational institutions, and industry professionals. His work in digital marketing and social media strategy has significantly enhanced our online presence and community engagement. Yash's ability to identify collaboration opportunities and his talent for creating compelling content has helped establish TechGenius as a recognized name in the tech community. His dedication to promoting our events and achievements continues to attract new members and valuable partnerships.",
      image: "/Yash Patel.jpg?height=300&width=300",
      linkedin: "https://www.linkedin.com/in/yash-patel/",
      github: "https://github.com/YashPatel",
      email: "24cs099@charusat.edu.in",
    },
    {
      name: "Pia Patel",
      role: "Research & Development Team",
      department: "Computer Science & Engineering",
      year: "3rd Year",
      bio: "Spearheading cutting-edge research projects and exploring emerging technologies.",
      fullBio: "Pia Patel, a 3rd Year Computer Science & Engineering student, leads TechGenius's research and development initiatives with passion and expertise. As a key member of the R&D Team, she focuses on exploring emerging technologies such as artificial intelligence, machine learning, and blockchain to develop innovative solutions for real-world problems. Her research work has contributed to several published papers and successful project implementations that have benefited both the academic community and industry partners. Pia's ability to bridge theoretical knowledge with practical applications has made her an invaluable asset to our organization. Her mentorship of junior students and her commitment to advancing technological frontiers continue to inspire innovation within TechGenius.",
      image: "/Pia Patel.jpg?height=300&width=300",
      linkedin: "https://www.linkedin.com/in/pia-patel/",
      github: "https://github.com/PiaPatel",
      email: "24cs099@charusat.edu.in",
    },
    {
      name: "Tanvi Mehta",
      role: "Research & Development Team",
      department: "Computer Science & Engineering",
      year: "3rd Year",
      bio: "Spearheading cutting-edge research projects and exploring emerging technologies.",
      fullBio: "Tanvi Mehta, a 3rd Year Computer Science & Engineering student, leads TechGenius's research and development initiatives with passion and expertise. As a key member of the R&D Team, she focuses on exploring emerging technologies such as artificial intelligence, machine learning, and blockchain to develop innovative solutions for real-world problems. Her research work has contributed to several published papers and successful project implementations that have benefited both the academic community and industry partners. Tanvi's ability to bridge theoretical knowledge with practical applications has made her an invaluable asset to our organization. Her mentorship of junior students and her commitment to advancing technological frontiers continue to inspire innovation within TechGenius.",
      image: "/Tanvi Mehta.jpg?height=300&width=300",
      linkedin: "https://www.linkedin.com/in/tanvi-mehta/",
      github: "https://github.com/TanviMehta",
      email: "24cs099@charusat.edu.in",
    },
    {
      name: "Khushi Ka.Patel",
      role: "Research & Development Team",
      department: "Computer Science & Engineering",
      year: "2nd Year",
      bio: "Spearheading cutting-edge research projects and exploring emerging technologies.",
      fullBio: "Khushi Ka.Patel, a 2nd Year Computer Science & Engineering student, leads TechGenius's research and development initiatives with passion and expertise. As a key member of the R&D Team, she focuses on exploring emerging technologies such as artificial intelligence, machine learning, and blockchain to develop innovative solutions for real-world problems. Her research work has contributed to several published papers and successful project implementations that have benefited both the academic community and industry partners. Khushi's ability to bridge theoretical knowledge with practical applications has made her an invaluable asset to our organization. Her mentorship of junior students and her commitment to advancing technological frontiers continue to inspire innovation within TechGenius.",
      image: "/Khushi Ka.Patel.jpg?height=300&width=300",
      linkedin: "https://www.linkedin.com/in/khushi-ka-patel/",
      github: "https://github.com/KhushiKaPatel",
      email: "24cs099@charusat.edu.in",
    },
    {
      name: "Parth Oza",
      role: "Social Media Head",
      department: "Computer Science & Engineering",
      year: "2nd Year",
      bio: "Spearheading cutting-edge research projects and exploring emerging technologies.",
      fullBio: "Pia Patel, a 3rd Year Computer Science & Engineering student, leads TechGenius's research and development initiatives with passion and expertise. As a key member of the R&D Team, she focuses on exploring emerging technologies such as artificial intelligence, machine learning, and blockchain to develop innovative solutions for real-world problems. Her research work has contributed to several published papers and successful project implementations that have benefited both the academic community and industry partners. Pia's ability to bridge theoretical knowledge with practical applications has made her an invaluable asset to our organization. Her mentorship of junior students and her commitment to advancing technological frontiers continue to inspire innovation within TechGenius.",
      image: "/Parth Oza.jpg?height=300&width=300",
      linkedin: "https://www.linkedin.com/in/pia-patel/",
      github: "https://github.com/PiaPatel",
      email: "24cs099@charusat.edu.in",
    },
    {
      name: "Mahek Dhebariya",
      role: "Social Media Head",
      department: "Computer Science & Engineering",
      year: "2nd Year",
      bio: "Spearheading cutting-edge research projects and exploring emerging technologies.",
      fullBio: "Mahek Dhebariya, a 2nd Year Computer Science & Engineering student, leads TechGenius's research and development initiatives with passion and expertise. As a key member of the R&D Team, she focuses on exploring emerging technologies such as artificial intelligence, machine learning, and blockchain to develop innovative solutions for real-world problems. Her research work has contributed to several published papers and successful project implementations that have benefited both the academic community and industry partners. Mahek's ability to bridge theoretical knowledge with practical applications has made her an invaluable asset to our organization. Her mentorship of junior students and her commitment to advancing technological frontiers continue to inspire innovation within TechGenius.",
      image: "/Mahek Dhebariya.jpg?height=300&width=300",
      linkedin: "https://www.linkedin.com/in/pia-patel/",
      github: "https://github.com/PiaPatel",
      email: "24cs099@charusat.edu.in",
    },
    {
      name: "Jay Ladva",
      role: "Social Media Head",
      department: "Computer Science & Engineering",
      year: "2nd Year",
      bio: "Spearheading cutting-edge research projects and exploring emerging technologies.",
      fullBio: "Jay Ladva, a 2nd Year Computer Science & Engineering student, leads TechGenius's research and development initiatives with passion and expertise. As a key member of the R&D Team, he focuses on exploring emerging technologies such as artificial intelligence, machine learning, and blockchain to develop innovative solutions for real-world problems. His research work has contributed to several published papers and successful project implementations that have benefited both the academic community and industry partners. Jay's ability to bridge theoretical knowledge with practical applications has made him an invaluable asset to our organization. His mentorship of junior students and his commitment to advancing technological frontiers continue to inspire innovation within TechGenius.",
      image: "/Jay Ladva.jpg?height=300&width=300",
      linkedin: "https://www.linkedin.com/in/pia-patel/",
      github: "https://github.com/PiaPatel",
      email: "24cs099@charusat.edu.in",
    },
    {
      name: "Rudri Kakadiya",
      role: "Social Media Head",
      department: "Computer Science & Engineering",
      year: "1st Year",
      bio: "Spearheading cutting-edge research projects and exploring emerging technologies.",
      fullBio: "Rudri Kakadiya, a 1st Year Computer Science & Engineering student, leads TechGenius's research and development initiatives with passion and expertise. As a key member of the R&D Team, she focuses on exploring emerging technologies such as artificial intelligence, machine learning, and blockchain to develop innovative solutions for real-world problems. Her research work has contributed to several published papers and successful project implementations that have benefited both the academic community and industry partners. Rudri's ability to bridge theoretical knowledge with practical applications has made her an invaluable asset to our organization. Her mentorship of junior students and her commitment to advancing technological frontiers continue to inspire innovation within TechGenius.",
      image: "/Rudri Kakadiya.jpg?height=300&width=300",
      linkedin: "https://www.linkedin.com/in/pia-patel/",
      github: "https://github.com/PiaPatel",
      email: "24cs099@charusat.edu.in",
    },
    {
      name: "Kismat Shah",
      role: "Social Media Head",
      department: "Computer Science & Engineering",
      year: "1st Year",
      bio: "Spearheading cutting-edge research projects and exploring emerging technologies.",
      fullBio: "Kismat Shah, a 1st Year Computer Science & Engineering student, leads TechGenius's research and development initiatives with passion and expertise. As a key member of the R&D Team, she focuses on exploring emerging technologies such as artificial intelligence, machine learning, and blockchain to develop innovative solutions for real-world problems. Her research work has contributed to several published papers and successful project implementations that have benefited both the academic community and industry partners. Kismat's ability to bridge theoretical knowledge with practical applications has made her an invaluable asset to our organization. Her mentorship of junior students and her commitment to advancing technological frontiers continue to inspire innovation within TechGenius.",
      image: "/Kismat Shah.jpg?height=300&width=300",
      linkedin: "https://www.linkedin.com/in/kismat-shah/",
      github: "https://github.com/KismatShah",
      email: "24cs099@charusat.edu.in",
    },
    {
      name: "Shyamganesh Vangapandu",
      role: "Social Media Head",
      department: "Computer Science & Engineering",
      year: "1st Year",
      bio: "Spearheading cutting-edge research projects and exploring emerging technologies.",
      fullBio: "Shyamganesh Vangapandu, a 1st Year Computer Science & Engineering student, leads TechGenius's research and development initiatives with passion and expertise. As a key member of the R&D Team, he focuses on exploring emerging technologies such as artificial intelligence, machine learning, and blockchain to develop innovative solutions for real-world problems. His research work has contributed to several published papers and successful project implementations that have benefited both the academic community and industry partners. Shyamganesh's ability to bridge theoretical knowledge with practical applications has made him an invaluable asset to our organization. His mentorship of junior students and his commitment to advancing technological frontiers continue to inspire innovation within TechGenius.",
      image: "/Shyamganesh Vangapandu.jpg?height=300&width=300",
      linkedin: "https://www.linkedin.com/in/shyamganesh-vangapandu/",
      github: "https://github.com/ShyamganeshVangapandu",
      email: "24cs099@charusat.edu.in",
    },
  ]

  return (
    <section id="committee" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Leadership
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Meet Our Core Committee
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Dedicated leaders driving innovation and fostering a collaborative environment where every member can thrive
            and contribute to our tech community.
          </p>
        </div>

        {/* Committee Grid - All Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {committeeMembers.map((member, index) => (
            <ProfileGlowCard key={index}>
              <CardContent className="p-6">
                {/* Profile Image with MorphingDialog */}
                <MorphingDialog
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 24,
                  }}
                >
                  <div className="relative mb-6">
                    <MorphingDialogTrigger className="block">
                      <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 cursor-pointer hover:scale-110 transition-transform duration-300">
                        <MorphingDialogImage
                          src={member.image || "/placeholder.svg"}
                          alt={`${member.name} - ${member.role}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </MorphingDialogTrigger>
                    <Badge
                      variant="secondary"
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground"
                    >
                      {member.role}
                    </Badge>
                  </div>

                  <MorphingDialogContainer>
                    <MorphingDialogContent className="relative h-auto w-[600px] max-w-[90vw] border border-border bg-background rounded-xl">
                      <ScrollArea className="h-[80vh]" type="scroll">
                        <div className="relative p-8">
                          <div className="flex justify-center py-10">
                            <MorphingDialogImage
                              src={member.image || "/placeholder.svg"}
                              alt={`${member.name} - ${member.role}`}
                              className="h-auto w-[250px] rounded-lg"
                            />
                          </div>
                          <div className="space-y-6 text-center">
                            <div>
                              <MorphingDialogTitle className="text-foreground text-2xl font-bold">
                                {member.name}
                              </MorphingDialogTitle>
                              <MorphingDialogSubtitle className="text-primary text-lg font-medium">
                                {member.role}
                              </MorphingDialogSubtitle>
                              <div className="mt-2 space-y-1">
                                <p className="text-muted-foreground">{member.department}</p>
                                <p className="text-accent">{member.year}</p>
                              </div>
                            </div>

                            <div className="text-left space-y-4">
                              <h4 className="text-lg font-semibold text-foreground">About {member.name.split(' ')[0]}</h4>
                              <p className="text-muted-foreground leading-relaxed">
                                {member.fullBio}
                              </p>
                            </div>

                            {/* Social Links in Modal */}
                            <div className="flex justify-center space-x-4 pt-6">
                              <Button variant="outline" size="sm" className="h-10 w-10 p-0" asChild>
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                  <Linkedin className="h-4 w-4" />
                                  <span className="sr-only">LinkedIn Profile</span>
                                </a>
                              </Button>
                              <Button variant="outline" size="sm" className="h-10 w-10 p-0" asChild>
                                <a href={member.github} target="_blank" rel="noopener noreferrer">
                                  <Github className="h-4 w-4" />
                                  <span className="sr-only">GitHub Profile</span>
                                </a>
                              </Button>
                              <Button variant="outline" size="sm" className="h-10 w-10 p-0" asChild>
                                <a href={`mailto:${member.email}`}>
                                  <Mail className="h-4 w-4" />
                                  <span className="sr-only">Send Email</span>
                                </a>
                              </Button>
                            </div>

                            <div className="pt-6">
                              <Button variant="outline" size="lg" asChild>
                                <a href={`mailto:${member.email}?subject=Hello ${member.name.split(' ')[0]}&body=Hi ${member.name.split(' ')[0]}, I would like to connect with you regarding TechGenius.`}>
                                  Connect with {member.name.split(' ')[0]}
                                </a>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </ScrollArea>
                      <MorphingDialogClose className="text-muted-foreground" />
                    </MorphingDialogContent>
                  </MorphingDialogContainer>
                </MorphingDialog>

                {/* Member Info */}
                <div className="text-center space-y-3">
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">{member.department}</p>
                    <p className="text-sm text-accent">{member.year}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>

                  {/* Social Links on Cards */}
                  <div className="flex justify-center space-x-3 pt-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/50 dark:hover:text-blue-400"
                      asChild
                    >
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn Profile</span>
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 hover:bg-purple-100 hover:text-purple-900 dark:hover:bg-purple-700 dark:hover:text-purple-400"
                      asChild
                    >
                      <a href={member.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub Profile</span>
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/50 dark:hover:text-red-400"
                      asChild
                    >
                      <a href={`mailto:${member.email}`}>
                        <Mail className="h-4 w-4" />
                        <span className="sr-only">Send Email</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </ProfileGlowCard>
          ))}
        </div>

        {/* Join Committee CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 lg:p-12 mt-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Want to be a techie too?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We are the tech collective of passionate Committed Geniuses, a leading management consultancy helping
            countless organizations succeed in their most important and strategic transformations.
          </p>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl mx-auto">
            In our collective, there is always room for more people with that delicious combination of analytical and
            creative strategy.
          </p>
          <PrimaryGlowButton
            size="lg"
            onClick={() => window.open('https://forms.gle/ZaKA57t3o5VX1Qi8A', '_blank')}
          >
            Join Our Community
          </PrimaryGlowButton>
        </div>
      </div>
    </section>
  )
}