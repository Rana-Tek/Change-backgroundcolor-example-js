const button = document.querySelector(`button`);
const body = document.querySelector(`body`);
const colors = [`red`, `green`, `blue`, `yellow`, `pink`, `purple`, `brown`]


button.addEventListener(`click`, changeBackgroundcolor);

function changeBackgroundcolor(){
  const colorIndex = parseInt(Math.random()*colors.length)
  body.style.backgroundColor = colors[colorIndex]
}