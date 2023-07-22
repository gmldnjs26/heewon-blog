// 카테고리 설정, 글 미리보기 글 썸네일, 비공개 공개 등등을 입력받는 모달
import { styled } from '@mui/material/styles'
import { FC, ReactNode } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { Category, PostInput } from '~/types/global'
import SelectBox from './SelectBox'
import RadioGroup from './RadioGroup'

import { postStatusList } from '~/utils/const'

type Props = {
  className?: string
  children?: ReactNode
  postInput: PostInput
  categories: Category[]
  open: boolean
  onCreate: () => void
  onClose: () => void
  onChange: (key: string, value: string | number) => void
}

const SC = {
  PostFormDialog: styled(Dialog)(({ theme }) => ({})),
  PostFormDialogTitle: styled(DialogTitle)(({ theme }) => ({
    minWidth: '500px',
  })),
  PostFormDialogContent: styled(DialogContent)(({ theme }) => ({})),
}

const PostFormDialog: FC<Props> = ({
  open,
  categories,
  postInput,
  onClose,
  onCreate,
  onChange,
}) => {
  const handleChange = (key: string, value: number | string) => {
    onChange(key, value)
  }

  const handleCreate = () => {
    onCreate()
  }

  const handleClose = () => {
    onClose()
  }
  // CHATGPT:
  // const items = categories.reduce((acc, category) => {
  //   const recursion = (parentName, parent) => {
  //     if (parent.children.length > 0) {
  //       parent.children.forEach((children) => {
  //         const childrenName = `${parentName}_${children.name}`;
  //         acc.push({
  //           key: children.id,
  //           value: childrenName,
  //         });
  //         recursion(childrenName, children);
  //       });
  //     }
  //   };
  //   acc.push({
  //     key: category.id,
  //     value: category.name,
  //   });
  //   recursion(category.name, category);
  //   return acc;
  // }, []);

  const categoryList = []
  categories.forEach((category) => {
    categoryList.push({
      key: category.id,
      value: category.name,
    })
    const recursion = (parentName, parent) => {
      if (parent.children.length > 0) {
        parent.children.forEach((children) => {
          const childrenName = `${parentName}-${children.name}`
          categoryList.push({
            key: children.id,
            value: childrenName,
          })
          recursion(childrenName, children)
        })
      }
    }
    recursion(category.name, category)
  })

  return (
    <SC.PostFormDialog open={open} onClose={handleClose} maxWidth={false}>
      <SC.PostFormDialogTitle>글 작성완료하기</SC.PostFormDialogTitle>
      <SC.PostFormDialogContent>
        <RadioGroup
          sx={{ display: 'block', marginBottom: '16px' }}
          items={postStatusList}
          selectedValue={postInput.status}
          setSelectedValue={(value: string) => handleChange('status', Number(value))}
          row={true}
        />
        <SelectBox
          sx={{ width: '120px', marginBottom: '24px' }}
          size="small"
          items={categoryList}
          label="카테고리"
          selectedValue={postInput.categoryId}
          setSelectedValue={(value: string) => handleChange('categoryId', Number(value))}
        />
        <TextField
          autoFocus
          margin="dense"
          label="미리보기 내용"
          type="text"
          fullWidth
          value={postInput.previewContents}
          onChange={(e) => handleChange('previewContents', e.target.value)}
          multiline
          rows={5}
        />
      </SC.PostFormDialogContent>
      <DialogActions>
        <Button onClick={handleClose}>취소</Button>
        <Button onClick={handleCreate}>작성하기</Button>
      </DialogActions>
    </SC.PostFormDialog>
  )
}

export default PostFormDialog
