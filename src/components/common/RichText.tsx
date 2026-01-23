import React from 'react';

interface RichTextProps {
    text: string;
    className?: string;
}

/**
 * A lightweight component to render text with basic formatting:
 * - **bold** -> <strong>bold</strong>
 * - <br> -> <br />
 */
export default function RichText({ text, className }: RichTextProps) {
    if (!text) return null;

    // Split by <br> tags first
    const lines = text.split(/<br\s*\/?>/i);

    return (
        <span className={className}>
            {lines.map((line, lineIndex) => {
                // For each line, parse **bold** syntax
                const parts = line.split(/(\*\*.*?\*\*)/g);

                return (
                    <React.Fragment key={lineIndex}>
                        {parts.map((part, partIndex) => {
                            if (part.startsWith('**') && part.endsWith('**')) {
                                return (
                                    <strong key={partIndex}>
                                        {part.slice(2, -2)}
                                    </strong>
                                );
                            }
                            return <span key={partIndex}>{part}</span>;
                        })}
                        {lineIndex < lines.length - 1 && <br />}
                    </React.Fragment>
                );
            })}
        </span>
    );
}
