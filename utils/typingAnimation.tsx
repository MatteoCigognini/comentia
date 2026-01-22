import { useEffect, useRef, useState } from "react";

type Options = {
    typingSpeed?: number;
    lineDelay?: number;
    loopDelay?: number;
};

export function useTypingAnimation(
    lines: string[],
    {
        typingSpeed = 40,
        lineDelay = 400,
        loopDelay = 3000,
    }: Options = {}
) {
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const currentLine = lines[lineIndex];

        // 🔁 restart
        if (!currentLine) {
            timeoutRef.current = setTimeout(() => {
                setLineIndex(0);
                setCharIndex(0);
            }, loopDelay);
            return;
        }

        // ⌨️ typing
        if (charIndex < currentLine.length) {
            timeoutRef.current = setTimeout(() => {
                setCharIndex((c) => c + 1);
            }, typingSpeed);
            return;
        }

        // ⏭️ next line
        timeoutRef.current = setTimeout(() => {
            setLineIndex((l) => l + 1);
            setCharIndex(0);
        }, lineDelay);

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [charIndex, lineIndex, lines, typingSpeed, lineDelay, loopDelay]);

    // 🔥 testo DERIVATO (qui non può MAI esserci undefined)
    const renderedText = lines
        .slice(0, lineIndex)
        .join("\n") +
        (lineIndex < lines.length
            ? "\n" + lines[lineIndex].slice(0, charIndex)
            : "");

    return renderedText.trimStart();
}