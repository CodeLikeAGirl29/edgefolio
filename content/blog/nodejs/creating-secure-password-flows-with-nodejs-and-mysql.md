---
layout: Post
title: Creating Secure Password Flows With Node.js And MySQL
description: Ea culpa reprehenderit officia ad sunt ex consequat consequat deserunt fugiat. Sunt pariatur in veniam irure commodo in sint labore non laborum in enim nisi.
date: '2022-10-01'
tags:
  - node-js
images:
  - src: /photos/blog-database.jpg
    alt: image alt attribute
---

Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents. Using Markdown is different than using a WYSIWYG editor. In an application like Microsoft Word, you click buttons to format words and phrases, and the changes are visible immediately. Markdown isn’t like that. When you create a Markdown-formatted file, you add Markdown syntax to the text to indicate which words and phrases should look different.

### Paragraphs

To create paragraphs, use a blank line to separate one or more lines of text like this:

First paragraph. I really like using Markdown.

Second paragraph. *Italic*, **bold**, ~~strikethrough~~, Emoji 😂 ⛺, and `monospace`. I think I'll use it to format all of my documents from now on.

---

### Headings

To create a heading, add number signs (#) in front of a word or phrase. The number of number signs you use should correspond to the heading level. For example, to create a heading level three (`<h3>`), use three number signs (e.g., `### My Header`).

# Heading level 1

## Heading level 2

### Heading level 3

#### Heading level 4

##### Heading level 5

###### Heading level 6

---

### Code-Block

The Markdown syntax allows you to create code blocks by indenting lines by four spaces or one tab. If you find that inconvenient, try using fenced code blocks. To do that, you’ll use three backticks (```) on the lines before and after the code block. The best part? You don’t have to indent any lines!

  ```js  {4-7} showLineNumbers
  import contact from './contact.js';

  // below 3 lines are highlighted
  const person = {
    name: 'Sara',
    age: 25,
  }

  let name = person.name;
  let age = person.age;

  // returns a promise
  let countValue = new Promise(function (resolve, reject) {
    reject('Promise rejected');
  });
  ```

Code blocks can also be used inside the `<Wide />` component.

<Wide>

  ```js  {4-7} showLineNumbers
  import contact from './contact.js';

  // below 3 lines are highlighted
  const person = {
    name: 'Sara',
    age: 25,
  }

  let name = person.name;
  let age = person.age;

  // returns a promise
  let countValue = new Promise(function (resolve, reject) {
    reject('Promise rejected');
  });
  ```

</Wide>

---

### Tip Jar

In order to receive tips (contributions) from your readers, we've developed a fully-functional `<TipJar />` React Component integrated with [ConvertKit](https://convertkit.com?lmref=CeGsMw&utm_campaign=documentation) that you can use anywhere in your blog posts or pages.

```md
<TipJar />
```
This will render the TipJar component:

<TipJar />

---

### Newsletter

The theme is integrated with [ConvertKit](https://convertkit.com?lmref=CeGsMw&utm_campaign=documentation) to grow your email list of subscribers. By creating an email list, you can notify your subscribers when you publish new blog posts or market and sell your digital products to your subscribers. The newsletter component is

```md
<Newsletter className="bg-omega-800 p-10" />
```
This will render the Newsletter component:

<Newsletter className="bg-omega-800 p-10" />
---

### Images

To add an image, add an exclamation mark (!), followed by alt text in brackets, and the path or URL to the image asset in parentheses. You can optionally add a title in quotation marks after the path or URL.

```md
![This is the caption](/photos/blog-performance.jpg "Team meeting")
```
This image is wrapper inside the `<Wide />` component.

<Wide>
  ![This is the caption](/photos/blog-performance.jpg "Team meeting")
</Wide>

### Linked Images

To add a link to an image, enclose the Markdown for the image in brackets, and then add the link in parentheses.

```md
[![This is the caption](/photos/blog-performance.jpg "Team meeting")](https://en.wikipedia.org/wiki/Meeting)
```

---

### Youtube Videos

You can embed youtube videos using the `<Youtube />` component and passing the Youtube video ID to it.

```md
<Youtube
  id="W4UhNo3HAMw"
  title="Next.js 13.1 Explained"
/>
```
This will render below embed:

<Wide>
  <Youtube
    id="W4UhNo3HAMw"
    title="Next.js 13.1 Explained"
  />
</Wide>

---

### Tables

To add a table, use three or more hyphens (---) to create each column’s header, and use pipes (|) to separate each column. For compatibility, you should also add a pipe on either end of the row.

Tables can look like this:

| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |
| Table data   | Text        |

You can align text in the columns to the left, right, or center by adding a colon (:) to the left, right, or on both side of the hyphens within the header row.

|Header 1 |Header 2  | Header 3|
|:--- | ---: | :---:|
|Align left| Align right|center text|
|cell data1|cell data2|cell data3|

---

### Lists

You can organize items into ordered and unordered lists.

##### Ordered Lists

To create an ordered list, add line items with numbers followed by periods. The numbers don’t have to be in numerical order, but the list should start with the number one.

1. First item
2. Second item
3. Third item
4. Fourth item

To create an unordered list, add dashes (-), asterisks (*), or plus signs (+) in front of line items. Indent one or more items to create a nested list.

##### Unordered Lists

- First item
- Second item
- Third item
- Fourth item

##### Nested Lists

Now a nested list:

 1. First, get these ingredients:

      * carrots
      * celery
      * lentils

 2. Boil some water.

 3. Dump everything in the pot and follow
    this algorithm:

        find wooden spoon
        uncover pot
        stir
        cover pot
        balance wooden spoon precariously on pot handle
        wait 10 minutes
        goto first step (or shut off burner when done)

    Do not bump wooden spoon or it will fall.

Notice again how text always lines up on 4-space indents (including
that last line which continues item 3 above).

---

### Links

To create a link, enclose the link text in brackets (e.g., `[Duck Duck Go]`) and then follow it immediately with the URL in parentheses (e.g., `(https://duckduckgo.com)`).

Here's a link to [a website](http://foo.bar), to a [local
page](services), and to a [code block section in the current
doc](#code-block).

---

### Blockquotes

To create a blockquote, add a > in front of a paragraph. The rendered output looks like this:

> Block quotes are
> written like so.

Blockquotes can contain other Markdown formatted elements. Not all elements can be used — you’ll need to experiment to see which ones work.

> ###### Blockquotes with Other Elements
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.

---

### HTML

You can use HTML tags in Markdown-formatted text. This is helpful if you prefer certain HTML tags to Markdown syntax. For example, some people find it easier to use HTML tags for images. Using HTML is also helpful when you need to change the attributes of an element, like specifying the color of text or changing the width of an image.

To use HTML, place the tags in the text of your Markdown-formatted file.

```md
This **word** is bold. This <em>word</em> is italic.
```

The rendered output looks like this:

This **word** is bold. This <em>word</em> is italic.

---

### Task Lists

Task lists (also referred to as checklists and todo lists) allow you to create a list of items with checkboxes. In Markdown applications that support task lists, checkboxes will be displayed next to the content. To create a task list, add dashes (-) and brackets with a space ([ ]) in front of task list items. To select a checkbox, add an x in between the brackets ([x]).

```md
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
```

The rendered output looks like this:

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media