// //<wrong start, don't use this code.
//const fishCollection = [
//     {
//         name: ["George", "Bart", "Florence", "Spike"],
//         species: ["Gold Fish", "Carp", "Beta", "Guppy"],
//         length: ["Hefty", "Small", "Medium"],
//         food: ["Crustaceans", "Worms", "Toxic Waste", "Fish Flakes"],
//         location: ["Ohio River", "New River", "Mississippi River", "Nile River", "Kanawha River", "Mon River", "Amazon River"]
//     }
// ]

/////Use this code instead:
// Each object has position (not a name) in curly brackets with a comma seperating objects
const fishCollection =[
    
    // each property has a value with comma seperating properties
    {
        name: "George",
        species: "Gold Fish",
        length: 3,
        food: "Toxic Waste",
        location: "Ohio River"
    },
    // each property has a value with comma
    {
        name: "Bart",
        species: "Guppy",
        length: 2,
        food: "Crustaceans",
        location: "New River"
    },
    // each property has a value with comma
    {
        name: "Florence",
        species: "Carp",
        length: 10,
        food: "Worms",
        location: "Mississippi River"
    },
    // each property has a value with comma
    {
        name: "Spike",
        species: "Beta",
        length: 5,
        food: "Fish Flakes",
        location: "Amazon River"
    },
    // each property has a value with comma
    {
        name: "Bea",
        species: "Anglefish",
        length: 6,
        food: "Fish Flakes",
        location: "Nile River"
    },
    // each property has a value with comma
    {
        name: "Lilly",
        species: "Blue Tang",
        length: 12,
        food: "Worms",
        location: "Amazon River"
    }
]
//this is a function, exports a COPY of our fish list, named useFish:
export const useFish = () => {
    return fishCollection.slice()
}


//code from chapter 13: filtering using for..of loops
export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []
    
    //the fishSize is a single object of the fishCollection array
    for (let fishSize of fishCollection) {
        //.length refers to the length property of each indiviual array object under FishCollection
        if (fishSize.length % 3 === 0) {
        //we push the 'if' answer from above, as in which fish length is divisible by 3, into the variable holyFish, which we will use to filter/sort by size in a later line of code.
        holyFish.push(fishSize)
        }
    }
    console.log(holyFish)
    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []

    //the fishSize is a single object of the fishCollection array
    for (let fishSize of fishCollection) {
        if (fishSize.length % 5 === 0 && fishSize.length % 3 !== 0) {
        soldiers.push(fishSize)
        }
    }
    console.log(soldiers)
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []

    for (let fishSize of fishCollection) {
        if (fishSize.length % 3 !== 0 && fishSize.length % 5 !== 0) {
            regularFish.push(fishSize)
            }
    }
    console.log(regularFish)
    return regularFish
}

