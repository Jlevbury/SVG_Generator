const inquirer = require("inquirer");
const fs = require("fs");
const { Square, Circle, Triangle } = require("./lib/shapes.js");

const questions = [
	{
		type: "input",
		name: "initials",
		message: "Please enter up to three letters",
	},
	{
		type: "input",
		name: "text-color",
		message:
			"Please enter a color choice or hexidecimal color code for your text",
	},
	{
		type: "list",
		name: "shape-selector",
		message: "Please choose one of the available shapes",
		choices: ["Square", "Triangle", "Circle"],
	},
	{
		type: "input",
		name: "shape-color",
		message:
			"Please enter a color choice or hexidecimal color code for your background",
	},
];

function init() {
	inquirer.prompt(questions).then((answers) => {
		let shape;
		switch (answers["shape-selector"]) {
			case "Square":
				shape = new Square(
					300,
					200,
					answers.initials,
					answers["text-color"],
					answers["shape-color"]
				);
				break;
			case "Triangle":
				shape = new Triangle(
					300,
					200,
					answers.initials,
					answers["text-color"],
					answers["shape-color"]
				);
				break;
			case "Circle":
				shape = new Circle(
					300,
					200,
					answers.initials,
					answers["text-color"],
					answers["shape-color"]
				);
				break;
		}

		const svgContent = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shape.render()}</svg>`;
		fs.writeFile("logo.svg", svgContent, (err) => {
			if (err) {
				console.error(err);
				return;
			}
			console.log("Generated logo.svg");
		});
	});
}

init();
