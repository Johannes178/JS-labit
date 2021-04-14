const pics = [
  {
    thumb: 'http://www.fillmurray.com/100/100',
    big: 'http://www.fillmurray.com/640/480',
  },
  {
    thumb: 'http://lorempixel.com/100/100/sports/1/',
    big: 'http://lorempixel.com//640/480/sports/1/',
  },
  {
    thumb: 'https://placeimg.com/100/100/tech',
    big: 'https://placeimg.com/640/480/tech',
  },
];
let b = document.getElementsByTagName("body")[0];
let lista = [];
let x;
for(i=0; i<3; i++) {
    x= '<img src="' + pics[i].thumb + '">';
    lista.push(x);
    console.log(x)
}
const html =lista ;

b.innerHTML += html;


document.getElementsByTagName('img')[1].addEventListener("click",function(evt){
  document.getElementsByTagName('img')[0].src= pics[0].big;
    document.getElementsByTagName('div')[0].setAttribute('class', 'visible');


});

document.getElementsByTagName('img')[2].addEventListener("click",function(evt){
    document.getElementsByTagName('img')[0].src= pics[1].big;
    document.getElementsByTagName('div')[0].setAttribute('class', 'visible');

});

document.getElementsByTagName('img')[3].addEventListener("click",function(evt){
    document.getElementsByTagName('img')[0].src= pics[2].big;
    document.getElementsByTagName('div')[0].setAttribute('class', 'visible');

});

document.getElementsByTagName('img')[0].addEventListener("click",function(evt) {
    document.getElementsByTagName('div')[0].setAttribute('class', 'hidden');
});