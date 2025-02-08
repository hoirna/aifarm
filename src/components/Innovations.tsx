import React from "react";
import InnovationCard from "@/components/ui/InnovationCard";
import { innovationCards } from "@/components/constants/Index"; // Importing the data

const Innovations = () => {
  return (
    <div className="space-y-8">
      {innovationCards.map((card, index) => (
        <InnovationCard
          key={index}
          title={card.title}
          description={card.description}
          buttonText={card.buttonText}
          imageSrc={card.imageSrc}
          imageAlt={card.imageAlt}
          logoSrc={card.logoSrc}
          logoAlt={card.logoAlt}
          reverseLayout={index % 2 === 1} // Reverse layout for all even-indexed cards (1st, 3rd, 5th, etc.)
        />
      ))}
    </div>
  );
};

export default Innovations;
