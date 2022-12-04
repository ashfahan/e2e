export interface InsightAnalysis {
  requestBy: string
  requestSubject: string
  requestDate: string
  holderName: string
  customerAddress: string
  customerPostalCode: string
  customerPhone: string
  bankName: string
  currency: string
  accountNumber: string
  country: string
  countryCode: string
  periodStart: Date
  periodEnd: Date
  months: number
  quarters: number
  incomeTransactionsCount: number
  expenseTransactionsCount: number
  simpleScore: number
  transactionCount: number
  accountType: string
  riskScore: number
  networkScore: number
  identityScore: number
  categorization: Categorization
  kycResult: KycResult
  analysisCurrentYear: AnalysisCurrentYear
  tbScoreModel: Record<string, number>
}

export interface AnalysisCurrentYear {
  year: number
  month: string
  monthAmounts: Amount[]
  totalIncome: number
  totalExpense: number
  totalSaving: number
  minIncome: number
  minExpense: number
  maxIncome: number
  maxExpense: number
  aveIncome: number
  aveExpense: number
  aveSaving: number
  quarterAmounts: Amount[]
}

export interface Amount {
  income: number
  expense: number
  saving: number
  date: string
}

export interface Categorization {
  incomeTotalAmountAve: number
  expenseTotalAmountAve: number
  incomeMonthlyGroupTransactions: MonthlyGroupTransaction[]
  expenseMonthlyGroupTransactions: MonthlyGroupTransaction[]
  incomeCategoryGroups: CategoryGroup[]
  expenseCategoryGroups: CategoryGroup[]
  monthlyAggregateAmountLastYear: MonthlyAggregateAmount
  monthlyAggregateAmountTotal: MonthlyAggregateAmount
}

export interface CategoryGroup {
  name: string
  secondaryName: null | string
  sumAmount: number
  percentage: number
  categoryId: string
}

export interface MonthlyGroupTransaction {
  month: number
  year: number
  monthlyTransactions: MonthlyTransaction[]
}

export interface MonthlyTransaction {
  amount: number
  transactionId: null
  createDate: Date
  description: null
  dispensableAmount: number
  notes: null
}

export interface MonthlyAggregateAmount {
  incomeColumnSeries: ColumnSery[]
  expenseColumnSeries: ColumnSery[]
  savingColumnSeries: ColumnSery[]
  averageBalanceColumnSeries: ColumnSery[]
}

export interface ColumnSery {
  amount: number
  date: string
}

export interface KycResult {
  name: string
  recordUpdate: string
  category: string
  subCategory: string
  pepStatus: string
  specialInterestCategory: string
  sanction: string
  gender: string
  dateOfBirth: string
  placeOfBirth: string
  citizenship: string
  identificationNumber: string
  position: string
  address: string
  postCode: string
  phone: string
}
