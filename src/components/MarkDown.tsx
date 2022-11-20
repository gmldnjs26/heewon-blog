import { styled } from '@mui/material/styles';
import { FC, ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

type Props = {
  className?: string;
  children?: ReactNode;
  markdown: string;
};

const SC = {
  MarkDown: styled('div')(({ theme }) => ({})),
};

const MarkDown: FC<Props> = ({ markdown }) => {
  return (
    <ReactMarkdown
      components={{
        h1({ className, children, ...props }) {
          return <h1 className={className}>{children}</h1>;
        },
        h2({ className, children, ...props }) {
          return <h2 className={className}>{children}</h2>;
        },
        h3({ className, children, ...props }) {
          return <h3 className={className}>{children}</h3>;
        },
        code({ inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter language={match[1]} PreTag="div" {...props} style={docco}>
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

export default MarkDown;
