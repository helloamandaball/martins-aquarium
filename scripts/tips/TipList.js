/**
 *  TipList which renders individual tip objects as HTML
 */
 import { useTips } from "./TipDataProvider.js"
 import { Tips } from "./Tip.js"
 
 export const TipsList = () => {
 
     const contentElement = document.querySelector(".TipsList")
     const tips = useTips()
 
     // Generate all of the HTML for all of the tips (this is a loop)
     let tipsHTMLRepresentations = ""
     for (const singleTipObject of tips) {
         /*
             Invoke(aka: use) the tip component function
             and pass the current tip object as an argument: place in the parenthesis() after Tip.
             Each time, add the return value to the
             tipHTMLRepresentations variable with `+=`
         */
            tipsHTMLRepresentations += Tips(singleTipObject)
     }
 
     // Add a section, and all of the fish to the DOM
     contentElement.innerHTML += `
         <article class="TipsList">
             ${tipsHTMLRepresentations}
         </article>
     `
 }