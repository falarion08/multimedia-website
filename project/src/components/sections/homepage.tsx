import { CarouselPlugin } from "../myComponents/carousel"
import { Button } from "../ui/button"
export default function HomepageSection() {
  return (
    <>
      <div className="relative flex justify-center items-center h-screen overflow-x-hidden ">
        <div className="z-10 w-[75%] text-center">
          <h1 id="homepage-title" className="text-7xl font-bold" >The Evolution of Education in the Philippines</h1>
          <p className="text-md p-2 font-semibold my-7">
            Education in the Philippines has been shaped by centuries of cultural exchange, colonial influence,
            and the nation’s own pursuit of knowledge. From pre-colonial community-based learning to the formal
            school systems introduced during Spanish, American, and modern times, the journey of Philippine
            education tells the story of a people’s resilience and aspiration. Explore the milestones that have
            built the foundations of learning in the country today.
          </p>

          <Button onClick={() => {
          const targetElement = document.getElementById('precolonial-period');
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }} className="text-lg p-8 hover:cursor-pointer">Explore Now</Button>
        </div>

        <CarouselPlugin />
      </div>
    </>
  )
}