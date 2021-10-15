/**
 *  TipList which renders individual location objects as HTML
 */
 import { useLocation } from "./LocationDataProvider.js"
 import { Location } from "./Location.js"
 
 export const LocationList = () => {
 
     const contentElement = document.querySelector(".LocationList")
     const location = useLocation()
 
     // Generate all of the HTML for all of the locations (this is a loop)
     let locationHTMLRepresentations = ""
     for (const singleLocationObject of location) {
         /*
             Invoke(aka: use) the location component function
             and pass the current location object as an argument: place in the parenthesis() after Tip.
             Each time, add the return value to the
             locationHTMLRepresentations variable with `+=`
         */
            locationHTMLRepresentations += Location(singleLocationObject)
     }
 
     // Add a section, and all of the fish to the DOM
     contentElement.innerHTML += `
         <article class="LocationList">
             ${locationHTMLRepresentations}
         </article>
     `
 }