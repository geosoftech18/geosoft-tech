import React from 'react';
import ReactMarkdown from 'react-markdown';
import { ReactMarkdownOptions } from 'react-markdown/lib/react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

type Props = {
  children: string;
  className?: string;
  theme?: 'markdown';
} & ReactMarkdownOptions;

const Markdown = ({
  children,
  className = '',
  theme = 'markdown',
  ...props
}: Props) => {
  return (
    <ReactMarkdown
      className={`${theme} ${className}`}
      remarkPlugins={[remarkGfm]}
      // @ts-expect-error

      rehypePlugins={[rehypeSlug, rehypeRaw]}
      // eslint-disable-next-line react/no-children-prop
      children={children}
    />
  );
};

export default Markdown;
