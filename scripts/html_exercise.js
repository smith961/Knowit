document.addEventListener("DOMContentLoaded", () => {
 const exercises = {
     introduction: [
         {
             title: "Exercise 1: Nested Headings",
             task: "Create a heading structure using <h1>, <h2>, and <h3> tags for a blog titled 'Travel Adventures' and the subheading should be 'Europe' and 'Italy'.",
             predefinedCode: `<h1>Travel Blog</h1>\n<h2>Insert subheading</h2>\n<h3></h3>`,
             solution: `<h1>Travel Adventures</h1>\n<h2>Europe</h2>\n<h3>Italy</h3>`
         },
         {
             title: "Exercise 2: Adding Metadata",
             task: "Write the basic structure of an HTML document and add metadata for the title as 'HTML Basics' and description as 'Learn HTML with fun exercises.'",
             predefinedCode: `<!DOCTYPE html>\n<html>\n<head>\n<title>Sample Title</title>\n<meta name="description" content="Description here">\n</head>\n<body>\n</body>\n</html>`,
             solution: `<!DOCTYPE html>\n<html>\n<head>\n<title>HTML Basics</title>\n<meta name="description" content="Learn HTML with fun exercises">\n</head>\n<body>\n</body>\n</html>`
         }
     ],
     "HTML Editors": [
            {
                title: "Editors Exercise 1",
                task: "Write an HTML document that includes a comment above the title explaining the document purpose.",
                predefinedCode: "<!DOCTYPE html>\n<html>\n<head>\n<!-- -->\n<title></title>\n</head>\n<body>\n</body>\n</html>",
                solution: "<!DOCTYPE html>\n<html>\n<head>\n<!-- This is a simple HTML document -->\n<title>Simple Document</title>\n</head>\n<body>\n</body>\n</html>"
            },
            {
                title: "Editors Exercise 2",
                task: "Add a meta tag for character encoding in the head section of the previous document.",
                predefinedCode: "<!DOCTYPE html>\n<html>\n<head>\n<!-- This is a simple HTML document -->\n<title>Simple Document</title>\n</head>\n<body>\n</body>\n</html>",
                solution: "<!DOCTYPE html>\n<html>\n<head>\n<meta charset=\"UTF-8\">\n<!-- This is a simple HTML document -->\n<title>Simple Document</title>\n</head>\n<body>\n</body>\n</html>"
            }
        ],
        "HTML Basics": [
            {
                title: "Basics Exercise 1",
                task: "Create an ordered list with three items: 'Apple', 'Banana', and 'Cherry'.",
                predefinedCode: "<!DOCTYPE html>\n<html>\n<head>\n<title>Fruits List</title>\n</head>\n<body>\n<ol>\n<li></li>\n</ol>\n</body>\n</html>",
                solution: "<!DOCTYPE html>\n<html>\n<head>\n<title>Fruits List</title>\n</head>\n<body>\n<ol>\n<li>Apple</li>\n<li>Banana</li>\n<li>Cherry</li>\n</ol>\n</body>\n</html>"
            },
            {
                title: "Basics Exercise 2",
                task: "Create an unordered list with three items: 'Red', 'Green', and 'Blue'.",
                predefinedCode: "<!DOCTYPE html>\n<html>\n<head>\n<title>Colors List</title>\n</head>\n<body>\n<ul>\n<li></li>\n</ul>\n</body>\n</html>",
                solution: "<!DOCTYPE html>\n<html>\n<head>\n<title>Colors List</title>\n</head>\n<body>\n<ul>\n<li>Red</li>\n<li>Green</li>\n<li>Blue</li>\n</ul>\n</body>\n</html>"
            }
        ],
        "HTML Elements": [
            {
                title: "Elements Exercise 1",
                task: "Add an image to the page with the source 'image.jpg' and alt text 'Sample Image'.",
                predefinedCode: "<!DOCTYPE html>\n<html>\n<head>\n<title>Image Example</title>\n</head>\n<body>\n<img src=\"\" alt=\"\">\n</body>\n</html>",
                solution: "<!DOCTYPE html>\n<html>\n<head>\n<title>Image Example</title>\n</head>\n<body>\n<img src=\"image.jpg\" alt=\"Sample Image\">\n</body>\n</html>"
            },
            {
                title: "Elements Exercise 2",
                task: "Add a link to 'https://example.com' with the text 'Visit Example'.",
                predefinedCode: "<!DOCTYPE html>\n<html>\n<head>\n<title>Link Example</title>\n</head>\n<body>\n<a href=\"\"></a>\n</body>\n</html>",
                solution: "<!DOCTYPE html>\n<html>\n<head>\n<title>Link Example</title>\n</head>\n<body>\n<a href=\"https://example.com\">Visit Example</a>\n</body>\n</html>"
            }
        ],
       
        "HTML Attributes": [
         {
             title: "Add a Link with Target Attribute",
             task: "Create a link to 'https://www.example.com' that opens in a new tab.",
             predefinedCode: `
 <!DOCTYPE html>
 <html>
 <head>
     <title>Link Example</title>
 </head>
 <body>
     <a href="">Click Here</a>
 </body>
 </html>`,
             solution: `
 <!DOCTYPE html>
 <html>
 <head>
     <title>Link Example</title>
 </head>
 <body>
     <a href="https://www.example.com" target="_blank">Click Here</a>
 </body>
 </html>`
         },
         {
             title: "Add a Button with Disabled Attribute",
             task: "Add a button labeled 'Submit' that is initially disabled.",
             predefinedCode: `
 <!DOCTYPE html>
 <html>
 <head>
     <title>Button Example</title>
 </head>
 <body>
     <button>Submit</button>
 </body>
 </html>`,
             solution: `
 <!DOCTYPE html>
 <html>
 <head>
     <title>Button Example</title>
 </head>
 <body>
     <button disabled>Submit</button>
 </body>
 </html>`
         }
     ],
     "HTML Headings": [
         {
             title: "Create Multiple Headings",
             task: "Create an H1 heading with the text 'Welcome' and an H2 heading with the text 'Introduction'.",
             predefinedCode: `
 <!DOCTYPE html>
 <html>
 <head>
     <title>Headings Example</title>
 </head>
 <body>
     <h1></h1>
     <h2></h2>
 </body>
 </html>`,
             solution: `
 <!DOCTYPE html>
 <html>
 <head>
     <title>Headings Example</title>
 </head>
 <body>
     <h1>Welcome</h1>
     <h2>Introduction</h2>
 </body>
 </html>`
         },
         {
             title: "Nest a Heading Inside a Section",
             task: "Create a section with an H3 heading saying 'Content Overview'.",
             predefinedCode: `
 <!DOCTYPE html>
 <html>
 <head>
     <title>Section Example</title>
 </head>
 <body>
     <section>
         <h3></h3>
     </section>
 </body>
 </html>`,
             solution: `
 <!DOCTYPE html>
 <html>
 <head>
     <title>Section Example</title>
 </head>
 <body>
     <section>
         <h3>Content Overview</h3>
     </section>
 </body>
 </html>`
         }
     ],
     "HTML Paragraphs": [
         {
             title: "Add a Paragraph with Strong Text",
             task: "Create a paragraph with the text 'This is important' and make 'important' bold.",
             predefinedCode: `
 <!DOCTYPE html>
 <html>
 <head>
     <title>Paragraph Example</title>
 </head>
 <body>
     <p></p>
 </body>
 </html>`,
             solution: `
 <!DOCTYPE html>
 <html>
 <head>
     <title>Paragraph Example</title>
 </head>
 <body>
     <p>This is <strong>important</strong>.</p>
 </body>
 </html>`
         },
         {
             title: "Add a Multi-line Paragraph",
             task: "Write a paragraph with the text: 'Learning HTML is fun. It helps you build websites.' Each sentence should be on a new line.",
             predefinedCode: `
 <!DOCTYPE html>
 <html>
 <head>
     <title>Paragraph Example</title>
 </head>
 <body>
     <p></p>
 </body>
 </html>`,
             solution: `
 <!DOCTYPE html>
 <html>
 <head>
     <title>Paragraph Example</title>
 </head>
 <body>
     <p>
         Learning HTML is fun.<br>
         It helps you build websites.
     </p>
 </body>
 </html>`
         }
     ],
     "HTML Style": [
         {
             title: "Inline Style for Text Color",
             task: "Create a paragraph with the text 'This is red text' and apply an inline style to make the text color red.",
             predefinedCode: `
 <!DOCTYPE html>
 <html>
 <head>
     <title>Style Example</title>
 </head>
 <body>
     <p></p>
 </body>
 </html>`,
             solution: `
 <!DOCTYPE html>
 <html>
 <head>
     <title>Style Example</title>
 </head>
 <body>
     <p style="color: red;">This is red text.</p>
 </body>
 </html>`
         },
         {
             title: "Add Background Color with Inline Style",
             task: "Create a div with the text 'Highlighted' and set the background color to yellow using inline style.",
             predefinedCode: `
 <!DOCTYPE html>
 <html>
 <head>
     <title>Style Example</title>
 </head>
 <body>
     <div></div>
 </body>
 </html>`,
             solution: `
 <!DOCTYPE html>
 <html>
 <head>
     <title>Style Example</title>
 </head>
 <body>
     <div style="background-color: yellow;">Highlighted</div>
 </body>
 </html>`
         }
     ],
     "HTML Formatting": [
      {
          title: "Bold and Italic Text",
          task: "Create a paragraph where the word 'Bold' is bolded and the word 'Italic' is italicized.",
          predefinedCode: `
<!DOCTYPE html>
<html>
<head>
  <title>Formatting Example</title>
</head>
<body>
  <p>Text: <span></span> and <span></span></p>
</body>
</html>`,
          solution: `
<!DOCTYPE html>
<html>
<head>
  <title>Formatting Example</title>
</head>
<body>
  <p>Text: <strong>Bold</strong> and <em>Italic</em></p>
</body>
</html>`
      },
      {
          title: "Underline Text",
          task: "Create a paragraph where the word 'Underline' is underlined.",
          predefinedCode: `
<!DOCTYPE html>
<html>
<head>
  <title>Formatting Example</title>
</head>
<body>
  <p>Text: <span></span></p>
</body>
</html>`,
          solution: `
<!DOCTYPE html>
<html>
<head>
  <title>Formatting Example</title>
</head>
<body>
  <p>Text: <u>Underline</u></p>
</body>
</html>`
      }
  ],
  "HTML Quotations": [
      {
          title: "Blockquote with Author",
          task: "Create a blockquote with a citation from Albert Einstein.",
          predefinedCode: `
<!DOCTYPE html>
<html>
<head>
  <title>Quote Example</title>
</head>
<body>
  <blockquote></blockquote>
</body>
</html>`,
          solution: `
<!DOCTYPE html>
<html>
<head>
  <title>Quote Example</title>
</head>
<body>
  <blockquote cite="https://www.brainyquote.com/quotes/albert_einstein_131232">
      Life is like riding a bicycle. To keep your balance, you must keep moving.
      <footer>— Albert Einstein</footer>
  </blockquote>
</body>
</html>`
      },
      {
          title: "Inline Quote",
          task: "Create a paragraph where a portion of the text is quoted using inline quotation.",
          predefinedCode: `
<!DOCTYPE html>
<html>
<head>
  <title>Inline Quote Example</title>
</head>
<body>
  <p></p>
</body>
</html>`,
          solution: `
<!DOCTYPE html>
<html>
<head>
  <title>Inline Quote Example</title>
</head>
<body>
  <p>He said <q>Success is not final, failure is not fatal: It is the courage to continue that counts.</q></p>
</body>
</html>`
      }
  ],
  "HTML Comments": [
      {
          title: "Comment Out Code",
          task: "Comment out the line that creates a heading.",
          predefinedCode: `
<!DOCTYPE html>
<html>
<head>
  <title>Comments Example</title>
</head>
<body>
  <h1>Header</h1>
</body>
</html>`,
          solution: `
<!DOCTYPE html>
<html>
<head>
  <title>Comments Example</title>
</head>
<body>
  <!-- <h1>Header</h1> -->
</body>
</html>`
      },
      {
          title: "Add Comment Inside Paragraph",
          task: "Add a comment inside a paragraph without affecting the content.",
          predefinedCode: `
<!DOCTYPE html>
<html>
<head>
  <title>Comments Example</title>
</head>
<body>
  <p></p>
</body>
</html>`,
          solution: `
<!DOCTYPE html>
<html>
<head>
  <title>Comments Example</title>
</head>
<body>
  <p>This is a <span><!-- comment -->important text</span>.</p>
</body>
</html>`
      }
  ],
  "HTML Links": [
      {
          title: "Create a Link to an External Site",
          task: "Create a link to 'https://www.example.com' with the text 'Visit Example'.",
          predefinedCode: `
<!DOCTYPE html>
<html>
<head>
  <title>Link Example</title>
</head>
<body>
  <a href=""></a>
</body>
</html>`,
          solution: `
<!DOCTYPE html>
<html>
<head>
  <title>Link Example</title>
</head>
<body>
  <a href="https://www.example.com">Visit Example</a>
</body>
</html>`
      },
      {
          title: "Link with Email Address",
          task: "Create a link that opens the user's email client with the address 'someone@example.com'.",
          predefinedCode: `
<!DOCTYPE html>
<html>
<head>
  <title>Email Link</title>
</head>
<body>
  <a href=""></a>
</body>
</html>`,
          solution: `
<!DOCTYPE html>
<html>
<head>
  <title>Email Link</title>
</head>
<body>
  <a href="mailto:someone@example.com">Send Email</a>
</body>
</html>`
      }
  ],
  "HTML Images": [
      {
          title: "Add an Image from URL",
          task: "Insert an image with the source 'https://via.placeholder.com/150'.",
          predefinedCode: `
<!DOCTYPE html>
<html>
<head>
  <title>Image Example</title>
</head>
<body>
  <img src="" alt="Image">
</body>
</html>`,
          solution: `
<!DOCTYPE html>
<html>
<head>
  <title>Image Example</title>
</head>
<body>
  <img src="https://via.placeholder.com/150" alt="Image">
</body>
</html>`
      },
      {
          title: "Add an Image with Width and Height",
          task: "Insert an image with the source 'https://via.placeholder.com/150' and set its width to 300px and height to 300px.",
          predefinedCode: `
<!DOCTYPE html>
<html>
<head>
  <title>Image Example</title>
</head>
<body>
  <img src="" alt="Image">
</body>
</html>`,
          solution: `
<!DOCTYPE html>
<html>
<head>
  <title>Image Example</title>
</head>
<body>
  <img src="https://via.placeholder.com/150" alt="Image" width="300" height="300">
</body>
</html>`
      }
  ],
  "HTML Favicons": [
        {
            title: "Add a Favicon",
            task: "Add a favicon to your HTML page using the file 'favicon.ico'.",
            predefinedCode: `
<!DOCTYPE html>
<html>
<head>
    <title>Favicon Example</title>
    <!-- Add Favicon Here -->
</head>
<body>
    <h1>Page with Favicon</h1>
</body>
</html>`,
            solution: `
<!DOCTYPE html>
<html>
<head>
    <title>Favicon Example</title>
    <link rel="icon" href="favicon.ico" type="image/x-icon">
</head>
<body>
    <h1>Page with Favicon</h1>
</body>
</html>`
        },
        {
            title: "Add a Favicon with Size",
            task: "Add a favicon to your HTML page and specify its size as 32x32 pixels.",
            predefinedCode: `
<!DOCTYPE html>
<html>
<head>
    <title>Favicon with Size</title>
    <!-- Add Favicon Here -->
</head>
<body>
    <h1>Page with Favicon</h1>
</body>
</html>`,
            solution: `
<!DOCTYPE html>
<html>
<head>
    <title>Favicon with Size</title>
    <link rel="icon" href="favicon.ico" type="image/x-icon" sizes="32x32">
</head>
<body>
    <h1>Page with Favicon</h1>
</body>
</html>`
        }
    ],
    "HTML Tables": [
        {
            title: "Basic Table",
            task: "Create a table with 2 rows and 2 columns, and fill it with some text.",
            predefinedCode: `
<!DOCTYPE html>
<html>
<head>
    <title>Table Example</title>
</head>
<body>
    <table></table>
</body>
</html>`,
            solution: `
<!DOCTYPE html>
<html>
<head>
    <title>Table Example</title>
</head>
<body>
    <table border="1">
        <tr>
            <td>Row 1, Column 1</td>
            <td>Row 1, Column 2</td>
        </tr>
        <tr>
            <td>Row 2, Column 1</td>
            <td>Row 2, Column 2</td>
        </tr>
    </table>
</body>
</html>`
        },
        {
            title: "Table with Header",
            task: "Create a table with a header row and 2 data rows.",
            predefinedCode: `
<!DOCTYPE html>
<html>
<head>
    <title>Table with Header</title>
</head>
<body>
    <table></table>
</body>
</html>`,
            solution: `
<!DOCTYPE html>
<html>
<head>
    <title>Table with Header</title>
</head>
<body>
    <table border="1">
        <thead>
            <tr>
                <th>Header 1</th>
                <th>Header 2</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Row 1, Column 1</td>
                <td>Row 1, Column 2</td>
            </tr>
            <tr>
                <td>Row 2, Column 1</td>
                <td>Row 2, Column 2</td>
            </tr>
        </tbody>
    </table>
</body>
</html>`
        }
    ],
    "HTML Lists": [
        {
            title: "Ordered List",
            task: "Create an ordered list with 3 items: 'Item 1', 'Item 2', and 'Item 3'.",
            predefinedCode: `
<!DOCTYPE html>
<html>
<head>
    <title>Ordered List</title>
</head>
<body>
    <ol></ol>
</body>
</html>`,
            solution: `
<!DOCTYPE html>
<html>
<head>
    <title>Ordered List</title>
</head>
<body>
    <ol>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ol>
</body>
</html>`
        },
        {
            title: "Unordered List",
            task: "Create an unordered list with 3 items: 'Apple', 'Banana', and 'Cherry'.",
            predefinedCode: `
<!DOCTYPE html>
<html>
<head>
    <title>Unordered List</title>
</head>
<body>
    <ul></ul>
</body>
</html>`,
            solution: `
<!DOCTYPE html>
<html>
<head>
    <title>Unordered List</title>
</head>
<body>
    <ul>
        <li>Apple</li>
        <li>Banana</li>
        <li>Cherry</li>
    </ul>
</body>
</html>`
        }
    ],
    "HTML Div": [
        {
            title: "Create a Div",
            task: "Create a <div> with a class of 'box' and add some text inside it.",
            predefinedCode: `
<!DOCTYPE html>
<html>
<head>
    <title>Div Example</title>
</head>
<body>
    <div></div>
</body>
</html>`,
            solution: `
<!DOCTYPE html>
<html>
<head>
    <title>Div Example</title>
</head>
<body>
    <div class="box">This is a box div</div>
</body>
</html>`
        },
        {
            title: "Nested Divs",
            task: "Create a parent <div> and inside it, create a child <div> with some text.",
            predefinedCode: `
<!DOCTYPE html>
<html>
<head>
    <title>Nested Div Example</title>
</head>
<body>
    <div></div>
</body>
</html>`,
            solution: `
<!DOCTYPE html>
<html>
<head>
    <title>Nested Div Example</title>
</head>
<body>
    <div class="parent">
        <div class="child">This is a child div inside the parent div</div>
    </div>
</body>
</html>`
        }
    ],
    "HTML ID and Class": [
        {
            title: "Create an ID and Class",
            task: "Create a <div> with an ID of 'container' and a class of 'box'.",
            predefinedCode: `
<!DOCTYPE html>
<html>
<head>
    <title>ID and Class Example</title>
</head>
<body>
    <div></div>
</body>
</html>`,
            solution: `
<!DOCTYPE html>
<html>
<head>
    <title>ID and Class Example</title>
</head>
<body>
    <div id="container" class="box">This is a div with an ID and Class</div>
</body>
</html>`
        },
        {
            title: "Select Div Using ID",
            task: "Create a <div> with an ID of 'unique' and apply some inline CSS to change its background color.",
            predefinedCode: `
<!DOCTYPE html>
<html>
<head>
    <title>ID Example</title>
</head>
<body>
    <div></div>
</body>
</html>`,
            solution: `
<!DOCTYPE html>
<html>
<head>
    <title>ID Example</title>
</head>
<body>
    <div id="unique" style="background-color: yellow;">This is a unique div</div>
</body>
</html>`
        }
    ],
    "HTML Layout": [
        {
            title: "Layout with Divs",
            task: "Create a simple layout with a header, main content area, and footer using <div> tags.",
            predefinedCode: `
<!DOCTYPE html>
<html>
<head>
    <title>Simple Layout</title>
</head>
<body>
    <!-- Layout Divs Here -->
</body>
</html>`,
            solution: `
<!DOCTYPE html>
<html>
<head>
    <title>Simple Layout</title>
</head>
<body>
    <div id="header">Header Section</div>
    <div id="content">Main Content Area</div>
    <div id="footer">Footer Section</div>
</body>
</html>`
        },
        {
            title: "Two-Column Layout",
            task: "Create a layout with two columns, one for content and one for a sidebar.",
            predefinedCode: `
<!DOCTYPE html>
<html>
<head>
    <title>Two-Column Layout</title>
</head>
<body>
    <!-- Two Column Layout Here -->
</body>
</html>`,
            solution: `
<!DOCTYPE html>
<html>
<head>
    <title>Two-Column Layout</title>
    <style>
        #main { float: left; width: 70%; }
        #sidebar { float: left; width: 30%; }
    </style>
</head>
<body>
    <div id="main">Main Content Area</div>
    <div id="sidebar">Sidebar Content</div>
</body>
</html>`
        }
    ],
    "HTML Forms": [
        {
            title: "Simple Form",
            task: "Create a form with an input field for the name and a submit button.",
            predefinedCode: `
<!DOCTYPE html>
<html>
<head>
    <title>Simple Form</title>
</head>
<body>
    <form></form>
</body>
</html>`,
            solution: `
<!DOCTYPE html>
<html>
<head>
    <title>Simple Form</title>
</head>
<body>
    <form action="#" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name">
        <button type="submit">Submit</button>
    </form>
</body>
</html>`
        },
        {
            title: "Form with Radio Button",
            task: "Create a form with a radio button for gender selection (Male, Female).",
            predefinedCode: `
<!DOCTYPE html>
<html>
<head>
    <title>Form with Radio Button</title>
</head>
<body>
    <form></form>
</body>
</html>`,
            solution: `
<!DOCTYPE html>
<html>
<head>
    <title>Form with Radio Button</title>
</head>
<body>
    <form>
        <label for="male">Male</label>
        <input type="radio" id="male" name="gender" value="male">
        <label for="female">Female</label>
        <input type="radio" id="female" name="gender" value="female">
        <button type="submit">Submit</button>
    </form>
</body>
</html>`
        }
    ],
    "HTML Responsiveness": [
        {
            title: "Responsive Image",
            task: "Make the image responsive by setting width to 100% and height to auto.",
            predefinedCode: `
<!DOCTYPE html>
<html>
<head>
    <title>Responsive Image</title>
</head>
<body>
    <img src="https://via.placeholder.com/150" alt="Responsive Image">
</body>
</html>`,
            solution: `
<!DOCTYPE html>
<html>
<head>
    <title>Responsive Image</title>
    <style>
        img { width: 100%; height: auto; }
    </style>
</head>
<body>
    <img src="https://via.placeholder.com/150" alt="Responsive Image">
</body>
</html>`
        },
        {
            title: "Responsive Layout",
            task: "Create a two-column layout that stacks on smaller screens.",
            predefinedCode: `
<!DOCTYPE html>
<html>
<head>
    <title>Responsive Layout</title>
    <style></style>
</head>
<body>
    <div id="main">Main Content</div>
    <div id="sidebar">Sidebar Content</div>
</body>
</html>`,
            solution: `
<!DOCTYPE html>
<html>
<head>
    <title>Responsive Layout</title>
    <style>
        #main { width: 70%; float: left; }
        #sidebar { width: 30%; float: left; }
        
        @media screen and (max-width: 600px) {
            #main, #sidebar { width: 100%; float: none; }
        }
    </style>
</head>
<body>
    <div id="main">Main Content</div>
    <div id="sidebar">Sidebar Content</div>
</body>
</html>`
        }
    ],
    "HTML Semantics": [
        {
            title: "Semantic Header and Footer",
            task: "Use semantic elements to create a header and footer for your page.",
            predefinedCode: `
<!DOCTYPE html>
<html>
<head>
    <title>Semantic Elements</title>
</head>
<body>
    <!-- Create Header and Footer here -->
</body>
</html>`,
            solution: `
<!DOCTYPE html>
<html>
<head>
    <title>Semantic Elements</title>
</head>
<body>
    <header>
        <h1>Page Header</h1>
    </header>
    <footer>
        <p>Page Footer</p>
    </footer>
</body>
</html>`
        },
        {
            title: "Semantic Article",
            task: "Use the <article> element to represent an article section of your page.",
            predefinedCode: `
<!DOCTYPE html>
<html>
<head>
    <title>Article Example</title>
</head>
<body>
    <!-- Article content here -->
</body>
</html>`,
            solution: `
<!DOCTYPE html>
<html>
<head>
    <title>Article Example</title>
</head>
<body>
    <article>
        <h2>Article Title</h2>
        <p>This is the content of the article.</p>
    </article>
</body>
</html>`
        }
    ]
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

     if (userCode === exercise.solution.trim()) {
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
