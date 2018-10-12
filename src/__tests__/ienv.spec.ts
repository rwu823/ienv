import { isNode, Global } from '../'

describe('Test ienv Spec', () => {
  it('In Jest env isNode should be true', async () => {
    expect(isNode).toBe(true)
  })

  it('global is equal to global', async () => {
    expect(Global).toBe(global)
  })
})
