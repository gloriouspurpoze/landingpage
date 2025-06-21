import { useEffect } from 'react';

export default function WaveImage() {
  useEffect(() => {
    const path = document.getElementById("wavePath");
    let t = 0;

    const animate = () => {
      t += 0.02;
      const y1 = 0.1 + Math.sin(t) * 0.02;
      const y2 = 0.5 + Math.sin(t + 1) * 0.02;

      const newD = `
        M0,${y1} 
        Q0.25,0.2,0.5,${y1} 
        Q0.75,0,1,0
        L1,0.65
        Q0.75,0.45,0.5,${y2} 
        Q0.25,0.5,0,0.3
        Z
      `;

      if (path) path.setAttribute('d', newD);
      requestAnimationFrame(animate);
    };

    // animate();
  }, []);

  return (
    <section className="w-full h-[60vh] lg:h-[75vh] xl:h-[50vh] bg-gradient-to-b from-background to-primary text-primary font-poppins z-20"
    style={{
    background: `linear-gradient(to bottom, #0D1310 40%, #EEE7DC 40%)`
  }}>
      <svg width="0" height="0">
        <defs>
          <clipPath id="doubleWave" clipPathUnits="objectBoundingBox">
            <path
              id="wavePath"
              d="M0,0.25 
                 Q0.25,0.4,0.5,0.1 
                 Q0.75,-0.1,1,0.1
                 L1,1
                 Q0.75,0.5,0.5,0.6 
                 Q0.25,0.7,0,0.45
                 Z"
            />
          </clipPath>
        </defs>
      </svg>

      <div
        className="w-full h-full"
        style={{
          backgroundImage: 'url(/media/hero-banner8.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          clipPath: 'url(#doubleWave)',
        }}
      />
    </section>
  );
}
