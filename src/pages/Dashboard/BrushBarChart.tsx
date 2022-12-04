import { DragHandle } from "@mui/icons-material"
import { Button, Card } from "@mui/material"
import { FC } from "react"
import {
  Bar,
  BarChart,
  Brush,
  CartesianGrid,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { InsightAnalysis } from "../../services"

interface Props {
  data: InsightAnalysis | undefined
  className?: string
}

export const BrushBarChart: FC<Props> = (props) => {
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
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "40px" }} />
            <ReferenceLine y={0} stroke="#000" />
            <Brush dataKey="date" height={30} stroke="#8884d8" />
            <Bar dataKey="income" fill="#8884d8" />
            <Bar dataKey="expense" fill="#82ca9d" />
            <Bar dataKey="saving" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  )
}
