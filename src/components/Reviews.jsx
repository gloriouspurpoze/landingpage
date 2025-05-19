import React, { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Alice",
    country: "USA",
    rating: 5,
    review: "This product completely changed the way I work. Absolutely love it!",
  },
  {
    name: "Raj",
    country: "India",
    rating: 4,
    review: "Great features, smooth UI, and amazing support. Highly recommended!",
  },
  {
    name: "Elena",
    country: "Spain",
    rating: 5,
    review: "My team loves this! Productivity is up and so is the mood!",
  },
  {
    name: "Liam",
    country: "UK",
    rating: 5,
    review: "Fast, reliable, and fun to use. Five stars from me!",
  },  {
    name: "Liam",
    country: "UK",
    rating: 5,
    review: "Fast, reliable, and fun to use. Five stars from me!",
  },  {
    name: "Liam",
    country: "UK",
    rating: 5,
    review: "Fast, reliable, and fun to use. Five stars from me!",
  },  {
    name: "Liam",
    country: "UK",
    rating: 5,
    review: "Fast, reliable, and fun to use. Five stars from me!",
  },
];

const ReviewsSection = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const cardWidth = container.firstChild.offsetWidth + 24; // card width + margin

    const scrollInterval = setInterval(() => {
      scrollAmount += cardWidth;

      if (scrollAmount >= container.scrollWidth - container.clientWidth) {
        scrollAmount = 0;
      }

      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }, 3000); // scroll every 3 seconds

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="py-16 px-4 md:px-10 bg-gray-50 text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-2">Review Section</h2>
      <div className="h-1 w-16 bg-gray-300 rounded-full mx-auto mb-8" />

      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-6 scroll-smooth snap-x snap-mandatory scrollbar-hide"
      >
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 snap-start bg-white shadow-lg rounded-xl p-6 w-72"
          >
            <div className="flex mb-2 text-yellow-400 text-lg">
              {"★".repeat(t.rating)}
              {"☆".repeat(5 - t.rating)}
            </div>
            <p className="text-gray-600 mb-4">{t.review}</p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="h-10 w-10 bg-gray-300 rounded-full" />
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-gray-400">{t.country}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
