import * as renderer from 'react-test-renderer'
import * as React from 'react'
import Button from '../../lib/button'

describe('Button Test', () => {
  it('是个 span', () => {
    const json = renderer.create(<Button />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
