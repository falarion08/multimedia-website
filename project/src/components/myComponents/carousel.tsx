import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import image1 from "../../assets/images/image1_carousel.jpg"
import image2 from "../../assets/images/image2_carousel.jpg"
import image3 from "../../assets/images/image3_carousel.jpg"
import image4 from "../../assets/images/image4_carousel.jpg"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  
} from "@/components/ui/carousel"

export function CarouselPlugin() {

  const im_arr = [image1,image2,image3,image4]
  const plugin = React.useRef(
    Autoplay({ delay: 3000})
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-full overscroll-none overflow-hidden absolute"
    >
      <CarouselContent>
        {im_arr.map((im_name, index) => (
          <CarouselItem key={index} className="">
            <div className="overscroll-none">
                <img src={im_name} alt="Logo" className="w-full blur-xs opacity-55" />

            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

    </Carousel>
  )
}
