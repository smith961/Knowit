const modules = [
 {
   title: "CSS Introduction",
   content: `
     <p>CSS (Cascading Style Sheets) is used to style web pages. It controls layout, colors, fonts, and other visual elements.</p>
     <h3>Why Use CSS?</h3>
     <ul>
       <li>Separates content from design</li>
       <li>Improves maintainability</li>
       <li>Enables responsive designs</li>
     </ul>
   `,
   exercise: `
     <p>Edit the code below to change the background color of the box to lightblue:</p>
     <textarea id="exerciseInput" style="width: 100%; height: 100px;">
.testBox {
 background-color: white;
}
     </textarea>
     <button id="runBtn">Run Code</button>
     <div class="output" style="border: 1px solid orangered; margin-top: 10px; padding: 10px;">
       <div class="testBox" style="padding: 20px; text-align: center;">This is a test box.</div>
     </div>
   `
 },
 {
  title: "CSS Syntax",
  content: `
    <p>The syntax of CSS consists of selectors and declaration blocks. A <strong>selector</strong> targets HTML elements, and the <strong>declaration block</strong> contains the styling rules.</p>
    <h3>Structure:</h3>
    <pre>
      selector {
        property: value;
        property: value;
      }
    </pre>
    <h3>Example:</h3>
    <pre>
      h1 {
        color: blue;
        font-size: 20px;
      }
    </pre>
    <p>The above rule applies a blue color and a font size of 20px to all <code>&lt;h1&gt;</code> elements.</p>
  `,
  exercise: `
    <p>Edit the code below to change the text color of the box to green and make the font bold:</p>
    <textarea id="exerciseInput" style="width: 100%; height: 100px;">
.testBox {
  color: black;
  font-weight: normal;
}
    </textarea>
    <button id="runBtn">Run Code</button>
    <div class="output" style="border: 1px solid orangered; margin-top: 10px; padding: 10px;">
      <div class="testBox" style="padding: 20px; text-align: center;">This is a test box.</div>
    </div>
  `
},

 {
  title: "CSS Selectors",
  content: `
    <p>CSS selectors are patterns used to select and style HTML elements. Here are the basic types of selectors:</p>
    <ul>
      <li><strong>Universal Selector:</strong> Targets all elements (<code>*</code>).</li>
      <li><strong>Type Selector:</strong> Targets elements by their tag name (e.g., <code>h1</code>, <code>p</code>).</li>
      <li><strong>Class Selector:</strong> Targets elements by their class name (<code>.classname</code>).</li>
      <li><strong>ID Selector:</strong> Targets elements by their ID (<code>#idname</code>).</li>
      <li><strong>Group Selector:</strong> Targets multiple selectors (<code>h1, p</code>).</li>
    </ul>
    <h3>Example:</h3>
    <pre>
      /* Type Selector */
      h1 {
        color: red;
      }

      /* Class Selector */
      .highlight {
        background-color: yellow;
      }

      /* ID Selector */
      #main {
        font-size: 18px;
      }
    </pre>
  `,
  exercise: `
    <p>Edit the code below to change the font color of the <code>.highlight</code> class to blue:</p>
    <textarea id="exerciseInput" style="width: 100%; height: 100px;">
.highlight {
  color: black;
}
    </textarea>
    <button id="runBtn">Run Code</button>
    <div class="output" style="border: 1px solid orangered; margin-top: 10px; padding: 10px;">
     <div class="testBox" style="padding: 20px; text-align: center;">
      <p class="highlight">This is a highlighted paragraph.</p>
      <p>This is a normal paragraph.</p>
      </div>
    </div>
  `
},
{
 title: "CSS Comments",
 content: `
   <p>CSS comments are used to document your code and are ignored by browsers. Comments can explain what specific styles do or temporarily disable rules during debugging.</p>
   <h3>Syntax:</h3>
   <pre>
     /* This is a CSS comment */
   </pre>
   <p>Comments can span multiple lines:</p>
   <pre>
     /*
       This is a multi-line comment.
       Use it to describe complex styles.
     */
   </pre>
   <p>Comments are a best practice for improving code readability and maintainability.</p>
 `,
 exercise: `
   <p>Add a comment in the code below to explain what the CSS rule does:</p>
   <textarea id="exerciseInput" style="width: 100%; height: 100px;">
p {
 color: red;
}
   </textarea>
   <button id="runBtn">Run Code</button>
   <div class="output" style="border: 1px solid orangered; margin-top: 10px; padding: 10px;">
     <p>This is a paragraph styled with CSS.</p>
   </div>
 `
},

{
 title: "CSS Colors and Backgrounds",
 content: `
   <p>CSS provides properties to set colors and backgrounds for elements. You can use predefined color names, HEX values, RGB, RGBA, HSL, or HSLA values for colors.</p>
   <h3>Color Properties:</h3>
   <ul>
     <li><strong>color:</strong> Sets the text color.</li>
     <li><strong>background-color:</strong> Sets the background color.</li>
   </ul>
   <h3>Background Properties:</h3>
   <ul>
     <li><strong>background-image:</strong> Sets a background image.</li>
     <li><strong>background-size:</strong> Adjusts the size of the background image.</li>
     <li><strong>background-repeat:</strong> Determines if the background image repeats.</li>
   </ul>
   <h3>Example:</h3>
   <pre>
     body {
       color: white;
       background-color: black;
       background-image: url('example.jpg');
       background-size: cover;
       background-repeat: no-repeat;
     }
   </pre>
 `,
 exercise: `
   <p>Edit the code below to change the background color of the box to lightgreen and add a border:</p>
   <textarea id="exerciseInput" style="width: 100%; height: 100px;">
.box {
 background-color: white;
 border: none;
}
   </textarea>
   <button id="runBtn">Run Code</button>
   <div class="output" style="border: 1px solid orangered; margin-top: 10px; padding: 10px;">
     <div class="box" style="padding: 20px; text-align: center;">This is a box with a customizable background.</div>
   </div>
 `
},
{
 title: "CSS Border",
 content: `
   <p>CSS Borders allow you to define the edges of elements. You can style borders using properties such as:</p>
   <ul>
     <li><strong>border-width:</strong> Specifies the width of the border (e.g., 1px, 5px).</li>
     <li><strong>border-style:</strong> Defines the style of the border (e.g., solid, dotted, dashed).</li>
     <li><strong>border-color:</strong> Sets the color of the border.</li>
     <li><strong>border-radius:</strong> Rounds the corners of the border.</li>
   </ul>
   <h3>Example:</h3>
   <pre>
     div {
       border-width: 2px;
       border-style: solid;
       border-color: red;
       border-radius: 10px;
     }
   </pre>
   <p>This will create a red border around the element with rounded corners.</p>
 `,
 exercise: `
   <p>Edit the code below to make the border width 5px, style solid, color blue, and apply a border radius of 15px:</p>
   <textarea id="exerciseInput" style="width: 100%; height: 100px;">
.box {
 border-width: 2px;
 border-style: dotted;
 border-color: black;
 border-radius: 5px;
}
   </textarea>
   <button id="runBtn">Run Code</button>
   <div class="output" style="border: 1px solid orangered; margin-top: 10px; padding: 10px;">
     <div class="box" style="width: 200px; height: 100px; background-color: lightyellow; text-align: center;">This is a bordered box.</div>
   </div>
 `
},
{
 title: "CSS Margin and Padding",
 content: `
   <p>The <strong>margin</strong> and <strong>padding</strong> properties are used to control spacing around elements:</p>
   <ul>
     <li><strong>Margin:</strong> The space outside an element's border.</li>
     <li><strong>Padding:</strong> The space between an element's content and its border.</li>
   </ul>
   <h3>Setting Margins and Padding:</h3>
   <pre>
     div {
       margin: 20px;
       padding: 10px;
     }
   </pre>
   <p>You can also set individual values for each side:</p>
   <pre>
     margin-top: 10px;
     margin-right: 15px;
     padding-left: 5px;
     padding-bottom: 20px;
   </pre>
 `,
 exercise: `
   <p>Edit the code below to add a 15px margin and a 10px padding to the box:</p>
   <textarea id="exerciseInput" style="width: 100%; height: 100px;">
.box {
 margin: 0;
 padding: 0;
 background-color: lightblue;
}
   </textarea>
   <button id="runBtn">Run Code</button>
   <div class="output" style="border: 1px solid orangered; margin-top: 10px; padding: 10px;">
     <div class="box" style="background-color: lightblue; text-align: center;">This box demonstrates margin and padding.</div>
   </div>
 `
},
{
 title: "CSS Height and Width",
 content: `
   <p>The <strong>height</strong> and <strong>width</strong> properties specify the size of an element. You can use absolute (px, cm) or relative (%) units.</p>
   <h3>Example:</h3>
   <pre>
     div {
       height: 100px;
       width: 200px;
       background-color: lightgray;
     }
   </pre>
   <p>The example above creates a div with a height of 100px and a width of 200px.</p>
 `,
 exercise: `
   <p>Edit the code below to set the height to <strong>150px</strong> and width to <strong>250px</strong>:</p>
   <textarea id="exerciseInput" style="width: 100%; height: 100px;">
.box {
 height: 100px;
 width: 200px;
 background-color: lightgray;
}
   </textarea>
   <button id="runBtn">Run Code</button>
   <div class="output" style="border: 1px solid orangered; margin-top: 10px; padding: 10px;">
     <div class="box" style="height: 100px; width: 200px; background-color: lightgray; text-align: center;">This is a box.</div>
   </div>
 `
},
{
 title: "CSS Box Model",
 content: `
   <p>The CSS <strong>box model</strong> describes the rectangular boxes that elements generate. It consists of the following parts:</p>
   <ul>
     <li><strong>Content:</strong> The actual content of the box (e.g., text or images).</li>
     <li><strong>Padding:</strong> The space between the content and the border.</li>
     <li><strong>Border:</strong> The edge of the box, surrounding the padding.</li>
     <li><strong>Margin:</strong> The space outside the border, separating the box from other elements.</li>
   </ul>
   <h3>Example:</h3>
   <pre>
     div {
       width: 200px;
       padding: 10px;
       border: 5px solid black;
       margin: 15px;
     }
   </pre>
   <p>The total width of the box is the sum of the width, padding, border, and margin.</p>
 `,
 exercise: `
   <p>Edit the code below to set a padding of 20px, a border of 5px solid red, and a margin of 30px:</p>
   <textarea id="exerciseInput" style="width: 100%; height: 100px;">
.box {
 padding: 0;
 border: none;
 margin: 0;
 background-color: lightyellow;
}
   </textarea>
   <button id="runBtn">Run Code</button>
   <div class="output" style="border: 1px solid orangered; margin-top: 10px; padding: 10px;">
     <div class="box" style="background-color: lightyellow; width: 200px; text-align: center;">This box demonstrates the box model.</div>
   </div>
 `
},
{
 title: "CSS Fonts",
 content: `
   <p>CSS provides properties to customize fonts on a webpage. Common font properties include:</p>
   <ul>
     <li><strong>font-family:</strong> Specifies the font of the text.</li>
     <li><strong>font-size:</strong> Sets the size of the font.</li>
     <li><strong>font-weight:</strong> Specifies the thickness of the font (e.g., bold).</li>
     <li><strong>font-style:</strong> Sets the style of the font (e.g., italic).</li>
   </ul>
   <h3>Example:</h3>
   <pre>
     p {
       font-family: Arial, sans-serif;
       font-size: 16px;
       font-weight: bold;
       font-style: italic;
     }
   </pre>
 `,
 exercise: `
   <p>Edit the code below to change the font family to <strong>Verdana</strong>, font size to <strong>20px</strong>, and make the font style <strong>italic</strong>:</p>
   <textarea id="exerciseInput" style="width: 100%; height: 100px;">
.textBox {
 font-family: Arial, sans-serif;
 font-size: 16px;
 font-style: normal;
}
   </textarea>
   <button id="runBtn">Run Code</button>
   <div class="output" style="border: 1px solid orangered; margin-top: 10px; padding: 10px;">
     <p class="textBox">This is a customizable text box.</p>
   </div>
 `
},
{
 title: "CSS Icons",
 content: `
   <p>Icons are often used to visually represent actions or objects on a webpage. CSS allows you to add icons using:</p>
   <ul>
     <li><strong>Font-based icons:</strong> Use libraries like Font Awesome.</li>
     <li><strong>Image-based icons:</strong> Use <code>background-image</code> or <code>img</code> elements.</li>
   </ul>
   <h3>Font-based Icon Example:</h3>
   <pre>
     &lt;i class="fa fa-home"&gt;&lt;/i&gt;
   </pre>
   <h3>Image-based Icon Example:</h3>
   <pre>
     .icon {
       background-image: url('icon.png');
       width: 32px;
       height: 32px;
       background-size: cover;
     }
   </pre>
 `,
 exercise: `
   <p>Edit the code below to change the background image of the icon to a new URL (<code>new-icon.png</code>) and make the icon size <strong>50px x 50px</strong>:</p>
   <textarea id="exerciseInput" style="width: 100%; height: 100px;">
.icon {
 background-image: url('old-icon.png');
 width: 32px;
 height: 32px;
 background-size: cover;
}
   </textarea>
   <button id="runBtn">Run Code</button>
   <div class="output" style="border: 1px solid orangered; margin-top: 10px; padding: 10px;">
     <div class="icon" style="background-image: url('old-icon.png'); width: 32px; height: 32px;"></div>
   </div>
 `
},
{
 title: "CSS Links",
 content: `
   <p>CSS allows you to style links to improve their appearance and usability. Links can have different styles for different states:</p>
   <ul>
     <li><strong>:link</strong>: Targets unvisited links.</li>
     <li><strong>:visited</strong>: Targets visited links.</li>
     <li><strong>:hover</strong>: Targets links when the mouse pointer is over them.</li>
     <li><strong>:active</strong>: Targets links during the moment they are clicked.</li>
   </ul>
   <h3>Example:</h3>
   <pre>
     a:link {
       color: blue;
     }
     a:visited {
       color: purple;
     }
     a:hover {
       color: green;
     }
     a:active {
       color: red;
     }
   </pre>
 `,
 exercise: `
   <p>Edit the code below to change the hover color of links to orange:</p>
   <textarea id="exerciseInput" style="width: 100%; height: 100px;">
a:hover {
 color: green;
}
   </textarea>
   <button id="runBtn">Run Code</button>
   <div class="output" style="border: 1px solid orangered; margin-top: 10px; padding: 10px;">
     <a href="#" style="text-decoration: none;">Hover over this link to see the effect.</a>
   </div>
 `
},
{
 title: "CSS Lists and Tables",
 content: `
   <p>CSS provides properties to style lists and tables, enhancing their appearance and usability.</p>
   <h3>Styling Lists:</h3>
   <pre>
     ul {
       list-style-type: circle;
     }
     li {
       margin: 5px 0;
     }
   </pre>
   <h3>Styling Tables:</h3>
   <pre>
     table {
       border-collapse: collapse;
       width: 100%;
     }
     th, td {
       border: 1px solid black;
       padding: 8px;
     }
     th {
       background-color: lightgray;
     }
   </pre>
 `,
 exercise: `
   <p>Edit the code below to set the list style to square and add a lightgray background to table headers:</p>
   <textarea id="exerciseInput" style="width: 100%; height: 100px;">
ul {
 list-style-type: disc;
}
th {
 background-color: white;
}
   </textarea>
   <button id="runBtn">Run Code</button>
   <div class="output" style="border: 1px solid orangered; margin-top: 10px; padding: 10px;">
     <ul>
       <li>List Item 1</li>
       <li>List Item 2</li>
     </ul>
     <table>
       <tr>
         <th>Header 1</th>
         <th>Header 2</th>
       </tr>
       <tr>
         <td>Data 1</td>
         <td>Data 2</td>
       </tr>
     </table>
   </div>
 `
},
{
 title: "CSS Display and Position",
 content: `
   <p>CSS provides properties to control how elements are displayed and positioned on a web page:</p>
   <h4>Display:</h4>
   <ul>
     <li><strong>block:</strong> Element starts on a new line and takes up the full width.</li>
     <li><strong>inline:</strong> Element does not start on a new line and only takes up as much width as necessary.</li>
     <li><strong>none:</strong> Hides the element.</li>
   </ul>
   <h4>Position:</h4>
   <ul>
     <li><strong>static:</strong> Default positioning.</li>
     <li><strong>relative:</strong> Positioned relative to its normal position.</li>
     <li><strong>absolute:</strong> Positioned relative to the nearest positioned ancestor.</li>
     <li><strong>fixed:</strong> Stays in place relative to the viewport.</li>
   </ul>
   <h3>Example:</h3>
   <pre>
     .block {
       display: block;
     }
     .inline {
       display: inline;
     }
     .absolute {
       position: absolute;
       top: 50px;
       left: 50px;
     }
   </pre>
 `,
 exercise: `
   <p>Edit the code below to set the first box to <strong>block</strong>, the second to <strong>inline</strong>, and position the third box <strong>absolute</strong> at <strong>top: 100px</strong> and <strong>left: 50px</strong>:</p>
   <textarea id="exerciseInput" style="width: 100%; height: 100px;">
.box1 {
 display: inline;
}
.box2 {
 display: block;
}
.box3 {
 position: static;
}
   </textarea>
   <button id="runBtn">Run Code</button>
   <div class="output" style="border: 1px solid orangered; margin-top: 10px; padding: 10px;">
     <div class="box1" style="background-color: lightblue;">Box 1</div>
     <div class="box2" style="background-color: lightgreen;">Box 2</div>
     <div class="box3" style="background-color: lightcoral; width: 100px; height: 50px;">Box 3</div>
   </div>
 `
},
{
 title: "CSS Opacity",
 content: `
   <p>The <strong>opacity</strong> property sets the transparency level of an element. Values range from 0 (completely transparent) to 1 (completely opaque).</p>
   <h3>Example:</h3>
   <pre>
     .transparent {
       opacity: 0.5; /* 50% transparent */
     }
     .opaque {
       opacity: 1; /* Fully opaque */
     }
   </pre>
   <p>Setting opacity can help create overlays, fade effects, and more.</p>
 `,
 exercise: `
   <p>Edit the code below to set the opacity of the first box to <strong>0.3</strong> and the second box to <strong>0.8</strong>:</p>
   <textarea id="exerciseInput" style="width: 100%; height: 100px;">
.box1 {
 opacity: 1;
}
.box2 {
 opacity: 0.5;
}
   </textarea>
   <button id="runBtn">Run Code</button>
   <div class="output" style="border: 1px solid orangered; margin-top: 10px; padding: 10px;">
     <div class="box1" style="width: 100px; height: 50px; background-color: lightblue;">Box 1</div>
     <div class="box2" style="width: 100px; height: 50px; background-color: lightgreen;">Box 2</div>
   </div>
 `
},
{
 title: "CSS Navbar",
 content: `
   <p>CSS allows you to style navigation bars to create a user-friendly interface. Common techniques include:</p>
   <ul>
     <li>Using <strong>flexbox</strong> or <strong>inline-block</strong> for horizontal alignment.</li>
     <li>Applying <strong>background colors</strong>, <strong>padding</strong>, and <strong>hover effects</strong>.</li>
   </ul>
   <h3>Example:</h3>
   <pre>
     .navbar {
       background-color: black;
       padding: 10px;
     }
     .navbar a {
       color: white;
       text-decoration: none;
       margin: 0 15px;
     }
     .navbar a:hover {
       color: lightblue;
     }
   </pre>
   <p>This creates a horizontal navigation bar with styled links.</p>
 `,
 exercise: `
   <p>Edit the code below to change the navbar background color to <strong>darkblue</strong>, the link color to <strong>white</strong>, and the hover color to <strong>yellow</strong>:</p>
   <textarea id="exerciseInput" style="width: 100%; height: 100px;">
.navbar {
 background-color: gray;
}
.navbar a {
 color: black;
}
.navbar a:hover {
 color: red;
}
   </textarea>
   <button id="runBtn">Run Code</button>
   <div class="output" style="border: 1px solid orangered; margin-top: 10px; padding: 10px;">
     <div class="navbar">
       <a href="#">Home</a>
       <a href="#">About</a>
       <a href="#">Contact</a>
     </div>
   </div>
 `
},
{
 title: "CSS Dropdowns",
 content: `
   <p>CSS dropdown menus provide a way to display additional options when a user hovers over or clicks on a menu item:</p>
   <ul>
     <li>Use <strong>hover</strong> pseudo-class to toggle visibility.</li>
     <li>Set <strong>position: absolute</strong> for the dropdown menu to ensure it appears correctly.</li>
   </ul>
   <h3>Example:</h3>
   <pre>
     .dropdown {
       position: relative;
       display: inline-block;
     }
     .dropdown-content {
       display: none;
       position: absolute;
       background-color: white;
       border: 1px solid gray;
       box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
     }
     .dropdown:hover .dropdown-content {
       display: block;
     }
   </pre>
 `,
 exercise: `
   <p>Edit the code below to make the dropdown content visible on hover and add a background color of <strong>lightblue</strong>:</p>
   <textarea id="exerciseInput" style="width: 100%; height: 100px;">
.dropdown-content {
 display: none;
 background-color: white;
}
.dropdown:hover .dropdown-content {
 display: none;
}
   </textarea>
   <button id="runBtn">Run Code</button>
   <div class="output" style="border: 1px solid orangered; margin-top: 10px; padding: 10px;">
     <div class="dropdown">
       <button>Menu</button>
       <div class="dropdown-content" style="padding: 10px;">
         <a href="#">Option 1</a><br />
         <a href="#">Option 2</a><br />
         <a href="#">Option 3</a>
       </div>
     </div>
   </div>
 `
},
{
 title: "CSS Layouts",
 content: `
   <p>CSS layouts help arrange elements on a web page:</p>
   <ul>
     <li><strong>Flexbox:</strong> A layout model for aligning and distributing items in a container.</li>
     <li><strong>Grid:</strong> A two-dimensional layout system for arranging items into rows and columns.</li>
   </ul>
   <h3>Flexbox Example:</h3>
   <pre>
     .container {
       display: flex;
       justify-content: space-around;
     }
     .item {
       background-color: lightcoral;
       padding: 20px;
     }
   </pre>
   <h3>Grid Example:</h3>
   <pre>
     .grid-container {
       display: grid;
       grid-template-columns: 1fr 1fr 1fr;
       gap: 10px;
     }
     .grid-item {
       background-color: lightgreen;
       padding: 20px;
     }
   </pre>
 `,
 exercise: `
   <p>Edit the code below to create a grid with 3 columns and a gap of <strong>15px</strong>:</p>
   <textarea id="exerciseInput" style="width: 100%; height: 100px;">
.grid-container {
 display: grid;
 grid-template-columns: 1fr 1fr;
 gap: 5px;
}
   </textarea>
   <button id="runBtn">Run Code</button>
   <div class="output" style="border: 1px solid orangered; margin-top: 10px; padding: 10px;">
     <div class="grid-container">
       <div class="grid-item">1</div>
       <div class="grid-item">2</div>
       <div class="grid-item">3</div>
       <div class="grid-item">4</div>
     </div>
   </div>
 `
},

{
 title: "CSS Transition and Animation",
 content: `
   <p>CSS allows you to add animations and transitions to elements:</p>
   <h4>Transitions:</h4>
   <ul>
     <li><strong>transition:</strong> Specifies the property, duration, and timing function for smooth changes.</li>
   </ul>
   <h4>Animations:</h4>
   <ul>
     <li><strong>@keyframes:</strong> Defines the animation's key steps.</li>
     <li><strong>animation:</strong> Applies the animation to an element.</li>
   </ul>
   <h3>Examples:</h3>
   <h4>Transition:</h4>
   <pre>
     .box {
       transition: transform 0.3s;
     }
     .box:hover {
       transform: scale(1.2);
     }
   </pre>
   <h4>Animation:</h4>
   <pre>
     @keyframes bounce {
       0%, 100% {
         transform: translateY(0);
       }
       50% {
         transform: translateY(-20px);
       }
     }
     .animated-box {
       animation: bounce 1s infinite;
     }
   </pre>
 `,
 exercise: `
   <p>Edit the code below to create a <strong>2-second transition</strong> on the <strong>background color</strong> when hovering over the box:</p>
   <textarea id="exerciseInput" style="width: 100%; height: 100px;">
.box {
 background-color: lightblue;
 transition: none;
}
.box:hover {
 background-color: lightcoral;
}
   </textarea>
   <button id="runBtn">Run Code</button>
   <div class="output" style="border: 1px solid orangered; margin-top: 10px; padding: 10px;">
     <div class="box" style="width: 100px; height: 50px;">Hover over me</div>
   </div>
 `
},
{
 title: "CSS Flexbox",
 content: `
   <p>CSS Flexbox (Flexible Box Layout) is a layout model that allows items to align and distribute space within a container:</p>
   <h4>Key Properties:</h4>
   <ul>
     <li><strong>display: flex;</strong> Enables the flex container.</li>
     <li><strong>justify-content:</strong> Aligns items horizontally (e.g., center, space-between).</li>
     <li><strong>align-items:</strong> Aligns items vertically (e.g., center, flex-start).</li>
     <li><strong>flex-wrap:</strong> Specifies whether items should wrap onto multiple lines.</li>
   </ul>
   <h3>Example:</h3>
   <pre>
     .flex-container {
       display: flex;
       justify-content: center;
       align-items: center;
       height: 200px;
       background-color: lightgray;
     }
     .flex-item {
       padding: 20px;
       background-color: lightblue;
     }
   </pre>
 `,
 exercise: `
   <p>Edit the code below to center the flex items both horizontally and vertically:</p>
   <textarea id="exerciseInput" style="width: 100%; height: 100px;">
.flex-container {
 display: flex;
 justify-content: flex-start;
 align-items: flex-start;
}
   </textarea>
   <button id="runBtn">Run Code</button>
   <div class="output" style="border: 1px solid orangered; margin-top: 10px; padding: 10px;">
     <div class="flex-container" style="height: 200px;">
       <div class="flex-item">Item 1</div>
       <div class="flex-item">Item 2</div>
       <div class="flex-item">Item 3</div>
     </div>
   </div>
 `
},
{
 title: "CSS Media Queries",
 content: `
   <p>CSS Media Queries are used to create responsive designs that adapt to different screen sizes and devices:</p>
   <h4>Syntax:</h4>
   <pre>
     @media (max-width: 600px) {
       body {
         background-color: lightblue;
       }
     }
   </pre>
   <h4>Common Media Features:</h4>
   <ul>
     <li><strong>max-width:</strong> Applies styles for screens smaller than a specified width.</li>
     <li><strong>min-width:</strong> Applies styles for screens larger than a specified width.</li>
     <li><strong>orientation:</strong> Targets screen orientation (portrait or landscape).</li>
   </ul>
 `,
 exercise: `
   <p>Edit the code below to change the background color to <strong>lightgreen</strong> for screens smaller than <strong>500px</strong>:</p>
   <textarea id="exerciseInput" style="width: 100%; height: 100px;">
@media (max-width: 800px) {
 body {
   background-color: lightcoral;
 }
}
   </textarea>
   <button id="runBtn">Run Code</button>
   <div class="output" style="border: 1px solid orangered; margin-top: 10px; padding: 10px;">
     Resize your browser to test the media query.
   </div>
 `
},
{
 title: "CSS Grid Layout",
 content: `
   <p>CSS Grid Layout is a two-dimensional layout system for arranging items into rows and columns:</p>
   <h4>Key Properties:</h4>
   <ul>
     <li><strong>display: grid;</strong> Enables the grid container.</li>
     <li><strong>grid-template-columns:</strong> Defines the number and size of columns.</li>
     <li><strong>grid-template-rows:</strong> Defines the number and size of rows.</li>
     <li><strong>gap:</strong> Adds spacing between grid items.</li>
   </ul>
   <h3>Example:</h3>
   <pre>
     .grid-container {
       display: grid;
       grid-template-columns: 1fr 1fr 1fr;
       gap: 10px;
     }
     .grid-item {
       background-color: lightblue;
       padding: 20px;
     }
   </pre>
 `,
 exercise: `
   <p>Edit the code below to create a grid with <strong>4 columns</strong> and a <strong>20px gap</strong>:</p>
   <textarea id="exerciseInput" style="width: 100%; height: 100px;">
.grid-container {
 display: grid;
 grid-template-columns: 1fr 1fr;
 gap: 10px;
 
}
   </textarea>
   <button id="runBtn">Run Code</button>
   <div class="output" style="border: 1px solid orangered; margin-top: 10px; padding: 10px;">
     <div class="grid-container">
       <div class="grid-item">1</div>
       <div class="grid-item">2</div>
       <div class="grid-item">3</div>
       <div class="grid-item">4</div>
     </div>
   </div>
 `
}
];
const moduleList = document.getElementById("moduleList");
const dynamicSection = document.getElementById("dynamicSection");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

