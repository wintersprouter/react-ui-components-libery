import React from 'react'

import Button from '../components/Button'

export default {
  title: '數據輸入元件/Button',
  component: Button
}

const Template = args => <Button {...args} />
export const Default = Template.bind({})
Default.args = {
  children: 'Button'
}
