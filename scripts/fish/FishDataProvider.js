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
        length: "Hefty",
        food: "Toxic Waste",
        location: "Ohio River"
    },
    // each property has a value with comma
    {
        name: "Bart",
        species: "Guppy",
        length: "Small",
        food: "Crustaceans",
        location: "New River"
    },
    // each property has a value with comma
    {
        name: "Florence",
        species: "Carp",
        length: "Medium",
        food: "Worms",
        location: "Mississippi River"
    },
    // each property has a value with comma
    {
        name: "Spike",
        species: "Beta",
        length: "Small",
        food: "Fish Flakes",
        location: "Amazon"
    }
]
//this is a function, exports a COPY of our fish list, named useFish:
export const useFish = () => {
    return fishCollection.slice()
}

