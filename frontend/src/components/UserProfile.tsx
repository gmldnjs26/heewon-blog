import { styled } from '@mui/material/styles'
import { FC, ReactNode } from 'react'

type Props = {
  className?: string
  children?: ReactNode
  user?: {
    name: string
    profileImg: string
  }
}

const SC = {
  UserProfile: styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  })),
  UserImage: styled('img')(({ theme }) => ({
    display: 'block',
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    objectFit: 'cover',
  })),
  UserInfo: styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  })),
  UserName: styled('div')(({ theme }) => ({
    whiteSpace: 'nowrap',
  })),
}

const UserProfile: FC<Props> = ({ children }) => {
  return (
    <SC.UserProfile>
      <SC.UserImage src="img/user.png"></SC.UserImage>
      <SC.UserInfo>
        <SC.UserName>HeewonGwak</SC.UserName>
        {children}
      </SC.UserInfo>
    </SC.UserProfile>
  )
}

export default UserProfile
