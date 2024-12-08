// Data for each HTML module, with editable exercises and predefined code
const modules = {
  'html-introduction': {
      content: `
          <h2>HTML Introduction</h2>
          <p>HTML stands for HyperText Markup Language. It is the standard language used to create and design web pages. HTML describes the structure of web pages using markup.</p>
          <pre><code>
&lt!DOCTYPE html&gt
&lthtml lang="en"&gt
&lthead&gt
  &ltmeta charset="UTF-8"&gt
  &ltmeta name="viewport" content="width=device-width, initial-scale=1.0"&gt
  &lttitle&gtHTML Introduction&lt/title&gt
&lt/head&gt
&ltbody&gt
  &lth1&gtWelcome to HTML!&lt/h1&gt
  &ltp&gtThis is a basic HTML page.&lt/p&gt
&lt/body&gt
&lt/html&gt
          </code></pre>
      `,
      exercise: `
          <h3>Exercise:</h3>
          <p>Create a simple HTML page that includes:</p>
          <ul>
              <li>A title in the <code>&lt;head&gt;</code> section.</li>
              <li>A heading in the <code>&lt;body&gt;</code> section.</li>
              <li>A paragraph of text below the heading.</li>
          </ul>
      `,
      // Pre-written part of the code for the user to complete
      predefinedCode: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Title Here</title>
</head>
<body>
  <h1>Your Heading Here</h1>
  <p>Write your content below this line.</p>
</body>
</html>
      `
  },
  'html-elements': {
        content: `
            <h2>HTML Elements</h2>
            <p>HTML elements are the building blocks of HTML pages. An element usually consists of a start tag, content, and an end tag.</p>
            <pre><code>
Example:
&ltp&gtThis is a paragraph.&lt/p&gt
&lth1&gtThis is a heading.&lt/h1&gt
            </code></pre>
        `,
        exercise: `
            <h3>Exercise:</h3>
            <p>Create a page that includes the following elements:</p>
            <ul>
                <li>A heading using the <code>&lt;h1&gt;</code> tag.</li>
                <li>A paragraph using the <code>&lt;p&gt;</code> tag.</li>
                <li>An ordered list using the <code>&lt;ol&gt;</code> tag.</li>
            </ul>
        `,
        predefinedCode: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Elements</title>
</head>
<body>
    <!-- Your heading here -->
    <h1>Welcome</h1>
    <!-- Add your paragraph here -->
    <p>This is a sample paragraph.</p>
    <!-- Create an ordered list below -->
</body>
</html>
        `
    },
    'html-attributes': {
        content: `
            <h2>HTML Attributes</h2>
            <p>HTML attributes provide additional information about elements. They are always specified in the opening tag and usually come in name/value pairs like <code>name="value"</code>.</p>
            <pre><code>
Example:
&lta href="https://knowit.com" target="_blank"&gtVisit knowit&lt/a&gt
&ltimg src="image.jpg" alt="Image Description"&gt
            </code></pre>
        `,
        exercise: `
            <h3>Exercise:</h3>
            <p>Create a page that includes:</p>
            <ul>
                <li>A link with the <code>href</code> attribute pointing to your favorite website.</li>
                <li>An image with the <code>src</code> and <code>alt</code> attributes.</li>
            </ul>
        `,
        predefinedCode: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Attributes</title>
</head>
<body>
    <!-- Create a link with an href -->
    <a href="#">Link Text</a>
    <!-- Add an image with src and alt attributes -->
    <img src="" alt="Description">
</body>
</html>
        `
    },
    'html-links': {
        content: `
            <h2>HTML Links</h2>
            <p>HTML links are hyperlinks. You can click on a link to navigate to another document or resource. Use the <code>&lt;a&gt;</code> tag to define a link.</p>
            <pre><code>
Example:
<a href="https://knowit.php">Click Here</a>
            </code></pre>
        `,
        exercise: `
            <h3>Exercise:</h3>
            <p>Create a page with the following:</p>
            <ul>
                <li>A link that opens in the same tab.</li>
                <li>A link that opens in a new tab using <code>target="_blank"</code>.</li>
            </ul>
        `,
        predefinedCode: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Links</title>
</head>
<body>
    <!-- Add links below -->
</body>
</html>
        `
    },


  'html-headings': {
      content: `
          <h2>HTML Headings</h2>
          <p>HTML provides six levels of headings, from <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>. These headings are used to structure content hierarchically.</p>
          <pre><code>
Example:
&lth1&gtMain Heading&lt/h1&gt
&lth2&gtSubheading&lt/h2&gt
&lth3&gtSmaller Heading&lt/h3&gt
          </code></pre>
      `,
      exercise: `
          <h3>Exercise:</h3>
          <p>Create a webpage that uses:</p>
          <ul>
              <li>An <code>&lt;h1&gt;</code> for the title of your favorite book.</li>
              <li>An <code>&lt;h2&gt;</code> for the author's name.</li>
              <li>An <code>&lt;h3&gt;</code> for a chapter title.</li>
          </ul>
      `,
      predefinedCode: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Headings</title>
</head>
<body>
  <!-- Add your headings below -->
</body>
</html>
      `
  },

  'html-paragraphs': {
      content: `
          <h2>HTML Paragraphs</h2>
          <p>HTML paragraphs are defined with the <code>&lt;p&gt;</code> tag. They are used to group blocks of text together.</p>
          <pre><code>
Example:
&ltp&gtThis is a paragraph.&lt/p&gt
&ltp&gtThis is another paragraph.&lt/p&gt
          </code></pre>
      `,
      exercise: `
          <h3>Exercise:</h3>
          <p>Create a page that includes:</p>
          <ul>
              <li>Two paragraphs describing your favorite hobby.</li>
              <li>A third paragraph with a fun fact about yourself.</li>
          </ul>
      `,
      predefinedCode: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Paragraphs</title>
</head>
<body>
  <!-- Add your paragraphs below -->
</body>
</html>
      `
  },

  'html-styles': {
      content: `
          <h2>HTML Styles</h2>
          <p>You can use the <code>style</code> attribute to add inline CSS to HTML elements.</p>
          <pre><code>
Example:
&ltp style="color: blue;"&gtThis is a blue paragraph.&lt/p&gt
&lth1 style="font-size: 24px;"&gtThis is a smaller heading.&lt/h1&gt
          </code></pre>
      `,
      exercise: `
          <h3>Exercise:</h3>
          <p>Style the following elements:</p>
          <ul>
              <li>A paragraph with red text.</li>
              <li>A heading with a green background color.</li>
              <li>Another paragraph with bold, italic text.</li>
          </ul>
      `,
      predefinedCode: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Styles</title>
</head>
<body>
  <!-- Add your styled elements below -->
</body>
</html>
      `
  },

  'html-formatting': {
      content: `
          <h2>HTML Formatting</h2>
          <p>HTML provides tags for formatting text, such as making it bold, italic, or underlined.</p>
          <pre><code>
Example:
&ltb&gtThis text is bold.&lt/b&gt
&lti&gtThis text is italic.&lt/i&gt
&ltu&gtThis text is underlined.&lt/u&gt
          </code></pre>
      `,
      exercise: `
          <h3>Exercise:</h3>
          <p>Create a page that includes:</p>
          <ul>
              <li>A sentence with bold text.</li>
              <li>A sentence with italic text.</li>
              <li>A sentence with both bold and italic text.</li>
          </ul>
      `,
      predefinedCode: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Formatting</title>
</head>
<body>
  <!-- Add your formatted text below -->
</body>
</html>
      `
  },
  'html-quotations': {
        content: `
            <h2>HTML Quotations</h2>
            <p>HTML provides tags to handle quotations, citations, and definitions:</p>
            <ul>
                <li><code>&lt;q&gt;</code>: For short inline quotations.</li>
                <li><code>&lt;blockquote&gt;</code>: For longer block-level quotations.</li>
                <li><code>&lt;cite&gt;</code>: For citing a source.</li>
                <li><code>&lt;abbr&gt;</code>: For abbreviations or acronyms.</li>
            </ul>
            <pre><code>
Example:
&ltp&gtAlbert Einstein once said, <q>Imagination is more important than knowledge.&lt/q&gt&lt/p&gt
&gtblockquote&lt
    "The only limit to our realization of tomorrow is our doubts of today."
    - Franklin D. Roosevelt
&lt/blockquote&gt
&ltcite&gtSource: Wikipedia</cite>
            </code></pre>
        `,
        exercise: `
            <h3>Exercise:</h3>
            <p>Practice by creating a page that includes:</p>
            <ul>
                <li>A short inline quote inside a paragraph.</li>
                <li>A blockquote for a longer quote.</li>
                <li>A citation for the blockquote.</li>
            </ul>
        `,
        predefinedCode: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Quotations</title>
</head>
<body>
    <!-- Add your quotations below -->
</body>
</html>
        `
    },

    'html-comments': {
        content: `
            <h2>HTML Comments</h2>
            <p>HTML comments are used to leave notes in the code or to temporarily disable sections of code. Comments are ignored by browsers.</p>
            <pre><code>
Syntax:
<!-- This is a comment -->
&ltp&gtThis paragraph is visible.&lt/p&gt
<!-- &ltp&gtThis paragraph is hidden because it's inside a comment.&lt/p&gt -->
            </code></pre>
        `,
        exercise: `
            <h3>Exercise:</h3>
            <p>Create a page with the following:</p>
            <ul>
                <li>A visible heading.</li>
                <li>A paragraph that is commented out and not visible on the page.</li>
                <li>A note in the code explaining the purpose of the page.</li>
            </ul>
        `,
        predefinedCode: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Comments</title>
</head>
<body>
    <!-- Write your comments and visible content below -->
</body>
</html>
        `
    },

    'html-colors': {
        content: `
            <h2>HTML Colors</h2>
            <p>HTML supports colors in different formats:</p>
            <ul>
                <li>Named Colors (e.g., <code>red</code>, <code>blue</code>).</li>
                <li>Hexadecimal Colors (e.g., <code>#ff0000</code>, <code>#00ff00</code>).</li>
                <li>RGB Colors (e.g., <code>rgb(255, 0, 0)</code>).</li>
            </ul>
            <pre><code>
Example:
&ltp style="color: red;"&gtThis text is red.&lt/p&gt
&ltp style="color: #00ff00;"&gtThis text is green.&lt/p&gt
&ltp style="color: rgb(0, 0, 255);"&gtThis text is blue.&lt/p&gt
            </code></pre>
        `,
        exercise: `
            <h3>Exercise:</h3>
            <p>Create a page that includes:</p>
            <ul>
                <li>A paragraph with a red color using the <code>style</code> attribute.</li>
                <li>A paragraph with a green background color using a hex code.</li>
                <li>A paragraph with blue text using an RGB value.</li>
            </ul>
        `,
        predefinedCode: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Colors</title>
</head>
<body>
    <!-- Add your colored content below -->
</body>
</html>
        `
    },

    'html-favicon': {
        content: `
            <h2>HTML Favicon</h2>
            <p>A favicon is a small icon displayed in the browser tab. You can add a favicon to your site using the <code>&lt;link&gt;</code> tag inside the <code>&lt;head&gt;</code> section.</p>
            <pre><code>
Example:
<link rel="icon" href="favicon.ico" type="image/x-icon">
            </code></pre>
        `,
        exercise: `
            &lth3&gtExercise:&lt/h3&gt
            &ltp&gtAdd a favicon to your webpage. Use a URL or local file for the icon.&lt/p&gt
        `,
        predefinedCode: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Favicon</title>
    <!-- Add your favicon link below -->
</head>
<body>
    <h1>My Page with a Favicon</h1>
</body>
</html>
        `
    },

    'html-tables': {
        content: `
            <h2>HTML Tables</h2>
            <p>Tables are created using the <code>&lt;table&gt;</code> tag, with rows defined by <code>&lt;tr&gt;</code> and cells by <code>&lt;td&gt;</code>. Use <code>&lt;th&gt;</code> for header cells.</p>
            <pre><code>
Example:
&lttable&gt
    &lttr&gt
        &ltth&gtHeader 1&lt/th&gt
        &ltth&gtHeader 2&lt/th&gt
    &lt/tr&gt
    &lttr&gt
        &lttd&gtData 1&lt/td&gt
        &lttd&gtData 2&lt/td&gt
    &lt/tr&gt
&lt/table&gt
            </code></pre>
        `,
        exercise: `
            <h3>Exercise:</h3>
            <p>Create a table with:</p>
            <ul>
                <li>A header row with three columns.</li>
                <li>At least two rows of data.</li>
                <li>A border around the table.</li>
            </ul>
        `,
        predefinedCode: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Tables</title>
</head>
<body>
    <!-- Add your table below -->
</body>
</html>
        `
    },

    'html-lists': {
        content: `
            <h2>HTML Lists</h2>
            <p>HTML supports two types of lists:</p>
            <ul>
                <li>Ordered lists (<code>&lt;ol&gt;</code>)</li>
                <li>Unordered lists (<code>&lt;ul&gt;</code>)</li>
            </ul>
            <p>List items are added using the <code>&lt;li&gt;</code> tag.</p>
            <pre><code>
Example:
<ul>
    &ltli&gtItem 1&lt/li&gt
    &ltli&gtItem 2&lt/li&gt
&lt/ul&gt
&ltol&gt
    &ltli&gtFirst&lt/li&gt
    &ltli&gtSecond&lt/li&gt
&lt/ol&gt
            </code></pre>
        `,
        exercise: `
            <h3>Exercise:</h3>
            <p>Create a page with:</p>
            <ul>
                <li>An unordered list of your favorite fruits.</li>
                <li>An ordered list of steps to make a sandwich.</li>
            </ul>
        `,
        predefinedCode: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Lists</title>
</head>
<body>
    <!-- Add your lists below -->
</body>
</html>
        `
    },
    'html-forms': {
        content: `
            <h2>HTML Forms</h2>
            <p>HTML forms collect user input and send it to a server for processing. Forms use the <code>&lt;form&gt;</code> tag, and inputs are defined with various elements such as <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>, and <code>&lt;button&gt;</code>.</p>
            <pre><code>
Example:
&ltform action="submit" method="POST"&gt
    &ltlabel for="name"&gtName:&lt/label&gt
    &ltinput type="text" id="name" name="name"&gt
    &ltbutton type="submit"&gtSubmit&lt/button&gt
&lt/form&gt
            </code></pre>
        `,
        exercise: `
            <h3>Exercise:</h3>
            <p>Create a form that includes:</p>
            <ul>
                <li>A text field for a user's name.</li>
                <li>An email field for their email address.</li>
                <li>A submit button.</li>
            </ul>
        `,
        predefinedCode: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Forms</title>
</head>
<body>
    <!-- Add your form below -->
</body>
</html>
        `
    },

    'html-inputs': {
        content: `
            <h2>HTML Inputs</h2>
            <p>The <code>&lt;input&gt;</code> tag is used for various input types, such as text, password, email, number, and more.</p>
            <pre><code>
Example:
&ltinput type="text" placeholder="Enter your name"&gt
&ltinput type="password" placeholder="Enter your password"&gt
&ltinput type="email" placeholder="Enter your email"&gt
            </code></pre>
        `,
        exercise: `
            <h3>Exercise:</h3>
            <p>Create a form with the following input fields:</p>
            <ul>
                <li>A text field for a username.</li>
                <li>A password field.</li>
                <li>An email field with a placeholder.</li>
            </ul>
        `,
        predefinedCode: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Inputs</title>
</head>
<body>
    <!-- Add your inputs below -->
</body>
</html>
        `
    },

    'html-semantics': {
        content: `
            <h2>HTML Semantics</h2>
            <p>Semantic HTML elements describe their meaning to both the browser and developer. Examples include <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;article&gt;</code>, and <code>&lt;section&gt;</code>.</p>
            <pre><code>
Example:
&ltheader&gt
    &lth1&gtWelcome to My Blog&lt/h1&gt
&lt/header&gt
&ltarticle&gt
    &lth2&gtBlog Post Title&lt/h2&gt
    &ltp&gtThis is the content of the blog post.&lt/p&gt
&lt/article&gt
&ltfooter&gt
    &ltp&gt© 2024 My Blog&lt/p&gt
&lt/footer&gt
            </code></pre>
        `,
        exercise: `
            <h3>Exercise:</h3>
            <p>Build a webpage that includes:</p>
            <ul>
                <li>A header with the site title.</li>
                <li>A main section with an article and some text.</li>
                <li>A footer with a copyright notice.</li>
            </ul>
        `,
        predefinedCode: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Semantics</title>
</head>
<body>
    <!-- Add your semantic elements below -->
</body>
</html>
        `
    },

    'html-responsive': {
        content: `
            <h2>HTML Responsive Design</h2>
            <p>Responsive design ensures your webpage looks good on all devices. This can be achieved using the <code>&lt;meta&gt;</code> viewport tag and CSS media queries.</p>
            <pre><code>
Example:
&ltmeta name="viewport" content="width=device-width, initial-scale=1.0"&gt
&ltstyle&gt
    body {
        font-family: Arial, sans-serif;
    }
    .container {
        max-width: 600px;
        margin: auto;
    }
    @media (max-width: 600px) {
        .container {
            padding: 10px;
        }
    }
&lt/style&gt
&ltdiv class="container"&gt
    &lth1&gtResponsive Design Example&lt/h1&gt
    &ltp&gtThis container adjusts based on the screen size.&lt/p&gt
&lt/div&gt
            </code></pre>
        `,
        exercise: `
            <h3>Exercise:</h3>
            <p>Create a responsive page with:</p>
            <ul>
                <li>A viewport meta tag.</li>
                <li>A container that adjusts padding on small screens.</li>
                <li>A headline and paragraph inside the container.</li>
            </ul>
        `,
        predefinedCode: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Responsive Design</title>
</head>
<body>
    <!-- Add your responsive content below -->
</body>
</html>
        `
    }
    
};




