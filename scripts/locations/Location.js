//exporting a function, takes an object and creates an HTML block using that object that we give it
export const Location = (location) => {
    return `
        <section class="LocationList card">
            <ul>
                <li>${location.location}</li>
            </ul>
        </section>
    `
}
