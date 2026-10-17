import services from "@/data/serviceDetails";

const svc = (id) => services.find((s) => s.id === id);

export const articles = [
  {
    slug: "braces-vs-clear-aligners",
    title: "Braces vs Clear Aligners — Which is Right for You?",
    cat: "braces",
    catLabel: "Braces & Aligners",
    img: "/img/braces-aligners.jpg",
    heroImg: "/img/sd-braces-hero.jpg",
    desc: "Compare braces and clear aligners, their benefits, treatment time, comfort, appearance and which option may suit your smile goals.",
    date: "Oct 10, 2026",
    read: "6 min read",
    stamp: 10,
    serviceId: "svc-braces",
    intro:
      "Straightening your teeth can improve your appearance, confidence and overall oral health. Both traditional braces and clear aligners are effective orthodontic treatments, but they work differently and may suit different needs. This article explains how each option works, their benefits, and what to consider when choosing the right treatment for you.",
    takeaway:
      "Both braces and clear aligners can effectively straighten teeth. The right choice depends on your dental condition, lifestyle, treatment goals and your dentist's recommendation.",
    body: [
      {
        type: "section",
        title: "What Are Traditional Braces?",
        text: "Traditional braces use metal or ceramic brackets attached to the teeth and connected with wires. They apply gentle, continuous pressure to gradually move teeth into the desired position. Modern braces are smaller, more comfortable and available in a range of options — including metal, ceramic and self-ligating varieties.",
        img: "/img/braces-aligners.jpg",
      },
      {
        type: "section",
        title: "What Are Clear Aligners?",
        text: "Clear aligners are removable, transparent trays that gradually move your teeth. They are designed using digital scans and custom-made to fit your teeth precisely. Aligners are a popular choice for adults and teens who prefer a more discreet option and the flexibility to remove them for eating and cleaning.",
        img: "/img/j-align.jpg",
      },
      {
        type: "table",
        title: "Key Differences",
        head: ["Feature", "Traditional Braces", "Clear Aligners"],
        rows: [
          ["Appearance", "Visible metal or ceramic brackets", "Nearly invisible, transparent trays"],
          ["Removable", "Fixed, cannot be removed", "Removable for eating and cleaning"],
          ["Best For", "Mild to severe orthodontic cases", "Mild to moderate cases"],
          ["Treatment Time", "Typically 1.5 – 3 years", "Typically 6 months – 2 years"],
          ["Diet Restrictions", "Avoid hard and sticky foods", "Remove aligners while eating"],
          ["Cleaning", "Requires special cleaning tools", "Easy to clean, brush as usual"],
          ["Appointments", "Regular adjustments at clinic", "Fewer visits, tray changes at home"],
        ],
      },
      {
        type: "cards2",
        cards: [
          {
            title: "Comfort and Appearance",
            text: "Clear aligners are generally more comfortable and less noticeable, making them popular with adults. Braces are visible but highly reliable — and modern ceramic options are much more discreet than traditional metal brackets.",
          },
          {
            title: "Treatment Time and Care",
            text: "Treatment time varies with the complexity of each individual case. Braces are often recommended for more complex cases, while aligners work well for mild to moderate alignment issues. Both options require good oral hygiene and regular dental visits to achieve the best result.",
          },
        ],
      },
      {
        type: "p",
        title: "Which Option May Suit You?",
        text: "The right choice depends on several factors such as the complexity of your case, your lifestyle, aesthetic preferences and budget. A proper dental examination helps determine the most suitable option based on a detailed evaluation.",
      },
      {
        type: "callout",
        text: "Every patient's dental condition is unique. This article is for educational purposes only and should not replace professional advice. Please consult our orthodontist for a personalised treatment plan.",
      },
    ],
    faqs: [
      { q: "Are clear aligners as effective as braces?", a: "For mild to moderate alignment issues, yes — aligners achieve comparable results. Complex cases involving major bite correction or rotations usually respond better to braces." },
      { q: "How long does treatment take?", a: "Braces typically take 18 months to 3 years; aligners often finish in 6–24 months. Your exact timeline depends on your case and how consistently aligners are worn." },
      { q: "Will braces or aligners be painful?", a: "You'll feel mild pressure or soreness for a few days after fitting or each new tray/adjustment. It settles quickly and is easily managed." },
      { q: "Which option is better for adults?", a: "Clear aligners are the most popular adult choice for their discreet look. However, ceramic braces are also subtle and may suit more complex adult cases." },
      { q: "Can I eat normally with braces or aligners?", a: "With aligners, yes — remove them to eat. With braces, avoid very hard or sticky foods that can break brackets or bend wires." },
      { q: "How often do I need to visit the dentist?", a: "Braces need adjustments every 4–8 weeks. Aligner patients visit less often — usually every 8–12 weeks to collect new trays and review progress." },
    ],
  },

  {
    slug: "dental-implants-guide",
    title: "A Complete Guide to Dental Implants",
    cat: "implants",
    catLabel: "Dental Implants",
    img: "/img/dental-implants.jpg",
    heroImg: "/img/sd-implants-hero.jpg",
    desc: "Learn how dental implants work, their benefits, procedure, recovery time and long term care tips.",
    date: "Oct 08, 2026",
    read: "7 min read",
    stamp: 9,
    serviceId: "svc-implants",
    intro:
      "Missing teeth can affect your confidence, chewing ability and long-term oral health. Dental implants are considered the gold standard for replacing missing teeth — offering a permanent, natural-looking solution. This guide explains how implants work, who they suit, and what the treatment journey looks like.",
    takeaway:
      "Dental implants replace missing teeth with a strong, natural-looking foundation that can last decades. Careful planning and good aftercare are the keys to long-term success.",
  },
  {
    slug: "child-dental-visit",
    title: "How to Make Your Child's Dental Visit a Positive Experience",
    cat: "pediatric",
    catLabel: "Pediatric Dentistry",
    img: "/img/pediatric-dentistry.jpg",
    heroImg: "/img/sd-pediatric-hero.jpg",
    desc: "Practical tips to help children feel comfortable and develop good oral hygiene habits early.",
    date: "Oct 01, 2026",
    read: "5 min read",
    stamp: 8,
    serviceId: "svc-pediatric",
    intro:
      "A child's first dental experiences shape how they feel about oral care for life. With the right preparation and a gentle, child-friendly approach, dental visits can be something your child actually looks forward to. Here's how to make every visit calm, positive and productive.",
    takeaway:
      "Early, positive dental visits build lifelong healthy habits. Keep it casual, stay positive, and choose a clinic experienced in caring for children.",
  },
  {
    slug: "teeth-whitening-guide",
    title: "Teeth Whitening — What You Need to Know",
    cat: "cosmetic",
    catLabel: "Cosmetic Dentistry",
    img: "/img/cosmetic-dentistry.jpg",
    heroImg: "/img/sd-cosmetic-hero.jpg",
    desc: "Explore professional whitening options, safety, results and how to maintain a brighter smile.",
    date: "Sep 28, 2026",
    read: "5 min read",
    stamp: 7,
    serviceId: "svc-cosmetic",
    intro:
      "A brighter smile can boost your confidence instantly — but with so many whitening options, it's hard to know what's safe and what actually works. This guide covers professional whitening, at-home options, expected results and how to keep your smile bright for longer.",
    takeaway:
      "Professional whitening is the safest and most effective way to brighten your smile. Results last longer with good habits and occasional touch-ups.",
  },
  {
    slug: "root-canal-signs",
    title: "Signs You May Need a Root Canal Treatment",
    cat: "rootcanal",
    catLabel: "Root Canal Treatment",
    img: "/img/root-canal-treatment.jpg",
    heroImg: "/img/sd-rootcanal-hero.jpg",
    desc: "Common symptoms, causes and how root canal treatment can save your natural tooth.",
    date: "Sep 25, 2026",
    read: "6 min read",
    stamp: 6,
    serviceId: "svc-rootcanal",
    intro:
      "Tooth pain that won't go away may be a sign of infection deep inside the tooth. Root canal treatment removes that infection and saves your natural tooth — often more comfortable than people expect. Here are the warning signs you shouldn't ignore.",
    takeaway:
      "Lingering pain, sensitivity and swelling are red flags. Treating the infection early with a root canal saves your natural tooth and stops the pain.",
  },
  {
    slug: "regular-cleaning",
    title: "The Importance of Regular Teeth Cleaning",
    cat: "general",
    catLabel: "General Dentistry",
    img: "/img/teeth-cleaning-scaling.jpg",
    heroImg: "/img/sd-cleaning-hero.jpg",
    desc: "Why professional cleaning matters, how often you should get it and the benefits for your oral health.",
    date: "Sep 20, 2026",
    read: "4 min read",
    stamp: 5,
    serviceId: "svc-cleaning",
    intro:
      "Brushing and flossing at home are essential — but even the best routine can't remove all plaque and tartar. Professional cleaning protects your gums, prevents decay and keeps your breath fresh. Here's why it deserves a regular slot in your health routine.",
    takeaway:
      "Professional cleaning every 6 months prevents gum disease and catches problems early — one of the simplest ways to protect your smile.",
  },
  {
    slug: "gum-disease-guide",
    title: "Understanding Gum Disease — Causes, Symptoms and Treatment",
    cat: "gum",
    catLabel: "Gum Treatment",
    img: "/img/gum-treatment.jpg",
    heroImg: "/img/sd-gum-hero.jpg",
    desc: "Learn about the early signs of gum disease and how it can be effectively treated.",
    date: "Sep 15, 2026",
    read: "5 min read",
    stamp: 4,
    serviceId: "svc-gum",
    intro:
      "Bleeding gums are easy to dismiss — but they're often the first sign of gum disease, the leading cause of adult tooth loss. The good news: caught early, it's completely treatable. Learn what to watch for and how treatment works.",
    takeaway:
      "Bleeding gums are never normal. Early-stage gum disease reverses with cleaning and better hygiene — don't wait until it becomes painful.",
  },
  {
    slug: "wisdom-teeth-guide",
    title: "Do Wisdom Teeth Always Need to Be Removed?",
    cat: "general",
    catLabel: "Wisdom Tooth",
    img: "/img/wisdom-tooth-removal.jpg",
    heroImg: "/img/sd-wisdom-hero.jpg",
    desc: "When extraction is necessary, the benefits, comfort options and what to expect during recovery.",
    date: "Sep 10, 2026",
    read: "5 min read",
    stamp: 3,
    serviceId: "svc-wisdom",
    intro:
      "Wisdom teeth don't always cause trouble — but when they do, the pain can be significant. Not every wisdom tooth needs removal, though. Here's how dentists decide, what the procedure involves, and what recovery looks like.",
    takeaway:
      "Wisdom teeth need removal only when they're impacted, infected or crowding other teeth. A panoramic X-ray tells us exactly what your teeth are doing.",
  },
  {
    slug: "dentures-guide",
    title: "Full vs Partial Dentures — What's the Difference?",
    cat: "guide",
    catLabel: "Dentures",
    img: "/img/dentures.jpg",
    heroImg: "/img/sd-dentures-hero.jpg",
    desc: "Compare full and partial dentures, their benefits and how to choose the right option.",
    date: "Sep 05, 2026",
    read: "5 min read",
    stamp: 2,
    serviceId: "svc-dentures",
    intro:
      "Modern dentures are far more comfortable and natural-looking than their reputation suggests. Whether you need to replace all your teeth or just a few, understanding the difference between full and partial dentures helps you choose confidently.",
    takeaway:
      "Full dentures replace a complete arch; partial dentures fill gaps while keeping your remaining natural teeth. Implant-supported options add even more stability.",
  },
];

// Build a full article body for entries without a custom one,
// composed from the matching service's real content.
export function getArticle(slug) {
  const art = articles.find((a) => a.slug === slug) || articles[0];
  if (art.body) return art;

  const s = svc(art.serviceId);
  if (!s) return art;

  return {
    ...art,
    body: [
      { type: "section", title: s.aboutTitle, text: s.about, img: `/img/sd-${art.serviceId.replace("svc-", "")}-about.jpg` },
      {
        type: "list",
        title: "When Might You Need This?",
        items: s.options.map((o) => `${o.title} — ${o.text}`),
      },
      {
        type: "list",
        title: "What Does the Treatment Journey Look Like?",
        items: s.journey.map((j) => `${j.title} — ${j.text}`),
      },
      {
        type: "callout",
        text: "Every patient's dental condition is unique. This article is for educational purposes only and should not replace professional advice. Please consult our dental team for a personalised treatment plan.",
      },
    ],
    faqs: s.faqs,
  };
}
