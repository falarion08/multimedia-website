import CardComponent from "../myComponents/cardComponent";
export default function ColonialPeriod() {
  const headings: string[] = [
    "Spanish Period (1521–1898)",
    "Spaniards then introduce formal education (1565–1898)",
    "American Period (1898–1942)",
    "Japanese Occupation (1942–1945)"
  ];

  const descriptions: string[] = [
    "The Spanish Period marked over three centuries of colonization, introducing Catholicism and reshaping local governance, culture, and education.",
    "Spanish friars established religion-based formal education, founding the Philippines’ oldest schools and universities while controlling learning under the Catholic Church.",
    "The American Period modernized Philippine education, making it secular, English-based, and patterned after the U.S. system, with a strong emphasis on democracy and civic duty.",
    "During the Japanese Occupation, education promoted Japanese language and culture, though the short wartime period limited its long-term impact."
  ];

  const content: string[][] = [
    [
      "Colonized for 333 years",
      "Spaniards entered the Philippine Islands in 1521",
      "Surprised that the native population had high literacy, knowing how to read and write using a 17-symbol alphabet called the Baybayin, though education was not formal.",
      "The native people were more focused on teaching practical knowledge that goes with their worship of Bathala (Local Deity) and the respect of laws and customs."
    ],
    [
      "In 1565, the Spanish friars and missionaries arrived.",
      "Built churches and schools",
      "Priests as first teachers, converting the native people to Catholicism.",
      "The formal education was religion-based and controlled by the Roman Catholic Church.",
      "First to arrive were the Augustinians in Cebu in 1565, followed by the Franciscans in 1577, Jesuits in 1581, and Dominicans in 1587.",
      "In 1590, the Jesuits established Colegio de Manila, later renamed as Unibersidad de San Ignacio.",
      "Next was the University of Santo Tomas, the oldest existing university in the Philippines and in Asia. Founded by the Dominicans on April 28, 1611.",
      "The friars also taught Latin and Spanish grammar (languages and in religious ceremonies).",
      "“The Spanish educational system was meant to keep the natives faithful, in order to keep the Church’s authority over the lives of the Indios (Colonized Filipinos)”."
    ],
    [
      "Began in 1898, following Spain’s defeat in the Spanish-American War.",
      "Introduced a centralized public school system in 1901 through Act No. 74.",
      "Around 1,000 American teachers (the “Thomasites”) arrived to establish the system.",
      "Education became secularized, and English became the primary language of instruction in public schools.",
      "The University of the Philippines was established in 1908.",
      "Emphasized democratic ideals and civic education.",
      "Led to high English proficiency among Filipinos and created a lasting legacy patterned after the American model."
    ],
    [
      "Occupation lasted from 1942 to 1945 during World War II.",
      "Japanese authorities discouraged English, promoted the Japanese language (Nippongo), and fostered Filipino-Japanese cultural ties as part of the Greater East Asia Co-Prosperity Sphere.",
      "A Department of Instruction was established, later becoming the Department of Education in 1947.",
      "Reforms included promoting Filipino culture, vocational education, and moral development, but they had minimal lasting impact due to the short wartime period and heavy disruptions."
    ]
  ];

  return (
    <div className="p-10">
      <h1 className="font-bold text-5xl text-center mb-7">Philippine Colonial Education System</h1>
      <h1 className="font-bold text-1xl text-center mb-7">Important History</h1>

      <div className="flex justify-center items-center gap-5 flex-wrap">
        {headings.map((h, i) => <CardComponent title={h} description={descriptions[i]} listData={content[i]} key={i} />)}
      </div>
    </div>
  )
}