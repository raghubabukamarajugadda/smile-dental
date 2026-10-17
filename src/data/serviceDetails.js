import {
  FaTooth,
  FaFaceSmile,
  FaTeethOpen,
  FaXRay,
  FaUserDoctor,
  FaClipboardCheck,
  FaShieldHalved,
  FaCalendarCheck,
  FaChild,
  FaBone,
  FaMicroscope,
  FaFaceSmileBeam,
  FaTeeth,
  FaHandHoldingMedical,
  FaHeartPulse,
  FaMagnifyingGlass,
} from "react-icons/fa6";

// Reusable image pool (generated FLUX images already in public/img)
const IMG = {
  implants: "dental-implants.jpg",
  braces: "braces-aligners.jpg",
  rootcanal: "root-canal-treatment.jpg",
  cleaning: "teeth-cleaning-scaling.jpg",
  cosmetic: "cosmetic-dentistry.jpg",
  pediatric: "pediatric-dentistry.jpg",
  crowns: "crowns-bridges.jpg",
  gum: "gum-treatment.jpg",
  dentures: "dentures.jpg",
  wisdom: "wisdom-tooth-removal.jpg",
  xray: "digital-xray-diagnostics.jpg",
  rehab: "full-mouth-rehabilitation.jpg",
  consult: "j-consult.jpg",
  plan: "j-plan.jpg",
  discuss: "j-discuss.jpg",
  treatment: "j-treatment.jpg",
  recovery: "j-recovery.jpg",
  home: "j-home.jpg",
  lab: "j-lab.jpg",
  align: "j-align.jpg",
  surgery: "j-surgery.jpg",
  shade: "j-shade.jpg",
};

