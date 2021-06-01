#!/usr/bin/env node
import { add, addAsync } from "./add" 
import { subtract } from "./subtract"
import { Rectangle } from "./rectangle"

const helloWorld = (name: any) => {
  if(name){
    console.log(`hello ${name}`)
    return name
  }
}

const init = async () => {
  const rslt_0 = helloWorld('Fred')
  const rslt_1 = helloWorld(1)
  const rslt_2 = helloWorld({name: 'Fred'})
  add(1,2)
  addAsync(3,5)
  subtract(5,3)
  const rectangle = new Rectangle(10, 5)
  const areaFn = rectangle.getAreaFn()
  console.log('areaFN()', areaFn())
  add.call(undefined, 1,2)
}

init()