// const button = document.querySelector(`button`);
// const body = document.querySelector(`body`);
// const colors = [`red`, `green`, `blue`, `yellow`, `pink`, `purple`, `brown`]


// button.addEventListener(`click`, changeBackgroundcolor);

// function changeBackgroundcolor(){
//   const colorIndex = parseInt(Math.random()*colors.length)
//   body.style.backgroundColor = colors[colorIndex]
// }

const button = document.querySelector(`button`);
const body = document.querySelector(`body`);



button.addEventListener(`click`, changeBackgroundcolor);

function changeBackgroundcolor(){
  const x = Math.round(Math.random()*255)
  const y = Math.round(Math.random()*255)
  const z = Math.round(Math.random()*255)
  const colors = `rgb(${x},${y},${z})`
  body.style.backgroundColor = colors

}