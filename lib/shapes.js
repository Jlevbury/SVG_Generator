class Shape {
    constructor(width, height, text, textColor, fillColor) {
        this.width = width;
        this.height = height;
        this.text = text;
        this.textColor = textColor;
        this.fillColor = fillColor;
    }

    render() {
        throw new Error("Method 'render()' must be implemented.");
    }
}

class Square extends Shape {
    render() {
        return `
            <rect width="${this.width}" height="${this.height}" fill="${this.fillColor}" />
            <text x="${this.width/2}" y="${this.height/2}" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        `;
    }
}

class Circle extends Shape {
    render() {
        return `
            <circle cx="${this.width/2}" cy="${this.height/2}" r="${this.width/2}" fill="${this.fillColor}" />
            <text x="${this.width/2}" y="${this.height/2}" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        `;
    }
}

class Triangle extends Shape {
    render() {
        const point1 = `${this.width/2},0`;
        const point2 = `0,${this.height}`;
        const point3 = `${this.width},${this.height}`;

        return `
            <polygon points="${point1} ${point2} ${point3}" fill="${this.fillColor}" />
            <text x="${this.width/2}" y="${this.height/2}" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        `;
    }
}

module.exports = {
    Square,
    Circle,
    Triangle
};


/*<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

<rect width="100%" height="100%" fill="red" />

<circle cx="150" cy="100" r="80" fill="green" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>*/
//<rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>
// <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>