
const root = document.querySelector(".root")

const userPosts = fetch('https://jsonplaceholder.typicode.com/posts')
.then( (result ) => result.json())
.then ( (data) => data.forEach(element => {
    const wrapper = document.createElement('ul')
    root.appendChild(wrapper)
    const h1 = document.createElement("h1")
    h1.textContent = " id : " + element.id
    const div = document.createElement('div')
    div.classList.add("title")
    div.textContent = element.title;
    const h3 = document.createElement('h3')
    h3.textContent = element.body;
    wrapper.appendChild(h1)
    wrapper.appendChild(div)
    wrapper.appendChild(h3)
}))


