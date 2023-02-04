// 카테고리 설정, 글 미리보기 글 썸네일, 비공개 공개 등등을 입력받는 모달
import { styled } from '@mui/material/styles';
import { FC, ReactNode, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { PostInput, PostInputStep2 } from '~/types/global';
import SelectBox from './SelectBox';
import RadioGroup from './RadioGroup';

import { postStatusList } from '~/utils/const';

type Props = {
  className?: string;
  children?: ReactNode;
  postInput: PostInput
  open: boolean;
  onSubmit: (inputData: PostInputStep2) => void;
  onClose: () => void;
};

const SC = {
  PostFormDialog: styled(Dialog)(({ theme }) => ({})),
  PostFormDialogTitle: styled(DialogTitle)(({ theme }) => ({
    minWidth: '500px',
  })),
  PostFormDialogContent: styled(DialogContent)(({ theme }) => ({})),
};

const PostFormDialog: FC<Props> = ({ open, onClose, onSubmit }) => {
  const [categoryId, setCategoryId] = useState<number>(0);
  const [postStatus, setPostStatus] = useState<number>(0); // 0: 공개 1: 보호 2: 비공개
  const [previewContents, setPreviewContents] = useState<string>();

  const handleSubmit = () => {
    onSubmit({
      categoryId,
      previewContents,
      password: '',
      status: postStatus,
    });
  };

  const handleClose = () => {
    onClose();
  };
  // FIXME: 카테고리 API로
  const items = [
    {
      key: 1,
      value: 'aaaaaaaaaaaaaaaaaaaaa',
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

  return (
    <SC.PostFormDialog open={open} onClose={handleClose} maxWidth={false}>
      <SC.PostFormDialogTitle>글 작성완료하기</SC.PostFormDialogTitle>
      <SC.PostFormDialogContent>
        <RadioGroup
          sx={{ display: 'block', marginBottom: '16px' }}
          items={postStatusList}
          selectedValue={postStatus}
          setSelectedValue={setPostStatus}
          row={true}
        />
        <SelectBox
          sx={{ width: '120px', marginBottom: '24px' }}
          size="small"
          items={items}
          label="카테고리"
          selectedValue={categoryId}
          setSelectedValue={setCategoryId}
        />
        <TextField
          autoFocus
          margin="dense"
          label="미리보기 내용"
          type="text"
          fullWidth
          value={previewContents}
          onChange={(e) => setPreviewContents(e.target.value)}
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