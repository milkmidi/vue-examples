import React from 'react';

import styled, { css } from 'styled-components';

interface Props {
  disabled:boolean;
  value:string;
  onChange: ()=>void;
  text:string;
}

const StyledCheckbox = styled.div`
  margin-left: 2px;
  margin-right: 8px;
  display: inline-block;
  position: relative;
  background-color: white;
  ${(props) => props.disabled && css`
    pointer-events: none;
    opacity: .4;
  `}
  label {
    display: flex;
    cursor: pointer;
    color: black;
    position: relative;
    &:hover {
      i {
        border-color: #3498db;
      }
    }
    input[type="checkbox"]{
      position: absolute;
      visibility: hidden;
      &:checked + i{
        &:after {
          transform: scale(1);
        }
      }
    }
    i {
      align-self: center;
      margin-right: 5px;
      display: inline-block;
      width: 18px;
      height: 18px;
      border: 1px solid black;
      position :relative;
      transition: border 0.35s ease;
      &:after {
        display: block;
        transition: all 0.35s ease;
        transform: scale(0);
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: #3498db;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
      }
    }
    span {
      font-size: 18px;
      line-height: 20px;
    }
  }
`;


export default function Checkbox({
  disabled, value, onChange, text,
}:Props) {
  return (
    <StyledCheckbox disabled={disabled}>
      <label>
        <input type="checkbox" value={value} onChange={onChange} />
        <i />
        <span>{ text }</span>
      </label>
    </StyledCheckbox>
  );
}
