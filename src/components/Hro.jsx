import { useRef, useEffect } from 'react';
import gsap from 'gsap';
// import Image from 'next/image';

export default function CircularImageSection() {
  const containerRef = useRef();
  const circleRef = useRef();
  const statsRef = useRef();

  useEffect(() => {
    gsap.from(circleRef.current, {
      rotation: 360,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%"
      }
    });

    gsap.from(statsRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%"
      }
    });
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative py-20 px-4 overflow-hidden"
      style={{ backgroundColor: '#0D1310' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#EEE7DC' }}>
            We create impactful experiences
          </h2>
          <p className="text-lg" style={{ color: '#EEE7DC', opacity: 0.8 }}>
            Hurricane is a creative agency creating experiences, bringing together design, motion, imagery, and everything.
          </p>
          
          <div ref={statsRef} className="flex items-center gap-8">
            <div>
              <p className="text-5xl font-bold" style={{ color: '#3EB489' }}>950+</p>
              <p className="text-lg" style={{ color: '#EEE7DC' }}>Projects Completed</p>
            </div>
            <button 
              className="px-8 py-3 rounded-lg font-medium hover:opacity-90 transition"
              style={{ 
                backgroundColor: '#3EB489',
                color: '#0D1310'
              }}
            >
              Get Started!
            </button>
          </div>
        </div>

        {/* Circular Image */}
        <div className="md:w-1/2 flex justify-center">
          <div 
            ref={circleRef}
            className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4"
            style={{ 
              borderColor: '#3EB489',
              boxShadow: '0 0 30px rgba(62, 180, 137, 0.3)'
            }}
          >
            {/* Replace with your actual image */}
            <Image
              src="/your-image-path.jpg" // Update this
              alt="Hurricane Agency Work"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Floating decorative elements (optional) */}
      <div 
        className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full opacity-20 blur-xl"
        style={{ backgroundColor: '#3EB489' }}
      />
      <div 
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-15 blur-lg"
        style={{ backgroundColor: '#3EB489' }}
      />
    </section>
  );
}