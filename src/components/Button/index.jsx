import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  border: none;
  outline: none;
  min-width: 100px;
  height: 36px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
  transition: color 0.2s, background-color 0.2s, border 0.2s,
    opacity 0.2s ease-in-out;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.7;
  }
`

/**
 * `Button` 元件代表一個可點擊的按鈕，在使用者點擊之後會觸發相對應的業務邏輯。
 */
const Button = ({ props, children }) => {
  return (
    <StyledButton {...props}>
      <span>{children}</span>
    </StyledButton>
  )
}

export default Button
