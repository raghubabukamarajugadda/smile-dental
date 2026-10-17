"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  FaTooth,
  FaTeethOpen,
  FaFaceSmile,
  FaStethoscope,
  FaBaby,
  FaCalendarCheck,
  FaCreditCard,
  FaHeadset,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaLocationDot,
  FaArrowRightLong,
} from "react-icons/fa6";
import { LuPlus, LuMinus, LuSparkles } from "react-icons/lu";
import services from "@/data/serviceDetails";
import Header from "@/components/Header/Header";

const svcFaqs = (id) => services.find((s) => s.id === id)?.faqs || [];

const categories = [
  {
    id: "general",
    label: "General Dentistry",
    icon: FaTooth,
    blurb: "Common questions about dental care, oral hygiene and maintaining a healthy smile.",
    faqs: [
      { q: "How often should I visit the dentist?", a: "In general, we recommend a dental check-up every 6 months. Regular visits help detect problems early, keep your teeth and gums healthy, and prevent more complex treatments in the future. However, your dentist may suggest more frequent visits based on your individual oral health needs." },
      { q: "What can I do to keep my teeth healthy?", a: "Brush twice daily with fluoride toothpaste, floss once a day, limit sugary snacks and drinks, and visit your dentist regularly for check-ups and professional cleaning." },
      { q: "Is teeth cleaning painful?", a: "Professional cleaning is generally comfortable. You may feel mild sensitivity if there is heavy tartar buildup or gum inflammation, but it resolves quickly and leaves your teeth feeling fresh." },
      { q: "Why do my gums bleed?", a: "Bleeding gums are usually a sign of gum inflammation caused by plaque buildup. Regular brushing, flossing and a professional cleaning usually resolve it — persistent bleeding should be checked by a dentist." },
      { q: "Can dental problems affect my overall health?", a: "Yes. Poor oral health has been linked to diabetes, heart disease and pregnancy complications. Treating infections and keeping gums healthy supports your overall wellbeing." },
      { q: "At what age should children have their first dental visit?", a: "We recommend a child's first dental visit by their first birthday or when the first tooth appears — early visits build comfort and catch issues before they develop." },
      { q: "How can I prevent cavities?", a: "Brush with fluoride toothpaste, floss daily, reduce sugary and acidic foods, drink plenty of water, and get regular dental check-ups and cleanings." },
      { q: "What should I do in a dental emergency?", a: "For a knocked-out tooth, cracked tooth or severe pain, contact your dentist immediately. Keep a knocked-out tooth moist in milk and get to the clinic within an hour if possible." },
      { q: "Are dental X-rays safe?", a: "Yes, dental X-rays use minimal radiation and are considered very safe. They help detect issues not visible in a standard exam, such as cavities between teeth and bone loss." },
      { q: "Can stained teeth be whitened?", a: "Yes — professional whitening safely lifts most stains. Your dentist will first check whether staining is surface-level or internal and recommend the right option." },
      { q: "What type of toothbrush and toothpaste should I use?", a: "A soft-bristled toothbrush with fluoride toothpaste is recommended for most people. Replace your brush every 3–4 months or sooner if the bristles fray." },
      { q: "How can I manage bad breath?", a: "Brush and floss daily, clean your tongue, stay hydrated and limit strong-smelling foods. Persistent bad breath can signal gum disease or other issues — a check-up will find the cause." },
    ],
  },
  {
    id: "implants",
    label: "Dental Implants",
    icon: FaTeethOpen,
    blurb: "Everything about replacing missing teeth with permanent, natural-looking implants.",
    faqs: [
      ...svcFaqs("svc-implants"),
      { q: "How much does a dental implant cost?", a: "Cost depends on the number of implants, the implant system chosen and whether bone grafting is needed. After your consultation we share a clear, itemised estimate — EMI options are available." },
      { q: "How long do dental implants last?", a: "With good oral hygiene and regular check-ups, implants can last 15–25 years or even a lifetime, making them the most durable tooth-replacement option." },
      { q: "Can I get an implant if I have diabetes or smoke?", a: "Often yes, but these factors affect healing. We evaluate your health during consultation and may coordinate with your physician or recommend a quit plan before placement." },
      { q: "What are the alternatives to implants?", a: "Depending on your case, a dental bridge or a well-fitting denture may be alternatives. We'll compare options honestly so you can choose what suits your health and budget." },
      { q: "Will my implant look natural?", a: "Yes — the crown is custom-shaded and shaped to blend with your neighbouring teeth, so it looks and feels like a natural tooth." },
      { q: "Is there an age limit for implants?", a: "There's no upper age limit for healthy adults. For younger patients, we wait until jaw growth is complete, usually around age 18." },
      { q: "How soon after extraction can I get an implant?", a: "Often 6–12 weeks after extraction once the bone heals. In some cases an implant can be placed immediately at the time of extraction — your scans will tell us what's possible." },
      { q: "What if I don't have enough bone for an implant?", a: "Bone grafting or sinus-lift procedures can rebuild the area in most cases. Our 3D imaging shows exactly how much bone you have before we plan anything." },
    ],
  },
  {
    id: "braces",
    label: "Braces & Aligners",
    icon: FaFaceSmile,
    blurb: "Questions about straightening your smile with braces and clear aligners.",
    faqs: [
      ...svcFaqs("svc-braces"),
      { q: "Am I too old for braces or aligners?", a: "No — healthy teeth can be moved at any age. Many of our orthodontic patients are adults; clear aligners are a popular, discreet option for working professionals." },
      { q: "How long does treatment take?", a: "Most cases take 12–24 months depending on complexity. Minor corrections with clear aligners can finish in as little as 6 months." },
      { q: "What's the difference between braces and clear aligners?", a: "Braces are fixed and work for all case types; clear aligners are removable and nearly invisible but need 20–22 hours of daily wear. We recommend the right option after assessing your bite." },
      { q: "Do braces hurt?", a: "You'll feel mild pressure or soreness for a few days after fitting and each adjustment — it settles quickly and is managed easily with over-the-counter relief." },
      { q: "Will I need a retainer after treatment?", a: "Yes — retainers keep teeth in their new positions. Most patients wear them nightly; skipping them is the most common cause of relapse." },
      { q: "Can I eat normally with braces or aligners?", a: "With aligners, yes — remove them to eat. With braces, avoid very hard or sticky foods that can break brackets; our team gives you a full do's and don'ts list." },
      { q: "How often are orthodontic appointments?", a: "Typically every 4–8 weeks for braces adjustments. Aligner patients need fewer visits — we hand you several sets and review progress periodically." },
      { q: "Will braces affect how I speak or look?", a: "There may be a short adjustment period, especially with aligners. Clear aligners and ceramic braces keep treatment discreet — most people won't notice." },
    ],
  },
  {
    id: "rootcanal",
    label: "Root Canal Treatment",
    icon: FaStethoscope,
    blurb: "What to expect before, during and after painless root canal treatment.",
    faqs: [
      ...svcFaqs("svc-rootcanal"),
      { q: "Is root canal treatment painful?", a: "No — with modern local anaesthesia and rotary techniques, a root canal feels similar to getting a filling. The procedure actually relieves the pain caused by infection." },
      { q: "Why not just extract the tooth?", a: "Saving your natural tooth preserves chewing efficiency and prevents neighbouring teeth from shifting. Extraction means needing a bridge or implant later, which costs more." },
      { q: "Do I need a crown after a root canal?", a: "Usually yes, especially for back teeth — the tooth becomes more brittle after treatment and a crown protects it from fracture." },
      { q: "Can a root canal be done in one sitting?", a: "Many cases can be completed in a single visit. Severely infected teeth may need two sittings to allow the canal to settle — your dentist will advise based on the X-ray." },
      { q: "How successful is root canal treatment?", a: "Success rates are around 90–95%. With a proper crown and good hygiene, a root-canal-treated tooth can last as long as your natural teeth." },
      { q: "What should I expect after the procedure?", a: "Mild tenderness for 2–3 days is normal and settles with prescribed medication. Avoid chewing hard food on that side until the crown is placed." },
      { q: "How do I know if I need a root canal?", a: "Common signs are lingering pain to hot or cold, pain when biting, a darkened tooth, or a pimple-like swelling on the gum. An X-ray confirms whether the nerve is infected." },
      { q: "Can a root canal fail and need retreatment?", a: "Occasionally, yes — if infection persists or the crown leaks. Retreatment or a minor surgical fix (apicoectomy) usually resolves it." },
    ],
  },
  {
    id: "cosmetic",
    label: "Cosmetic Dentistry",
    icon: LuSparkles,
    blurb: "Smile design, veneers, whitening and aesthetic treatments explained.",
    faqs: [
      ...svcFaqs("svc-cosmetic"),
      { q: "What is the difference between veneers and laminates?", a: "Both are thin shells bonded to the front of teeth — veneers typically require slightly more preparation. We recommend the minimal-preparation option that still achieves your result." },
      { q: "How long does teeth whitening last?", a: "Professional whitening typically lasts 1–3 years depending on diet and habits. Occasional touch-up sessions keep the shade fresh." },
      { q: "Can gaps or chipped teeth be fixed without braces?", a: "Yes — composite bonding or veneers can close small gaps and repair chips in one or two visits, without orthodontic treatment." },
      { q: "Will cosmetic work look natural or fake?", a: "Our smile-design process previews the result digitally first. We match shades and proportions to your face so the outcome looks natural, not artificial." },
      { q: "Can a gummy smile be corrected?", a: "Yes — options include laser gum contouring, veneers or orthodontics depending on the cause. A consultation identifies which approach suits you." },
      { q: "How much does a smile makeover cost?", a: "It varies with the number of teeth and treatments involved. After a smile analysis we share a transparent plan with options at different budgets." },
      { q: "Will veneers damage my natural teeth?", a: "Minimal preparation preserves most of your enamel. Done properly by an experienced dentist, veneers are a safe, long-lasting option — typically lasting 10–15 years." },
      { q: "Is there any downtime after cosmetic treatment?", a: "Almost none. Bonding and whitening need no recovery; veneer and smile-design work may cause brief sensitivity for a day or two." },
    ],
  },
  {
    id: "pediatric",
    label: "Pediatric Dentistry",
    icon: FaBaby,
    blurb: "Gentle dental care for children — first visits, habits and treatments.",
    faqs: [
      ...svcFaqs("svc-pediatric"),
      { q: "When should my child first visit the dentist?", a: "By their first birthday or when the first tooth appears. Early visits are short and friendly — they build comfort and catch issues before they develop." },
      { q: "Why treat baby teeth if they fall out anyway?", a: "Baby teeth hold space for adult teeth and are essential for chewing, speech and jaw development. Untreated cavities can cause pain, infection and early tooth loss." },
      { q: "Is fluoride safe for children?", a: "Yes — in the correct amounts. Fluoride varnish and age-appropriate toothpaste protect enamel; we guide you on the right quantity for your child's age." },
      { q: "How do I stop thumb-sucking or pacifier habits?", a: "Most children stop by age 3–4 on their own. If it continues, we use gentle habit-breaking guidance and, if needed, a simple appliance to prevent jaw changes." },
      { q: "My child is scared of the dentist — what do you do?", a: "Our pediatric team uses tell-show-do techniques, a child-friendly operatory and patience to build trust. For anxious children, sedation options are available." },
      { q: "Are dental sealants worth it?", a: "Yes — sealants coat the grooves of back teeth where most childhood cavities start. They're quick, painless and can prevent decay for years." },
      { q: "Do you use sedation for children?", a: "For very anxious children or longer procedures we offer safe, paediatric-appropriate sedation — always discussed with parents beforehand." },
      { q: "When do permanent teeth usually come in?", a: "Typically between ages 6 and 12. Regular reviews let us monitor eruption and spot crowding or bite issues early, when they're easiest to guide." },
    ],
  },
  {
    id: "visits",
    label: "Appointments & Visits",
    icon: FaCalendarCheck,
    blurb: "Booking, rescheduling, first visits and what to bring along.",
    faqs: [
      { q: "How do I book an appointment?", a: "Use our online appointment form, call +91 814978 1447, or message us on WhatsApp. Our team will confirm a convenient slot at your preferred clinic." },
      { q: "Is my online booking a confirmed appointment?", a: "Online requests are provisional — our team contacts you shortly to confirm the exact date, time and clinic." },
      { q: "Can I reschedule or cancel my appointment?", a: "Yes — just call us or message us on WhatsApp and we'll help you reschedule at a convenient time, free of charge." },
      { q: "What should I bring to my first visit?", a: "Bring a valid ID, any previous dental records or X-rays, a list of medications you take, and your insurance details if applicable." },
      { q: "How long does a first consultation take?", a: "A first visit typically takes 30–45 minutes, including examination, any necessary X-rays and a discussion of your treatment plan." },
      { q: "Can I choose a specific dentist or branch?", a: "Yes — mention your preference while booking and we'll do our best to accommodate it at the branch most convenient for you." },
      { q: "Do you handle dental emergencies?", a: "Yes — contact us immediately for urgent issues like severe pain, swelling, broken teeth or trauma, and we'll prioritise your visit." },
      { q: "What are your clinic timings?", a: "Our clinics are generally open Monday to Saturday, 9:00 AM – 8:00 PM, and Sunday 9:00 AM – 2:00 PM. Timings vary slightly by branch." },
      { q: "Is parking available at your clinics?", a: "Most of our branches have parking nearby or on-site. Check your specific branch on the Contact page or ask our team when confirming your slot." },
      { q: "Can I visit without an appointment?", a: "Walk-ins are welcome and we'll fit you in, but booked patients are seen first — we recommend booking ahead to avoid waiting." },
      { q: "Do you offer virtual consultations?", a: "For follow-ups and initial advice we can arrange a phone or WhatsApp video consult. New issues usually need an in-person examination and X-ray." },
      { q: "Will my records transfer between branches?", a: "Yes — patient records are shared across all our clinics, so you can continue treatment at any branch in India or Kuwait." },
    ],
  },
  {
    id: "insurance",
    label: "Insurance & Payments",
    icon: FaCreditCard,
    blurb: "Payment options, insurance support and treatment cost questions.",
    faqs: [
      { q: "What payment methods do you accept?", a: "We accept cash, all major debit and credit cards, and UPI payments at all our clinics." },
      { q: "Do you offer EMI or payment plans?", a: "Yes — flexible EMI options are available for larger treatments like implants, braces and full-mouth rehabilitation. Ask our front desk for details." },
      { q: "Do you accept dental insurance?", a: "We work with major insurance providers and can help you with documentation and claims. Coverage depends on your specific policy — bring your insurance details to your visit." },
      { q: "How much does treatment cost?", a: "Costs depend on the treatment and your individual case. After your consultation we provide a clear, itemised estimate before any work begins — no hidden charges." },
      { q: "Is the first consultation chargeable?", a: "Consultation fees vary by clinic and are often adjusted against your treatment plan. Contact us for the current consultation offer at your nearest branch." },
      { q: "Do you provide treatment estimates in advance?", a: "Always. After diagnosis, you'll receive a written treatment plan with transparent pricing so you can decide comfortably." },
      { q: "Can I get a receipt or invoice for reimbursement?", a: "Yes — every payment comes with a detailed invoice you can submit to your insurance provider or employer for reimbursement." },
      { q: "Are follow-up visits charged separately?", a: "Post-treatment reviews related to your procedure are usually included. Routine check-ups and cleanings are billed separately." },
      { q: "Do treatments come with a warranty?", a: "Yes — implants, crowns and other major work carry a service warranty. Terms vary by treatment and are shared with your treatment plan." },
      { q: "Do you offer any discounts or packages?", a: "We run seasonal offers on cleanings, whitening and family check-ups. Ask our team or check with the front desk for current packages." },
      { q: "Can I pay for treatment in advance?", a: "Yes — advance payment is welcome, and some treatments qualify for a courtesy adjustment when paid in full upfront." },
      { q: "Are international cards accepted at India branches?", a: "Yes — our clinics accept international credit and debit cards, which is convenient for our patients visiting from Kuwait and abroad." },
    ],
  },
];

