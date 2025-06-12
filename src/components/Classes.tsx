import React, { useState } from "react";
import classData from "../data/classes.json";
import { motion } from "framer-motion";
import { CalendarIcon } from "lucide-react";
import { generateICS } from "../utils/CalendarUtils";

type ClassType = (typeof classData)[number]["type"];

const Classes: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ClassType>("Vinyasa");
  const tabs: ClassType[] = Array.from(
    new Set(classData.map((c) => c.type))
  ) as ClassType[];

  return (
    <section id="classes" className="py-20 bg-beige-100">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl text-center mb-10">Classes</h2>
        <div className="flex justify-center gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                activeTab === tab
                  ? "bg-rose-300 text-charcoal-800"
                  : "bg-sage-400/20 text-charcoal-800 hover:bg-sage-400/40"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {classData
            .filter((c) => c.type === activeTab)
            .map((cls) => (
              <div
                key={cls.id}
                className="p-6 bg-white rounded-xl shadow-lg flex flex-col gap-2"
              >
                <h3 className="font-heading text-2xl">{cls.title}</h3>
                <p>
                  {cls.day} • {cls.time} • {cls.duration} min
                </p>
                <p className="text-sm text-sage-400">
                  Instructor: {cls.instructor}
                </p>
                <a
                  href={generateICS(cls)}
                  className="mt-auto inline-flex items-center gap-2 text-rose-300 hover:underline"
                >
                  <CalendarIcon size={16} />
                  Add to Calendar
                </a>
              </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Classes;
