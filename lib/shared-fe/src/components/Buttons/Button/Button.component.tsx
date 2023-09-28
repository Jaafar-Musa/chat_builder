import { Button as Btn } from "@mui/material"
import { FC } from "react"
import { IButtonProps } from "./Button"
import "./Button.scss"

//todo REFACTOR
const Button:FC<IButtonProps> = ({...rest}) => {
  return (
    <Btn {...rest}/>
  )
}

export default Button