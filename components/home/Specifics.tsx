import React from "react";
import { Button } from "../ui/button";
import { GiCoffeeBeans } from "react-icons/gi";
import { FaHandshakeAngle } from "react-icons/fa6";
import { FaPerson } from "react-icons/fa6";

const specifics = [
  {
    name: "Organic beans",
    description:
      "We only use organic beans to ensure that you get the best quality coffee. We believe in sustainability and ethical sourcing, so we only use beans that are grown without the use of harmful pesticides and chemicals.",
    icon: GiCoffeeBeans,
  },
  {
    name: "Fair trade",
    description:
      "We believe in fair trade and support small-scale farmers who use sustainable and ethical practices. We source our beans from farmers who are committed to preserving the environment and supporting their families.",
    icon: FaHandshakeAngle,
  },

  {
    name: "Personalized brewing",
    description:
      "We take the time to personalize each brew to your taste. We use high-quality beans and carefully select the perfect blend of flavors to create a truly unique and delicious cup of coffee.",
    icon: FaPerson,
  },
];
const Specifics = () => {
  return (
    <div className="bg-primary   mt-8  rounded-t-[500px]  ">
      <div className="max-w-7xl mx-auto px-8 py-16 sm:px-6 lg:px-8">
        <p className="text-2xl text-center lg:text-6xl font-bold   text-white">
          What makes us special
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 mt-16">
          {specifics.map((specific, idx) => {
            const Icon = specific.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center justify-center"
              >
                <div className="bg-black/40 rounded-full w-16 h-16 flex justify-center items-center mb-4">
                  <Icon className="size-7" />
                </div>
                <p className="text-2xl font-bold text-white mb-4 text-center">
                  {specific.name}
                </p>
                <p className="text-sm text-center text-white">
                  {specific.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Specifics;
