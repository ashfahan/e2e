import { DragHandle } from "@mui/icons-material"
import { Button, Card, colors } from "@mui/material"
import { FC } from "react"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { InsightAnalysis } from "../../services"

interface Props {
  data: InsightAnalysis | undefined
  className?: string
}
export const MixBarChart: FC<Props> = (props) => {
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

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data?.analysisCurrentYear.monthAmounts}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="income" stackId="1" fill={colors.green[400]} />
            <Bar dataKey="expense" stackId="1" fill={colors.red[400]} />
            <Bar dataKey="saving" stackId="1" fill={colors.blue[400]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  )
}
