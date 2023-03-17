const countData = (data) => {
  let count = 0;
  if (!data) {
    return 'Comments(0)';
  }
  data.forEach(() => {
    count += 1;
  });
  return `Comments(${count})`;
};

export default countData;