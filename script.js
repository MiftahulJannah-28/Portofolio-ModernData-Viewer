const container = document.getElementById("projectContainer");
const search = document.getElementById("search");

let allProjects = [];

fetch("students.json")
.then(response => response.json())
.then(data => {

    allProjects = data;
    showProjects(data);

});

function showProjects(projects){

    container.innerHTML = "";

    projects.forEach(project => {

        const card = document.createElement("div");
        card.classList.add("project-card");

        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;

        container.appendChild(card);

    });

}

search.addEventListener("keyup", () => {

    const keyword = search.value.toLowerCase();

    const filtered = allProjects.filter(project =>
        project.title.toLowerCase().includes(keyword)
    );

    showProjects(filtered);

});
