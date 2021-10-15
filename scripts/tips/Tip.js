//exporting a function, takes an object and creates an HTML block using that object that we give it
export const Tips = (tips) => {
    return `
        <section class="tip-list card">
            <ul>
                <li>${tips.tip}</li>
            </ul>
        </section>
    `
}
