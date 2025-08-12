import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button"


import {
  Dialog,
  DialogContent,

  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function CardComponent(props: any) {

  return (
    <Card className="w-full max-w-sm min-h-48 relative ">
      <CardHeader>
        <CardTitle className="text-center">{props.title}</CardTitle>
        <CardDescription>
          {props.description}
        </CardDescription>

        <PopupModal data={props.listData} title={props.title} />
      </CardHeader>


    </Card>
  )
}


function PopupModal(props: any) {
  return (
    <>
      <Dialog>
        <DialogTrigger className="absolute bottom-1 w-full left-0"><Button variant="link" >Learn More</Button></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-xl text-center">{props.title}</DialogTitle>
          </DialogHeader>
          <div className="max-h-[90%] overflow-x-auto'">
            {props.data.map((d: string, i: number) => <li key={i}>{d}</li>)}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}