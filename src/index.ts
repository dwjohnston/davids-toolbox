export function round(number :number, increment :number , offset:number) : number {
    return Math.ceil((number - offset) / increment ) * increment + offset;
}

export function random(min:number, max :number) :number {
    return Math.random() * (max - min) + min;
}

export function randomInt(min: number, max: number) :number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomStep(min: number, max:number, step:number, offset: number =0) {
    return round(random(min, max), step, offset); 
}

export function fullClone<T>  (o : T) : T {
    return <T>(<any>Object).assign( Object.create( Object.getPrototypeOf(o)), o); 
}