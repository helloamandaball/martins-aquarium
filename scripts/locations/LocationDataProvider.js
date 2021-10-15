const locationCollection = [
    {location: "Ohio River"},
    {location: "New River"},
    {location: "Mississippi River"},
    {location: "Nile River"},
    {location: "Kanawha River"},
    {location: "Mon River"},
    {location: "Amazon River"}
]
    

export const useLocation = () => {
    return locationCollection.slice()
}