import React, {useEffect, useRef, useState} from "react";
import {ChangeBox, ChangeButton, ChangeInput} from "../styled/Tabs";
import {useOutside} from "../hooks/outside.hook";
import {ChangeTextBox} from "../styled/Desktop";

export const ChangeText = props => {
  const wrapRef = useRef(null)
  const inRef = useRef(null)
  const [input, setInput] = useState(props.value)

  useOutside(wrapRef, props.onClose)

  useEffect(() => {inRef.current.focus()}, [])

  return (
    <ChangeTextBox
      ref={wrapRef}
      style={{
        top: props.position.top,
        bottom: props.position.bottom,
        left: props.position.left,
        right: props.position.right,
      }}
    >
      <ChangeBox>
        <ChangeInput
          ref={inRef}
          value={input}
          onChange={v => setInput(v.target.value)}
        />
        <ChangeButton
          className="material-icons"
          primary
          onClick={() => {
            props.onDone(input)
            props.onClose()
          }}
        >done</ChangeButton>
        <ChangeButton
          className="material-icons"
          onClick={()=>props.onClose()}
        >
          close
        </ChangeButton>
      </ChangeBox>
    </ChangeTextBox>
  )
}