let currentModuleIndex = 0;
const moduleNames = Object.keys(modules);

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    loadModule(moduleNames[currentModuleIndex]);

    // Set up module navigation
    const links = document.querySelectorAll("#module-list a");
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const module = e.target.getAttribute("data-module");
            currentModuleIndex = moduleNames.indexOf(module);
            loadModule(module);
        });
    });
});

// Initialize Ace Editor for the exercise
let editor;
function initializeEditor(predefinedCode) {
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/html");
    editor.setValue(predefinedCode); // Set predefined code as the initial value
    editor.clearSelection();

    // Automatically update preview whenever the code changes
    editor.getSession().on('change', function() {
        previewCode(); // Update live preview on code change
    });
}

// Function to load module content dynamically
function loadModule(moduleName) {
    const module = modules[moduleName];
    const moduleContent = document.getElementById("module-content");

    // Insert the content and exercise into the page
    moduleContent.innerHTML = module.content + module.exercise;

    // Initialize Ace Editor after content is loaded with predefined code
    initializeEditor(module.predefinedCode);

    // Show the current module and hide others
    document.querySelectorAll(".module").forEach(m => m.style.display = 'none');
    document.getElementById("module").style.display = 'block';

    updateNavigation();
}

// Function to navigate between modules
function navigateModule(direction) {
    if (direction === 'next') {
        if (currentModuleIndex < moduleNames.length - 1) {
            currentModuleIndex++;
        }
    } else if (direction === 'previous') {
        if (currentModuleIndex > 0) {
            currentModuleIndex--;
        }
    }

    loadModule(moduleNames[currentModuleIndex]);
}

// Update navigation buttons (Next/Previous)
function updateNavigation() {
    document.getElementById("previous-btn").disabled = currentModuleIndex === 0;
    document.getElementById("next-btn").disabled = currentModuleIndex === moduleNames.length - 1;
}

// Function to preview the HTML code
function previewCode() {
    const code = editor.getValue(); // Get code from Ace Editor
    const iframe = document.getElementById("preview-frame");
    const doc = iframe.contentDocument || iframe.contentWindow.document;
    doc.open();
    doc.write(code);
    doc.close();
}
