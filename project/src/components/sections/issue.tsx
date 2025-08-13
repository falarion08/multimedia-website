import bg from "../../assets/images/issue_bg.jpg"

export default function IssueAnalysisSection() {
  return (
    <div className="relative h-screen px-6">
      <img src={bg} className="h-screen w-screen z-0 blur-sm opacity-50 absolute top-0 left-0 " />

      <div className="z-20 h-screen overflow-x-scroll absolute">
        <h2 className="font-bold text-5xl text-center mb-7">Issue Analysis</h2>
        <p className="text-md my-5">
          The history of Philippine education is not a series of disconnected periods but a chain of causes and consequences, where the conditions of
          one era laid the groundwork for the next. Understanding this sequence reveals why the system struggles today and what must be done to fix it.

        </p>

        <p className="text-md my-5">

          Before colonization, learning was woven into everyday life. Families, elders, babaylan, and datus taught survival skills, cultural values, and
          governance through oral tradition and apprenticeship. Literacy existed in the form of Baybayin, used for poetry, trade, and community records
          (Scott, 1982). Education was local, contextual, and multilingual. But the Educational Decree of 1863 disrupted this ecosystem. By formalizing
          parish-run, Spanish-medium schools, the decree replaced indigenous systems with religiously oriented instruction aimed at creating obedient
          colonial subjects (Salazar, 1999). Local languages and cultural knowledge were pushed to the margins, and “literacy” came to mean reading and
          writing in Spanish. Today, the Department of Education’s Indigenous Peoples Education (IPEd) program attempts to restore these elements, but
          its reach is still limited (DepEd, 2015). The deeper loss was pedagogical: pre-colonial learning was embedded in real-life contexts, whereas
          colonial schooling removed learning from lived experience—a separation that persists.
        </p>

        <p className="text-md my-5">

          The American occupation brought mass education, but with another profound shift: Act No. 74 (1901) established a centralized public school system
          modeled on the U.S. and made English the primary language of instruction (Agoncillo, 1990). This expanded access but created a lasting language
          divide. For most Filipino children, the language of school was not the language of home, slowing comprehension in early grades. The American model
          reinforced the perception that “modern” meant Western, sidelining local knowledge and cultural identity (Constantino, 1970). Mother-Tongue Based
          Multilingual Education (MTB-MLE), mandated in K–3 since 2012, was meant to close this gap, but limited teacher preparation and materials mean many
          classrooms revert to English prematurely. The World Bank (2022) estimates that 91% of Filipino 10 year olds cannot read a simple text with understanding.
          This shows that without integrating reading science, decodable texts, oral language development, structured bridging to Filipino and English, MTB-MLE risks
          being symbolic rather than transformative.
        </p>

        <p className="text-md my-5">

          The Japanese occupation (1942–45) briefly altered this trajectory, discouraging English and promoting Tagalog and Nippongo, alongside “character education”
          aligned with the Greater East Asia Co-Prosperity Sphere (DepEd, n.d.). However, the war’s disruptions and the brevity of this period meant these reforms
          left little lasting impact. The quick reversion to the American-English system after 1945 illustrates a broader lesson, education reforms can be politically
          fragile. Without long term planning, cross-administration commitment, and teacher-level implementation, policy shifts collapse with regime change.
        </p>

        <p className="text-md my-5">

          Post independence did not break the mold. While the Philippines was now politically free, its educational structure remained American in design.
          The Bilingual Education Policy of 1974 divided subjects between Filipino and English (DECS Order No. 25, s. 1974), attempting to promote nationalism
          while maintaining global competitiveness. Under Martial Law, however, curriculum content was used as a political tool, with centralized control over
          textbooks and lesson content limiting critical thinking and academic freedom (Constantino, 1970).This centralization remains today, most schools still
          lack authority and resources to adapt curriculum to local realities, and indigenous or community based knowledge is often excluded unless under special
          programs like IPEd. While centralization ensures uniformity, it also suppresses cultural fit, a balance that could be achieved through a “tight on goals,
          loose on methods” approach, setting national standards but funding locally relevant curriculum development.
        </p>

        <p className="text-md my-5">

          The most recent reforms, under the Enhanced Basic Education Act of 2013 (RA 10533), expanded basic education to K–12, reinforced contextualization mandates,
          and institutionalized MTB-MLE (SEAMEO-INNOTECH, 2012). The goal was to align Philippine education with global standards. Yet reforms landed on weak foundations:
          overcrowded classrooms, teacher-subject mismatches, shortages of learning materials, and limited teacher coaching. Then COVID-19 forced some of the world’s
          longest school closures, exposing a deep digital divide that left millions without access to online or modular learning (De Guzman, 2021). These structural
          weaknesses are reflected in outcomes: PISA 2022 shows that only around 16% of Filipino 15-year-olds meet minimum proficiency in mathematics, with similarly
          low performance in reading and science (OECD, 2023). Both EDCOM 2 (2024) and the World Bank urge a fundamental shift: focus on early-grade literacy and numeracy,
          strengthen teacher practice, and ensure that every child has access to effective materials.
        </p>

        <p className="text-md my-5">

          Across all eras, the pattern is clear, reforms often change the form of education but not its function. Spanish rule disconnected learning from local life,
          American rule embedded a foreign language as the gatekeeper of comprehension, post-colonial governments centralized control at the expense of relevance,
          K–12 added time but not instructional power. The result is a system where opportunity is still tied to class and location, and where the poorest learners
          face the steepest climb.
        </p>

        <p className="text-md my-5">

          Solving these challenges requires reversing the constraints left by each period. Language policy must go hand in hand with proven ways to teach reading.
          The curriculum must be both nationally consistent and locally meaningful. Teachers should teach subjects they know best, be trained continuously, and
          have the resources they need. Early grade skills must be the main measure of progress. Technology gaps must be closed with offline ready resources and
          better rural access. Above all, reforms must be designed to survive changes in political leadership and stay focused on evidence, not just new laws.
        </p>

        <p className="text-md my-5">

          History shows that education in the Philippines has always been a mirror of its politics, its economy, and its social hierarchies. If we understand that
          our current system is the cumulative product of centuries of decisions many made to serve colonial rather than national interests then we can design
          reforms that do not repeat the same mistakes. True transformation will not come from adopting yet another foreign model, but from building an education
          system rooted in the diverse languages, cultures, and realities of the Filipino people.
        </p>
      </div>
    </div>
  )
}