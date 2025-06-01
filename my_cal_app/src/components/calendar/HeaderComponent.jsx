import { Plus } from "lucide-react"

export default function HeaderComponent() {
    return (
        <div className="flex w-full justify-between items-center text-lg ">
            <p>YOUR TODO'S</p>
            <button className="flex gap-2 items-center text-blue-700"><Plus /> Create Schedule</button>
        </div>
    )
}