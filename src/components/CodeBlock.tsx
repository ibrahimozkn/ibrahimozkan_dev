import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface CodeBlockProps {
  code: string | object;
  language?: string;
}

export default function CodeBlock({ code, language = 'json' }: CodeBlockProps) {
  const codeString = typeof code === 'string' ? code : JSON.stringify(code, null, 2);

  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5 transition-colors hover:bg-white/10">
      {/* Mac-style window controls */}
      <div className="flex p-3">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="ml-2 h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="ml-2 h-3 w-3 rounded-full bg-green-500"></div>
      </div>
      <div className="px-3 pb-3">
        <SyntaxHighlighter
          language={language}
          style={atomOneDark}
          customStyle={{
            backgroundColor: 'transparent',
            padding: '0',
            margin: '0',
            fontSize: '0.875rem',
            lineHeight: '1.5',
          }}
          wrapLines={true}
          wrapLongLines={true}
          showLineNumbers={false}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
