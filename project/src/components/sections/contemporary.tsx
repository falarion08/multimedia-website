import im1 from "../../assets/images/k12_img.jpeg"
import im2 from "../../assets/images/digital_classroom.jpg"
import im3 from "../../assets/images/lowincome.jpg"

export default function ContemporarySection() {
  return (
    <div className="h-screen px-6 py-3 overflow-auto">
      <h1 className="font-bold text-5xl text-center mb-7">CONTEMPORARY</h1>

      <div className="my-5">
        <h2 className="font-semibold text-center text-lg mb-2">K-12 Changes and Uneven Effectiveness</h2>
        <div className="w-full flex justify-center"><img src={im1} className="h-64 w-96  rounded-2xl" /></div>

        <ul>
          <li>The K-12 program, meant to meet global standards, was implemented in 2012, but its execution was highly flawed—for instance, many schools did not have the requisite classrooms to be fully staffed.</li>
          <li>Students from marginalized rural and urban poor communities have been disproportionately impacted by implementation gaps, which perpetuate entrenched inequities.</li>
        </ul>

      </div>
      <div className="my-5 ">
        <h2 className="font-semibold text-center text-lg mb-2">Instructional Gaps and the Legacy of Colonization</h2>
        <ul>
          <li>The use of English as the primary language of instruction, stemming from colonial rule, remains entrenched.</li>
          <li>Policy-based support for mother-tongue instruction is not translated in practice due to untrained and resource-poor teachers.</li>
          <li>This exacerbates low reading competencies and high dropout rates, as shown in national assessments and international studies like PISA.</li>
        </ul>
      </div>
      <div className="my-5">

        <h2 className="font-semibold text-center text-lg mb-2">Digital Gap and Realities After the Pandemic</h2>

        <div className="w-full flex justify-center"><img src={im2} className="h-64 w-96 rounded-2xl" /></div>

        <ul>
          <li>The digital gap became evident during the pandemic's shift to online learning, with rural and low-income students facing lack of internet, gadgets, and stable electricity.</li>
          <li>While inadequate digital infrastructure persists, blended learning is here to stay.</li>
          <li>The Education Department faces competing demands: upgrading digital infrastructure while ensuring no students are left behind.</li>
        </ul>
      </div>
      <div className="my-5">

        <h2 className="font-semibold text-center text-lg mb-2">Access to Education and Social Class Divides</h2>

        <div className="w-full flex justify-center"><img src={im3} className="h-64 w-96 rounded-2xl" /></div>

        <ul>
          <li>Private schools remain the choice for elite and middle-class families, while public schools are underfunded and overcrowded.</li>
          <li>Low-income students face the greatest hurdles in accessing quality education, reflecting colonial and elitist roots of the system.</li>
        </ul>
      </div>
      <div className="my-5">
        <h2 className="font-semibold text-center text-lg mb-2">Moving Forward with an Awareness of History</h2>
        <ul>
          <li>Addressing current educational issues requires dismantling systemic frameworks rooted in colonial history.</li>
          <li>Future reforms must be inclusive and relevant to the diverse cultures of all Filipinos, avoiding shallow adoption of foreign models.</li>
        </ul>
      </div>
    </div>
  )
}