export function round(number :number, increment :number , offset:number) : number {
    return Math.ceil((number - offset) / increment ) * increment + offset;
}

