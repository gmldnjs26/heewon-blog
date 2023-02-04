import { styled } from '@mui/material/styles';
import { ChangeEvent, FC, KeyboardEvent, useState } from 'react';
import MarkDownView from './MarkDownView';
import Button from './Button';
import { getLineAndCol } from '../utils/editHelper';
import { PostInput, PostInputStep1 } from '~/types/global';

type Props = {
  className?: string;
  onClick: (inpuData: PostInputStep1) => void;
};

const SC = {
  PostFormContainer: styled('div')(({ theme }) => ({})),
  PostFormHeader: styled('div')(({ theme }) => ({
    marginBottom: '24px',
    input: {
      width: '100%',
      appearance: 'none',
      padding: '8px 12px',
      fontSize: '24px',
      borderRadius: '6px',
      border: '1px solid rgba(0, 0, 0, 0.12)',
    },
  })),
  PostFormBody: styled('div')(({ theme }) => ({
    display: 'flex',
    columnGap: '16px',
    height: 'calc(100vh - 250px)',
  })),
  PostFormSection: styled('div')(({ theme }) => ({
    flex: 1,
    background: 'white',
    padding: '8px 12px',
    borderRadius: '6px',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    overflow: 'scroll',
    textarea: {
      width: '100%',
      height: '100%',
      appearance: 'none',
      border: 'none',
      fontSize: '16px',
      resize: 'none',
    },
  })),
  PostFormFooter: styled('div')(({ theme }) => ({
    marginTop: '24px',
    textAlign: 'right',
  })),
};

const PostForm: FC<Props> = ({ className, onClick }) => {
  const [postTitle, setPostTitle] = useState('');
  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setPostTitle(e.currentTarget.value);
  };

  const [postContents, setPostContents] = useState('');
  const handleChangeContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPostContents(e.currentTarget.value);
  };
  const handleKeyDownContents = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    const { keyCode, key, currentTarget } = e;
    if (keyCode === 13 || key === 'Enter') {
      const text = currentTarget.value;
      const curPos = currentTarget.selectionStart;
      const lineInfo = getLineAndCol(text, curPos);

      const emptyCurrentLine = () => {
        const newValue = currentTarget.value.substring(0, curPos - lineInfo.curLine.length);
        setPostContents(newValue);
      };

      // "- "을 체크
      const isSymbol = lineInfo.curLine.match(/^(\s*?)\- /);

      if (isSymbol) {
        // "- " 뒤로 아무 문자도 없으면 심볼추가안함
        if (/^(\s*?)\- $/.test(lineInfo.curLine)) {
          emptyCurrentLine();
          return;
        }
        setTimeout(() => {
          setPostContents((prev) => {
            return prev + isSymbol[0];
          });
        });
      }
    }
  };
  const handleClick = () => {
    onClick({
      title: postTitle,
      contents: postContents,
      previewContents: '',
    });
  };
  return (
    <SC.PostFormContainer>
      <SC.PostFormHeader>
        <input
          type="text"
          value={postTitle}
          onChange={handleChangeTitle}
          placeholder="제목을 입력하세요"
        />
      </SC.PostFormHeader>
      <SC.PostFormBody>
        <SC.PostFormSection>
          <textarea
            value={postContents}
            onChange={handleChangeContents}
            onKeyDown={handleKeyDownContents}
          ></textarea>
        </SC.PostFormSection>
        <SC.PostFormSection>
          <MarkDownView markdown={postContents} />
        </SC.PostFormSection>
      </SC.PostFormBody>
      <SC.PostFormFooter>
        <Button onClick={handleClick}>작성하기</Button>
      </SC.PostFormFooter>
    </SC.PostFormContainer>
  );
};

export default PostForm;
