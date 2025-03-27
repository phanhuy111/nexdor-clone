'use client'

import { motion } from "framer-motion"

const solutions = [
    { title: "O2O Chain Solution", description: "Description for O2O Chain Solution" },
    { title: "Omni Commerce Solution", description: "Description for Omni Commerce Solution" },
    { title: "OmO Activation", description: "Description for OmO Activation" },
    { title: "Community Distribution Solution", description: "Description for Community Distribution Solution" },
    { title: "Loyalty Solution", description: "Description for Loyalty Solution" },
];

export default function NexdorSolutions() {
    return (
        <div className="bg-white text-black p-8 mt-16">
            <div className="w-[60%] mx-auto">
                <h1 className="text-4xl font-bold text-center mb-4">Nexdor Solution is a provider of <span className="text-[#33ccff]">Direct-to-Customer (D2C)</span> Solution for Brands</h1>
                <p className="text-center mb-8">
                    Our mission is to develop a comprehensive ecosystem and help businesses grow efficiently. We invest in technology and build the strong team in the market with outstanding omni-commerce expertise and passion for serving clients. We connect expertise to create one-stop solutions and data-driven products with continuous innovations to empower businesses to unlock digital market growth potential.
                </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
                {solutions.map((solution, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center justify-center bg-[#f0f4f8] border-2 border-[#33ccff] rounded-full p-6 w-[200px] h-[200px] shadow-lg hover:shadow-xl transition-shadow cursor-pointer relative overflow-hidden"
                    >
                        <h2 className="text-xl font-semibold text-center mb-2">{solution.title}</h2>
                    </motion.div>
                ))}
            </div>
        </div>
    )
} 