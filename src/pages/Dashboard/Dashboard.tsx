import { FC, useState } from "react"
import { ReactSortable } from "react-sortablejs"
import { ErrorView } from "../../containers/ErrorView"
import { Loader } from "../../containers/Loader"
import { useInsightAnalysisQuery } from "../../services"
import { ActiveShapePieChart } from "./ActiveShapePieChart"
import { BrushBarChart } from "./BrushBarChart"
import { DashboardProps } from "./Dashboard.interfaces"
import { MixBarChart } from "./MixBarChart"
import { PieData } from "./PieData"
import { Transations } from "./Transations"

const linkRequestId = "549A6E92-6D28-4487-BB78-A7575A054A14"

export const Dashboard: FC<DashboardProps> = (props) => {
  const { className } = props

  const analytics = useInsightAnalysisQuery(
    { linkRequestId },
    { selectFromResult: (x) => ({ ...x, data: x.data?.insightAnalyses.at(0) }) }
  )

  const [grid, setGrid] = useState([
    { id: 1, width: "lg:w-4/12 md:w-6/12 w-full", title: "MixBarChart" },
    { id: 2, width: "lg:w-4/12 md:w-6/12 w-full", title: "BrushBarChart" },
    { id: 5, width: "lg:w-4/12 sm:w-6/12 w-full", title: "PieChart" },
    { id: 4, width: "lg:w-8/12 w-full order-last lg:order-none", title: "Transations" },
    { id: 3, width: "lg:w-4/12 sm:w-6/12 w-full", title: "ActiveShapePieChart" },
  ])

  if (analytics.isLoading) return <Loader />
  if (analytics.isError || !analytics.data) return <ErrorView />

  return (
    <div className={`flex-grow ${className}`}>
      <div className="flex justify-between">
        <h2 className="text-3xl">Dashboard</h2>
      </div>

      <ReactSortable
        list={grid}
        setList={(newgrid) => setGrid(newgrid)}
        ghostClass="dropArea"
        handle=".dragHandle"
        filter=".ignoreDrag"
        preventOnFilter={true}
        className="flex flex-wrap -mx-3"
      >
        {grid.map(({ title, id, width }) => (
          <>
            {title === "BrushBarChart" && <BrushBarChart key={id} className={`${width} p-3`} data={analytics.data} />}
            {title === "MixBarChart" && <MixBarChart key={id} className={`${width} p-3`} data={analytics.data} />}
            {title === "Transations" && <Transations key={id} className={`${width} p-3`} data={analytics.data} />}
            {title === "ActiveShapePieChart" && (
              <ActiveShapePieChart key={id} className={`${width} p-3`} data={analytics.data} />
            )}
            {title === "PieChart" && <PieData key={id} className={`${width} p-3`} data={analytics.data} />}
          </>
        ))}
      </ReactSortable>
    </div>
  )
}
