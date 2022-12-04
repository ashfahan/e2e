import { DragHandle } from "@mui/icons-material"
import { Button, Card, Tooltip } from "@mui/material"
import { FC } from "react"
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts"
import { COLORS } from "../../helpers/contants"
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
          <h3 className="h5 card-title m-0">Expense Category Groups</h3>
          <Tooltip title="Drag me" placement="top">
            <Button className="dragHandle">
              <DragHandle />
            </Button>
          </Tooltip>
        </div>

        <div className="flex">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                cx="50%"
                cy="50%"
                labelLine={false}
                data={data?.categorization.incomeCategoryGroups}
                dataKey="sumAmount"
                startAngle={90}
                endAngle={-270}
                innerRadius={70}
                outerRadius={90}
                fill="#82ca9d"
                label
              >
                {data?.categorization.incomeCategoryGroups.map((entry, index) => {
                  return <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                })}
              </Pie>
              <Legend wrapperStyle={{ fontSize: "10px", paddingTop: "2em" }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  )
}
