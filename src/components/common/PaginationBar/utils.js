export const BREAK = "BREAK";

export const range = (from, to, step = 1) => {
  let length = Math.floor((to - from) / step) + 1;
  return Array(length)
    .fill()
    .map((_, idx) => from + idx * step);
};

export const getPagination = (startPage, endPage, totalPages, totalNumbers) => {
  let p = range(startPage, endPage, 1);

  const hasLeftSpill = startPage > 2;
  const hasRightSpill = totalPages - endPage > 1;
  const spillOffset = totalNumbers - (p.length + 1);

  switch (true) {
    case hasLeftSpill && !hasRightSpill: {
      const extraPages = range(startPage - spillOffset, startPage - 1);
      return [BREAK, ...extraPages, ...p];
    }

    case !hasLeftSpill && hasRightSpill: {
      const extraPages = range(endPage + 1, endPage + spillOffset);
      return [...p, ...extraPages, BREAK];
    }

    case hasLeftSpill && hasRightSpill:
    default: {
      return [BREAK, ...p, BREAK];
    }
  }
};
