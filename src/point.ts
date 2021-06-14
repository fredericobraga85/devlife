class Point {
  protected _x:number;
  get x():number{
    return this._x;
  }

  set x(value:number){
    this._x = value
  }

}

const p = new Point()
p.x = 2
console.log(p)