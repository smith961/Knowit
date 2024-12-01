const images=["assets/landing/developer.png","assets/landing/landingpage2.png"];
let index = 0;
function animateImages(){
 const img = document.getElementById("image");
 img.style.opacity = 0;
 setTimeout (() => {
  index = (index + 1) % images.length;
  img.src = images[index];
  img.style.opacity = 1;
 }, 500);
}
setInterval(animateImages, 3000);

document.addEventListener("DOMContentLoaded", () => {
 const loginContainer = document.querySelector(".login-container");
 const signUpContainer = document.querySelector(".sign-up-container");
 const showLogin = document.getElementById("showLogin");
 const showSignUp = document.getElementById("showSignUp");

 showSignUp.addEventListener("click", () => {
     loginContainer.style.transform = "translateX(-100%)";
     signUpContainer.style.transform = "translateX(0)";
 });

 showLogin.addEventListener("click", () => {
     loginContainer.style.transform = "translateX(0)";
     signUpContainer.style.transform = "translateX(100%)";
 });
});
const modules = [
    {
      title: "HTML Introduction",
      content: `
        <h2>What is HTML?</h2>
        <p>HTML (HyperText Markup Language) is the standard language for creating web pages.</p>
        <p>It defines the structure of a webpage and is used alongside CSS and JavaScript to build websites.</p>
        <h3>Example:</h3>
        <pre>
  &lt;html&gt;
    &lt;head&gt;
      &lt;title&gt;HTML Introduction&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
      &lt;h1&gt;Welcome to HTML&lt;/h1&gt;
      &lt;p&gt;This is a paragraph.&lt;/p&gt;
    &lt;/body&gt;
  &lt;/html&gt;
        </pre>
        <h3>Exercise:</h3>
        <p>Create a webpage with a title and a heading.</p>
      `,
    },
    {
      title: "HTML Editors",
      content: `
        <h2>HTML Editors</h2>
        <p>Popular editors include Visual Studio Code, Sublime Text, and Notepad++.</p>
        <h3>Tip:</h3>
        <p>Use extensions like "Live Server" in VS Code for live previews.</p>
        <h3>Exercise:</h3>
        <p>Install VS Code and create a new HTML file.</p>
      `,
    },
    {
        title: "HTML Basics",
        content: `
          <h2>HTML Basics</h2>
          <p>Every HTML document has a structure made up of elements like <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, and <code>&lt;body&gt;</code>.</p>
          <h3>Example:</h3>
          <pre>
    &lt;html&gt;
      &lt;head&gt;
        &lt;title&gt;HTML Basics&lt;/title&gt;
      &lt;/head&gt;
      &lt;body&gt;
        &lt;p&gt;Hello World!&lt;/p&gt;
      &lt;/body&gt;
    &lt;/html&gt;
          </pre>
          <h3>Exercise:</h3>
          <p>Create an HTML document with a paragraph saying "Hello, World!".</p>
          content: `
      },
      {
      title: "HTML Elements",
     content: `
      <h2>HTML Elements</h2>
      <p>HTML elements are the building blocks of any web page. Each element is defined by opening and closing tags.</p>
      <h3>Example:</h3>
      <pre>
&lt;h1&gt;This is a Heading&lt;/h1&gt;
&lt;p&gt;This is a paragraph.&lt;/p&gt;
      </pre>
      <h3>Exercise:</h3>
      <p>Create a page with a heading and at least one paragraph.</p>
     `,
  },
  {
    title: "HTML Attributes",
   content: ` 
      <h2>HTML Attributes</h2>
      <p>Attributes provide additional information about an element.</p>
      <h3>Example:</h3>
      <pre>
&lt;a href="https://example.com"&gt;Visit Example&lt;/a&gt;
      </pre>
      <h3>Exercise:</h3>
      <p>Add an <code>href</code> attribute to a link tag to link to a website.</p>
     `,
  },
  {
    title: "HTML Headings",
     content: ` 
      <h2>HTML Headings</h2>
      <p>HTML provides six levels of headings, from <code>&lt;h1&gt;</code> (largest) to <code>&lt;h6&gt;</code> (smallest).</p>
      <h3>Example:</h3>
      <pre>
&lt;h1&gt;Heading 1&lt;/h1&gt;
&lt;h2&gt;Heading 2&lt;/h2&gt;
&lt;h3&gt;Heading 3&lt;/h3&gt;
      </pre>
      <h3>Exercise:</h3>
      <p>Create a page with all six levels of headings.</p>
    `,
  },
  {
    title: "HTML Paragraphs",
    content: `
      <h2>HTML Paragraphs</h2>
      <p>Paragraphs are created using the <code>&lt;p&gt;</code> tag.</p>
      <h3>Example:</h3>
      <pre>
&lt;p&gt;This is a paragraph.&lt;/p&gt;
      </pre>
      <h3>Exercise:</h3>
      <p>Write three paragraphs about your favorite hobbies.</p>
     `,
  },
  {
    title: "HTML Styles",
    content: `
      <h2>HTML Styles</h2>
      <p>Inline styles are applied with the <code>style</code> attribute.</p>
      <h3>Example:</h3>
      <pre>
&lt;p style="color:blue;"&gt;This text is blue.&lt;/p&gt;
      </pre>
      <h3>Exercise:</h3>
      <p>Style a paragraph with a background color.</p>
    `,
  },
  {
    title: "HTML Quotations",
    content: `
      <h2>HTML Quotations</h2>
      <p>Use <code>&lt;blockquote&gt;</code> for longer quotations, and <code>&lt;q&gt;</code> for shorter quotes.</p>
      <h3>Example:</h3>
      <pre>
      &lt;blockquote&gt;
  This is a blockquote.
&lt;/blockquote&gt;
      </pre>
      <h3>Exercise:</h3>
      <p>Write a blockquote with your favorite quote.</p>
    `,
  },
  {
    title: "HTML Comments",
    content: `
      <h2>HTML Comments</h2>
      <p>HTML comments are used to explain code, and they are ignored by the browser.</p>
      <h3>Example:</h3>
      <pre>
&lt;!-- This is a comment --&gt;
      </pre>
      <h3>Exercise:</h3>
      <p>Add a comment above the header tag.</p>
     `,
  },
  {
    title: "HTML Links",
    content: `
      <h2>HTML Links</h2>
      <p>Links are created using the <code>&lt;a&gt;</code> tag with the <code>href</code> attribute.</p>
      <h3>Example:</h3>
      <pre>
&lt;a href="https://example.com"&gt;Visit Example&lt;/a&gt;
      </pre>
      <h3>Exercise:</h3>
      <p>Create a link to your favorite website.</p>
    `,
  },
  {
    title: "HTML Images",
      content: `
      <h2>HTML Images</h2>
      <p>Images are added using the <code>&lt;img&gt;</code> tag with the <code>src</code> and <code>alt</code> attributes.</p>
      <h3>Example:</h3>
      <pre>
&lt;img src="image.jpg" alt="An example image"&gt;
      </pre>
      <h3>Exercise:</h3>
      <p>Embed an image in your page.</p>
    `,
  },
  {
    title: "HTML Favicon",
     content: `
      <h2>HTML Favicon</h2>
      <p>A favicon is the small icon displayed in the browser tab. It is added in the <code>&lt;head&gt;</code> section using the <code>&lt;link&gt;</code> tag.</p>
      <h3>Example:</h3>
      <pre>
&lt;link rel="icon" href="favicon.icon"&gt;
      </pre>
      <h3>Exercise:</h3>
      <p>Add a favicon to your webpage.</p>
     `,
  },
  {
    title: "HTML Tables",
    content: `
      <h2>HTML Tables</h2>
      <p>Tables are created using the <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;th&gt;</code>, and <code>&lt;td&gt;</code> tags.</p>
      <h3>Example:</h3>
      <pre>
&lt;table&gt;
  &lt;tr&gt;
    &lt;th&gt;Header 1&lt;/th&gt;
    &lt;th&gt;Header 2&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Cell 1&lt;/td&gt;
    &lt;td&gt;Cell 2&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
      </pre>
      <h3>Exercise:</h3>
      <p>Create a table with 3 rows and 2 columns.</p>
    `,
  },
  {
    title: "HTML Lists",
     content: `
      <h2>HTML Lists</h2>
      <p>HTML supports both ordered lists (<code>&lt;ol&gt;</code>) and unordered lists (<code>&lt;ul&gt;</code>).</p>
      <h3>Example:</h3>
      <pre>
&lt;ul&gt;
  &lt;li&gt;Item 1&lt;/li&gt;
  &lt;li&gt;Item 2&lt;/li&gt;
&lt;/ul&gt;
      </pre>
      <h3>Exercise:</h3>
      <p>Create an ordered list of your top 3 favorite movies.</p>
   `, 
  },
  {
    title: "HTML Div",
     content: `
      <h2>HTML Div</h2>
      <p>The <code>&lt;div&gt;</code> tag is used to group elements and apply styles or scripts.</p>
      <h3>Example:</h3>
      <pre>
&lt;div&gt;
  &lt;p&gt;This is a paragraph inside a div.&lt;/p&gt;
&lt;/div&gt;
      </pre>
      <h3>Exercise:</h3>
      <p>Wrap a paragraph in a <code>&lt;div&gt;</code> tag.</p>
    `,
  },
  {
   content: ` 
    title: "HTML ID",
    content: 
      <h2>HTML ID</h2>
      <p>The <code>id</code> attribute assigns a unique identifier to an element, allowing you to apply specific styles or interact with it using JavaScript.</p>
      <h3>Example:</h3>
      <pre>
&lt;p id="unique"&gt;This is a unique paragraph.&lt;/p&gt;
      </pre>
      <h3>Exercise:</h3>
      <p>Assign an <code>id</code> to a heading.</p>
    `,
  },
  
  {
    title: "HTML Layout",
    content: `
      <h2>HTML Layout</h2>
      <p>HTML provides structural tags like <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;main&gt;</code>, and <code>&lt;section&gt;</code> for layout purposes.</p>
      <h3>Example:</h3>
      <pre>
&lt;header&gt;Header content&lt;/header&gt;
&lt;main&gt;Main content&lt;/main&gt;
&lt;footer&gt;Footer content&lt;/footer&gt;
      </pre>
      <h3>Exercise:</h3>
      <p>Structure your page using <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, and <code>&lt;footer&gt;</code>.</p>
    `,
  },
  {
    title: "HTML Responsive",
    content: ` 
      <h2>HTML Responsive Design</h2>
      <p>Responsive design makes your website look good on all devices. You can use CSS media queries to adapt the layout based on screen size.</p>
      <h3>Example:</h3>
      <pre>
@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
      </pre>
      <h3>Exercise:</h3>
      <p>Create a media query to change the background color when the screen width is less than 600px.</p>
    `,
  },
  {
    title: "HTML Semantics",
    content: ` 
      <h2>HTML Semantics</h2>
      <p>Semantic HTML uses meaningful tags like <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, and <code>&lt;footer&gt;</code> to give structure to a page.</p>
      <h3>Example:</h3>
      <pre>
&lt;article&gt;
  &lt;h2&gt;Article Title&lt;/h2&gt;
  &lt;p&gt;Article content&lt;/p&gt;
&lt;/article&gt;
      </pre>
      <h3>Exercise:</h3>
      <p>Use semantic tags to create an article section on your page.</p>
    `,
  },
   {
    title: "HTML Forms",
    content: ` 
      <h2>HTML Forms</h2>
      <p>Forms are used to collect user input. The <code>&lt;form&gt;</code> tag contains form elements like text inputs, buttons, and checkboxes.</p>
      <h3>Example:</h3>
      <pre>
&lt;form&gt;
  &lt;label for="name"&gt;Name&lt;/label&gt;
  &lt;input type="text" id="name" name="name"&gt;
  &lt;input type="submit" value="Submit"&gt;
&lt;/form&gt;
      </pre>
      <h3>Exercise:</h3>
      <p>Create a form with fields for name, email, and a submit button.</p>
    `,
  }
  ]
  
  let currentModuleIndex = 0;
  
  // DOM Elements
  const moduleContentDiv = document.getElementById("module-content");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  
  // Load Module
  function loadModule(index) {
    const module = modules[index];
    moduleContentDiv.innerHTML = `
      <h1>${module.title}</h1>
      ${module.content}
    `;
    
    // Disable buttons if at the first or last module
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === modules.length - 1;
  }
  
  // Event Listeners
  prevBtn.addEventListener("click", () => {
    if (currentModuleIndex > 0) {
      currentModuleIndex--;
      loadModule(currentModuleIndex);
    }
  });
  
  nextBtn.addEventListener("click", () => {
    if (currentModuleIndex < modules.length - 1) {
      currentModuleIndex++;
      loadModule(currentModuleIndex);
    }
  });
  
  // Initial Load
  loadModule(currentModuleIndex);
  