"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

export default function FaqMain() {
  const [expandedItems, setExpandedItems] = useState(["1"]);

  const handleAccordionChange = (newExpandedItems) => {
    setExpandedItems(newExpandedItems);
  };

  // Updated Dental FAQ data
  const faqData = [
    {
      category: "Dental Care FAQs",
      questions: [
        {
          id: "1",
          question: "What type of toothbrush and toothpaste should I use?",
          answer:
            "Dentists recommend using a soft-bristled toothbrush to avoid damaging your gums and enamel. Choose a toothpaste that contains fluoride for cavity protection. Electric toothbrushes can also be effective if used properly.",
        },
        {
          id: "2",
          question: "Do I really need to floss every day?",
          answer:
            "Yes, flossing helps remove food particles and plaque from between your teeth where your toothbrush can't reach. Daily flossing reduces the risk of gum disease and cavities between the teeth.",
        },
        {
          id: "3",
          question: "What are early signs of dental problems?",
          answer:
            "Early signs include tooth sensitivity, bleeding gums, bad breath, or a persistent toothache. Regular checkups help detect issues early before they become serious.",
        },
        {
          id: "4",
          question: "Why are regular dental check-ups important?",
          answer:
            "Regular check-ups allow your dentist to monitor your oral health, detect problems early, and perform professional cleanings to prevent plaque buildup and gum disease.",
        },
        {
          id: "5",
          question: "How do dental fillings work?",
          answer:
            "A dental filling restores a tooth damaged by decay. The decayed portion is removed and filled with materials such as composite resin, amalgam, or ceramic to restore shape and function.",
        },
        {
          id: "6",
          question: "What causes bad breath and how can I prevent it?",
          answer:
            "Bad breath can be caused by poor oral hygiene, dry mouth, or certain foods. Brush and floss regularly, stay hydrated, and visit your dentist to rule out underlying issues.",
        },
        {
          id: "7",
          question: "How often should I replace my toothbrush?",
          answer:
            "You should replace your toothbrush every 3 to 4 months, or sooner if the bristles are frayed. A worn toothbrush won’t clean your teeth effectively.",
        },
        {
          id: "8",
          question: "Are dental X-rays safe?",
          answer:
            "Yes, dental X-rays use minimal radiation and are considered very safe. They help dentists detect issues not visible during a standard exam, such as cavities between teeth and bone loss.",
        },
        {
          id: "9",
          question: "Is teeth whitening safe?",
          answer:
            "Professional teeth whitening performed by a dentist is safe and effective. Overuse of at-home products can cause tooth sensitivity or enamel damage, so always follow instructions or consult your dentist.",
        },
        {
          id: "10",
          question: "What should I do in a dental emergency?",
          answer:
            "In case of a dental emergency like a knocked-out tooth, cracked tooth, or severe pain, contact your dentist immediately. Acting quickly can save your tooth and reduce complications.",
        },
      ],
    },
  ];

  return (
    <section className="faq-area section">
      <div className="container">
        {faqData.map((category) => (
          <div className="row faq-wrap" key={category.category}>
            <div className="col-lg-12">
              <div className="faq-head">
                <h2>{category.category}</h2>
              </div>
              <div className="faq-item">
                <Accordion
                  className="panel-group"
                  preExpanded={expandedItems}
                  onChange={handleAccordionChange}
                >
                  {category.questions.map((question) => (
                    <AccordionItem
                      className="panel panel-default"
                      key={question.id}
                      uuid={question.id}
                    >
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          {question.question}
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>{question.answer}</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
