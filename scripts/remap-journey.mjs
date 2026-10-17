import fs from "node:fs";

const f = "src/data/serviceDetails.js";
let s = fs.readFileSync(f, "utf8");

s = s.replace(
  '  rehab: "full-mouth-rehabilitation.jpg",',
  `  rehab: "full-mouth-rehabilitation.jpg",
  consult: "j-consult.jpg",
  plan: "j-plan.jpg",
  discuss: "j-discuss.jpg",
  treatment: "j-treatment.jpg",
  recovery: "j-recovery.jpg",
  home: "j-home.jpg",
  lab: "j-lab.jpg",
  align: "j-align.jpg",
  surgery: "j-surgery.jpg",
  shade: "j-shade.jpg",`
);

const map = {
  "Consultation & Assessment": "consult",
  "Digital Imaging & Planning": "plan",
  "Implant Placement": "surgery",
  "Restoration & Follow-up": "recovery",
  "Orthodontic Consultation": "consult",
  "Records & Digital Planning": "plan",
  "Active Treatment": "align",
  "Retention & Smile Reveal": "recovery",
  "Diagnosis & X-Ray": "plan",
  "Anaesthesia & Isolation": "treatment",
  "Cleaning & Filling": "rootcanal",
  "Crown Protection": "crowns",
  "Oral Examination": "consult",
  "Ultrasonic Scaling": "cleaning",
  Polishing: "treatment",
  "Home-Care Guidance": "home",
  "Smile Consultation": "consult",
  "Smile Design & Preview": "shade",
  Treatment: "treatment",
  "Review & Maintenance": "recovery",
  "Friendly First Visit": "pediatric",
  "Growth Assessment": "plan",
  "Gentle Treatment": "treatment",
  "Healthy Habits": "home",
  "Evaluation & Shade Match": "shade",
  "Preparation & Impressions": "treatment",
  "Lab Crafting": "lab",
  "Fitting & Bite Check": "recovery",
  "Gum Assessment": "consult",
  "Deep Cleaning Plan": "plan",
  "Treatment Sessions": "treatment",
  "Maintenance Program": "recovery",
  "Assessment & Impressions": "consult",
  "Design & Try-In": "treatment",
  Crafting: "lab",
  "Fitting & Adjustments": "recovery",
  "Examination & Symptoms": "consult",
  "Digital X-Ray": "plan",
  "Gentle Extraction": "surgery",
  "Recovery Support": "home",
  "Clinical Examination": "consult",
  "Digital Capture": "xray",
  "Diagnosis & Discussion": "discuss",
  "Treatment Planning": "plan",
  "Comprehensive Evaluation": "consult",
  "Digital Master Plan": "plan",
  "Phased Treatment": "treatment",
  "Final Smile & Maintenance": "recovery",
};

const esc = (t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
let count = 0;
for (const [title, key] of Object.entries(map)) {
  const re = new RegExp(
    `\\{ img: IMG\\.[a-z]+, title: "${esc(title)}"`,
    "g"
  );
  s = s.replace(re, (m) => {
    count++;
    return `{ img: IMG.${key}, title: "${title}"`;
  });
}
fs.writeFileSync(f, s);
console.log("remapped", count, "of", Object.keys(map).length, "steps");
