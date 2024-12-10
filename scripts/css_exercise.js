document.addEventListener("DOMContentLoaded", () => {
    const exercises = {
        "CSS Introduction": [
            {
                title: "Exercise 1: Basic CSS Styling",
         task: "Apply a lightblue background color to the body, change the color of the heading to blue, and center-align it. Change the font size of the paragraph to 18px and change the color to black.",
                predefinedCode: `
                <h1>Welcome to CSS Introduction</h1>
                <p>This is a basic introduction to CSS styling.</p>
                <style>
                    h1 {
                        font-size: 24px;
                        color: green;
                    }
                    p {
                        font-size: 16px;
                        color: darkgray;
                    }
                </style>
                `,
                solutionCode: `
                <h1>Welcome to CSS Introduction</h1>
                <p>This is a basic introduction to CSS styling.</p>
                <style>
                    body {
                        background-color: lightblue;
                    }
                    h1 {
                        color: blue;
                        text-align: center;
                    }
                    p {
                        font-size: 18px;
                        color: black;
                    }
                </style>
                `
            },
            {
                title: "Exercise 2: Styling Paragraphs",
                task: "Add padding, background color, and adjust the font size of the paragraph element. Make sure the paragraph text has enough contrast with the background.",
                predefinedCode: `
                <h1>CSS Paragraph Styling</h1>
                <p>Learn how to style paragraph text.</p>
                <style>
                    h1 {
                        color: red;
                        text-align: center;
                    }
                    p {
                        font-size: 18px;
                        color: gray;
                    }
                </style>
                `,
                solutionCode: `
                <h1>CSS Paragraph Styling</h1>
                <p>Learn how to style paragraph text.</p>
                <style>
                    h1 {
                        color: red;
                        text-align: center;
                    }
                    p {
                        background-color: lightgray;
                        padding: 20px;
                        font-size: 18px;
                        color: darkblue;
                    }
                </style>
                `
            }
        ],
        "CSS Syntax": [
    {
        "title": "Exercise 1: Correcting CSS Syntax",
        "task": "Identify and correct the errors in the CSS code. Ensure the properties and values are correctly formatted, and apply the styles to see the effect.",
        "predefinedCode": `
        <h1>CSS Syntax</h1>
        <p>This is a paragraph with incorrect CSS syntax.</p>
        <style>
            h1 {
                color = blue;
                text-align center;
            }
            p {
                font size: 18px;
                color darkgray;
            }
        </style>
        `,
        "solutionCode": `
        <h1>CSS Syntax</h1>
        <p>This is a paragraph with incorrect CSS syntax.</p>
        <style>
            h1 {
                color: blue;
                text-align: center;
            }
            p {
                font-size: 18px;
                color: darkgray;
            }
        </style>
        `
    },
    {
        "title": "Exercise 2: Writing CSS Rules",
        "task": "Write CSS rules to style the heading with a red color and center alignment. Style the paragraph with a font size of 20px and a background color of yellow.",
        "predefinedCode": `
        <h1>CSS Rules Practice</h1>
        <p>This is a paragraph that needs styling.</p>
        <style>
            /* Add your CSS rules here */
        </style>
        `,
        "solutionCode": `
        <h1>CSS Rules Practice</h1>
        <p>This is a paragraph that needs styling.</p>
        <style>
            h1 {
                color: red;
                text-align: center;
            }
            p {
                font-size: 20px;
                background-color: yellow;
            }
        </style>
        `
    }
],
"CSS Selectors": [
    {
        "title": "Exercise 1: Using Basic Selectors",
        "task": "Style all paragraph elements with a font size of 18px and a text color of gray. Style the element with the ID 'special' to have a blue color and center-aligned text.",
        "predefinedCode": `
        <p>This is a normal paragraph.</p>
        <p id="special">This is a special paragraph.</p>
        <style>
            /* Add your CSS here */
        </style>
        `,
        "solutionCode": `
        <p>This is a normal paragraph.</p>
        <p id="special">This is a special paragraph.</p>
        <style>
            p {
                font-size: 18px;
                color: gray;
            }
            #special {
                color: blue;
                text-align: center;
            }
        </style>
        `
    },
    {
        "title": "Exercise 2: Using Class Selectors",
        "task": "Style elements with the class 'highlight' to have a yellow background and bold text.",
        "predefinedCode": `
        <p class="highlight">This is a highlighted paragraph.</p>
        <p>This paragraph is not highlighted.</p>
        <style>
            /* Add your CSS here */
        </style>
        `,
        "solutionCode": `
        <p class="highlight">This is a highlighted paragraph.</p>
        <p>This paragraph is not highlighted.</p>
        <style>
            .highlight {
                background-color: yellow;
                font-weight: bold;
            }
        </style>
        `
    }
],
"CSS Comments": [
    {
        "title": "Exercise 1: Adding Comments",
        "task": "Add comments to describe the CSS code that styles the heading and paragraph.",
        "predefinedCode": `
        <h1>CSS Comments</h1>
        <p>Learn how to add comments in CSS.</p>
        <style>
            h1 {
                color: green;
                text-align: left;
            }
            p {
                color: blue;
                font-size: 16px;
            }
        </style>
        `,
        "solutionCode": `
        <h1>CSS Comments</h1>
        <p>Learn how to add comments in CSS.</p>
        <style>
            /* Style for the heading */
            h1 {
                color: green;
                text-align: left;
            }
            /* Style for the paragraph */
            p {
                color: blue;
                font-size: 16px;
            }
        </style>
        `
    }
],
"CSS Colors": [
    {
        "title": "Exercise 1: Using Named Colors",
        "task": "Change the background color of the body to lightblue and the heading color to darkred using named colors.",
        "predefinedCode": `
        <h1>CSS Colors</h1>
        <p>Experiment with colors in CSS.</p>
        <style>
            /* Add your CSS here */
        </style>
        `,
        "solutionCode": `
        <h1>CSS Colors</h1>
        <p>Experiment with colors in CSS.</p>
        <style>
            body {
                background-color: lightblue;
            }
            h1 {
                color: darkred;
            }
        </style>
        `
    },
    {
        "title": "Exercise 2: Using Hexadecimal Colors",
        "task": "Set the heading color to #ff5733 and the paragraph color to #2e86c1.",
        "predefinedCode": `
        <h1>CSS Colors</h1>
        <p>Experiment with colors in CSS.</p>
        <style>
            /* Add your CSS here */
        </style>
        `,
        "solutionCode": `
        <h1>CSS Colors</h1>
        <p>Experiment with colors in CSS.</p>
        <style>
            h1 {
                color: #ff5733;
            }
            p {
                color: #2e86c1;
            }
        </style>
        `
    }
],
"CSS Background": [
    {
        "title": "Exercise 1: Setting Background Color",
        "task": "Set the background color of the body to lightgray and the heading background to yellow.",
        "predefinedCode": `
        <h1>CSS Background</h1>
        <p>Learn how to apply background colors in CSS.</p>
        <style>
            /* Add your CSS here */
        </style>
        `,
        "solutionCode": `
        <h1>CSS Background</h1>
        <p>Learn how to apply background colors in CSS.</p>
        <style>
            body {
                background-color: lightgray;
            }
            h1 {
                background-color: yellow;
            }
        </style>
        `
    },
    {
        "title": "Exercise 2: Adding Background Images",
        "task": "Set a background image for the body. Use the image URL 'https://example.com/background.jpg'.",
        "predefinedCode": `
        <h1>CSS Background</h1>
        <p>Learn how to apply background images in CSS.</p>
        <style>
            /* Add your CSS here */
        </style>
        `,
        "solutionCode": `
        <h1>CSS Background</h1>
        <p>Learn how to apply background images in CSS.</p>
        <style>
            body {
                background-image: url('https://example.com/background.jpg');
                background-size: cover;
                background-repeat: no-repeat;
            }
        </style>
        `
    }
],
"CSS Borders": [
    {
        "title": "Exercise 1: Adding Borders",
        "task": "Add a solid black border to the heading with a width of 2px and a dashed red border to the paragraph with a width of 1px.",
        "predefinedCode": `
        <h1>CSS Borders</h1>
        <p>Learn how to style borders in CSS.</p>
        <style>
            /* Add your CSS here */
        </style>
        `,
        "solutionCode": `
        <h1>CSS Borders</h1>
        <p>Learn how to style borders in CSS.</p>
        <style>
            h1 {
                border: 2px solid black;
            }
            p {
                border: 1px dashed red;
            }
        </style>
        `
    },
    {
        "title": "Exercise 2: Border Radius",
        "task": "Add rounded corners to the paragraph border with a radius of 10px.",
        "predefinedCode": `
        <h1>CSS Borders</h1>
        <p>Learn how to style borders in CSS.</p>
        <style>
            p {
                border: 2px solid green;
            }
        </style>
        `,
        "solutionCode": `
        <h1>CSS Borders</h1>
        <p>Learn how to style borders in CSS.</p>
        <style>
            p {
                border: 2px solid green;
                border-radius: 10px;
            }
        </style>
        `
    }
],
"CSS Margins": [
    {
        "title": "Exercise 1: Adjusting Margins",
        "task": "Set the margin of the heading to 20px on all sides and add a margin of 10px only to the top of the paragraph.",
        "predefinedCode": `
        <h1>CSS Margins</h1>
        <p>Learn how to adjust margins in CSS.</p>
        <style>
            /* Add your CSS here */
        </style>
        `,
        "solutionCode": `
        <h1>CSS Margins</h1>
        <p>Learn how to adjust margins in CSS.</p>
        <style>
            h1 {
                margin: 20px;
            }
            p {
                margin-top: 10px;
            }
        </style>
        `
    },
    {
        "title": "Exercise 2: Auto Margin",
        "task": "Center-align the heading horizontally using auto margins.",
        "predefinedCode": `
        <h1>CSS Margins</h1>
        <p>Learn how to adjust margins in CSS.</p>
        <style>
            h1 {
                width: 50%;
                /* Add your CSS here */
            }
        </style>
        `,
        "solutionCode": `
        <h1>CSS Margins</h1>
        <p>Learn how to adjust margins in CSS.</p>
        <style>
            h1 {
                width: 50%;
                margin: 0 auto;
            }
        </style>
        `
    }
],
"CSS Padding": [
    {
        "title": "Exercise 1: Adjusting Padding",
        "task": "Add padding of 15px to all sides of the paragraph and 20px only to the left side of the heading.",
        "predefinedCode": `
        <h1>CSS Padding</h1>
        <p>Learn how to adjust padding in CSS.</p>
        <style>
            /* Add your CSS here */
        </style>
        `,
        "solutionCode": `
        <h1>CSS Padding</h1>
        <p>Learn how to adjust padding in CSS.</p>
        <style>
            h1 {
                padding-left: 20px;
            }
            p {
                padding: 15px;
            }
        </style>
        `
    }
],
"CSS Height and Width": [
    {
        "title": "Exercise 1: Setting Height and Width",
        "task": "Set the height of the div to 200px and its width to 50% of the viewport.",
        "predefinedCode": `
        <div>Resize me!</div>
        <style>
            div {
                background-color: lightblue;
                /* Add your CSS here */
            }
        </style>
        `,
        "solutionCode": `
        <div>Resize me!</div>
        <style>
            div {
                background-color: lightblue;
                height: 200px;
                width: 50vw;
            }
        </style>
        `
    }
],
"CSS Box Model": [
    {
        "title": "Exercise 1: Understanding Box Model",
        "task": "Add a border of 2px solid black, padding of 10px, and a margin of 15px to the div.",
        "predefinedCode": `
        <div>Understand the box model!</div>
        <style>
            div {
                background-color: lightgray;
                /* Add your CSS here */
            }
        </style>
        `,
        "solutionCode": `
        <div>Understand the box model!</div>
        <style>
            div {
                background-color: lightgray;
                border: 2px solid black;
                padding: 10px;
                margin: 15px;
            }
        </style>
        `
    }
],
"CSS Outline": [
    {
        "title": "Exercise 1: Adding an Outline",
        "task": "Add a 5px dashed red outline to the heading.",
        "predefinedCode": `
        <h1>CSS Outline</h1>
        <p>Learn how to add an outline in CSS.</p>
        <style>
            /* Add your CSS here */
        </style>
        `,
        "solutionCode": `
        <h1>CSS Outline</h1>
        <p>Learn how to add an outline in CSS.</p>
        <style>
            h1 {
                outline: 5px dashed red;
            }
        </style>
        `
    }
],
"CSS Fonts": [
    {
        "title": "Exercise 1: Changing Fonts",
        "task": "Change the font family of the paragraph to Arial and the font size to 18px.",
        "predefinedCode": `
        <h1>CSS Fonts</h1>
        <p>Learn how to style fonts in CSS.</p>
        <style>
            /* Add your CSS here */
        </style>
        `,
        "solutionCode": `
        <h1>CSS Fonts</h1>
        <p>Learn how to style fonts in CSS.</p>
        <style>
            p {
                font-family: Arial, sans-serif;
                font-size: 18px;
            }
        </style>
        `
    },
    {
        "title": "Exercise 2: Applying Google Fonts",
        "task": "Use the 'Roboto' font from Google Fonts to style the paragraph text.",
        "predefinedCode": `
        <h1>CSS Fonts</h1>
        <p>Learn how to style fonts in CSS.</p>
        <style>
            /* Add your CSS here */
        </style>
        `,
        "solutionCode": `
        <h1>CSS Fonts</h1>
        <p>Learn how to style fonts in CSS.</p>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
            p {
                font-family: 'Roboto', sans-serif;
            }
        </style>
        `
    }
],
"CSS Links": [
    {
        "title": "Exercise 1: Styling Links",
        "task": "Style links with the following: blue text by default, underlined on hover, and grey when visited.",
        "predefinedCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            a {
              /* Add your styles here */
            }
          </style>
        </head>
        <body>
          <a href="#example">Click Me</a>
        </body>
        </html>
        `,
        "solutionCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            a {
              color: blue;
              text-decoration: none;
            }
            a:hover {
              text-decoration: underline;
            }
            a:visited {
              color: grey;
            }
          </style>
        </head>
        <body>
          <a href="#example">Click Me</a>
        </body>
        </html>
        `
    },
    {
        "title": "Exercise 2: Navigation Bar Links",
        "task": "Create a navigation bar with horizontally aligned links styled with padding and hover effects.",
        "predefinedCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .navbar {
              /* Add your styles here */
            }
            .navbar a {
              /* Add your styles here */
            }
          </style>
        </head>
        <body>
          <div class="navbar">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </body>
        </html>
        `,
        "solutionCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .navbar {
              display: flex;
              gap: 20px;
              background-color: lightgray;
              padding: 10px;
            }
            .navbar a {
              text-decoration: none;
              color: black;
              padding: 5px 10px;
            }
            .navbar a:hover {
              background-color: darkgray;
              color: white;
            }
          </style>
        </head>
        <body>
          <div class="navbar">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </body>
        </html>
        `
    }
],
"CSS Tables": [
    {
        "title": "Exercise 1: Adding Table Borders",
        "task": "Create a table with borders around cells and headers.",
        "predefinedCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            table {
              /* Add your styles here */
            }
            th, td {
              /* Add your styles here */
            }
          </style>
        </head>
        <body>
          <table>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
            <tr>
              <td>John</td>
              <td>30</td>
            </tr>
            <tr>
              <td>Jane</td>
              <td>25</td>
            </tr>
          </table>
        </body>
        </html>
        `,
        "solutionCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            table {
              border-collapse: collapse;
              width: 100%;
            }
            th, td {
              border: 1px solid black;
              padding: 8px;
              text-align: left;
            }
          </style>
        </head>
        <body>
          <table>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
            <tr>
              <td>John</td>
              <td>30</td>
            </tr>
            <tr>
              <td>Jane</td>
              <td>25</td>
            </tr>
          </table>
        </body>
        </html>
        `
    },
    {
        "title": "Exercise 2: Alternating Row Colors",
        "task": "Style a table with alternating row colors for better readability.",
        "predefinedCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            table {
              /* Add your styles here */
            }
            tr:nth-child(even) {
              /* Add your styles here */
            }
          </style>
        </head>
        <body>
          <table>
            <tr>
              <th>Product</th>
              <th>Price</th>
            </tr>
            <tr>
              <td>Apple</td>
              <td>$1</td>
            </tr>
            <tr>
              <td>Banana</td>
              <td>$0.5</td>
            </tr>
          </table>
        </body>
        </html>
        `,
        "solutionCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            table {
              border-collapse: collapse;
              width: 100%;
            }
            th, td {
              border: 1px solid black;
              padding: 8px;
            }
            tr:nth-child(even) {
              background-color: lightgray;
            }
          </style>
        </head>
        <body>
          <table>
            <tr>
              <th>Product</th>
              <th>Price</th>
            </tr>
            <tr>
              <td>Apple</td>
              <td>$1</td>
            </tr>
            <tr>
              <td>Banana</td>
              <td>$0.5</td>
            </tr>
          </table>
        </body>
        </html>
        `
    }
],
"CSS Display": [
    {
        "title": "Exercise 1: Changing Display Property",
        "task": "Use the `display` property to arrange elements horizontally.",
        "predefinedCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .container {
              /* Add your styles here */
            }
            .item {
              /* Add your styles here */
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="item">Box 1</div>
            <div class="item">Box 2</div>
            <div class="item">Box 3</div>
          </div>
        </body>
        </html>
        `,
        "solutionCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .container {
              display: flex;
            }
            .item {
              margin: 10px;
              padding: 20px;
              background-color: lightblue;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="item">Box 1</div>
            <div class="item">Box 2</div>
            <div class="item">Box 3</div>
          </div>
        </body>
        </html>
        `
    },
    {
        "title": "Exercise 2: Hiding and Showing Elements",
        "task": "Use CSS to hide an element and reveal it on hover.",
        "predefinedCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .hidden {
              /* Add your styles here */
            }
          </style>
        </head>
        <body>
          <p class="hidden">Hover over me!</p>
        </body>
        </html>
        `,
        "solutionCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .hidden {
              visibility: hidden;
            }
            .hidden:hover {
              visibility: visible;
            }
          </style>
        </head>
        <body>
          <p class="hidden">Hover over me!</p>
        </body>
        </html>
        `
    }
],
"CSS Position": [
    {
        "title": "Exercise 1: Fixed Position",
        "task": "Create a header that stays at the top of the page when scrolling.",
        "predefinedCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .header {
              /* Add your styles here */
            }
            .content {
              margin-top: 100px;
            }
          </style>
        </head>
        <body>
          <div class="header">I am a fixed header</div>
          <div class="content">
            <p>Scroll down to see the effect.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>More content...</p>
          </div>
        </body>
        </html>
        `,
        "solutionCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .header {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              background-color: lightblue;
              padding: 10px;
              text-align: center;
            }
            .content {
              margin-top: 50px;
            }
          </style>
        </head>
        <body>
          <div class="header">I am a fixed header</div>
          <div class="content">
            <p>Scroll down to see the effect.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>More content...</p>
          </div>
        </body>
        </html>
        `
    },
    {
        "title": "Exercise 2: Absolute Position",
        "task": "Position a box at the bottom-right corner of the page using absolute positioning.",
        "predefinedCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .box {
              /* Add your styles here */
            }
          </style>
        </head>
        <body>
          <div class="box">I'm here!</div>
        </body>
        </html>
        `,
        "solutionCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .box {
              position: absolute;
              bottom: 10px;
              right: 10px;
              background-color: lightcoral;
              padding: 20px;
              color: white;
              font-weight: bold;
            }
          </style>
        </head>
        <body>
          <div class="box">I'm here!</div>
        </body>
        </html>
        `
    }
],
"CSS Position": [
    {
        "title": "Exercise 1: Fixed Position",
        "task": "Create a header that stays at the top of the page when scrolling.",
        "predefinedCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .header {
              /* Add your styles here */
            }
            .content {
              margin-top: 100px;
            }
          </style>
        </head>
        <body>
          <div class="header">I am a fixed header</div>
          <div class="content">
            <p>Scroll down to see the effect.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>More content...</p>
          </div>
        </body>
        </html>
        `,
        "solutionCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .header {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              background-color: lightblue;
              padding: 10px;
              text-align: center;
            }
            .content {
              margin-top: 50px;
            }
          </style>
        </head>
        <body>
          <div class="header">I am a fixed header</div>
          <div class="content">
            <p>Scroll down to see the effect.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>More content...</p>
          </div>
        </body>
        </html>
        `
    },
    {
        "title": "Exercise 2: Absolute Position",
        "task": "Position a box at the bottom-right corner of the page using absolute positioning.",
        "predefinedCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .box {
              /* Add your styles here */
            }
          </style>
        </head>
        <body>
          <div class="box">I'm here!</div>
        </body>
        </html>
        `,
        "solutionCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .box {
              position: absolute;
              bottom: 10px;
              right: 10px;
              background-color: lightcoral;
              padding: 20px;
              color: white;
              font-weight: bold;
            }
          </style>
        </head>
        <body>
          <div class="box">I'm here!</div>
        </body>
        </html>
        `
    }
],
"CSS Opacity": [
    {
        "title": "Exercise 1: Adjusting Opacity",
        "task": "Create an image with 50% opacity.",
        "predefinedCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            img {
              /* Add your styles here */
            }
          </style>
        </head>
        <body>
          <img src="https://via.placeholder.com/150" alt="Placeholder Image">
        </body>
        </html>
        `,
        "solutionCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            img {
              opacity: 0.5;
            }
          </style>
        </head>
        <body>
          <img src="https://via.placeholder.com/150" alt="Placeholder Image">
        </body>
        </html>
        `
    },
    {
        "title": "Exercise 2: Hover Effect with Opacity",
        "task": "Make an image opaque by default and fully visible on hover.",
        "predefinedCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            img {
              /* Add your styles here */
            }
          </style>
        </head>
        <body>
          <img src="https://via.placeholder.com/150" alt="Placeholder Image">
        </body>
        </html>
        `,
        "solutionCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            img {
              opacity: 0.5;
              transition: opacity 0.3s;
            }
            img:hover {
              opacity: 1;
            }
          </style>
        </head>
        <body>
          <img src="https://via.placeholder.com/150" alt="Placeholder Image">
        </body>
        </html>
        `
    }
],
"CSS Navbar": [
    {
        "title": "Exercise 1: Simple Navbar",
        "task": "Create a horizontal navigation bar with links for Home, About, and Contact.",
        "predefinedCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .navbar {
              /* Add your styles here */
            }
            .navbar a {
              /* Add your styles here */
            }
          </style>
        </head>
        <body>
          <div class="navbar">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </body>
        </html>
        `,
        "solutionCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .navbar {
              display: flex;
              background-color: lightgray;
              padding: 10px;
            }
            .navbar a {
              margin-right: 20px;
              text-decoration: none;
              color: black;
            }
            .navbar a:hover {
              color: blue;
            }
          </style>
        </head>
        <body>
          <div class="navbar">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </body>
        </html>
        `
    },
    {
        "title": "Exercise 2: Centered Navbar",
        "task": "Style a navigation bar where the links are centered.",
        "predefinedCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .navbar {
              /* Add your styles here */
            }
          </style>
        </head>
        <body>
          <div class="navbar">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </body>
        </html>
        `,
        "solutionCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .navbar {
              display: flex;
              justify-content: center;
              background-color: lightgray;
              padding: 10px;
            }
            .navbar a {
              margin: 0 15px;
              text-decoration: none;
              color: black;
            }
            .navbar a:hover {
              color: blue;
            }
          </style>
        </head>
        <body>
          <div class="navbar">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </body>
        </html>
        `
    }
],
"CSS Dropdowns": [
    {
        "title": "Exercise 1: Basic Dropdown",
        "task": "Create a dropdown menu that appears when hovering over a link.",
        "predefinedCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .dropdown {
              /* Add your styles here */
            }
            .dropdown-content {
              /* Add your styles here */
            }
          </style>
        </head>
        <body>
          <div class="dropdown">
            <button>Menu</button>
            <div class="dropdown-content">
              <a href="#option1">Option 1</a>
              <a href="#option2">Option 2</a>
              <a href="#option3">Option 3</a>
            </div>
          </div>
        </body>
        </html>
        `,
        "solutionCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .dropdown {
              position: relative;
              display: inline-block;
            }
            .dropdown-content {
              display: none;
              position: absolute;
              background-color: lightgray;
              box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
              padding: 10px;
              z-index: 1;
            }
            .dropdown:hover .dropdown-content {
              display: block;
            }
            .dropdown-content a {
              text-decoration: none;
              color: black;
              display: block;
              margin-bottom: 5px;
            }
          </style>
        </head>
        <body>
          <div class="dropdown">
            <button>Menu</button>
            <div class="dropdown-content">
              <a href="#option1">Option 1</a>
              <a href="#option2">Option 2</a>
              <a href="#option3">Option 3</a>
            </div>
          </div>
        </body>
        </html>
        `
    },
    {
        "title": "Exercise 2: Dropdown with Styling",
        "task": "Style the dropdown content with hover effects and padding.",
        "predefinedCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .dropdown {
              /* Add your styles here */
            }
            .dropdown-content {
              /* Add your styles here */
            }
          </style>
        </head>
        <body>
          <div class="dropdown">
            <button>Menu</button>
            <div class="dropdown-content">
              <a href="#option1">Option 1</a>
              <a href="#option2">Option 2</a>
              <a href="#option3">Option 3</a>
            </div>
          </div>
        </body>
        </html>
        `,
        "solutionCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .dropdown {
              position: relative;
              display: inline-block;
            }
            .dropdown-content {
              display: none;
              position: absolute;
              background-color: lightblue;
              padding: 10px;
              box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
              z-index: 1;
            }
            .dropdown:hover .dropdown-content {
              display: block;
            }
            .dropdown-content a {
              color: black;
              text-decoration: none;
              display: block;
              margin-bottom: 5px;
              padding: 5px;
            }
            .dropdown-content a:hover {
              background-color: darkblue;
              color: white;
            }
          </style>
        </head>
        <body>
          <div class="dropdown">
            <button>Menu</button>
            <div class="dropdown-content">
              <a href="#option1">Option 1</a>
              <a href="#option2">Option 2</a>
              <a href="#option3">Option 3</a>
            </div>
          </div>
        </body>
        </html>
        `
    }
],
"CSS Transitions": [
    {
        "title": "Exercise 1: Color Transition",
        "task": "Create a button that changes its background color smoothly when hovered.",
        "predefinedCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .button {
              /* Add your styles here */
            }
          </style>
        </head>
        <body>
          <button class="button">Hover me!</button>
        </body>
        </html>
        `,
        "solutionCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .button {
              background-color: lightblue;
              padding: 10px 20px;
              border: none;
              border-radius: 5px;
              transition: background-color 0.3s ease;
            }
            .button:hover {
              background-color: darkblue;
              color: white;
            }
          </style>
        </head>
        <body>
          <button class="button">Hover me!</button>
        </body>
        </html>
        `
    },
    {
        "title": "Exercise 2: Transform Transition",
        "task": "Create a box that enlarges when hovered.",
        "predefinedCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .box {
              /* Add your styles here */
            }
          </style>
        </head>
        <body>
          <div class="box"></div>
        </body>
        </html>
        `,
        "solutionCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .box {
              width: 100px;
              height: 100px;
              background-color: coral;
              transition: transform 0.3s ease;
            }
            .box:hover {
              transform: scale(1.2);
            }
          </style>
        </head>
        <body>
          <div class="box"></div>
        </body>
        </html>
        `
    }
],
"CSS Animations": [
    {
        "title": "Exercise 1: Bounce Animation",
        "task": "Create a bouncing animation for a ball.",
        "predefinedCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .ball {
              /* Add your styles here */
            }
          </style>
        </head>
        <body>
          <div class="ball"></div>
        </body>
        </html>
        `,
        "solutionCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            @keyframes bounce {
              0%, 100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-50px);
              }
            }
            .ball {
              width: 50px;
              height: 50px;
              background-color: orange;
              border-radius: 50%;
              animation: bounce 1s infinite;
            }
          </style>
        </head>
        <body>
          <div class="ball"></div>
        </body>
        </html>
        `
    },
    {
        "title": "Exercise 2: Fade In Animation",
        "task": "Create a fading effect for a heading.",
        "predefinedCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .heading {
              /* Add your styles here */
            }
          </style>
        </head>
        <body>
          <h1 class="heading">Welcome!</h1>
        </body>
        </html>
        `,
        "solutionCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
            .heading {
              animation: fadeIn 2s ease-in;
            }
          </style>
        </head>
        <body>
          <h1 class="heading">Welcome!</h1>
        </body>
        </html>
        `
    }
],
"CSS Flexbox": [
    {
        "title": "Exercise 1: Center an Element",
        "task": "Use Flexbox to center a box both horizontally and vertically.",
        "predefinedCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .container {
              /* Add your styles here */
            }
            .box {
              width: 100px;
              height: 100px;
              background-color: lightgreen;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="box"></div>
          </div>
        </body>
        </html>
        `,
        "solutionCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .container {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
            }
            .box {
              width: 100px;
              height: 100px;
              background-color: lightgreen;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="box"></div>
          </div>
        </body>
        </html>
        `
    },
    {
        "title": "Exercise 2: Flexbox Layout",
        "task": "Create a row with three evenly spaced boxes.",
        "predefinedCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .container {
              /* Add your styles here */
            }
            .box {
              width: 100px;
              height: 100px;
              background-color: lightcoral;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
          </div>
        </body>
        </html>
        `,
        "solutionCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .container {
              display: flex;
              justify-content: space-around;
            }
            .box {
              width: 100px;
              height: 100px;
              background-color: lightcoral;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
          </div>
        </body>
        </html>
        `
    }
],
"CSS Media Queries": [
    {
        "title": "Exercise 1: Responsive Design",
        "task": "Change the background color of the body based on screen width: blue for widths below 600px and white for widths above.",
        "predefinedCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              /* Add your styles here */
            }
          </style>
        </head>
        <body>
          Resize the browser to see the effect.
        </body>
        </html>
        `,
        "solutionCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              background-color: white;
            }
            @media (max-width: 600px) {
              body {
                background-color: blue;
              }
            }
          </style>
        </head>
        <body>
          Resize the browser to see the effect.
        </body>
        </html>
        `
    },
    {
        "title": "Exercise 2: Hide Element",
        "task": "Hide an image when the screen width is below 400px.",
        "predefinedCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            img {
              /* Add your styles here */
            }
          </style>
        </head>
        <body>
          <img src="https://via.placeholder.com/150" alt="Placeholder Image">
        </body>
        </html>
        `,
        "solutionCode": `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            img {
              display: block;
            }
            @media (max-width: 400px) {
              img {
                display: none;
              }
            }
          </style>
        </head>
        <body>
          <img src="https://via.placeholder.com/150" alt="Placeholder Image">
        </body>
        </html>
        `
    }
],
 };

    let currentModuleIndex = 0;
    let currentExerciseIndex = 0;
    let correctExercises = 0;
    const totalExercises = Object.values(exercises).reduce((total, module) => total + module.length, 0);

    const progress = document.getElementById("progress");
    const moduleLinks = document.getElementById("module-links");
    const exerciseLinks = document.getElementById("exercise-links");
    const editor = ace.edit("editor");

    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/html");

    const exerciseTitle = document.getElementById("exercise-title");
    const exerciseTask = document.getElementById("exercise-task");
    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");
    const runButton = document.getElementById("run-btn");
    const checkButton = document.getElementById("check-btn");
    const preview = document.getElementById("preview");
    const resultMessage = document.getElementById("result-message");
    const progressText = document.getElementById("progress-text");

    // Load modules and exercises
    function loadModuleLinks() {
        const modules = Object.keys(exercises);
        moduleLinks.innerHTML = modules.map((module, index) => {
            return `<li><a href="#" data-module="${index}">${module.charAt(0).toUpperCase() + module.slice(1)}</a></li>`;
        }).join("");

        document.querySelectorAll("#module-links a").forEach(link => {
            link.addEventListener("click", (e) => {
                currentModuleIndex = parseInt(e.target.getAttribute("data-module"));
                currentExerciseIndex = 0;
                loadExercise(currentModuleIndex, currentExerciseIndex);
            });
        });
    }

    function loadExerciseLinks() {
        const currentModule = Object.keys(exercises)[currentModuleIndex];
        const exercisesInModule = exercises[currentModule];

        exerciseLinks.innerHTML = exercisesInModule.map((exercise, index) => {
            return `<li><a href="#" data-exercise="${index}">${exercise.title}</a></li>`;
        }).join("");

        document.querySelectorAll("#exercise-links a").forEach(link => {
            link.addEventListener("click", (e) => {
                currentExerciseIndex = parseInt(e.target.getAttribute("data-exercise"));
                loadExercise(currentModuleIndex, currentExerciseIndex);
            });
        });
    }

    function loadExercise(moduleIndex, exerciseIndex) {
        const module = Object.keys(exercises)[moduleIndex];
        const exercise = exercises[module][exerciseIndex];

        exerciseTitle.textContent = exercise.title;
        exerciseTask.textContent = exercise.task;
        editor.setValue(exercise.predefinedCode);

        // Preview section should be cleared when loading new exercise
        preview.innerHTML = "";

        // Enable/Disable navigation buttons
        prevButton.disabled = (currentExerciseIndex === 0);
        nextButton.disabled = (currentExerciseIndex === exercises[module].length - 1);

        // Handle the "Check Answer" and "Run Code" button states
        resultMessage.textContent = "";
    }

    function checkAnswer() {
        const module = Object.keys(exercises)[currentModuleIndex];
        const exercise = exercises[module][currentExerciseIndex];
        const userCode = editor.getValue().trim();

        // Compare user code with the solution
        if (userCode === exercise.solutionCode.trim()) {
            correctExercises++;
            resultMessage.textContent = "Correct!";
            resultMessage.style.color = "green";
        } else {
            resultMessage.textContent = "Incorrect. Try again!";
            resultMessage.style.color = "red";
        }

        updateProgress();
    }

    function updateProgress() {
        const progressPercentage = (correctExercises / totalExercises) * 100;
        progressText.textContent = `${Math.round(progressPercentage)}%`;
    }

    // Event Listeners
    prevButton.addEventListener("click", () => {
        if (currentExerciseIndex > 0) {
            currentExerciseIndex--;
            loadExercise(currentModuleIndex, currentExerciseIndex);
        }
    });

    nextButton.addEventListener("click", () => {
        if (currentExerciseIndex < exercises[Object.keys(exercises)[currentModuleIndex]].length - 1) {
            currentExerciseIndex++;
            loadExercise(currentModuleIndex, currentExerciseIndex);
        }
    });

    runButton.addEventListener("click", () => {
        preview.innerHTML = editor.getValue();
    });

    checkButton.addEventListener("click", checkAnswer);

    // Initialize the app
    loadModuleLinks();
    loadExerciseLinks();
    loadExercise(currentModuleIndex, currentExerciseIndex);
});
