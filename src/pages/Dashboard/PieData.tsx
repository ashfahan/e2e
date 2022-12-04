import { DragHandle } from "@mui/icons-material"
import { Button, Card } from "@mui/material"
import { FC } from "react"
import { Pie, PieChart, ResponsiveContainer } from "recharts"
import { InsightAnalysis } from "../../services"

interface Props {
  data: InsightAnalysis | undefined
  className?: string
}

export const PieData: FC<Props> = (props) => {
  const { data, className } = props

  return (
    <div className={className}>
      <Card className="p-5">
        <div className="flex flex-wrap justify-between items-center mb-5">
          <h3 className="h5 card-title m-0">Analysis Current Year</h3>
          <Button className="dragHandle">
            <DragHandle />
          </Button>
        </div>

        <div className="flex">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data?.categorization.expenseCategoryGroups}
                dataKey="sumAmount"
                cx="50%"
                startAngle={90}
                endAngle={-270}
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                fill="#82ca9d"
                label
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  )
}
