"use client"

import { useState } from "react"
import { motion } from "framer-motion"

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

const SolutionCard = ({ solution, index, hoveredIndex, setHoveredIndex }: { solution: any; index: number; hoveredIndex: number | null; setHoveredIndex: (index: number | null) => void }) => {
    const isActive = hoveredIndex === index && solution.title === "Omni Commerce Solution";

    return (
        <div className="relative flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    width: isActive ? "400px" : "200px",
                    height: isActive ? "400px" : "200px",
                    zIndex: isActive ? 10 : 1,
                }}
                transition={{
                    duration: 0.2,
                    delay: index * 0.1,
                    width: { duration: 0.3 },
                    height: { duration: 0.3 },
                }}
                className={`
                    flex items-center justify-center bg-[#f0f4f8] border-2 border-[#33ccff] 
                    rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer
                    md:w-[${isActive ? "400px" : "150px"}]
                    md:h-[${isActive ? "400px" : "150px"}]
                    relative overflow-hidden
                `}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
            >
                {isActive ? (
                    <div className="flex items-center">
                        <div className="text-center">
                            <p className="text-sm text-gray-600 max-w-[220px]">{solution.description}</p>
                        </div>
                    </div>
                ) : (
                    <h2 className="text-sm md:text-lg font-semibold text-center mb-1 p-2">{solution.title}</h2>
                )}
            </motion.div>
        </div>
    );
};

export default function NexdorSolutions() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="bg-white text-black px-8">
            <div className="w-full md:w-[60%] mx-auto">
                <h1 className="text-4xl font-bold text-center mb-4">
                    Nexdor Solution is a provider of <span className="text-[#33ccff]">Direct-to-Customer (D2C)</span> Solution for
                    Brands
                </h1>
                <p className="text-center mb-8">
                    Our mission is to develop a comprehensive ecosystem and help businesses grow efficiently. We invest in
                    technology and build the strong team in the market with outstanding omni-commerce expertise and passion for
                    serving clients. We connect expertise to create one-stop solutions and data-driven products with continuous
                    innovations to empower businesses to unlock digital market growth potential.
                </p>
            </div>
            <div className="md:flex md:flex-wrap justify-center grid grid-cols-3 gap-6 relative">
                {solutions.map((solution, index) => (
                    <SolutionCard
                        key={index}
                        solution={solution}
                        index={index}
                        hoveredIndex={hoveredIndex}
                        setHoveredIndex={setHoveredIndex}
                    />
                ))}
            </div>
        </div>
    );
}

