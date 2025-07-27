import { TECHNICAL_SKILLS } from '../ExportedFiles/TecknicalSkills'
import SkillCard from '../TailWindComponent/TechnicalSkillCard'

const TechincalSkills = () => {
    return (
        <section className="py-10 bg-gray-50" id="techncalSckills">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Technical Skills</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {TECHNICAL_SKILLS.map((skill, idx) => (
                        <SkillCard key={idx} icon={skill.icon} label={skill.label} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TechincalSkills