document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            name: "Trust.med",
            description: "Trust.med is a medical data exchange company.",
            imageUrl: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "https://trust.med"
        },
        {
            name: "Secure.jobs",
            description: "Domain names for employment.",
            imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "https://secure.jobs"
        },
        {
            name: "Contexto",
            description: "A personal project.",
            imageUrl: "https://images.unsplash.com/photo-1564864041860-d33b31216b3b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "https://danielkraciun.com"
        }
    ];

    const projectsContainer = document.getElementById('projects-container');

    projects.forEach(project => {
        const projectCard = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${project.imageUrl}" class="card-img-top" alt="${project.name}">
                    <div class="card-body">
                        <h5 class="card-title">${project.name}</h5>
                        <p class="card-text">${project.description}</p>
                        <a href="${project.link}" class="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
        `;
        projectsContainer.innerHTML += projectCard;
    });
});
