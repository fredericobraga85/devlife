import { subtract } from '../src/subtract'

describe('subtract', () => {
  test('should subtract 2 numbers', async () => {
    const x = 100
    const y = 5
    const rslt = subtract(100,5)
    expect(rslt).toBe(95)
  })
})