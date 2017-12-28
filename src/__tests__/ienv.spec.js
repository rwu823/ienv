const ienv = require('../')

describe('Test ienv Spec', () => {
  it('ienv should not be modified', async () => {
    expect(() => {
      ienv.env = 'modified'
    }).toThrow()

    expect(ienv.env).toBe('test')
  })

  it('In Jest env isNode should be true', async () => {
    expect(ienv.isNode).toBe(true)
  })

  it('global is equal to global', async () => {
    expect(ienv.global).toBe(global)
  })
})
