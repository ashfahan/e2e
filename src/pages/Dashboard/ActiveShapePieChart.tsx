import { DragIndicator } from "@mui/icons-material"
import { Button, Card, Tooltip } from "@mui/material"
import { FC, useState } from "react"
import { Legend, Pie, PieChart, PieProps, ResponsiveContainer, Sector } from "recharts"
import { RADIAN } from "../../helpers/contants"
import { InsightAnalysis } from "../../services"

interface Props {
  data: InsightAnalysis | undefined
  className?: string
}

const renderActiveShape: PieProps["activeShape"] = (props) => {
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload: { name },
    percent,
    value,
  } = props
  const sin = Math.sin(-RADIAN * midAngle)
  const cos = Math.cos(-RADIAN * midAngle)
  const sx = cx + (outerRadius + 10) * cos
  const sy = cy + (outerRadius + 10) * sin
  const mx = cx + (outerRadius + 30) * cos
  const my = cy + (outerRadius + 30) * sin
  const ex = mx + (cos >= 0 ? 1 : -1) * 22
  const textAnchor = cos >= 0 ? "start" : "end"

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${my}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={my} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={my} dy={-18} textAnchor={textAnchor} fill="#999">
        {name}
      </text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={my} textAnchor={textAnchor} fill="#333">
        {Math.round(value)}
      </text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={my} dy={18} textAnchor={textAnchor} fill="#999">
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    </g>
  )
}

export const ActiveShapePieChart: FC<Props> = (props) => {
  const { data, className } = props
  const [active, setActive] = useState(0)

  return (
    <div className={className}>
      <Card className="p-5">
        <div className="flex flex-wrap justify-between items-center mb-5">
          <h3 className="h5 card-title m-0">Income Category Groups</h3>
          <Tooltip title="Drag me" placement="top">
            <Button className="dragHandle">
              <DragIndicator />
            </Button>
          </Tooltip>
        </div>

        <div className="flex">
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                activeIndex={active}
                activeShape={renderActiveShape}
                data={data?.categorization.expenseCategoryGroups}
                cx="50%"
                cy="50%"
                startAngle={90}
                endAngle={-270}
                innerRadius={60}
                paddingAngle={1}
                outerRadius={80}
                fill="#8884d8"
                dataKey="sumAmount"
                onMouseEnter={(_, index) => setActive(index)}
              />
              <Legend wrapperStyle={{ fontSize: "10px", paddingTop: "1em" }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  )
}
