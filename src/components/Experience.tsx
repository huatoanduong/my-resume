import React, { use } from 'react';
import { experienceSelector } from "selectors";
import { useStoreProfile } from "store";
import { Experience } from "store/profile";

interface ExperienceProps {
  experience: Experience;
}

export const ExperienceItem = ({ experience }: ExperienceProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-800">{experience.position}</h3>
        <div className="text-gray-600">
          <span className="font-medium">{experience.company}</span>
          {experience.location && (
            <span className="ml-2">• {experience.location}</span>
          )}
        </div>
        <div className="text-gray-500 text-sm">{experience.period}</div>
      </div>

      <div className="mb-4">
        <h4 className="text-md font-semibold text-gray-700 mb-2">
          Responsibilities
        </h4>
        <ul className="list-disc list-inside text-gray-600">
          {experience.responsibilities.map((responsibility, index) => (
            <li key={index} className="mb-1">
              {responsibility}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="text-md font-semibold text-gray-700 mb-2">
          Achievements
        </h4>
        <ul className="list-disc list-inside text-gray-600">
          {experience.achievements.map((achievement, index) => (
            <li key={index} className="mb-1">
              {achievement}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-md font-semibold text-gray-700 mb-2">
          Technologies
        </h4>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

interface ExperienceSectionProps {
}

export const ExperienceSection = ({ }: ExperienceSectionProps) => {
  const experiences = useStoreProfile(experienceSelector);
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Professional Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};
