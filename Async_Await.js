console.log('Person1: shows ticket');
console.log('person2: shows ticket');



// // promiseWifeBringingTicks.then((t) => {
// //     console.log(`person3: shows ${t}`);
// // })

// const getPopcorn = promiseWifeBringingTicks.then((t) => {
//     console.log('wife: here is the tickets');
//     console.log('Husband: we should go in');
//     console.log('wife: no I am hungry');
//     return new Promise((resolve, reject)=> resolve(`${t}, popcorn`));
// });

// // getPopcorn.then((t) => console.log(t));

// const getButter = getPopcorn.then((t) => {
    // console.log('Husband: I got the popcorn');
    // console.log('Husband: we should go in');
    // console.log('wife: no I need butter on my popcorn');
//     return new Promise((resolve, reject) => resolve(`${t} with butter`))
// });

// getButter.then((t) => console.log(t));

const preMovie = async () => {
    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(()=>{
            let error = true;

            if(!error){
                resolve('ticket');
            }else{
                reject('Sad face')
            }
            
        }, 3000)
    });
    const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
    const getCandy = new Promise((resolve, reject) => resolve(`Candy`));
    const getColdDrinks = new Promise((resolve, reject) => resolve('Cold drinks'));
    
    let ticket = await promiseWifeBringingTicks;

    
    let [popcorn, candy, coldDrinks] = await Promise.all([getPopcorn, getCandy, getColdDrinks]);
    console.log(`Person 3 gets ${popcorn}, ${candy}, ${coldDrinks}`);
    return ticket;
};
preMovie()
.then((m) => console.log(`person3: shows ${m}`))
.catch((m) => console.log(`person3: shows ${m}`));

console.log('Person4 shows ticket');
console.log('person5: shows ticket');
