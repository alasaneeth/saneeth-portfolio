import { SOFT_SKILLS } from "../ExportedFiles/SoftSkills";

const SoftSkills = () => {
  return (
    <section  className="py-10 bg-white" id="softSkills">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Soft Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {SOFT_SKILLS.map((skill, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center text-center p-4 bg-gray-100 rounded-2xl shadow hover:shadow-md transition text-sm font-medium text-gray-700"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;