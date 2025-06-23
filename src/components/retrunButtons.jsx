import {Button} from "@chakra-ui/react"
import { Link } from "react-router"

export const ReturnButtons = () => {
    return (
        <div className="flex gap-4">
            <Link to={"/"}><Button>Return to Home</Button></Link>
            <Link to={"/dashboard"}><Button>Return to Dashboard</Button></Link>
        </div>
    )
}