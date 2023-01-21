const text= document.querySelector('.quote');
const author= document.querySelector('.author');
const btn= document.querySelector('.btn');

const getQuote= async() =>{
    const res= await fetch('https://type.fit/api/quotes');
    const quotes= await res.json();

    const num= Math.floor(Math.random()*quotes.length);
    const items= quotes[num];
    console.log(items);

    const quote= items.text;
    const authorName= items.author;

    text.innerText= quote;
    author.innerText= authorName;

}

btn.addEventListener('click' , getQuote);

getQuote()