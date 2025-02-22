const doctors = [
  {
    id: "dr.-kiran-golla",
    name: "Dr. Kiran Golla",
    designation: "MD & Founder",
    image: "/img/kiran_img.jpg",
    contact: {
      phone: "+91 95502 31862",
      email: "kiran@drkiranssmile.com",
      address: "Brindavan Gardens, Guntur, Andhra Pradesh - 522006",
    },
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    workingHours: [
      { day: "Monday - Friday", time: "8:00 AM - 8:00 PM" },
      { day: "Saturday", time: "9:00 AM - 6:30 PM" },
      { day: "Sunday", time: "Closed (Emergencies Only)" },
    ],
    biography: [
      "Dr. Kiran Golla is the visionary founder of Dr. Kiran&apos;s Smile Group of Dental Hospitals. With over 25 years of experience in dentistry, he has established himself as a leading prosthodontist and a pioneer in pain-free dental care.",
      "He completed his MDS in Prosthodontics from ABC University in 2005 and has since been dedicated to transforming smiles across India and Kuwait. Dr. Kiran is known for his expertise in advanced dental treatments, including dental implants, crowns, and bridges.",
      "Under his leadership, Dr. Kiran&apos;s Smile Group has grown into a trusted name in dental care, with multiple branches across Andhra Pradesh, Telangana, Karnataka, and Kuwait. His commitment to patient satisfaction and innovative dental solutions has earned him the trust of thousands of patients.",
    ],
    education: [
      "MDS in Prosthodontics from ABC University (2005)",
      "MBBS from XYZ College (1999)",
      "Advanced Training in Dental Implants from the International Dental Academy",
      "Certification in Cosmetic Dentistry from the American Academy of Cosmetic Dentistry",
    ],
    achievements: [
      "Pioneered pain-free dental treatments in Andhra Pradesh.",
      "Successfully performed over 10,000 dental implant procedures.",
      "Recognized as 'Best Dentist in Andhra Pradesh' by the Indian Dental Association (2020).",
    ],
  },
  {
    id: "dr.-kavitha-reddy",
    name: "Dr. Kavitha Reddy",
    designation: "Founder & General Dentist",
    image: "/img/kavitha_img.jpg",
    contact: {
      phone: "+91 92464 34447",
      email: "kavitha@drkiranssmile.com",
      address: "Kandukuri Shopping Mall, Ramesh Reddy Nagar, Nellore, Andhra Pradesh - 524003",
    },
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    workingHours: [
      { day: "Monday - Friday", time: "8:00 AM - 8:00 PM" },
      { day: "Saturday", time: "9:00 AM - 6:30 PM" },
      { day: "Sunday", time: "Closed (Emergencies Only)" },
    ],
    biography: [
      "Dr. Kavitha Reddy is a highly experienced general dentist with over two decades of practice. She is one of the founding members of Dr. Kiran&apos;s Smile Group and has played a pivotal role in establishing the hospital's reputation for compassionate care.",
      "She completed her MDS in General Dentistry from DEF University in 2003 and has since been dedicated to providing preventive and restorative dental care. Dr. Kavitha is particularly known for her gentle approach and expertise in treating children and elderly patients.",
      "Her commitment to patient education and preventive dentistry has helped thousands of patients maintain healthy smiles for life.",
    ],
    education: [
      "MDS in General Dentistry from DEF University (2003)",
      "BDS from GHI College (1998)",
      "Certification in Pediatric Dentistry from the Indian Academy of Pediatrics",
      "Advanced Training in Preventive Dentistry from the World Dental Federation",
    ],
    achievements: [
      "Awarded 'Best General Dentist in Nellore' by the Indian Dental Association (2018).",
      "Conducted over 500 community dental health camps.",
      "Recognized for excellence in pediatric dentistry by the Indian Society of Pedodontics.",
    ],
  },
  {
    id: "dr.-manasa-reddy",
    name: "Dr. Manasa Reddy",
    designation: "CEO & Prosthodontist",
    image: "/img/manasa_img.jpg",
    contact: {
      phone: "+91 98765 43210",
      email: "manasa@drkiranssmile.com",
      address: "3rd Floor, Room 301, Dental Hospital, Hyderabad, Telangana - 500072",
    },
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    workingHours: [
      { day: "Monday - Friday", time: "9:00 AM - 7:00 PM" },
      { day: "Saturday", time: "10:00 AM - 5:00 PM" },
      { day: "Sunday", time: "Closed (Emergencies Only)" },
    ],
    biography: [
      "Dr. Manasa Reddy is the CEO of Dr. Kiran&apos;s Smile Group and a highly skilled prosthodontist. With over 15 years of experience, she has been instrumental in expanding the hospital's services to new regions, including Hyderabad and Bengaluru.",
      "She completed her MDS in Prosthodontics from JKL University in 2010 and has since specialized in dental implants, full-mouth rehabilitation, and cosmetic dentistry. Dr. Manasa is known for her meticulous attention to detail and her ability to create natural-looking smiles.",
      "Under her leadership, the hospital has adopted state-of-the-art technology and advanced treatment protocols, ensuring the highest standards of patient care.",
    ],
    education: [
      "MDS in Prosthodontics from JKL University (2010)",
      "BDS from MNO College (2005)",
      "Advanced Training in Full-Mouth Rehabilitation from the International Congress of Oral Implantologists",
      "Certification in Digital Smile Design from the European Society of Cosmetic Dentistry",
    ],
    achievements: [
      "Recognized as 'Best Prosthodontist in Telangana' by the Indian Dental Association (2021).",
      "Successfully performed over 5,000 full-mouth rehabilitation procedures.",
      "Pioneered the use of digital smile design technology in Hyderabad.",
    ],
  },
  {
    id: "dr.-venkatesh",
    name: "Dr. Venkatesh",
    designation: "Orthodontist",
    image: "/img/venkatesh_img.jpg",
    contact: {
      phone: "+91 87654 32109",
      email: "venkatesh@drkiranssmile.com",
      address: "4th Floor, Room 401, Dental Hospital, Bengaluru, Karnataka - 560103",
    },
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    workingHours: [
      { day: "Monday - Friday", time: "10:00 AM - 6:00 PM" },
      { day: "Saturday", time: "10:00 AM - 4:00 PM" },
      { day: "Sunday", time: "Closed (Emergencies Only)" },
    ],
    biography: [
      "Dr. Venkatesh is a highly skilled orthodontist with over a decade of experience in creating beautiful, healthy smiles. He specializes in customized orthodontic treatments, including traditional braces, clear aligners, and lingual braces.",
      "He completed his MDS in Orthodontics from PQR University in 2012 and has since been dedicated to helping patients achieve perfectly aligned teeth and improved oral health. Dr. Venkatesh is known for his patient-friendly approach and his ability to explain complex treatments in simple terms.",
      "His expertise in orthodontics has helped hundreds of patients regain their confidence with stunning smiles.",
    ],
    education: [
      "MDS in Orthodontics from PQR University (2012)",
      "BDS from STU College (2007)",
      "Certification in Clear Aligner Therapy from Invisalign",
      "Advanced Training in Lingual Braces from the World Federation of Orthodontists",
    ],
    achievements: [
      "Awarded 'Best Orthodontist in Karnataka' by the Indian Dental Association (2019).",
      "Successfully treated over 2,000 patients with clear aligners.",
      "Recognized for excellence in lingual braces by the Indian Orthodontic Society.",
    ],
  },
];

export default doctors;