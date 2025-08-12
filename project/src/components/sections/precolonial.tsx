
import {
  Dialog,
  DialogContent,

  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import baybayin from "../../assets/images/baybayin.jpg"
import bg from "../../assets/images/precolonial_bg.jpg"
import weaving from "../../assets/images/weaving.jpg"

import { Button } from "../ui/button"

export default function PrecolonialSection() {
  return (
    <div className="relative h-screen">
      <img src={bg} className="z-0  h-screen w-screen blur-xs opacity-65 absolute top-0 left-0" />
      <div className="z-20 absolute px-5">
        <div id="precolonial-period" className="h-screen overflow-x-auto">

          <h1 className="font-bold text-5xl text-center mb-7">Education in The Philippines During the Precolonial Age</h1>

          <div className="my-5">
            <h2 className="font-semibold text-center text-lg mb-2">
              Before 1521: Indigenous System of Learning
            </h2>

            <ul className="list-inside">
              <li>
                Education was already present long before the Spaniards arrived, mainly rooted in the community through oral tradition.
              </li>
              <li>
                It was informal and non-instutional, passed down orally through family, elders, and leaders.
              </li>
              <li>
                Learning was primarily more focused on survival, skills, and values, instead of formal academics.
              </li>
            </ul>
          </div>

          <div className="my-5">

            <h2 className="font-semibold text-center text-lg mb-2">
              Education in the Community
            </h2>


            <div className="flex justify-center w-full my-2">
              <img src={weaving} className="w-128 h-96 w" />
            </div>

            <ul >
              <li>
                Parents and elders taught their children survival skills used daily such as fishing, farming, hunting, cooking, and weaving.
              </li>
              <li>
                Babaylans (spiritual leaders) passed on knowledge of rituals, healing, and local beliefs.
              </li>
              <li>
                Datus and chieftains mentored future leaders in law, warfare, diplomacy, and customs.
              </li>
            </ul>


          </div>
          <div className="my-5">
            <h2 className="font-semibold text-center text-lg mb-2">
              Baybayin, an ancient script, was used for writing in parts of Luzon and Visayas.
            </h2>

            <div className="flex justify-center w-full my-2">
              <img src={baybayin} />
            </div>

            <ul className="flex-1">
              <li>
                Writing was used for poetry, communication, and documenting oral tradition.
              </li>
              <li>
                It was informal and non-instutional, passed down orally through family, elders, and leaders.
              </li>
              <li>
                Literacy was not widespread, but it existed independently of foreign influence.
              </li>
            </ul>


          </div>
          <div className="flex justify-center w-full my-6">
            <PopupModal />
          </div>

        </div>

      </div>

    </div>
  )
}

function PopupModal() {
  return (
    <>
      <Dialog>
        <DialogTrigger><Button>Learn More More About How This History Relates to Today's Educational Issues</Button></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-xl text-center">How This History Relates to Today's Educational Issues</DialogTitle>
            <div>
              <h2 className="font-semibold text-center text-lg mb-2">Erasure of Indigenous Knowledge</h2>
              <ul>
                <li>Spanish colonization replaced native systems, undermining pre-existing educational traditions.</li>
                <li>Indigenous ways of knowing and learning are still underrepresented in today’s curriculum.
                </li>
              </ul>

              <h2 className="font-semibold text-center text-lg mb-2">Language Marginalization</h2>
              <ul>
                <li>Baybayin and local languages were devalued and replaced by Spanish and later English.
                </li>
                <li>This created linguistic inequality that persists in modern classrooms.
                </li>
              </ul>

              <h2 className="font-semibold text-center text-lg mb-2">Disconnection from Cultural Heritage
              </h2>
              <ul>
                <li>Indigenous to foreign styled learning separated Filipinos from the heritage of their ancestors.
                </li>
                <li>Efforts to revive Baybayin and cultural education are ongoing but limited in scope.

                </li>
              </ul>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}