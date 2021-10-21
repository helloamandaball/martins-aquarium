/**
 *   FishList which renders individual fish objects as HTML
 */
 import { useFish, mostHolyFish, soldierFish, nonHolyFish } from "./FishDataProvider.js"
 import { Fish } from "./Fish.js"
//fishArray is the paramater
 const buildHTML = (fishArray) => {
    let fishHTMLRepresentations = ""
    for (const singleFishObject of fishArray) {
        fishHTMLRepresentations += Fish(singleFishObject)
    }
    return fishHTMLRepresentations
 }


 // the "=>" means fat arrow syntax
 export const FishList = () => {
     const contentElement = document.querySelector("#FishList")
     
     const mostHolyArray = mostHolyFish()
     const soldierArray = soldierFish()
     const normalArray = nonHolyFish()

     const holyHTML = buildHTML(mostHolyArray)
     const soldierHTML = buildHTML(soldierArray)
     const normalHTML = buildHTML(normalArray)
 
     // Add a section, and all of the fish to the DOM
     contentElement.innerHTML += `
         <article class="fishList ">
            <h3>Most Holy</h3>
                ${holyHTML}
            <h3>Soldier Fish</h3>
                ${soldierHTML}
            <h3>RegularFish</h3>
                ${normalHTML}
         </article>
     `
 }

 
 