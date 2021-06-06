export {}

describe('type guards', () => {
  test('instance of', async () => {

    const date1 = new Date()
    expect(date1 instanceof Date).toBeTruthy()

    const date2 = '2020-01-01T00:00:00Z' as unknown as  Date
    console.log(typeof date2)
    expect(date2 instanceof Date).toBeFalsy()
    expect(typeof date2).toEqual('string')
    expect(date2 instanceof String).toBeFalsy()
  })
})