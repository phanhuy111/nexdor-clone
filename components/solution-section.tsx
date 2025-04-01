"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const solutions = [
    { title: "O2O Chain Solution", description: "" },
    {
        title: "Omni Commerce Solution",
        description:
            "Omni commerce solution includes Omni-commerce channels such as Quick-commerce (Quick-commerce on Delivery Apps), E-commerce, Social commerce, Community commerce... Omni-Commerce is a new approach for business's growth across all platforms in any ways or locations. The main goal is to provide the possible fastest shopping experience, allowing brands to reach out to end-consumers directly and efficiently.",
    },
    {
        title: "OmO Activation",
        description: ""
    },
    { title: "Community Distribution Solution", description: "" },
    { title: "Loyalty Solution", description: "" },
]

const SolutionCard = ({
    solution,
    index,
    hoveredIndex,
    setHoveredIndex,
    isMobile,
    setSelectedSolution
}: {
    solution: any;
    index: number;
    hoveredIndex: number | null;
    setHoveredIndex: (index: number | null) => void;
    isMobile: boolean;
    setSelectedSolution: (solution: any) => void;
}) => {
    const isOmniCommerce = solution.title === "Omni Commerce Solution";
    const isActive = hoveredIndex === index && isOmniCommerce;

    // Use standard dimensions for non-interactive cards
    const width = isActive && !isMobile ? "400px" : "150px";
    const height = isActive && !isMobile ? "400px" : "150px";

    // Responsive sizing for mobile
    const mobileWidth = isActive && !isMobile ? "200px" : "100px";
    const mobileHeight = isActive && !isMobile ? "200px" : "100px";

    const handleInteraction = () => {
        if (isOmniCommerce) {
            if (isMobile) {
                setSelectedSolution(solution);
            } else {
                setHoveredIndex(index);
            }
        }
    }

    return (
        <div className="relative flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    width: isMobile ? mobileWidth : width,
                    height: isMobile ? mobileHeight : height,
                    zIndex: isActive && !isMobile ? 10 : 1,
                }}
                transition={{
                    duration: 0.2,
                    delay: index * 0.1,
                    width: { duration: 0.3 },
                    height: { duration: 0.3 },
                }}
                className={`
                    flex items-center justify-center bg-[#f0f4f8] border-2 border-[#33ccff] 
                    rounded-full shadow-lg ${isOmniCommerce ? 'hover:shadow-xl cursor-pointer' : ''} transition-all
                    w-[100px] h-[100px]
                    sm:w-[120px] sm:h-[120px]
                    md:w-[150px] md:h-[150px]
                    relative overflow-hidden
                `}
                onClick={handleInteraction}
                onMouseEnter={() => isOmniCommerce && !isMobile && setHoveredIndex(index)}
                onMouseLeave={() => isOmniCommerce && !isMobile && setHoveredIndex(null)}
            >
                {isActive && !isMobile ? (
                    <div className="flex items-center">
                        <div className="text-center">
                            <p className="text-xs md:text-sm text-gray-600 max-w-[180px] md:max-w-[220px]">{solution.description}</p>
                        </div>
                    </div>
                ) : (
                    <h2 className="text-xs sm:text-sm md:text-base font-semibold text-center mb-1 p-1 md:p-2">{solution.title}</h2>
                )}
            </motion.div>
        </div>
    );
};

const MobilePopup = ({ solution, onClose }: { solution: any; onClose: () => void }) => {
    if (!solution) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 20 }}
                    className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        onClick={onClose}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <h2 className="text-xl font-bold text-center mb-4">{solution.title}</h2>
                    <p className="text-gray-700">{solution.description}</p>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default function NexdorSolutions() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [selectedSolution, setSelectedSolution] = useState<any>(null);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        checkIfMobile();

        // Event listener for window resize
        window.addEventListener('resize', checkIfMobile);

        // Cleanup
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    return (
        <div className="bg-white text-black px-4 md:px-8">
            <div className="w-full md:w-[60%] mx-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
                    Nexdor Solution is a provider of <span className="text-[#33ccff]">Direct-to-Customer (D2C)</span> Solution for
                    Brands
                </h1>
                <p className="text-xs sm:text-sm md:text-base text-center mb-4 md:mb-8">
                    Our mission is to develop a comprehensive ecosystem and help businesses grow efficiently. We invest in
                    technology and build the strong team in the market with outstanding omni-commerce expertise and passion for
                    serving clients. We connect expertise to create one-stop solutions and data-driven products with continuous
                    innovations to empower businesses to unlock digital market growth potential.
                </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap justify-center gap-2 md:gap-6 relative">
                {solutions.map((solution, index) => (
                    <SolutionCard
                        key={index}
                        solution={solution}
                        index={index}
                        hoveredIndex={hoveredIndex}
                        setHoveredIndex={setHoveredIndex}
                        isMobile={isMobile}
                        setSelectedSolution={setSelectedSolution}
                    />
                ))}
            </div>

            {/* Mobile popup - only appears for Omni Commerce Solution */}
            {selectedSolution && selectedSolution.title === "Omni Commerce Solution" && (
                <MobilePopup
                    solution={selectedSolution}
                    onClose={() => setSelectedSolution(null)}
                />
            )}
        </div>
    );
}