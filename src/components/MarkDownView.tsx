import { styled } from '@mui/material/styles';
import { FC, ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import remarkGfm from 'remark-gfm';

type Props = {
  className?: string;
  children?: ReactNode;
  markdown: string;
};

const SC = {
  MarkDown: styled('div')(({ theme }) => ({})),
  H1: styled('h1')(({ theme }) => ({
    fontSize: '32px',
    borderBottom: '1px solid #ddd',
    lineHeight: '1.4',
    margin: '40px 0 16px',
  })),
  H2: styled('h2')(({ theme }) => ({
    fontSize: '28px',
    borderBottom: '1px solid #ddd',
    lineHeight: '1.4',
    paddingBottom: '1px',
    margin: '40px 0 24px',
  })),
  H3: styled('h3')(({ theme }) => ({
    fontSize: '22px',
    lineHeight: '1.4',
    margin: '32px 0 16px',
  })),
  Strong: styled('strong')(({ theme }) => ({})),
  Table: styled('table')(({ theme }) => ({
    border: '1px solid black',
    minWidth: '200px',
  })),
  Th: styled('th')(({ theme }) => ({
    border: '1px solid black',
  })),
  Td: styled('td')(({ theme }) => ({
    border: '1px solid black',
  })),
};

const MarkDownView: FC<Props> = ({ markdown }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1({ className, children, ...props }) {
          return <SC.H1 className={className}>{children}</SC.H1>;
        },
        h2({ className, children, ...props }) {
          return <SC.H2 className={className}>{children}</SC.H2>;
        },
        h3({ className, children, ...props }) {
          return <SC.H3 className={className}>{children}</SC.H3>;
        },
        table({ className, children, ...props }) {
          return <SC.Table className={className}>{children}</SC.Table>;
        },
        th({ className, children, ...props }) {
          return <SC.Th className={className}>{children}</SC.Th>;
        },
        td({ className, children, ...props }) {
          return <SC.Td className={className}>{children}</SC.Td>;
        },
        strong({ className, children, ...props }) {
          return <SC.Strong className={className}>{children}</SC.Strong>;
        },
        code({ inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter language={match[1]} PreTag="div" {...props}>
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
};

export default MarkDownView;