// Populate Sidebar with Titles Only
modules.forEach((module, index) => {
  const li = document.createElement("li");
  const link = document.createElement("a");
  link.textContent = module.title;
  link.href = "#";
  link.addEventListener("click", () => loadModule(index));
  li.appendChild(link);
  moduleList.appendChild(li);
});

// Load Module Content
function loadModule(index) {
  currentIndex = index;
  dynamicSection.innerHTML = `
    <h2>${modules[index].title}</h2>
    <div>${modules[index].content}</div>
    <div class="workspace">
      <h3>Exercise</h3>
      ${modules[index].exercise}
    </div>
  `;

  // Add functionality to the Run Code button
  const runBtn = document.getElementById("runBtn");
  const exerciseInput = document.getElementById("exerciseInput");
  const output = document.getElementById("output");

  if (runBtn) {
    runBtn.addEventListener("click", () => {
      const userCSS = exerciseInput.value;

      // Create a style tag and inject the CSS to apply to the testBox or testText
      const style = document.createElement("style");
      style.textContent = userCSS;
      document.head.appendChild(style);

      // Display the output container, showing the results of the user's CSS
      const resultArea = output.querySelector("#testBox") || output.querySelector("#testText");

      // Apply the CSS to the result area
      if (resultArea) {
        // Applying specific styles from user input to elements
        if (userCSS.includes("background-color")) {
          const bgColor = userCSS.match(/background-color:\s*([^;]+)/);
          if (bgColor) resultArea.style.backgroundColor = bgColor[1];
        }
        if (userCSS.includes("color")) {
          const color = userCSS.match(/color:\s*([^;]+)/);
          if (color) resultArea.style.color = color[1];
        }
        if (userCSS.includes("font-style")) {
          const fontStyle = userCSS.match(/font-style:\s*([^;]+)/);
          if (fontStyle) resultArea.style.fontStyle = fontStyle[1];
        }
        if (userCSS.includes("font-size")) {
          const fontSize = userCSS.match(/font-size:\s*([^;]+)/);
          if (fontSize) resultArea.style.fontSize = fontSize[1];
        }
      }
    });
  }

  updateNavigation();
}

// Update Navigation Buttons
function updateNavigation() {
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === modules.length - 1;
}

// Navigation Button Handlers
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    loadModule(currentIndex - 1);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < modules.length - 1) {
    loadModule(currentIndex + 1);
  }
});

// Load the first module by default
loadModule(0);