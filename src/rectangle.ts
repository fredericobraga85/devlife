export class Rectangle {
  width: number
  height: number

  constructor(w: number, h:number){
    this.width = w
    this.height = h
  }


  //noImplicitThis : raise error on impled this
  // getAreaFn = ():() => number => {
  //   return function ():number {    
  //     return this.width * this.height
  //   }
  // }

  getAreaFn = ():() => number => {
    return ():number =>  {
      return this.width * this.height
    }
  }

  //strictNullChecks
  getWidth(): number | undefined{
    if(this.width){
      return this.width
    }
  }

}