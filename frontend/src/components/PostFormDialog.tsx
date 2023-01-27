// 카테고리 설정, 글 미리보기 글 썸네일, 비공개 공개 등등을 입력받는 모달
import { styled } from '@mui/material/styles';
import { FC, ReactNode, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { PostInput } from '~/types/global';
import SelectBox from './SelectBox';

type Props = {
  className?: string;
  children?: ReactNode;
  open: boolean;
  onSubmit: (inputData: PostInput) => void;
  onClose: () => void;
};

const SC = {
  PostFormDialog: styled(Dialog)(({ theme }) => ({})),
  PostFormDialogTitle: styled(DialogTitle)(({ theme }) => ({
    minWidth: '500px',
  })),
  PostFormDialogContent: styled(DialogContent)(({ theme }) => ({})),
  PostFormSelectBox: styled(SelectBox)(({ theme }) => ({
    width: '120px',
  })),
};

const PostFormDialog: FC<Props> = ({ open, onClose, onSubmit }) => {
  const handleSubmit = () => {
    onSubmit(undefined);
  };

  const handleClose = () => {
    onClose();
  };

  const items = [
    {
      key: 1,
      value: 'aaa',
    },
    {
      key: 2,
      value: 'bbb',
    },
    {
      key: 3,
      value: 'ccc',
    },
  ];
  const [categoryId, setCategoryId] = useState<string | number>();

  return (
    <SC.PostFormDialog open={open} onClose={handleClose} maxWidth={false}>
      <SC.PostFormDialogTitle>글 작성완료하기</SC.PostFormDialogTitle>
      <SC.PostFormDialogContent>
        <SelectBox
          sx={{ width: '120px', height: '60px', marginTop: '8px' }}
          items={items}
          label="카테고리"
          selectedValue={categoryId}
          setSelectedValue={setCategoryId}
        />
        <TextField
          autoFocus
          margin="dense"
          label="미리보기 내용"
          type="email"
          fullWidth
          multiline
          rows={5}
        />
      </SC.PostFormDialogContent>
      <DialogActions>
        <Button onClick={handleClose}>취소</Button>
        <Button onClick={handleSubmit}>작성하기</Button>
      </DialogActions>
    </SC.PostFormDialog>
  );
};

export default PostFormDialog;
