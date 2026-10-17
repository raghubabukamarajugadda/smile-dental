"use client";

import { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  FaCalendarCheck,
  FaHospital,
  FaEarthAsia,
  FaPhone,
  FaWhatsapp,
  FaUser,
  FaEnvelope,
  FaGlobe,
  FaLocationDot,
  FaTooth,
  FaClock,
  FaUserDoctor,
  FaPeopleGroup,
} from "react-icons/fa6";
import {
  LuPlus,
  LuMinus,
  LuSend,
  LuMapPin,
  LuChevronLeft,
  LuChevronRight,
} from "react-icons/lu";
import services from "@/data/serviceDetails";
import Header from "@/components/Header/Header";

const clinics = [
  "Guntur - Brindavan Gardens",
  "Nellore - Ramesh Reddy Nagar",
  "Hyderabad - Kukatpally",
  "Bengaluru - Bellandur",
  "Kuwait - Hawally Poly Clinic",
];

const timeSlots = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
];

const branches = [
  { city: "Guntur", state: "Andhra Pradesh", img: "/img/branch-guntur.jpg" },
  { city: "Nellore", state: "Andhra Pradesh", img: "/img/branch-nellore.jpg" },
  { city: "Kukatpally", state: "Hyderabad, Telangana", img: "/img/branch-kukatpally.jpg" },
  { city: "Bachupally", state: "Hyderabad, Telangana", img: "/img/branch-bachupally.jpg" },
  { city: "Thubrahalli", state: "Bengaluru, Karnataka", img: "/img/branch-bengaluru.jpg" },
  { city: "Bellandur", state: "Bengaluru, Karnataka", img: "/img/branch-bellandur.jpg" },
  { city: "Kuwait", state: "Kuwait", img: "/img/branch-kuwait.jpg" },
];

const features = [
  {
    icon: FaUserDoctor,
    title: "Experienced Dental Team",
    text: "Skilled and compassionate specialists in implant dentistry, orthodontics and all areas of dental care.",
  },
  {
    icon: FaLocationDot,
    title: "Multiple Clinic Locations",
    text: "Conveniently located clinics across India and Kuwait for easy access to quality dental care.",
  },
  {
    icon: FaPeopleGroup,
    title: "Care for All Ages",
    text: "From children to seniors, we provide personalised dental care for every stage of life.",
  },
];

const faqs = [
  {
    q: "When will my appointment be confirmed?",
    a: "Our team will contact you to confirm your appointment.",
  },
  {
    q: "Can I request a specific dentist?",
    a: "Yes, you can mention your preference and we'll do our best to accommodate it.",
  },
  {
    q: "What if I need urgent dental care?",
    a: "Please contact our team and we'll guide you on the next steps.",
  },
  {
    q: "Can I reschedule or cancel my appointment?",
    a: "Yes — just call us or message us on WhatsApp and we'll help you reschedule at a convenient time.",
  },
];

const heroStats = [
  { icon: FaCalendarCheck, label: "Since 1999" },
  { icon: FaHospital, label: "8+ Clinics" },
  { icon: FaEarthAsia, label: "India & Kuwait" },
];

