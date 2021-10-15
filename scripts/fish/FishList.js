/**
 *   FishList which renders individual fish objects as HTML
 */
 import { useFish } from "./FishDataProvider.js"
 import { Fish } from "./Fish.js"
 
 export const FishList = () => {
 
     const contentElement = document.querySelector("#FishList")
     const fishes = useFish()
 
     // Generate all of the HTML for all of the fish (this is a loop)
     let fishHTMLRepresentations = ""
     for (const singleFishObject of fishes) {
         /*
             Invoke(aka: use) the Fish component function
             and pass the current fish object as an argument: place in the parenthesis() after Fish.
             Each time, add the return value to the
             fishHTMLRepresentations variable with `+=`
         */
            fishHTMLRepresentations += Fish(singleFishObject)
     }
 
     // Add a section, and all of the fish to the DOM
     contentElement.innerHTML += `
         <article class="fishList ">
             ${fishHTMLRepresentations}
         </article>
     `
 }
 