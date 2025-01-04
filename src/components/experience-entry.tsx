import { Experience } from "@/data/experience";

export function ExperienceEntry({ experience }: { experience: Experience }) {
  return (
    <div className="grid grid-cols-4">
      <span className="text-sm text-zinc-500">{experience.date}</span>
      <div className="col-span-3 flex flex-col">
        <h3 className="text-base">
          {experience.title} — {experience.company}
        </h3>
        {experience.advisor && <p className="text-sm text-zinc-600 leading-relaxed italic mt-2">
          Advisor: {experience.advisor}
        </p>}
        {experience.manager && <p className="text-sm text-zinc-600 leading-relaxed italic mt-2">
          Manager: {experience.manager}
        </p>}
        {experience.description && <p className="text-sm text-zinc-600 leading-relaxed mt-2">
          {experience.description}
        </p>}
      </div>
    </div>
  );
}