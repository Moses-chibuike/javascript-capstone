const getTotalPaintings = () => {
  let numpaintings = 0;
  const paintings = document.querySelectorAll('.paintings');
  numpaintings = paintings.length;
  const countContainer = document.querySelector('.fd-count');
  if (countContainer) {
    countContainer.innerHTML = numpaintings;
  }
  return numpaintings;
};

export default getTotalPaintings;