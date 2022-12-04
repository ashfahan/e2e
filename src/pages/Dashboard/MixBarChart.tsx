import { DragHandle } from "@mui/icons-material"
import { Button, Card, colors, Tooltip } from "@mui/material"
import { FC, useState } from "react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  LegendProps,
  ResponsiveContainer,
  Tooltip as RechartTooltip,
  XAxis,
  YAxis,
} from "recharts"
import { InsightAnalysis } from "../../services"

interface Props {
  data: InsightAnalysis | undefined
  className?: string
}
export const MixBarChart: FC<Props> = (props) => {
  const { data, className } = props

  const [visible, setVisible] = useState(["income", "expense"])

  const onLegendClick: LegendProps["onClick"] = ({ dataKey }) => {
    setVisible((prev) => (prev.includes(dataKey) ? prev.filter((x) => x !== dataKey) : [...prev, dataKey]))
  }

  return (
    <div className={className}>
      <Card className="p-5">
        <div className="flex flex-wrap justify-between items-center mb-5">
          <h3 className="h5 card-title m-0">Current Year Income/Expense</h3>
          <Tooltip title="Drag me" placement="top">
            <Button className="dragHandle">
              <DragHandle />
            </Button>
          </Tooltip>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data?.analysisCurrentYear.monthAmounts}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis fontSize={10} dataKey="date" />
            <YAxis fontSize={10} />
            <RechartTooltip />
            <Legend wrapperStyle={{ fontSize: "10px", paddingTop: "1em" }} onClick={onLegendClick} />
            <Bar hide={!visible.includes("income")} name="Income" dataKey="income" fill={colors.green[400]} />
            <Bar hide={!visible.includes("expense")} name="Expense" dataKey="expense" fill={colors.red[400]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  )
}
