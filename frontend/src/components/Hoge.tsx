import { styled } from '@mui/material/styles'
import { FC, ReactNode } from 'react'

type Props = {
  className?: string
  children?: ReactNode
}

const SC = {
  Hoge: styled('div')(({ theme }) => ({})),
}

const Hoge: FC<Props> = () => {
  return <div></div>
}

export default Hoge
