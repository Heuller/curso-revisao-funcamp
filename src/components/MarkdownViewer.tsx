import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Lightbulb, AlertTriangle, Bookmark, BookOpen, CheckCircle2 } from 'lucide-react';

interface MarkdownViewerProps {
  content: string;
  className?: string;
}

// Helper to recursively extract plain text from React children
function extractText(node: any): string {
  if (!node) return '';
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(extractText).join(' ');
  if (typeof node === 'object' && node.props && node.props.children) {
    return extractText(node.props.children);
  }
  return '';
}

export const MarkdownViewer: React.FC<MarkdownViewerProps> = ({
  content,
  className = '',
}) => {
  return (
    <div className={`markdown-container text-slate-800 ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-7 mb-4 pb-2 border-b border-slate-200">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-7 mb-4 flex items-center gap-2">
              <span className="w-2.5 h-6 bg-indigo-600 rounded-full inline-block shrink-0" />
              <span>{children}</span>
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight mt-6 mb-3 flex items-center gap-2.5 bg-gradient-to-r from-slate-100/90 to-slate-50 border border-slate-200 px-4 py-3 rounded-xl shadow-xs">
              <Bookmark className="w-4 h-4 text-indigo-600 shrink-0" />
              <span className="leading-snug">{children}</span>
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-sm sm:text-base font-bold text-indigo-950 mt-5 mb-2.5 flex items-center gap-2 uppercase tracking-wide">
              <span className="w-1.5 h-3.5 bg-indigo-500 rounded-full inline-block shrink-0" />
              <span>{children}</span>
            </h4>
          ),
          p: ({ children }) => (
            <p className="text-slate-700 leading-relaxed text-[15px] sm:text-[15.5px] mb-4 font-normal tracking-normal last:mb-0">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="my-3 space-y-2.5 pl-1 list-none">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="my-3 space-y-2.5 pl-2 list-decimal list-inside text-slate-700 text-[15px] font-medium marker:text-indigo-600 marker:font-bold">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="flex items-start gap-3 text-slate-700 text-[15px] leading-relaxed">
              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
              <div className="flex-1 min-w-0">{children}</div>
            </li>
          ),
          strong: ({ children }) => (
            <strong className="font-bold text-slate-950">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="italic text-slate-800">
              {children}
            </em>
          ),
          blockquote: ({ children }) => {
            const rawText = extractText(children);
            const isWarning = rawText.includes('🚨') || rawText.includes('Atenção') || rawText.includes('ERRADO') || rawText.includes('⚠️') || rawText.includes('Pegadinha') || rawText.includes('Cuidado');
            const isTip = rawText.includes('💡') || rawText.includes('Dica') || rawText.includes('Princípio') || rawText.includes('Macete') || rawText.includes('Obrigatório') || rawText.includes('Regra de Ouro');
            const isSuccess = rawText.includes('✅') || rawText.includes('Correto') || rawText.includes('Vencedor');

            if (isWarning) {
              return (
                <div className="my-5 p-4 sm:p-5 rounded-2xl bg-amber-50/90 border-l-4 border-amber-500 border border-amber-200/70 shadow-xs flex items-start gap-3.5 text-amber-950">
                  <div className="p-2 bg-amber-100 rounded-xl text-amber-700 shrink-0 mt-0.5">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div className="text-[14.5px] sm:text-[15px] leading-relaxed flex-1 prose-p:mb-2 last:prose-p:mb-0 font-medium">
                    {children}
                  </div>
                </div>
              );
            }

            if (isTip) {
              return (
                <div className="my-5 p-4 sm:p-5 rounded-2xl bg-indigo-50/90 border-l-4 border-indigo-600 border border-indigo-200/70 shadow-xs flex items-start gap-3.5 text-indigo-950">
                  <div className="p-2 bg-indigo-100 rounded-xl text-indigo-700 shrink-0 mt-0.5">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <div className="text-[14.5px] sm:text-[15px] leading-relaxed flex-1 prose-p:mb-2 last:prose-p:mb-0 font-medium">
                    {children}
                  </div>
                </div>
              );
            }

            if (isSuccess) {
              return (
                <div className="my-5 p-4 sm:p-5 rounded-2xl bg-emerald-50/90 border-l-4 border-emerald-600 border border-emerald-200/70 shadow-xs flex items-start gap-3.5 text-emerald-950">
                  <div className="p-2 bg-emerald-100 rounded-xl text-emerald-700 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="text-[14.5px] sm:text-[15px] leading-relaxed flex-1 prose-p:mb-2 last:prose-p:mb-0 font-medium">
                    {children}
                  </div>
                </div>
              );
            }

            return (
              <div className="my-5 p-4 sm:p-5 rounded-2xl bg-slate-50 border-l-4 border-slate-400 border border-slate-200/80 shadow-xs flex items-start gap-3.5 text-slate-800">
                <div className="p-2 bg-slate-200/70 rounded-xl text-slate-700 shrink-0 mt-0.5">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="text-[14.5px] sm:text-[15px] leading-relaxed flex-1 prose-p:mb-2 last:prose-p:mb-0">
                  {children}
                </div>
              </div>
            );
          },
          code: ({ children }) => (
            <code className="px-1.5 py-0.5 bg-slate-100 text-indigo-700 font-mono text-xs font-semibold rounded border border-slate-200">
              {children}
            </code>
          ),
          hr: () => (
            <hr className="my-6 border-slate-200/80" />
          ),
          table: ({ children }) => (
            <div className="my-5 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white text-slate-900">
              <table className="w-full text-sm text-left border-collapse min-w-[540px]">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-slate-100 text-slate-900 uppercase tracking-wider text-xs border-b border-slate-200 font-extrabold">
              {children}
            </thead>
          ),
          th: ({ children }) => (
            <th className="px-5 py-3.5 font-black text-slate-900 border-r border-slate-200 last:border-r-0">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-5 py-3.5 border-b border-slate-100 text-slate-700 border-r border-slate-100 last:border-r-0 align-top text-xs sm:text-sm">
              {children}
            </td>
          ),
          tr: ({ children }) => (
            <tr className="hover:bg-slate-50/80 transition-colors odd:bg-white even:bg-slate-50/50">
              {children}
            </tr>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
