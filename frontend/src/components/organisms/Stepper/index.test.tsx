import React from 'react'
import 'jest'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Stepper } from './index'

it('renders Stepper Labels', () => {
  render(
    <Stepper
      stepDataArray={[
        { label: 'Amount', content: '<p>Transfer Amount Details</p> ' },
        { label: 'You', content: '<p>You</p>' },
        { label: 'Recipient', content: '<p>Recipient</p>' },
        { label: 'Verification', content: '<p>Verification</p>' },
        { label: 'Review', content: '<p>Review</p>' },
        { label: 'Verification', content: '<p>Verification</p>' },
      ]}
      activeTab={1}
    />
  )
})

it('renders Stepper Labels tab 0', () => {
  render(
    <Stepper
      stepDataArray={[
        { label: 'Amount', content: '<p>Transfer Amount Details</p> ' },
        { label: 'You', content: '<p>You</p>' },
        { label: 'Recipient', content: '<p>Recipient</p>' },
        { label: 'Verification', content: '<p>Verification</p>' },
        { label: 'Review', content: '<p>Review</p>' },
        { label: 'Verification', content: '<p>Verification</p>' },
      ]}
      activeTab={0}
    />
  )
})

it('renders Stepper Labels tab 1', () => {
  render(
    <Stepper
      stepDataArray={[
        { label: 'Amount', content: '<p>Transfer Amount Details</p> ' },
        { label: 'You', content: '<p>You</p>' },
        { label: 'Recipient', content: '<p>Recipient</p>' },
        { label: 'Verification', content: '<p>Verification</p>' },
        { label: 'Review', content: '<p>Review</p>' },
        { label: 'Verification', content: '<p>Verification</p>' },
      ]}
      activeTab={5}
    />
  )
})
