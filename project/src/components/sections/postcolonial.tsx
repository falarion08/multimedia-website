import bg from "../../assets/images/postcolonial.jpg"

export default function PostColonialSection() {
  return (
    <>
      <div className="h-screen px-6 relative">
        <img src={bg} className="h-screen w-screen  z-0 blur-xs opacity-55 absolute top-0 left-0" />
        <div className="z-20 h-screen   absolute top-0 overflow-auto">
          <h1 className="font-bold text-5xl text-center mb-7">Post Colonial</h1>

          <h2 className="font-semibold text-center text-lg mb-2">Historical Background: Post-Colonial Education in the Philippines</h2>
          <ul>
            <li><span className="font-bold">1946: Philippine Independence</span> — The Philippines gained formal independence from the United States on July 4, 1946. Despite independence, the educational system remained patterned after the American model. English was retained as the main language of instruction.</li>
            <li><span className="font-bold">Educational Act of 1940</span> (continued post-independence) — Provided for free, compulsory elementary education. Continued U.S. influence in content, pedagogy, and school organization.</li>
            <li><span className="font-bold">1949: UP declared national university</span> — University of the Philippines became the leading institution for higher education and nationalist thought. Served as both a model of academic freedom and a stage for student activism.</li>
            <li><span className="font-bold">President Manuel Roxas (1946–1948)</span> — First president of the independent Republic. Prioritized rebuilding schools after WWII using U.S. economic aid. Signed the Bell Trade Act, which tied the Philippine economy and systems—including education—to U.S. interests.</li>
            <li><span className="font-bold">1973 Constitution under Marcos</span> — Required the use of both English and Filipino as media of instruction (bilingual education policy). Emphasized nationalism in theory, but under Martial Law, the curriculum was manipulated to serve authoritarian goals.</li>
            <li><span className="font-bold">Martial Law (1972–1981)</span> — Education was used as a tool for political indoctrination. Textbooks were rewritten; dissenting educators were silenced. Depoliticization of history and reduced academic freedom.</li>
          </ul>

          <h2 className="font-semibold text-center text-lg mb-2">How This History Shaped Today’s Education Issues</h2>
          <ul>
            <li><span className="font-bold">Language Divide</span> — English continues to dominate instruction, putting rural and public-school learners at a disadvantage.</li>
            <li><span className="font-bold">Centralized Curriculum</span> — The Department of Education maintains centralized control, limiting the inclusion of local and indigenous knowledge systems.</li>
            <li><span className="font-bold">Colonial Legacy in Textbooks</span> — Textbooks prioritize Western narratives; local resistance movements and indigenous cultures often underrepresented.</li>
            <li><span className="font-bold">Brain Drain</span> — The American-modeled education system promotes degrees and credentials that align with foreign labor markets, encouraging emigration.</li>
            <li><span className="font-bold">Modern Reforms</span> (e.g., K to 12) — Intended to align the system with global standards but faces criticism for adopting foreign models and straining public schools.</li>
          </ul>



        </div>
      </div>
    </>
  )
}