const services = [
  {
    id: "svc-implants",
    chip: "DENTAL IMPLANTS",
    title: "Dental Implants",
    tagline: "Restore Your Smile with Confidence",
    intro:
      "A reliable treatment option for replacing missing teeth, planned around your oral health and individual needs.",
    image: IMG.implants,
    aboutTitle: "What Are Dental Implants?",
    about:
      "Dental implants are a modern and long-lasting solution for replacing missing teeth. A titanium post is placed in the jawbone, which acts as a strong foundation for a custom-made crown, bridge, or denture. Implants look, feel and function like natural teeth — helping you smile, eat and speak with confidence.",
    options: [
      { icon: FaTooth, title: "One or more missing teeth", text: "To replace a single tooth or multiple teeth." },
      { icon: FaTeethOpen, title: "Difficulty chewing", text: "When missing teeth make it hard to eat comfortably." },
      { icon: FaBone, title: "Loose or unstable dentures", text: "For a more stable and comfortable alternative." },
      { icon: FaFaceSmileBeam, title: "Seeking a fixed solution", text: "For a natural-looking, long-term solution." },
    ],
    journey: [
      { img: IMG.consult, title: "Consultation & Assessment", text: "We evaluate your oral health, medical history and discuss your goals." },
      { img: IMG.plan, title: "Digital Imaging & Planning", text: "Advanced imaging helps us plan the treatment for accurate, predictable results." },
      { img: IMG.surgery, title: "Implant Placement", text: "The titanium implant is placed in the jawbone under local anaesthesia." },
      { img: IMG.recovery, title: "Restoration & Follow-up", text: "A custom crown or bridge is placed after healing, followed by regular check-ups." },
    ],
    benefits: [
      { icon: FaFaceSmile, title: "Natural-Looking Restoration", text: "Designed to match your natural teeth for a confident smile." },
      { icon: FaTeethOpen, title: "Support for Chewing Function", text: "Helps you eat comfortably and maintain a balanced diet." },
      { icon: FaShieldHalved, title: "Individual Treatment Planning", text: "Tailored to your oral health needs and long-term goals." },
    ],
    faqs: [
      { q: "Are implants suitable for everyone?", a: "Most healthy adults are candidates. We assess bone density, gum health and medical history during your consultation to confirm suitability." },
      { q: "Is the procedure painful?", a: "Implant placement is done under local anaesthesia and is generally comfortable. Mild soreness for a few days is normal and managed with medication." },
      { q: "How long does treatment take?", a: "Typically 3–6 months including healing time for the implant to fuse with the bone, though some cases qualify for faster protocols." },
      { q: "How do I care for an implant?", a: "Brush and floss normally, attend regular check-ups, and avoid smoking — with good care, implants can last decades." },
    ],
  },
  {
    id: "svc-braces",
    chip: "BRACES & ALIGNERS",
    title: "Braces & Aligners",
    tagline: "Straighten Your Smile, Boost Your Confidence",
    intro:
      "Modern orthodontic options to correct alignment, spacing and bite — from classic braces to nearly invisible clear aligners.",
    image: IMG.braces,
    aboutTitle: "What Are Braces & Aligners?",
    about:
      "Orthodontic treatment gently moves teeth into their ideal position over time. Metal braces use brackets and wires for precise control, while clear aligners are removable, nearly invisible trays changed every couple of weeks. Both deliver a straighter smile and a healthier bite.",
    options: [
      { icon: FaTeeth, title: "Crooked or crowded teeth", text: "When teeth overlap, twist or sit unevenly." },
      { icon: FaTeethOpen, title: "Gaps between teeth", text: "To close unwanted spacing for a uniform smile." },
      { icon: FaFaceSmile, title: "Bite problems", text: "Overbite, underbite or crossbite corrections." },
      { icon: FaFaceSmileBeam, title: "Discreet treatment", text: "Clear aligners for a nearly invisible option." },
    ],
    journey: [
      { img: IMG.consult, title: "Orthodontic Consultation", text: "We examine your bite, discuss goals and recommend braces or aligners." },
      { img: IMG.plan, title: "Records & Digital Planning", text: "X-rays, photos and scans map out your tooth movement step by step." },
      { img: IMG.align, title: "Active Treatment", text: "Braces fitted or aligner series delivered, with periodic reviews." },
      { img: IMG.recovery, title: "Retention & Smile Reveal", text: "Teeth aligned, retainers provided to keep your new smile stable." },
    ],
    benefits: [
      { icon: FaFaceSmile, title: "Straighter, Confident Smile", text: "Aligned teeth improve appearance and self-esteem." },
      { icon: FaTeethOpen, title: "Healthier Bite & Cleaning", text: "Aligned teeth are easier to clean and chew with." },
      { icon: FaShieldHalved, title: "Options for Every Age", text: "Metal, ceramic braces or clear aligners to suit your lifestyle." },
    ],
    faqs: [
      { q: "How long does orthodontic treatment take?", a: "Typically 12–24 months depending on complexity. Minor corrections with aligners can finish in 6–9 months." },
      { q: "Do braces hurt?", a: "You may feel pressure or soreness for a few days after fitting and adjustments — it fades quickly and is manageable." },
      { q: "Are aligners as effective as braces?", a: "For most mild-to-moderate cases, yes. Complex bite corrections may still be better served by braces — we'll advise honestly." },
      { q: "Can adults get braces or aligners?", a: "Absolutely — a large share of our orthodontic patients are adults. It's never too late for a straighter smile." },
    ],
  },
  {
    id: "svc-rootcanal",
    chip: "ROOT CANAL TREATMENT",
    title: "Root Canal Treatment",
    tagline: "Save Your Natural Tooth, Painlessly",
    intro:
      "Modern, comfortable root canal therapy to remove infection, relieve pain and preserve your natural tooth.",
    image: IMG.rootcanal,
    aboutTitle: "What Is Root Canal Treatment?",
    about:
      "When decay or injury reaches the inner pulp of a tooth, root canal treatment removes the infected tissue, disinfects the canal and seals it — saving the tooth from extraction. With modern rotary instruments and anaesthesia, the procedure is routine and comfortable.",
    options: [
      { icon: FaHeartPulse, title: "Severe toothache", text: "Persistent or throbbing pain, especially at night." },
      { icon: FaTeethOpen, title: "Sensitivity to hot & cold", text: "Lingering sensitivity that doesn't fade quickly." },
      { icon: FaTooth, title: "Deep decay or cavity", text: "Decay reaching close to the tooth's nerve." },
      { icon: FaShieldHalved, title: "Swollen or tender gums", text: "A pimple-like bump or swelling near a tooth." },
    ],
    journey: [
      { img: IMG.plan, title: "Diagnosis & X-Ray", text: "We confirm infection extent with a digital X-ray and clinical tests." },
      { img: IMG.treatment, title: "Anaesthesia & Isolation", text: "The tooth is numbed fully and isolated with a rubber dam." },
      { img: IMG.rootcanal, title: "Cleaning & Filling", text: "Infected pulp removed, canals cleaned, shaped and sealed." },
      { img: IMG.crowns, title: "Crown Protection", text: "A crown is usually placed to strengthen the treated tooth." },
    ],
    benefits: [
      { icon: FaTooth, title: "Saves Your Natural Tooth", text: "Avoids extraction and keeps your natural bite intact." },
      { icon: FaHeartPulse, title: "Immediate Pain Relief", text: "Removes the infection causing the pain at its source." },
      { icon: FaShieldHalved, title: "Long-Lasting Result", text: "A crowned root-canal tooth can serve you for many years." },
    ],
    faqs: [
      { q: "Is a root canal painful?", a: "With modern anaesthesia, the procedure feels similar to a routine filling. Most patients are surprised how comfortable it is." },
      { q: "How many visits are needed?", a: "Many cases finish in a single sitting; complex or infected teeth may need two visits." },
      { q: "Do I need a crown after RCT?", a: "Usually yes for back teeth — the crown protects the tooth from fracture and restores full function." },
      { q: "What are alternatives to RCT?", a: "Extraction is the only alternative, followed by an implant or bridge — which costs more and loses your natural tooth." },
    ],
  },
  {
    id: "svc-cleaning",
    chip: "TEETH CLEANING & SCALING",
    title: "Teeth Cleaning & Scaling",
    tagline: "For Healthy Gums & Fresh Breath",
    intro:
      "Professional cleaning that removes plaque, tartar and stains — the foundation of a healthy smile.",
    image: IMG.cleaning,
    aboutTitle: "What Is Cleaning & Scaling?",
    about:
      "Even with good brushing, plaque hardens into tartar that only professional instruments can remove. Ultrasonic scaling cleans above and below the gumline, followed by polishing that leaves teeth smooth and bright. It's quick, painless and prevents gum disease.",
    options: [
      { icon: FaTeethOpen, title: "Bleeding gums", text: "Gums that bleed while brushing or flossing." },
      { icon: FaFaceSmile, title: "Bad breath", text: "Persistent odour often caused by bacterial buildup." },
      { icon: FaTooth, title: "Tartar & stains", text: "Yellow-brown deposits and tea/coffee staining." },
      { icon: FaCalendarCheck, title: "Routine maintenance", text: "Recommended every 6 months for everyone." },
    ],
    journey: [
      { img: IMG.consult, title: "Oral Examination", text: "We check gum health, pocket depth and plaque levels first." },
      { img: IMG.cleaning, title: "Ultrasonic Scaling", text: "Gentle ultrasonic tips remove tartar above and below the gumline." },
      { img: IMG.treatment, title: "Polishing", text: "A polishing paste smooths the tooth surface and lifts stains." },
      { img: IMG.home, title: "Home-Care Guidance", text: "Personalised brushing and flossing tips to keep results lasting." },
    ],
    benefits: [
      { icon: FaFaceSmileBeam, title: "Fresher Breath", text: "Removing bacteria eliminates the main cause of bad breath." },
      { icon: FaShieldHalved, title: "Prevents Gum Disease", text: "Regular scaling stops gingivitis before it becomes serious." },
      { icon: FaFaceSmile, title: "Brighter Smile", text: "Polishing removes surface stains for a visibly cleaner look." },
    ],
    faqs: [
      { q: "Does scaling damage enamel?", a: "No — professional scaling only removes deposits, not tooth structure. It's completely safe for enamel." },
      { q: "How often should I get cleaning?", a: "Every 6 months for most people; every 3–4 months if you have gum disease or heavy buildup." },
      { q: "Will my teeth feel sensitive after?", a: "Mild sensitivity for a day or two is normal, especially if heavy tartar was removed — it settles quickly." },
      { q: "Is it the same as whitening?", a: "No — scaling removes deposits and stains but doesn't change natural tooth colour. Whitening is a separate cosmetic procedure." },
    ],
  },
  {
    id: "svc-cosmetic",
    chip: "COSMETIC DENTISTRY",
    title: "Cosmetic Dentistry",
    tagline: "Enhance Your Smile, Naturally",
    intro:
      "Veneers, whitening, bonding and smile design — personalised cosmetic care that looks beautifully natural.",
    image: IMG.cosmetic,
    aboutTitle: "What Is Cosmetic Dentistry?",
    about:
      "Cosmetic dentistry improves the colour, shape, alignment and overall appearance of your smile. From professional whitening and composite bonding to porcelain veneers and complete smile design, we tailor every plan to your face, features and goals — always aiming for natural, believable results.",
    options: [
      { icon: FaFaceSmile, title: "Stained or dull teeth", text: "Whitening to lift years of discolouration." },
      { icon: FaTooth, title: "Chipped or uneven edges", text: "Bonding or veneers to reshape teeth." },
      { icon: FaTeeth, title: "Small gaps", text: "Close spacing without orthodontics using veneers." },
      { icon: FaFaceSmileBeam, title: "Smile makeover", text: "A full transformation planned digitally." },
    ],
    journey: [
      { img: IMG.consult, title: "Smile Consultation", text: "We listen to what you'd like to change and assess your smile." },
      { img: IMG.shade, title: "Smile Design & Preview", text: "Photos and digital planning preview your new smile before we start." },
      { img: IMG.treatment, title: "Treatment", text: "Whitening, bonding or veneers performed with minimal prep." },
      { img: IMG.recovery, title: "Review & Maintenance", text: "Final polish, shade check and guidance to keep results bright." },
    ],
    benefits: [
      { icon: FaFaceSmileBeam, title: "Confidence Boost", text: "A brighter, balanced smile changes how you feel every day." },
      { icon: FaShieldHalved, title: "Minimally Invasive", text: "Modern techniques preserve maximum natural tooth structure." },
      { icon: FaUserDoctor, title: "Personalised Design", text: "Shade, shape and proportion matched to your face." },
    ],
    faqs: [
      { q: "How long does whitening last?", a: "1–3 years depending on diet and habits. Occasional top-ups keep the shade fresh." },
      { q: "Do veneers look fake?", a: "Not when planned properly — we design them with realistic translucency, texture and shade variation." },
      { q: "Is bonding permanent?", a: "Composite bonding lasts 4–7 years and can be repaired or refreshed easily; veneers last longer." },
      { q: "Can I preview results first?", a: "Yes — digital smile design and mock-ups let you see the planned outcome before committing." },
    ],
  },
  {
    id: "svc-pediatric",
    chip: "PEDIATRIC DENTISTRY",
    title: "Pediatric Dentistry",
    tagline: "Gentle Dental Care for Growing Smiles",
    intro:
      "Friendly, fear-free dentistry designed for children — building healthy habits and positive experiences early.",
    image: IMG.pediatric,
    aboutTitle: "What Is Pediatric Dentistry?",
    about:
      "Children need dentistry that matches their pace. Our pediatric care covers check-ups, fluoride application, sealants, fillings and habit guidance — delivered patiently in a child-friendly environment so kids leave smiling and look forward to their next visit.",
    options: [
      { icon: FaChild, title: "First dental visit", text: "A gentle introduction, ideally by age one." },
      { icon: FaTooth, title: "Tooth decay", text: "Cavities in milk teeth need timely, gentle treatment." },
      { icon: FaShieldHalved, title: "Cavity prevention", text: "Fluoride and sealants protect growing teeth." },
      { icon: FaFaceSmileBeam, title: "Habit concerns", text: "Thumb-sucking or teeth-grinding guidance." },
    ],
    journey: [
      { img: IMG.pediatric, title: "Friendly First Visit", text: "A relaxed introduction — counting teeth, no pressure, no fear." },
      { img: IMG.plan, title: "Growth Assessment", text: "We monitor tooth eruption, jaw growth and early alignment signs." },
      { img: IMG.treatment, title: "Gentle Treatment", text: "Cleaning, fluoride, sealants or fillings — always at your child's pace." },
      { img: IMG.home, title: "Healthy Habits", text: "Fun guidance for kids and parents to keep smiles cavity-free." },
    ],
    benefits: [
      { icon: FaChild, title: "Child-Friendly Team", text: "Patient, gentle care that turns anxiety into excitement." },
      { icon: FaShieldHalved, title: "Prevention Focused", text: "Sealants and fluoride stop problems before they start." },
      { icon: FaFaceSmileBeam, title: "Early Detection", text: "Catching alignment and decay issues early saves cost later." },
    ],
    faqs: [
      { q: "When should my child first visit a dentist?", a: "By their first birthday or when the first tooth appears — early visits make dentistry familiar and stress-free." },
      { q: "Are milk teeth really important?", a: "Yes — they guide permanent teeth into place and affect speech, chewing and confidence." },
      { q: "What if my child is scared?", a: "We use tell-show-do techniques and patience — most nervous kids warm up within minutes." },
      { q: "Are sealants safe?", a: "Completely — they're a thin protective coating on molars that dramatically reduces cavity risk." },
    ],
  },
  {
    id: "svc-crowns",
    chip: "CROWNS & BRIDGES",
    title: "Crowns & Bridges",
    tagline: "Restore Strength, Function & Looks",
    intro:
      "Natural-looking ceramic crowns and bridges that repair damaged teeth and replace missing ones seamlessly.",
    image: IMG.crowns,
    aboutTitle: "What Are Crowns & Bridges?",
    about:
      "A crown is a custom cap that covers a damaged or root-canal-treated tooth, restoring its strength and shape. A bridge replaces one or more missing teeth by anchoring to neighbouring teeth. We use high-quality ceramic and zirconia for results that blend invisibly with your smile.",
    options: [
      { icon: FaTooth, title: "Broken or worn teeth", text: "Cracked, chipped or heavily filled teeth." },
      { icon: FaMicroscope, title: "After root canal", text: "Protecting a treated tooth from fracture." },
      { icon: FaTeeth, title: "Missing tooth", text: "A bridge fills the gap using adjacent support." },
      { icon: FaFaceSmile, title: "Cosmetic reshaping", text: "Improve shape and shade of visible teeth." },
    ],
    journey: [
      { img: IMG.shade, title: "Evaluation & Shade Match", text: "We assess the tooth and match ceramic shade to your smile." },
      { img: IMG.treatment, title: "Preparation & Impressions", text: "The tooth is shaped gently and digital impressions taken." },
      { img: IMG.lab, title: "Lab Crafting", text: "Your crown or bridge is precision-made in ceramic or zirconia." },
      { img: IMG.recovery, title: "Fitting & Bite Check", text: "Final cementation with careful bite and comfort adjustments." },
    ],
    benefits: [
      { icon: FaShieldHalved, title: "Strength & Protection", text: "Shields weak teeth and restores full chewing power." },
      { icon: FaFaceSmile, title: "Natural Appearance", text: "Ceramic materials mimic enamel translucency beautifully." },
      { icon: FaCalendarCheck, title: "Long-Term Durability", text: "Quality crowns last 10–15+ years with good care." },
    ],
    faqs: [
      { q: "How long do crowns last?", a: "Typically 10–15 years or longer with good hygiene and regular check-ups." },
      { q: "Is getting a crown painful?", a: "No — the tooth is fully numbed during preparation, and any post-visit sensitivity settles in days." },
      { q: "Crown or bridge — which do I need?", a: "Crowns repair a damaged tooth you still have; bridges replace a missing tooth. We'll recommend after examining." },
      { q: "Metal or ceramic crown?", a: "We recommend ceramic or zirconia for visible teeth — metal-free, stronger-looking and completely natural." },
    ],
  },
  {
    id: "svc-gum",
    chip: "GUM TREATMENT",
    title: "Gum Treatment",
    tagline: "Healthy Gums, Strong Teeth",
    intro:
      "Advanced care for bleeding gums, gum disease and recession — protecting the foundation of your smile.",
    image: IMG.gum,
    aboutTitle: "What Is Gum Treatment?",
    about:
      "Gum disease starts silently as bleeding gums and can progress to bone loss and loose teeth. Our periodontal care ranges from deep cleaning (scaling & root planing) to laser gum therapy and flap surgery — stopping disease early and restoring gum health comfortably.",
    options: [
      { icon: FaTeethOpen, title: "Bleeding while brushing", text: "The earliest sign of gum inflammation." },
      { icon: FaFaceSmile, title: "Bad breath", text: "Persistent odour linked to gum infection." },
      { icon: FaTooth, title: "Receding gums", text: "Teeth appearing longer or sensitive roots." },
      { icon: FaHeartPulse, title: "Loose teeth", text: "Advanced gum disease weakening support." },
    ],
    journey: [
      { img: IMG.consult, title: "Gum Assessment", text: "Pocket charting and X-rays reveal the exact disease stage." },
      { img: IMG.plan, title: "Deep Cleaning Plan", text: "A personalised plan — from scaling to advanced therapy." },
      { img: IMG.treatment, title: "Treatment Sessions", text: "Deep cleaning, laser therapy or surgery as needed." },
      { img: IMG.recovery, title: "Maintenance Program", text: "Regular reviews keep gums healthy for the long term." },
    ],
    benefits: [
      { icon: FaShieldHalved, title: "Stops Disease Progress", text: "Early treatment prevents bone loss and tooth mobility." },
      { icon: FaFaceSmileBeam, title: "Fresher Breath & Gums", text: "Healthier gums mean a cleaner, fresher mouth." },
      { icon: FaHeartPulse, title: "Protects Overall Health", text: "Gum health is linked to heart and diabetes control." },
    ],
    faqs: [
      { q: "Is gum disease reversible?", a: "Early gingivitis fully reverses with cleaning and home care; advanced periodontitis is controlled with ongoing therapy." },
      { q: "Does deep cleaning hurt?", a: "We numb the area thoroughly — most patients feel only mild soreness for a day after." },
      { q: "Will my gums grow back?", a: "Receded gums don't regrow naturally, but treatment stops further loss and grafting can restore coverage where needed." },
      { q: "How do I prevent gum disease?", a: "Twice-daily brushing, daily flossing, quitting tobacco and professional cleaning every 6 months." },
    ],
  },
  {
    id: "svc-dentures",
    chip: "DENTURES",
    title: "Dentures",
    tagline: "Comfortable, Natural Tooth Replacement",
    intro:
      "Well-crafted full and partial dentures that restore your smile, speech and ability to enjoy food again.",
    image: IMG.dentures,
    aboutTitle: "What Are Dentures?",
    about:
      "Dentures are removable replacements for missing teeth — full sets for complete tooth loss, or partial dentures that clip around remaining teeth. Modern materials make them lighter, better-fitting and far more natural-looking than ever before. Implant-supported options add extra stability.",
    options: [
      { icon: FaTeeth, title: "Multiple missing teeth", text: "Partial dentures fill gaps comfortably." },
      { icon: FaFaceSmile, title: "Complete tooth loss", text: "Full dentures restore an entire arch." },
      { icon: FaTeethOpen, title: "Old, loose dentures", text: "Relines or replacements for better fit." },
      { icon: FaShieldHalved, title: "Extra stability", text: "Implant-supported dentures don't slip." },
    ],
    journey: [
      { img: IMG.consult, title: "Assessment & Impressions", text: "We evaluate your mouth and take precise impressions." },
      { img: IMG.treatment, title: "Design & Try-In", text: "A wax try-in lets you preview fit and appearance first." },
      { img: IMG.lab, title: "Crafting", text: "Your denture is fabricated with natural teeth and gum shades." },
      { img: IMG.recovery, title: "Fitting & Adjustments", text: "Final fitting with follow-up tweaks until perfectly comfortable." },
    ],
    benefits: [
      { icon: FaTeethOpen, title: "Eat Comfortably Again", text: "Restored chewing for a normal, enjoyable diet." },
      { icon: FaFaceSmile, title: "Natural Look", text: "Modern acrylics mimic real teeth and gum tissue." },
      { icon: FaHandHoldingMedical, title: "Affordable Option", text: "An economical way to replace many teeth at once." },
    ],
    faqs: [
      { q: "How long to get used to dentures?", a: "Most patients adapt within 2–4 weeks; initial fullness and minor speech changes fade quickly." },
      { q: "How do I care for dentures?", a: "Remove nightly, brush gently with denture cleaner, and soak in water — never hot." },
      { q: "How often should dentures be replaced?", a: "Every 5–7 years, or sooner if they loosen as your jaw changes shape over time." },
      { q: "What if my denture keeps slipping?", a: "Come in for a reline or consider implant-supported dentures for a rock-solid fit." },
    ],
  },
  {
    id: "svc-wisdom",
    chip: "WISDOM TOOTH REMOVAL",
    title: "Wisdom Tooth Removal",
    tagline: "Safe & Gentle Extractions",
    intro:
      "Careful assessment and comfortable removal of impacted or problematic wisdom teeth — including complex cases.",
    image: IMG.wisdom,
    aboutTitle: "What Is Wisdom Tooth Removal?",
    about:
      "Wisdom teeth often lack space to erupt properly, causing pain, infection, crowding or damage to neighbouring teeth. Our team evaluates each case with digital X-rays and removes problematic wisdom teeth gently under local anaesthesia — with clear aftercare for smooth recovery.",
    options: [
      { icon: FaHeartPulse, title: "Pain at the back", text: "Aching or swelling behind your last molars." },
      { icon: FaTooth, title: "Impacted tooth", text: "A wisdom tooth stuck at an angle in the jaw." },
      { icon: FaTeethOpen, title: "Repeated infections", text: "Food trapping and gum flaps that keep flaring up." },
      { icon: FaShieldHalved, title: "Preventive removal", text: "Removing risk before crowding or decay starts." },
    ],
    journey: [
      { img: IMG.consult, title: "Examination & Symptoms", text: "We assess pain, swelling and how the tooth is positioned." },
      { img: IMG.plan, title: "Digital X-Ray", text: "Panoramic imaging shows root shape and nerve proximity precisely." },
      { img: IMG.surgery, title: "Gentle Extraction", text: "Comfortable removal under anaesthesia — surgical if needed." },
      { img: IMG.home, title: "Recovery Support", text: "Clear aftercare instructions and review for smooth healing." },
    ],
    benefits: [
      { icon: FaShieldHalved, title: "Experienced Hands", text: "Impactions and complex roots handled routinely." },
      { icon: FaXRay, title: "Precise Imaging", text: "Digital planning keeps the procedure safe and quick." },
      { icon: FaFaceSmileBeam, title: "Comfortable Recovery", text: "Clear guidance means most heal within days." },
    ],
    faqs: [
      { q: "Does extraction hurt?", a: "The area is fully numbed — you'll feel pressure, not pain. Post-procedure soreness is managed with medication." },
      { q: "How long is recovery?", a: "Most people return to routine in 2–3 days; complete socket healing takes 2–4 weeks." },
      { q: "Do all wisdom teeth need removal?", a: "No — healthy, fully erupted and cleanable wisdom teeth can stay. We only remove problematic ones." },
      { q: "What can I eat afterwards?", a: "Soft, cool foods for 2–3 days — yogurt, soups, smoothies. Avoid straws and hot, spicy food initially." },
    ],
  },
  {
    id: "svc-xray",
    chip: "DIGITAL X-RAY & DIAGNOSTICS",
    title: "Digital X-Ray & Diagnostics",
    tagline: "Precise Imaging, Accurate Plans",
    intro:
      "Low-radiation digital X-rays and advanced imaging that reveal exactly what's happening — before treatment begins.",
    image: IMG.xray,
    aboutTitle: "What Are Dental X-Rays & Diagnostics?",
    about:
      "Digital radiography produces detailed images of teeth, roots, bone and jaw in seconds — with up to 90% less radiation than film. From single-tooth periapical views to full panoramic scans, accurate imaging is the backbone of safe, predictable dental treatment.",
    options: [
      { icon: FaMagnifyingGlass, title: "Hidden decay", text: "Cavities between teeth invisible to the eye." },
      { icon: FaXRay, title: "Root & bone checks", text: "Infections, cysts and bone levels made visible." },
      { icon: FaTooth, title: "Implant planning", text: "Bone height and nerve mapping before surgery." },
      { icon: FaMicroscope, title: "Impaction views", text: "Exact position of wisdom teeth and roots." },
    ],
    journey: [
      { img: IMG.consult, title: "Clinical Examination", text: "We first assess what needs imaging and why." },
      { img: IMG.xray, title: "Digital Capture", text: "Quick, comfortable scans — results on screen in seconds." },
      { img: IMG.discuss, title: "Diagnosis & Discussion", text: "We walk you through the findings on the monitor together." },
      { img: IMG.plan, title: "Treatment Planning", text: "Imaging feeds directly into precise, safe treatment plans." },
    ],
    benefits: [
      { icon: FaXRay, title: "Low Radiation", text: "Digital sensors use a fraction of traditional film exposure." },
      { icon: FaMagnifyingGlass, title: "Instant Results", text: "Images appear immediately — no film processing wait." },
      { icon: FaClipboardCheck, title: "Better Diagnosis", text: "Zoomable, enhanced images catch issues earlier." },
    ],
    faqs: [
      { q: "Are dental X-rays safe?", a: "Yes — digital X-rays use extremely low radiation, comparable to a few hours of natural background exposure." },
      { q: "How often do I need X-rays?", a: "Only when clinically indicated — typically every 1–2 years for routine care, or before specific treatments." },
      { q: "What's a panoramic X-ray?", a: "A single scan capturing your entire mouth — all teeth, jaws and sinuses — used for implants, wisdom teeth and orthodontics." },
      { q: "Can I get X-rays while pregnant?", a: "We generally postpone non-urgent imaging during pregnancy; urgent cases can be safely managed with shielding." },
    ],
  },
  {
    id: "svc-rehab",
    chip: "FULL MOUTH REHABILITATION",
    title: "Full Mouth Rehabilitation",
    tagline: "A Complete Smile Transformation",
    intro:
      "Comprehensive restoration combining implants, crowns, veneers and bite correction — rebuilding function and beauty together.",
    image: IMG.rehab,
    aboutTitle: "What Is Full Mouth Rehabilitation?",
    about:
      "When multiple teeth are worn, missing, decayed or damaged, isolated fixes aren't enough. Full mouth rehabilitation rebuilds your entire bite systematically — combining crowns, bridges, implants, veneers and gum therapy into one coordinated plan that restores comfort, function and a natural-looking smile.",
    options: [
      { icon: FaTeethOpen, title: "Worn or broken teeth", text: "Grinding, erosion or old failing work." },
      { icon: FaTeeth, title: "Multiple missing teeth", text: "Rebuilding several gaps in one plan." },
      { icon: FaHeartPulse, title: "Jaw pain & bad bite", text: "TMJ discomfort from collapsed bite." },
      { icon: FaFaceSmileBeam, title: "Complete makeover", text: "Full transformation of function and looks." },
    ],
    journey: [
      { img: IMG.consult, title: "Comprehensive Evaluation", text: "Full records — photos, X-rays, bite analysis and health review." },
      { img: IMG.plan, title: "Digital Master Plan", text: "We design the entire reconstruction and sequence each phase." },
      { img: IMG.treatment, title: "Phased Treatment", text: "Implants, crowns and restorations delivered step by step." },
      { img: IMG.recovery, title: "Final Smile & Maintenance", text: "Bite refinement, aesthetics check and long-term care plan." },
    ],
    benefits: [
      { icon: FaFaceSmileBeam, title: "Total Transformation", text: "Function, comfort and aesthetics restored together." },
      { icon: FaClipboardCheck, title: "One Coordinated Plan", text: "Every phase sequenced for predictable results." },
      { icon: FaShieldHalved, title: "Built to Last", text: "Premium materials and precise bite engineering." },
    ],
    faqs: [
      { q: "How long does full rehabilitation take?", a: "Typically 3–9 months depending on complexity — we phase treatment so you function normally throughout." },
      { q: "Is it done in one sitting?", a: "No — it's a carefully sequenced process across several visits to ensure precision and comfort." },
      { q: "Who needs full mouth rehab?", a: "Patients with severe wear, multiple missing teeth, chronic bite problems or widespread failing dental work." },
      { q: "How much does it cost?", a: "It varies with the treatments involved — after evaluation we provide a detailed phased plan with transparent pricing." },
    ],
  },
];

export const whyChooseUs = [
  { icon: FaUserDoctor, title: "Experienced Dental Team", text: "Skilled and compassionate specialists in every field." },
  { icon: FaMicroscope, title: "Modern Diagnostic Support", text: "Advanced imaging and treatment planning." },
  { icon: FaClipboardCheck, title: "Personalised Treatment Planning", text: "Solutions tailored to your needs." },
  { icon: FaHandHoldingMedical, title: "Patient-Focused Care", text: "Comfortable and respectful experience at every step." },
];

export default services;
