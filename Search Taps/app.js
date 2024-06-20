var content = document.querySelector(".content")
var removeAll = document.querySelector(".remove-all")
var closeIcons = document.querySelectorAll(".close")

var searchInput = document.querySelector(".content input")


var tags = ["Love", "Javascript"]

function createTags(){
    content.innerHTML = ''
    for(let i = 0; i < tags.length; i++){
        const tag = tags[i]
        content.innerHTML += `<li>
                                ${tag}
                                <i class="fas fa-times close"></i>
                            </li>
        `
    }

    content.appendChild(searchInput)
    searchInput.focus()
}

createTags()


searchInput.addEventListener("keydown", (e) => {
    if(e.key == "Enter"){
        tags.push(searchInput.value.trim())
        searchInput.value = ""
        createTags()
    }
})

