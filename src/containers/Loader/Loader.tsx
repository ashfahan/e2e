import { FC } from "react"
import { SlidingCubeLoader } from "react-loaders-kit"

import { themeColor } from "../../styles/MuiTheme"
import { LoaderProps } from "./Loader.interfaces"

export const Loader: FC<LoaderProps> = (props) => {
  const { loading = true, className, ...rest } = props

  return (
    <div className={`m-auto h-full flex items-center justify-center flex-col ${className}`}>
      <SlidingCubeLoader colors={[themeColor.secondary.main, themeColor.secondary.main]} loading={loading} {...rest} />
    </div>
  )
}
