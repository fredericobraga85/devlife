export const promise1 = async ():Promise<string>  => {

  const rslt2 = promise2() 
  console.log('inside promise1', rslt2)  
  return rslt2
}

const promise2 = async (): Promise<string>  => {

  let response = promise3() 
  console.log('inside promise2', response)  
  return response
}

const promise3 = async (): Promise<string>  => {

  let response = promise4() 
  console.log('inside promise3', response)  
  return response
}

const promise4 = async (): Promise<string>  => {

  let response = 'response4'
  console.log('inside promise4', response)  
  return response
}


async function  hey() {
  const p1 = await promise1()
  console.log('hey', p1)
}

hey()