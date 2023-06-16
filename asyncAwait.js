console.log("Person 1 shows ticket.")
console.log("Person 2 shows ticket.")
const preMovie = async () => {
    const promiseWifeBringingTickets = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('ticket')
        },3000)
    })
    let ticket = await promiseWifeBringingTickets;
    const getPopcorn = new Promise ((resolve,reject) => resolve('popcorn'))
    const addButter = new Promise ((resolve,reject) => resolve('butter'))

    // let popcorn = await getPopcorn;
    // console.log("got popcorn")

    // let butter = await addButter;
    // console.log("got butter")

    const getColdDrinks = new Promise ((resolve,reject) => resolve('coke'))
    // let coke = await getColdDrinks
    // console.log("got coke")

    //USING Promise.all()
    let [popcorn,butter,coke] = await Promise.all([getPopcorn,addButter,getColdDrinks])

    console.log(`${popcorn},${butter},${coke}`)

    return ticket;
}

preMovie().then((t)=> console.log(`Person 3 shows ${t}.`))


console.log("Person 4 shows ticket.")
console.log("Person 5 shows ticket.")