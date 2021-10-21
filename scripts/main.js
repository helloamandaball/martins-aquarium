import { useFish, mostHolyFish, soldierFish, nonHolyFish } from "./fish/FishDataProvider.js"
import { FishList } from "./fish/FishList.js"
import { useTips } from "./tips/TipDataProvider.js"
import { TipsList } from "./tips/TipList.js"
import { useLocation } from "./locations/LocationDataProvider.js"
import { LocationList } from "./locations/LocationList.js"

//////////<--FISH LIST SECTION-->//////////
//captured a copy of the fish list, importing it from the other .js file instead of using the original one so it stays intact:
const allTheFish = useFish()

//looped through (this section is reduntant and just used for this exercies, you won't actually need it if you use this code as example for use in another project): 
for (const fish of allTheFish) {
    console.log(fish)
}

//call the imported FishList that was added on line 2:
FishList()

//call the holy fish from the FishDataProvider.js, where we are sorting according to length, this is just to testing, make sure to add to the import { mostHolyFish, soldierFish, nonHolyFish } from "./fish/FishDataProvider.js"

// mostHolyFish()
// soldierFish()
// nonHolyFish()


//////////<--TIPS LIST SECTION-->//////////
//captured a copy of the tip list, importing it from the other .js file instead of using the original one so it stays intact:
const allTipsList = useTips()
//looped through: 
for (const tips of allTipsList) {
    console.log(tips)
}

//call the imported TipsList that was added on line 4:
TipsList()


//////////<--LOCATIONS LIST SECTION-->//////////
//captured a copy of the location list, importing it from the other .js file instead of using the original one so it stays intact:
const allLocationList = useLocation()
//looped through: 
for (const location of allLocationList) {
    console.log(location)
}

//call the imported LocationList that was added on line 6:
LocationList()


