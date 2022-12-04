import { Button } from "@mui/material"
import { FC } from "react"
import { Link } from "react-router-dom"

import { SuccessViewProps } from "./SuccessView.interfaces"

export const SuccessView: FC<SuccessViewProps> = (props) => {
  const {
    title = "Done!",
    description = "Successfully completed this process",
    actionButton = (
      <Link to="/" className="inline-block">
        <Button color="secondary" variant="contained">
          Go to Home
        </Button>
      </Link>
    ),
  } = props

  return (
    <section className="bg-white flex-grow flex items-center justify-center">
      <div className="text-center  space-y-8 p-6 pb-10 container max-w-2xl">
        <img className="h-80" src="/assets/images/done.svg" alt="Success" />
        <div className="text-4xl font-bold">{title}</div>
        <div className="text-sm">{description}</div>
        {actionButton}
      </div>
    </section>
  )
}
