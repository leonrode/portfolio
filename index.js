const data = {
    "projects": [
	{
	    "name": "Quantum Amplitude Estimation",
	    "description": "Implemented an algorithm to estimate a basis amplitude for a quantum state.",
	    "tags": ["qiskit", "python"],
	    "links": [{"type": "github", "link": "https://github.com/leonrode/qindia-qa101-final-project"}]
	},
	{
	    "name": "Quantum Double Slit Experiment",
	    "description": "Simulated the double slit experiment on an ibm quantum computer according to historical experiment parameters. I then discussed the results in a paper.",
	    "tags": ["qiskit", "python", "latex"],
	    "links": [{"type": "github", "link": "https://github.com/leonrode/quantum-double-slit-experiment"}]
	},
	{
	    "name": "LAVCA A.I. for Patria Investments",
	    "description": "Developed AI-based platform for Patria Investments for analysis of LAVCA dataset using A.I.",
	    "tags": ["react.js", "python", "openai"],
	    "links": []
	},
	{
	    "name": "Autostereogram Research",
	    "description": "Researched and implemented own version of computer-based autostereogram (SIRDS) generation.",
	    "tags": ["python", "p5.js"],
	    "links": []
	},
	{
	    "name": "Westchester Covid-19 Tracker",
	    "description": "Built website as community service project to visualize COVID-19 trends in Westchester County, NY. The site ran from November 2020 through December 2022, collecting case data for each town within the county on a weekly basis, storing them in MongoDB. The site is now taken down as a result of the termination of official COVID-19 data publication.",
	    "tags": ["python", "aws", "react.js", "mongodb", "javascript"],
	    "links": []
	},
	{
	    "name": "Disturb The Noize",
	    "description": "Developed and managed global social platform to connect up-and-coming musicians and producers.",
	    "tags": ["next.js", "react.js", "tailwindcss", "mongodb"],
	    "links": [{"type": "link", "link": "https://disturbthenoize.com"}]
	},
	
    ]
};

const projectsStart = document.getElementById("projects-start");
const skills = document.getElementById("skills");

for (const project of data.projects.reverse()) {
    let linksHTML = "";
    for (let link of project.links) {
	linksHTML += `<div class="project-link"><a href="${link.link}">${link.type}</a></div>`;
    }

    let HTMLtoInsert = `<section><div class="project-header"><h1 class="project-title">${project.name}</h1></div><div class="project-tags">${project.tags.map(tag => "<span>" + tag + "</span>").toString().replaceAll(",", "")}</div><p class="project-desc">${project.description}</p>${linksHTML}</section>`;

    projectsStart.insertAdjacentHTML("afterend", HTMLtoInsert);
}

let uniqueTags = new Set();

let tagsHTML = "";

data.projects.forEach((project) => {
    project.tags.forEach((tag) => {
	uniqueTags.add(tag);
    });
});

uniqueTags.forEach((tag) => tagsHTML += "<span>" + tag + "</span>");

skills.insertAdjacentHTML("afterbegin", tagsHTML);

