import React from 'react';
import styled from 'styled-components';

const StyledSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  span{
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;
    border-radius: 34px;
    &:before {
      border-radius: 50%;
      position: absolute;
      content: '';
      width: 26px;
      height: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: .4s;
    }
  }
  input:checked + span {
    background-color: #2196F3;
    &:before{
      transform: translateX(26px);
    }
  }
  input:focus + span{
    box-shadow: 0 0 1px #2196F3;
  }
`;

interface Props {
  checked: boolean;
  onChange: (checked:boolean)=> void;
}
export default function Switch(props:Props) {
  const { checked: propsChecked, onChange } = props;
  const [checked, setChecked] = React.useState(!!propsChecked);
  const atInputChagne = React.useCallback((e:React.FormEvent<HTMLInputElement>) => {
    const isChecked:boolean = e.target.checked;
    setChecked(isChecked);
    if (onChange) {
      onChange(isChecked);
    }
  }, [onChange]);
  return (
    <StyledSwitch>
      <input
        type="checkbox"
        checked={checked}
        onChange={atInputChagne}
      />
      <span />
    </StyledSwitch>
  );
}
