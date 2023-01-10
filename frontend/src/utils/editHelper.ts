export const getLineAndCol = (text: string, pos: number) => {
  const lines = text.split('\n');
  const beforeLines = text.substr(0, pos).split('\n');
  const line = beforeLines.length;
  const col = beforeLines[beforeLines.length - 1].length;

  const curLine = lines[beforeLines.length - 1];
  const prevLine = beforeLines.length > 1 ? beforeLines[beforeLines.length - 2] : null;
  const nextLine = lines.length > beforeLines.length ? lines[beforeLines.length] : null;

  return {
    line,
    col,
    beforeText: text.substr(0, pos),
    afterText: text.substr(pos),
    curLine,
    prevLine,
    nextLine,
  };
};
