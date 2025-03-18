'use client'

import React, { useEffect, useState } from 'react';

const StatsSection: React.FC = () => {
  const stats = [
    { value: 748, label: 'Ngày làm việc' },
    { value: 691, label: 'Buổi tư vấn' },
    { value: 25000, label: 'Đơn hàng' },
    { value: 689, label: 'Cửa hàng TMĐT' },
  ];

  const [counts, setCounts] = useState<number[]>(new Array(stats.length).fill(0));
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('stats-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = stats.map((stat) => stat.value);
      const duration = 2000; // Animation duration in ms
      const stepTime = 20; // Time between each step
      const steps = duration / stepTime;

      const increment = end.map((value) => Math.ceil(value / steps));

      const timer = setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = prevCounts.map((count, index) => {
            if (count < end[index]) {
              const inc = increment[index];
              return Math.min(count + inc, end[index]);
            }
            return count;
          });

          if (newCounts.every((count, index) => count === end[index])) {
            clearInterval(timer);
          }

          return newCounts;
        });
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <div
      id="stats-section"
      className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white py-6"
    >
      <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl font-bold">
              {counts[index].toLocaleString()}+
            </div>
            <div className="text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;