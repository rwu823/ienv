const ienv = require('../')

describe('Test ienv Spec', () => {
  it('ienv should not be modified', async () => {
    ienv.env = 'modified'

    expect(ienv.env).toBe('test')
  })

  it('In Jest env isNode should be true', async () => {
    expect(ienv.isNode).toBe(true)
  })

  it('global is equal to global', async () => {
    expect(ienv.global).toBe(global)
  })
})