const exploreServices = [
  { label: "Dental Implants", img: "/img/dental-implants.jpg", href: "/service-details?service=svc-implants" },
  { label: "Braces & Aligners", img: "/img/braces-aligners.jpg", href: "/service-details?service=svc-braces" },
  { label: "Root Canal Treatment", img: "/img/root-canal-treatment.jpg", href: "/service-details?service=svc-rootcanal" },
  { label: "Cosmetic Dentistry", img: "/img/cosmetic-dentistry.jpg", href: "/service-details?service=svc-cosmetic" },
  { label: "Pediatric Dentistry", img: "/img/pediatric-dentistry.jpg", href: "/service-details?service=svc-pediatric" },
  { label: "Crowns & Bridges", img: "/img/crowns-bridges.jpg", href: "/service-details?service=svc-crowns" },
];

export default function FaqClient() {
  const [active, setActive] = useState("general");
  const [open, setOpen] = useState(0);
  const listRef = useRef(null);

  const category = categories.find((c) => c.id === active);
  const CatIcon = category.icon;

  const pick = (id) => {
    setActive(id);
    setOpen(0);
    listRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  return (
    <div className="sh-faqpage">
      <Header />

      {/* Hero */}
      <section className="sh-sd-hero">
        <div className="sh-sd-hero__frame">
          <div
            className="sh-sd-hero__bg"
            style={{ backgroundImage: "url(/img/faq-hero.jpg)" }}
            role="img"
            aria-label="Dentist consulting a patient"
          />
          <div className="sh-container sh-sd-hero__inner">
            <nav className="sh-about-hero__crumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>&gt;</span>
              <strong>FAQs</strong>
            </nav>
            <div className="sh-sd-hero__text">
              <span className="sh-appt__eyebrow">FAQs</span>
              <h1>
                Frequently <span>Asked Questions</span>
              </h1>
              <p>
                Find answers to common questions about our treatments,
                procedures, appointments, and dental care. If you don&apos;t
                find what you&apos;re looking for, our team is always here to
                help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category pills */}
      <section className="sh-faqpage__cats">
        <div className="sh-container">
          <div className="sh-faqpage__cat-row">
            {categories.map(({ id, label, icon: Icon, faqs }) => (
              <button
                type="button"
                key={id}
                className={`sh-faqpage__cat${active === id ? " is-active" : ""}`}
                onClick={() => pick(id)}
              >
                <span className="sh-faqpage__cat-ic">
                  <Icon />
                </span>
                <span className="sh-faqpage__cat-name">{label}</span>
                <span className="sh-faqpage__cat-count">
                  {faqs.length} Questions
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ list + sidebar */}
      <section className="sh-faqpage__main">
        <div className="sh-container">
          <div className="sh-faqpage__grid">
            <div className="sh-faqpage__card" ref={listRef}>
              <div className="sh-faqpage__card-head">
                <span className="sh-faqpage__card-ic">
                  <CatIcon />
                </span>
                <div>
                  <h2>{category.label} FAQs</h2>
                  <p>{category.blurb}</p>
                </div>
              </div>
              <div className="sh-faqpage__list">
                {category.faqs.map((f, i) => (
                  <div
                    className={`sh-faqpage__item${open === i ? " is-open" : ""}`}
                    key={f.q}
                  >
                    <button
                      type="button"
                      className="sh-faqpage__q"
                      onClick={() => setOpen(open === i ? -1 : i)}
                      aria-expanded={open === i}
                    >
                      <span>{f.q}</span>
                      {open === i ? <LuMinus /> : <LuPlus />}
                    </button>
                    <div className="sh-faqpage__a">
                      <p>{f.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="sh-faqpage__aside">
              <div className="sh-sd-card sh-faqpage__help">
                <div className="sh-faqpage__help-head">
                  <span className="sh-faqpage__help-ic">
                    <FaHeadset />
                  </span>
                  <div>
                    <h3>Need Immediate Help?</h3>
                    <p>
                      Our team is here to answer your questions and guide you
                      with the right treatment.
                    </p>
                  </div>
                </div>
                <a href="tel:+918149781447" className="sh-faqpage__help-row">
                  <span className="sh-faqpage__help-ric sh-faqpage__help-ric--blue">
                    <FaPhone />
                  </span>
                  <span>
                    <strong>+91 814978 1447</strong>
                    <small>Call us for quick assistance</small>
                  </span>
                </a>
                <a
                  href="https://wa.me/918149781447"
                  target="_blank"
                  rel="noreferrer"
                  className="sh-faqpage__help-row"
                >
                  <span className="sh-faqpage__help-ric sh-faqpage__help-ric--green">
                    <FaWhatsapp />
                  </span>
                  <span>
                    <strong>Chat on WhatsApp</strong>
                    <small>Get instant responses</small>
                  </span>
                </a>
                <a
                  href="mailto:contact@drkiranssmilegroup.com"
                  className="sh-faqpage__help-row"
                >
                  <span className="sh-faqpage__help-ric sh-faqpage__help-ric--blue">
                    <FaEnvelope />
                  </span>
                  <span>
                    <strong>contact@drkiranssmilegroup.com</strong>
                    <small>We&apos;ll get back to you soon</small>
                  </span>
                </a>
                <Link href="/contact" className="sh-faqpage__help-row">
                  <span className="sh-faqpage__help-ric sh-faqpage__help-ric--blue">
                    <FaLocationDot />
                  </span>
                  <span>
                    <strong>Visit Our Clinics</strong>
                    <small>Find a clinic near you</small>
                  </span>
                </Link>
              </div>

              <div className="sh-sd-card sh-faqpage__more">
                <h3>
                  <span className="sh-faqpage__more-ic">
                    <FaCalendarCheck />
                  </span>
                  Still Have Questions?
                </h3>
                <p>
                  Book a consultation with our experienced dentists to get
                  personalised advice for your smile.
                </p>
                <Link href="/appointment" className="sh-faqpage__more-btn">
                  <FaCalendarCheck /> Book an Appointment{" "}
                  <FaArrowRightLong />
                </Link>
                <img
                  src="/img/help-coordinator.jpg"
                  alt="Care coordinator on a call"
                  className="sh-faqpage__more-img"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Explore by service */}
      <section className="sh-faqpage__explore">
        <div className="sh-container">
          <div className="sh-faqpage__explore-head">
            <h2>Explore FAQs by Dental Service</h2>
            <p>Find detailed answers specific to each treatment.</p>
          </div>
          <div className="sh-faqpage__explore-grid">
            {exploreServices.map((s) => (
              <Link href={s.href} className="sh-faqpage__svc" key={s.label}>
                <img src={s.img} alt={s.label} />
                <div className="sh-faqpage__svc-row">
                  <span>{s.label}</span>
                  <FaArrowRightLong />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
