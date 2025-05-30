// export default function HeroImage() {
//     return (
//         <section className="w-full bg-background text-primary px-6 lg:px-20 py-20 font-poppins">
//             <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-16">
//                 {/* Left Side - Heading */}
//                 <div className="lg:w-1/4">
//                     LEFT SECTION
//                 </div>

//                 {/* Right Side - Image */}
//                 <div className="lg:w-3/4 relative h-[60vh]">
//                     {/* Define SVG clipPath just once */}
//                     <svg width="0" height="0">
//                         <defs>
//                             <clipPath id="curvedHero" clipPathUnits="objectBoundingBox">
//                                 <path d="
//                                   M 0,0.06
//                                   Q 0.03,0,0.25,0
//                                   Q 0.29,0.06,0.93,0.07
//                                   Q 1,0.12,0.99,0.77
//                                   Q 0.93,0.82,0.70,0.81
//                                   Q 0.61,0.84,0.59,0.98
//                                   Q 0.53,1,0.06,1
//                                   Q 0,0.94,0,0.74
//                                   Q 0.07,0.69,0.17,0.69
//                                   Q 0.21,0.65,0.23,0.57
//                                   Q 0.07,0.47,0,0.44
//                                   Z" />
//                             </clipPath>
//                         </defs>
//                     </svg>

//                     <div
//                         className="w-full h-full"
//                         style={{
//                             backgroundImage: 'url(/media/hero-banner2.avif)',
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                             clipPath: 'url(#curvedHero)',
//                         }}
//                     ></div>
//                 </div>
//             </div>
//         </section>
//     );
// }

export default function WaveImage() {
    return (
        <section className="w-full h-[10vh] bg-background text-primary font-poppins z-20">
            {/* Define the double-wave clipPath */}
            <svg width="0" height="0">
                <defs>
                    <clipPath id="doubleWave" clipPathUnits="objectBoundingBox">
                        <path d="
                            M0,0.1 
                            Q0.25,0,0.5,0.1 
                            Q0.75,0.2,1,0
                            L1,0.25 
                            Q0.75,0.5,0.5,0.5 
                            Q0.25,0.45,0,0.7
                            Z
                        " />
                    </clipPath>
                </defs>
            </svg>

            {/* Hero Image section with double-wave clip */}
            <div
                className="w-full h-[60vh] lg:h-[75vh]" //h-[100%] 
                style={{
                    backgroundImage: 'url(/media/hero-banner4.jpg)', // use your actual image path
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    clipPath: 'url(#doubleWave)',
                }}
            />
        </section>
    );
}
