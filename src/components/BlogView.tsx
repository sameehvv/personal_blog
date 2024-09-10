import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const BlogView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const [content, setContent] = useState<string>('');
  const title = location.state?.title || 'Blog Details';

  useEffect(() => {
    const loadBlog = async () => {
      try {
        const filePath = `/blogs/${id}.md`;
        const response = await fetch(filePath);
        if (!response.ok) {
          throw new Error('Blog not found');
        }
        const text = await response.text();
        setContent(text);
      } catch (error) {
        console.error('Error loading blog:', error);
      }
    };

    loadBlog();
  }, [id]);

  const renderers = {
    code({ node, inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter
          style={dracula}
          language={match[1]}
          PreTag="div"
          {...props}
          className="rounded-lg p-4 overflow-x-auto"
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className="bg-gray-800 text-red-500 rounded-md px-1 py-0.5 break-words">
          {children}
        </code>
      );
    },
    h1: ({ node, ...props }: any) => (
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4" {...props} />
    ),
    h2: ({ node, ...props }: any) => (
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-200 mb-3" {...props} />
    ),
    h3: ({ node, ...props }: any) => (
      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-300 mb-2" {...props} />
    ),
    h4: ({ node, ...props }: any) => (
      <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-400 mb-2" {...props} />
    ),
    p: ({ node, ...props }: any) => (
      <p className="text-sm sm:text-base md:text-md lg:text-lg leading-relaxed mb-4" {...props} />
    ),
    a: ({ node, ...props }: any) => (
      <a className="text-blue-500 hover:underline" {...props}>
        {props.children}
      </a>
    ),
    ul: ({ node, ...props }: any) => (
      <ul className="list-disc list-inside text-sm sm:text-base md:text-md lg:text-lg mb-4 ml-8" {...props} />
    ),
    ol: ({ node, ...props }: any) => (
      <ol className="list-decimal list-inside text-sm sm:text-base md:text-md lg:text-lg mb-4 ml-4" {...props} />
    ),
    li: ({ node, ...props }: any) => <li className="text-sm sm:text-base md:text-md lg:text-lg mb-2" {...props} />,
    img: ({ src, alt, title }: any) => (
      <img
        src={src}
        alt={alt}
        title={title}
        style={{
          maxWidth: '100%',
          height: 'auto',
          display: 'block',
          margin: '0 auto',
          border: '1px solid black',
        }}
        className="my-4"
      />
    ),
  };

  return (
    <div className="min-h-screen bg-zinc-900 pt-20 p-3 text-zinc-900">
      <Navbar />
      <div className="container mx-auto py-8 px-4 max-w-5xl">
        <h1 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-gray-100 mb-6 font-mono">{title}</h1>
        <div className="bg-zinc-900 rounded-lg shadow-md p-1 text-gray-100 break-words font-mono">
          <ReactMarkdown
            children={content}
            remarkPlugins={[remarkGfm]}
            components={renderers}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogView;
