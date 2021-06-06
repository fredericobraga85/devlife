export {}

describe('symbol', () => {
  test('should not equal', async () => {

    const hello_1 = 'hello' 
    const hello_2 = 'hello'

    const hello_3 = {
      text: 'hello'
    }

    const hello_4 = {
      text: 'hello'
    }

    const symb1 = Symbol(hello_1)
    const symb2 = Symbol(hello_1)

    expect(hello_1 == hello_2).toBeTruthy()
    expect(hello_1 === hello_2).toBeTruthy()

    expect(hello_3 == hello_4).toBeFalsy()
    expect(hello_3 === hello_4).toBeFalsy()
    expect({...hello_3} === {...hello_4}).toBeFalsy()
    
    expect(hello_3).toEqual(hello_4)
    expect(symb1).not.toEqual(symb2)
  })
})