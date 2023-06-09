import { describe, expect, it } from 'vitest'

import { classNames, ModsProps } from './classNames'

describe('classNames', () => {
  it('should return base class if no mods or className providedshould return base class if no mods or className provided', () => {
    const cls = 'base-class'

    expect(classNames(cls)).toEqual('base-class')
  })

  it('should add modifiers to the class string if specified', () => {
    const cls = 'base-class'
    const mods: ModsProps = {
      'is-active': true,
      'is-disabled': false,
    }

    expect(classNames(cls, mods)).toEqual('base-class is-active')
  })

  it('adding an extra class', () => {
    const cls = 'base-class'
    const mods: ModsProps = {
      'is-active': true,
      'is-disabled': false,
    }

    const className = 'extra-class'

    expect(classNames(cls, mods, [className])).toEqual('base-class is-active extra-class')
  })
})
