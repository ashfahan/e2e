import { Button } from "@mui/material"
import toast, { ToastOptions } from "react-hot-toast"

interface Props extends ToastOptions {
  title: string
  desciption?: string
  actionButton?: JSX.Element
}

export const customToast = (props: Props) => {
  const { title, desciption, actionButton, ...options } = props

  return toast.custom(
    ({ visible, id }) => (
      <div
        className={`${
          visible ? "opacity-100" : "opacity-0"
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 transition-opacity`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">{title}</p>
              <p className="mt-1 text-sm text-gray-500">{desciption}</p>
            </div>
          </div>
        </div>
        <div className="flex">
          <>
            {{
              ...actionButton,
              props: {
                variant: "text",
                className: "rounded-none",
                color: "primary",
                ...actionButton?.props,
                onClick: () => {
                  toast.remove(id)
                  actionButton?.props.onClick?.()
                },
              },
            }}
          </>
          <Button
            color="secondary"
            variant="text"
            className="rounded-l-none rounded-r-md"
            onClick={() => {
              toast.dismiss(id)
              setTimeout(() => toast.remove(id), 250)
            }}
          >
            <i className="fa-regular fa-xmark text-xl" />
          </Button>
        </div>
      </div>
    ),
    options
  )
}
