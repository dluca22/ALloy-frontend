// interface that describe the structure of data to recieve from backend for the specific machine data

export interface MachineDetail {
    id:number,
    name:string,
    sector:number,
    online:number,
    min_temp:number,
    max_temp:number,
    pressure_unit:string,
    min_pressure:number | null,
    max_pressure:number | null,
    flow_rate:number,
    flow_rate_unit:string
}