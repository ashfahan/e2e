import { DragHandle } from "@mui/icons-material"
import { Button, Card, SxProps, Theme, Tooltip } from "@mui/material"
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid"
import { FC } from "react"
import { InsightAnalysis, MonthlyTransaction } from "../../services"

interface Props {
  data: InsightAnalysis | undefined
  className?: string
}

const DataGridStyle: SxProps<Theme> = {
  border: "0 !important",
  ".MuiDataGrid-toolbarContainer": { flexDirection: "row-reverse" },
}

export const Transations: FC<Props> = (props) => {
  const { data, className } = props

  const columns: GridColDef<MonthlyTransaction & { id: number }>[] = [
    { flex: 1, field: "id", headerName: "Id" },
    {
      flex: 1,
      field: "asd",
      headerName: "Type",
      sortable: false,
      renderCell: ({ row }) => (row.amount >= 0 ? "income" : "expense"),
    },
    { flex: 1, field: "transactionId", headerName: "Transaction Id" },
    {
      flex: 1,
      field: "createDate",
      headerName: "Date",
      renderCell: ({ value }) => new Date(value).toLocaleDateString(),
    },
    { flex: 1, field: "amount", headerName: "Amount" },
    { flex: 1, field: "dispensableAmount", headerName: "Dispensable Amount" },
    { flex: 1, field: "notes", headerName: "Notes", sortable: false },
    { flex: 1, field: "description", headerName: "Description", sortable: false },
  ]

  const rows = [
    ...(data?.categorization.incomeMonthlyGroupTransactions ?? []),
    ...(data?.categorization.expenseMonthlyGroupTransactions ?? []),
  ]
    .flatMap((transation) => transation.monthlyTransactions)
    .map((transation, index) => ({ ...transation, id: index }))

  return (
    <div className={className}>
      <Card>
        <div className="flex flex-wrap justify-between items-center mb-5">
          <h3 className="h5 card-title m-0">Transactions History</h3>
          <Tooltip title="Drag me" placement="top">
            <Button className="dragHandle">
              <DragHandle />
            </Button>
          </Tooltip>
        </div>

        <DataGrid<MonthlyTransaction & { id: number }>
          className="h-full"
          rows={rows}
          sx={DataGridStyle}
          getRowId={(row) => row.transactionId ?? row.id}
          columns={columns}
          rowsPerPageOptions={[5, 10, 20, 50, 100]}
          autoHeight
          components={{
            Toolbar: GridToolbar,
          }}
          componentsProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          initialState={{
            pagination: { pageSize: 5 },
            sorting: {
              sortModel: [
                {
                  field: "createDate",
                  sort: "desc",
                },
              ],
            },
          }}
        />
      </Card>
    </div>
  )
}
