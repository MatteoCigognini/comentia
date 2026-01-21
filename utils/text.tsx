import React from "react";

export function formatText(text: string): Array<string | React.ReactNode> {
    const parts = text.split(/(\*\*.*?\*\*)/);

    return parts.flatMap((part, index) => {
        // Caso **bold**
        if (part.startsWith('**') && part.endsWith('**')) {
            return (
                <strong key={`bold-${index}`}>
                    {part.slice(2, -2)}
                </strong>
            );
        }

        // Caso testo normale con newline
        const lines = part.split('\n');

        return lines.flatMap((line, lineIndex) => {
            const key = `text-${index}-${lineIndex}`;
            return lineIndex < lines.length - 1
                ? [line, <br key={`br-${key}`} />]
                : line;
        });
    });
}

export function formatTextWithEscapes(text: string): Array<string | React.ReactNode> {
    const lines = text.split('\n');

    return lines.flatMap((line, lineIndex) => {
        const formattedLine = line.replace(/\t/g, '    ');

        return lineIndex < lines.length - 1
            ? [formattedLine, <br key={lineIndex} />]
            : [formattedLine];
    });
}

export function letterFromIndex(index: number): string {
    return String.fromCharCode(65 + index);
}
