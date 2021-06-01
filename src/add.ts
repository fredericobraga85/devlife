export const add = (x:number, y: number) => {
  setTimeout(()=>{
       const rslt = x + y
      console.log('add', rslt)
      return rslt
    }, 100)
}

export const addAsync = (x:number, y:number): Promise<number> => {
  return new Promise((res,rej) => {
    setTimeout(()=>{
      const rslt = x + y
      console.log('addAsyc', rslt)
      res(rslt)
    }, 500)
  })
}