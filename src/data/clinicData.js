const clinicData = {
  clinicName: "Smile Craft Dental Clinic",
  tagline: "Where Every Smile Gets the Care It Deserves",
  description: "A modern multi-speciality dental clinic offering world-class treatment with a gentle, personalized approach.",

  logo: "/assets/logo.png",
  doctorImage: "/assets/doctor.png",
  doctorPatientImage: "/assets/doctor-patient.png",

  doctorName: "Dr. Abhijit Mahata",
  doctorCredentials: "BDS, MDS — Prosthodontics",
  doctorYears: 15,
  doctorBio: "With over 15 years of experience, Dr. Mahata specializes in advanced restorative and cosmetic dentistry. Committed to pain-free, patient-first dental care.",

  phone: "+919831753998",
  whatsapp: "919831753998",
  email: "smilecraft78@gmail.com",
  address: "CE 78, Salt Lake Rd, Sector 1, Bidhannagar, Kolkata 700064",
  area: "Salt Lake",
  city: "Kolkata",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0!2d88.39!3d22.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM0JzQ4LjAiTiA4OMKwMjMnMjQuMCJF!5e0!3m2!1sen!2sin!4v1",

  googleRating: 4.8,
  googleReviewCount: 492,

  workingHours: [
    { days: "Monday – Saturday", time: "10:00 AM – 7:00 PM" },
    { days: "Sunday", time: "Closed" }
  ],

  stats: [
    { value: "5000+", label: "Happy Patients" },
    { value: "15+",   label: "Years Experience" },
    { value: "5+",    label: "Specialist Doctors" }
  ],

  services: [
    { name: "Root Canal Treatment", description: "Painless, modern root canal therapy to save your natural tooth.", icon: "Crosshair", image: "/assets/service-root-canal.png" },
    { name: "Dental Implants", description: "Permanent tooth replacement with titanium implants.", icon: "Pin", image: "/assets/service-implants.png" },
    { name: "Teeth Whitening", description: "Professional whitening for a brighter, confident smile.", icon: "Sparkles", image: "/assets/service-whitening.png" },
    { name: "Cosmetic Dentistry", description: "Veneers, bonding, and complete smile makeovers.", icon: "Smile", image: "/assets/service-cosmetic.png" },
    { name: "Braces & Aligners", description: "Orthodontic solutions for perfectly aligned teeth.", icon: "AlignCenter", image: "/assets/service-braces.png" },
    { name: "Dental Fillings", description: "Tooth-colored fillings that blend naturally.", icon: "Shield", image: "/assets/icon-dental-fillings.png" },
    { name: "Crowns & Bridges", description: "Restore damaged or missing teeth with durable crowns.", icon: "Crown", image: "/assets/icon-crowns-bridges.png" },
    { name: "Teeth Cleaning", description: "Deep scaling and polishing for healthy gums.", icon: "Droplets", image: "/assets/icon-teeth-cleaning.png" }
  ],

  reviews: [
    { name: "Sabyasachi", text: "A homely place where any dental issue gets resolved. Dr. Mahata and team are extremely professional.", rating: 5, image: "/assets/patient-sabyasachi.png" },
    { name: "Sourav Jain", text: "One of the best places for dental work. Been coming here for 20 years and never disappointed.", rating: 5, image: "/assets/patient-sourav.png" },
    { name: "Mala Das", text: "My entire family gets treatment here. Quality is great, staff is cordial. Highly recommended!", rating: 5, image: "/assets/patient-mala.png" }
  ],

  trustPoints: [
    { title: "Experienced Doctors", description: "Skilled specialists with decades of combined expertise", icon: "Award" },
    { title: "Modern Technology", description: "Latest equipment for precise, comfortable treatments", icon: "Cpu" },
    { title: "Personalized Care", description: "Treatment plans tailored to your unique needs", icon: "Heart" },
    { title: "Safe & Hygienic", description: "Strict sterilization protocols for your safety", icon: "ShieldCheck" }
  ]
};

export default clinicData;
