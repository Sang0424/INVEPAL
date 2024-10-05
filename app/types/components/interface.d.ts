export interface Indice{
    "Date":string,
    "Open": number,
    "High": number,
    "Low": number,
    "Close": number,
    "Volume": number,
    "Change": number,
    "UpDown":number,
    "Comp":number,
    "Amount": number,
    "MarCap": number
};

export interface IndiceData{
    'kospi':Indice[],
    'kosdaq':Indice[],
    'ks200':Indice[]
}

export interface IndexChartProps{
    data: Indice[],
    indice: string
}

export interface Stock{
    'Code':string
    'ISU_CD':string
    'Name':string
    'Market':string
    'Dept':string
    'Close':string
    'ChangeCode':string
    'Changes':number
    'ChagesRatio':number
    'Open':number
    'High':number
    'Low':number
    'Volume':number
    'Amount':number
    'Marcap':number
    'Stocks':number
    'MarketId':string
}