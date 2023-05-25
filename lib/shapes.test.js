const { Square, Circle, Triangle } = require("../lib/shapes.js");

describe("Square", () => {
	test("renders SVG string correctly", () => {
		const square = new Square(300, 200, "SVG", "white", "blue");
		expect(square.render()).toContain("rect");
		expect(square.render()).toContain("SVG");
		expect(square.render()).toContain("blue");
	});
});

describe("Circle", () => {
	test("renders SVG string correctly", () => {
		const circle = new Circle(300, 200, "SVG", "white", "red");
		expect(circle.render()).toContain("circle");
		expect(circle.render()).toContain("SVG");
		expect(circle.render()).toContain("red");
	});
});

describe("Triangle", () => {
	test("renders SVG string correctly", () => {
		const triangle = new Triangle(300, 200, "SVG", "white", "green");
		expect(triangle.render()).toContain("polygon");
		expect(triangle.render()).toContain("SVG");
		expect(triangle.render()).toContain("green");
	});
});
