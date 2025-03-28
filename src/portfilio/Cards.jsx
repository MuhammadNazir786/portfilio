import React from 'react';

const Cards = () => {
  const cards = [
    { title: "Awards", count: "02" },
    { title: "Clients", count: "20+" },
    { title: "Years Experience", count: "02" },
    { title: "Projects", count: "40+" },
  ];

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center border border-green-600">
              <h2 className="text-4xl font-bold text-green-600">{card.count}</h2>
              <p className="text-lg text-gray-600 mt-2">{card.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;