/**
 *  Fish which renders individual fish objects as HTML
 */
//exporting a function, takes an object and creates an HTML block using that object that we give it /
//***NOTE: single-fish in the section class refers to CSS code in main.css, it has nothing to do with javascript elements***
 export const Fish = (fish) => {
    return `
        <section class="single-fish fish card ">
            <div><img class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">Name: ${fish.name}</div>
            <div class="fish__species">Species: ${fish.species}</div>
            <div class="fish__length">Length: ${fish.length}</div>
            <div class="fish__location">Location: ${fish.location}</div>
            <div class="fish__diet">Food: ${fish.food}</div>
        </section>
    `
}


////>>>>>>> this code updated and moved to FishList.js: <<<<<<<<<////
// /**
//  *  FishList which renders individual fish objects as HTML
//  */

// // TODO: Import `useFish` from the data provider module
// import { useFish } from "./FishDataProvider.js"

// // FishList is our function 
// export const FishList = () => {

//     // Get a reference to the `<article class="content">` element
//     const contentElement = document.querySelector("#FishList")
//     const fishes = useFish()

//     // Add to the existing HTML in the content element
//     contentElement.innerHTML += `
//         <article class="fishList">
//             All the fish go here!
//         </article>
//     `
// }
