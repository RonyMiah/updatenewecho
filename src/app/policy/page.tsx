import React from "react";

const PolicyPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16 ">
      <div className="lg:container md:container mx-auto px-4 md:px-8">
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-green-600">
            New Eco Cleaning Services - Our Policy
          </h1>

          <p className="text-gray-600 text-lg mb-4 text-center">
            At New Eco Cleaning Services, we deliver top-quality, eco-friendly
            cleaning solutions to meet the diverse needs of our clients. Our
            services focus on cleanliness, hygiene, and sustainability, ensuring
            a healthy environment for your space.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Service Items */}
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h2 className="text-xl md:text-2xl font-semibold text-green-700 mb-2">
                  {service.title}
                </h2>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    title: "Commercial Cleaning Services",
    description:
      "We provide thorough cleaning for commercial establishments, ensuring your business premises are always presentable and sanitary.",
  },
  {
    title: "Office Cleaning Services",
    description:
      "Our office cleaning services focus on maintaining a clean, organized, and hygienic workspace for productivity and well-being.",
  },
  {
    title: "Carpet Cleaning Services",
    description:
      "We specialize in deep carpet cleaning to remove dirt, allergens, and stains, restoring the appearance and freshness of your carpets.",
  },
  {
    title: "Janitorial Cleaning Services",
    description:
      "Our janitorial services provide daily or periodic cleaning tailored to your facility’s needs, keeping your building in pristine condition.",
  },
  {
    title: "Washroom Cleaning Services",
    description:
      "We ensure washrooms are sanitized, deodorized, and fully stocked, creating a clean and fresh environment for users.",
  },
  {
    title: "Property Maintenance",
    description:
      "We offer property maintenance services to help preserve and improve the condition of your property with general upkeep and repairs.",
  },
  {
    title: "Hard Floor Maintenance",
    description:
      "We provide expert hard floor cleaning, stripping, waxing, and polishing to extend the lifespan and appearance of your floors.",
  },
  {
    title: "Grass Cutting Services",
    description:
      "Our eco-friendly grass cutting ensures that your outdoor spaces are well-maintained without harming the environment.",
  },
  {
    title: "Tree & Garden Maintenance",
    description:
      "We offer tree pruning, planting, and garden upkeep services to keep your outdoor areas vibrant, green, and healthy.",
  },
];

export default PolicyPage;
