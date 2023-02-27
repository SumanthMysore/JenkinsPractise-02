import * as React from 'react'
import { render, screen } from '@testing-library/react'
import CategorySelection from './index'
import {
  ACCOUNT_SELECT_TITLE,
  ACCOUNT_SELECT_VALUE,
  ACCOUNT_SELECT_DATA,
} from '../../../utils/constants'

describe('Should render Category Selection', () => {
  test('renders the Category Selection', () => {
    render(
      <CategorySelection
        title={ACCOUNT_SELECT_TITLE}
        subtitle={ACCOUNT_SELECT_VALUE}
        data={ACCOUNT_SELECT_DATA}
      />
    )
    const category = screen.getByTestId('category-selection')
    expect(category).toBeInTheDocument()
  })
})