export default function AppointmentClient() {
  const [open, setOpen] = useState(0);
  const [sent, setSent] = useState(false);

  return (
    <div className="sh-appt-page">
      <Header />

      {/* Hero */}
      <section className="sh-sd-hero">
        <div className="sh-sd-hero__frame">
          <div
            className="sh-sd-hero__bg"
            style={{ backgroundImage: "url(/img/appt-hero.jpg)" }}
            role="img"
            aria-label="Dentist consulting a patient"
          />
          <div className="sh-container sh-sd-hero__inner">
            <nav className="sh-about-hero__crumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>&gt;</span>
              <strong>Book Appointment</strong>
            </nav>
            <div className="sh-sd-hero__text">
              <span className="sh-appt__eyebrow">Your Smile Starts Here</span>
              <h1>Let&apos;s Plan Your Visit</h1>
              <p>
                Tell us a little about your dental needs. Our team will help you
                find the right clinic and appointment time.
              </p>
              <div className="sh-appt__pills">
                {heroStats.map(({ icon: Icon, label }) => (
                  <span className="sh-appt__pill" key={label}>
                    <Icon /> {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="sh-appt">
        <div className="sh-container">
          <div className="sh-appt__grid">
            <div className="sh-appt__form-card">
              <h2>Book an Appointment</h2>
              <p className="sh-appt__sub">
                Share your details and our team will contact you to confirm your
                visit.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="sh-appt__fields">
                  <label className="sh-appt__field">
                    <span>
                      <FaUser /> Full Name *
                    </span>
                    <input type="text" name="name" placeholder="Enter your name" required />
                  </label>
                  <label className="sh-appt__field">
                    <span>
                      <FaPhone /> Phone Number *
                    </span>
                    <div className="sh-appt__phone">
                      <span className="sh-appt__cc">+91</span>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Enter phone number"
                        required
                      />
                    </div>
                  </label>
                  <label className="sh-appt__field">
                    <span>
                      <FaEnvelope /> Email Address (Optional)
                    </span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                    />
                  </label>
                  <label className="sh-appt__field">
                    <span>
                      <FaGlobe /> Preferred Country/Region *
                    </span>
                    <select name="region" required defaultValue="">
                      <option value="" disabled>
                        Select Country/Region
                      </option>
                      <option>Andhra Pradesh</option>
                      <option>Telangana</option>
                      <option>Karnataka</option>
                      <option>Kuwait</option>
                    </select>
                  </label>
                  <label className="sh-appt__field">
                    <span>
                      <FaLocationDot /> Select Clinic/Branch *
                    </span>
                    <select name="clinic" required defaultValue="">
                      <option value="" disabled>
                        Select Clinic/Branch
                      </option>
                      {clinics.map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </label>
                  <label className="sh-appt__field">
                    <span>
                      <FaTooth /> Dental Service *
                    </span>
                    <select name="service" required defaultValue="">
                      <option value="" disabled>
                        Select Service
                      </option>
                      {services.map((s) => (
                        <option key={s.id}>{s.title}</option>
                      ))}
                    </select>
                  </label>
                  <label className="sh-appt__field sh-appt__field--half">
                    <span>
                      <FaCalendarCheck /> Preferred Date *
                    </span>
                    <input type="date" name="date" required />
                  </label>
                  <label className="sh-appt__field sh-appt__field--half">
                    <span>
                      <FaClock /> Preferred Time *
                    </span>
                    <select name="time" required defaultValue="">
                      <option value="" disabled>
                        Select Time
                      </option>
                      {timeSlots.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </label>
                  <label className="sh-appt__field sh-appt__field--full">
                    <span>
                      Anything you&apos;d like us to know? (Optional)
                    </span>
                    <textarea
                      name="notes"
                      rows={3}
                      placeholder="e.g. specific concerns, previous treatment, etc."
                    />
                  </label>
                </div>
                <button type="submit" className="sh-appt__submit">
                  <FaCalendarCheck /> Request Appointment{" "}
                  <FaArrowRightLong />
                </button>
                <div className="sh-appt__notes">
                  <span>
                    Your details are used only to help arrange your appointment.
                  </span>
                  <span>
                    <strong>Please note:</strong> This is a request, not a
                    confirmed appointment. Our team will contact you shortly to
                    confirm the details.
                  </span>
                </div>
                {sent && (
                  <p className="sh-appt__sent">
                    <LuSend /> Thank you! Your request has been received — our
                    team will contact you shortly.
                  </p>
                )}
              </form>
            </div>

            <aside className="sh-appt__aside">
              <div className="sh-sd-card sh-sd-help">
                <div className="sh-sd-help__media">
                  <img
                    src="/img/help-coordinator.jpg"
                    alt="Smile Dental care coordinator"
                  />
                  <div className="sh-sd-help__overlay">
                    <h3>Need help choosing?</h3>
                    <p>
                      Not sure which treatment you need? We&apos;ll help guide
                      you.
                    </p>
                  </div>
                </div>
                <a href="tel:+918149781447" className="sh-sd-help__call">
                  <FaPhone /> +91 814978 1447
                </a>
                <a
                  href="https://wa.me/918149781447"
                  target="_blank"
                  rel="noreferrer"
                  className="sh-sd-help__wa"
                >
                  <FaWhatsapp /> Chat on WhatsApp
                </a>
                <div className="sh-sd-help__steps">
                  <h4>What happens next?</h4>
                  <div className="sh-sd-help__step">
                    <span>1</span> Send your request
                  </div>
                  <div className="sh-sd-help__step">
                    <span>2</span> Our team contacts you
                  </div>
                  <div className="sh-sd-help__step">
                    <span>3</span> Confirm your visit
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="sh-appt__features">
        <div className="sh-container">
          <div className="sh-appt__feature-grid">
            {features.map(({ icon: Icon, title, text }) => (
              <div className="sh-appt__feature" key={title}>
                <span className="sh-appt__feature-ic">
                  <Icon />
                </span>
                <div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branches */}
      <section className="sh-branches">
        <div className="sh-container">
          <div className="sh-sec-head">
            <div className="sh-sec-head__text">
              <h2>
                <LuMapPin className="sh-sec-head__pin" /> Our Branches
              </h2>
              <p>
                With <em>8+ modern clinics</em> across{" "}
                <strong>Andhra Pradesh, Telangana, Karnataka and Kuwait</strong>
                , expert dental care is always <em>close to you</em>.
              </p>
            </div>
            <Link href="/contact" className="sh-sec-head__link">
              View All Branches <FaArrowRightLong />
            </Link>
          </div>

          <div className="sh-branches__slider">
            <button
              type="button"
              className="sh-services__nav sh-branches__nav sh-branches__nav--prev"
              aria-label="Previous branches"
            >
              <LuChevronLeft />
            </button>
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: ".sh-branches__nav--prev",
                nextEl: ".sh-branches__nav--next",
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop
              spaceBetween={14}
              slidesPerView={1}
              breakpoints={{
                560: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
                1400: { slidesPerView: 5 },
              }}
            >
              {branches.map((b) => (
                <SwiperSlide key={b.city}>
                  <div className="sh-branch-card">
                    <div className="sh-branch-card__media">
                      <img src={b.img} alt={`${b.city} branch`} />
                      <span className="sh-branch-card__pin">
                        <LuMapPin />
                      </span>
                    </div>
                    <div className="sh-branch-card__body">
                      <h4>{b.city}</h4>
                      <span>{b.state}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              type="button"
              className="sh-services__nav sh-branches__nav sh-branches__nav--next"
              aria-label="Next branches"
            >
              <LuChevronRight />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sh-appt__faq">
        <div className="sh-container">
          <div className="sh-sd-faqhead">
            <h2 className="sh-sd-h2">Frequently Asked Questions</h2>
            <span>
              Have more questions? <Link href="/contact">Contact Us</Link>
            </span>
          </div>
          <div className="sh-sd-faq">
            {faqs.map((f, i) => (
              <div
                className={`sh-faq__item${open === i ? " is-open" : ""}`}
                key={f.q}
              >
                <button
                  type="button"
                  className="sh-faq__q"
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}
                >
                  <span>{f.q}</span>
                  {open === i ? <LuMinus /> : <LuPlus />}
                </button>
                <div className="sh-faq__a">
                  <p>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sh-svc-banner">
        <div className="sh-container">
          <div className="sh-svc-banner__card">
            <div>
              <h2>We&apos;re here to help you smile with confidence.</h2>
              <p>
                Get in touch with our team for any questions or assistance.
              </p>
            </div>
            <Link href="/contact" className="sh-svc-banner__btn">
              Contact Our Team
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
