//Immediately Invoked Function Expression (IIFE)
(function coffeeArrow(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('himani')