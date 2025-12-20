---
title: Markdown 教程
published: 2025-12-20
pinned: false
description: 一个Markdown博客文章的简单示例.
tags: [Markdown, XhaniのBlog, Markdown教程]
category: 教程
author: XiaoXhan1234
draft: false
---

# Markdown 教程

一篇Markdown教程展示了如何撰写 Markdown 文件.本文档涵盖了核心语法与扩展语法(GMF).

- [块级元素](#block-elements)
  - [段落与换行](#paragraphs-and-line-breaks)
  - [标题](#headers)
  - [引用](#blockquotes)
  - [列表](#lists)
  - [代码块](#code-blocks)
  - [分割线](#horizontal-rules)
  - [表格](#table)
- [行内元素](#span-elements)
  - [链接](#links)
  - [强调](#emphasis)
  - [行内代码](#code)
  - [图片](#images)
  - [删除线](#strikethrough)
- [其他](#miscellaneous)
  - [自动链接](#automatic-links)
  - [反斜杠转义](#backslash-escapes)
- [内联 HTML](#inline-html)

## 块级元素

### 段落与换行

#### 段落

HTML 标签: `<p>`

一个或多个空行(只包含**空格**或**制表符**的行也算空行.)

代码:

    这将会在
    同一行.

    这是第二个段落.

预览:

---

这将会在
同一行.

这是第二个段落.

---

#### 换行

HTML 标签: `<br />`

在行尾添加 **两个或更多空格**.

代码:

    这将不会在
    同一行.

预览:

---

这将不会在  
同一行.

---

### 标题

Markdown 支持两种标题样式：Setext 和 atx.

#### Setext

HTML 标签: `<h1>`, `<h2>`

使用**等号 (=) 下划线**表示`<h1>`,使用**短横线 (-) 下划线**表示`<h2>`,数量不限.

代码:

    这是一级标题
    =============
    这是二级标题
    -------------

预览:

---

# 这是一级标题

## 这是二级标题

---

#### atx

HTML 标签: `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`

在首行使用1-6个 **井号 (#)** 对应 `<h1>` - `<h6>`.

代码:

    # 这是一级标题
    ## 这是二级标题
    ###### 这是六级标题

预览:

---

# 这是一级标题

## 这是二级标题

###### 这是六级标题

---

你也可以选择在 atx 样式标题的末尾添加关闭的井号,结尾的井号数量不需要与开头的井号数量一致.

代码:

    # 这是一级标题 #
    ## 这是二级标题 ##
    ### 这是六级标题 ######:

---

# 这是一级标题

## 这是二级标题

### 这是六级标题

---

### 引用

HTML 标签: `<blockquote>`

Markdown 使用类似电子邮件的 **>** 字符来表示引用.最佳效果是将文本进行硬换行,并在每一行前加上一个 **>**.

代码:

    > 这是一个包含两个段落的引用. 请君子安坐,静心阅读,
    > 引用的文字通常用于强调或引用他人言论.
    > 你可以在这里写下需要引用的内容.
    >
    > 这是第二个段落.引用也可以包含多行文字,
    > 并且每一行都需要在前面加上 > 符号.

预览:

---

> 这是一个包含两个段落的引用.请君子安坐,静心阅读,
> 引用的文字通常用于强调或引用他人言论.
> 你可以在这里写下需要引用的内容.
>
> 这是第二个段落.引用也可以包含多行文字
> 并且每一行都需要在前面加上 > 符号. 

---

Markdown 允许你偷懒，只在硬换行段落的第一行前加上 > ，后续行即使没有 > 也会被视为同一个引用段落.

代码:

    > This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
    consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
    Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

    > Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
    id sem consectetuer libero luctus adipiscing.

预览:

---

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

---

Blockquotes can be nested (i.e. a blockquote-in-a-blockquote) by adding additional levels of >.

代码:

    > This is the first level of quoting.
    >
    > > This is nested blockquote.
    >
    > Back to the first level.

预览:

---

> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.

---

Blockquotes can contain other Markdown elements, including headers, lists, and code blocks.

代码:

    > ## This is a header.
    >
    > 1.   This is the first list item.
    > 2.   This is the second list item.
    >
    > Here's some example code:
    >
    >     return shell_exec("echo $input | $markdown_script");

预览:

---

> ## This is a header.
>
> 1.  This is the first list item.
> 2.  This is the second list item.
>
> Here's some example code:
>
>     return shell_exec("echo $input | $markdown_script");

---

### Lists

Markdown supports ordered (numbered) and unordered (bulleted) lists.

#### Unordered

HTML Tag: `<ul>`

Unordered lists use **asterisks (\*)**, **pluses (+)**, and **hyphens (-)**.

代码:

    *   Red
    *   Green
    *   Blue

预览:

---

- Red
- Green
- Blue

---

is equivalent to:

代码:

    +   Red
    +   Green
    +   Blue

and:

代码:

    -   Red
    -   Green
    -   Blue

#### Ordered

HTML Tag: `<ol>`

Ordered lists use numbers followed by periods:

代码:

    1.  Bird
    2.  McHale
    3.  Parish

预览:

---

1.  Bird
2.  McHale
3.  Parish

---

It's possible to trigger an ordered list by accident, by writing something like this:

代码:

    1986. What a great season.

预览:

---

1986. What a great season.

---

You can **backslash-escape (\\)** the period:

代码:

    1986\. What a great season.

预览:

---

1986\. What a great season.

---

#### Indented

##### Blockquote

To put a blockquote within a list item, the blockquote's > delimiters need to be indented:

代码:

    *   A list item with a blockquote:

        > This is a blockquote
        > inside a list item.

预览:

---

- A list item with a blockquote:

  > This is a blockquote
  > inside a list item.

---

##### 代码 Block

To put a code block within a list item, the code block needs to be indented twice — **8 spaces** or **two tabs**:

代码:

    *   A list item with a code block:

            <code goes here>

预览:

---

- A list item with a code block:

      <code goes here>

---

##### Nested List

代码:

    * A
      * A1
      * A2
    * B
    * C

预览:

---

- A
  - A1
  - A2
- B
- C

---

### 代码 Blocks

HTML Tag: `<pre>`

Indent every line of the block by at least **4 spaces** or **1 tab**.

代码:

    This is a normal paragraph:

        This is a code block.

预览:

---

This is a normal paragraph:

    This is a code block.

---

A code block continues until it reaches a line that is not indented (or the end of the article).

Within a code block, **_ampersands (&)_** and angle **brackets (< and >)** are automatically converted into HTML entities.

代码:

        <div class="footer">
            &copy; 2004 Foo Corporation
        </div>

预览:

---

    <div class="footer">
        &copy; 2004 Foo Corporation
    </div>

---

Following sections Fenced 代码 Blocks and Syntax Highlighting are extensions, you can use the other way to write the code block.

#### Fenced 代码 Blocks

Just wrap your code in ` ``` ` (as shown below) and you won't need to indent it by four spaces.

代码:

    Here's an example:

    ```
    function test() {
      console.log("notice the blank line before this function?");
    }
    ```

预览:

---

Here's an example:

```
function test() {
  console.log("notice the blank line before this function?");
}
```

---

#### Syntax Highlighting

In your fenced block, add an optional language identifier and we'll run it through syntax highlighting ([Support Languages](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml)).

代码:

    ```ruby
    require 'redcarpet'
    markdown = Redcarpet.new("Hello World!")
    puts markdown.to_html
    ```

预览:

---

```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

---

### Horizontal Rules

HTML Tag: `<hr />`
Places **three or more hyphens (-), asterisks (\*), or underscores (\_)** on a line by themselves. You may use spaces between the hyphens or asterisks.

代码:

    * * *
    ***
    *****
    - - -
    ---------------------------------------
    ___

预览:

---

---

---

---

---

---

---

---

### Table

HTML Tag: `<table>`

It's an extension.

Separates column by **pipe (|)** and header by **dashes (-)**, and uses **colon (:)** for alignment.

The outer **pipes (|)** and alignment are optional. There are **3 delimiters** each cell at least for separating header.

代码:

```
| Left | Center | Right |
|:-----|:------:|------:|
|aaa   |bbb     |ccc    |
|ddd   |eee     |fff    |

 A | B
---|---
123|456


A |B
--|--
12|45
```

预览:

---

| Left | Center | Right |
| :--- | :----: | ----: |
| aaa  |  bbb   |   ccc |
| ddd  |  eee   |   fff |

| A   | B   |
| --- | --- |
| 123 | 456 |

| A   | B   |
| --- | --- |
| 12  | 45  |

---

## Span Elements

### Links

HTML Tag: `<a>`

Markdown supports two style of links: inline and reference.

#### Inline

Inline link format like this: `[Link Text](URL "Title")`

Title is optional.

代码:

    This is [an example](http://example.com/ "Title") inline link.

    [This link](http://example.net/) has no title attribute.

预览:

---

This is [an example](http://example.com/ "Title") inline link.

[This link](http://example.net/) has no title attribute.

---

If you're referring to a local resource on the same server, you can use relative paths:

代码:

    See my [About](/about/) page for details.

预览:

---

See my [About](/about/) page for details.

---

#### Reference

You could predefine link references. Format like this: `[id]: URL "Title"`

Title is also optional. And the you refer the link, format like this: `[Link Text][id]`

代码:

    [id]: http://example.com/  "Optional Title Here"
    This is [an example][id] reference-style link.

预览:

---

[id]: http://example.com/ "Optional Title Here"

This is [an example][id] reference-style link.

---

That is:

- Square brackets containing the link identifier (**not case sensitive**, optionally indented from the left margin using up to three spaces);
- followed by a colon;
- followed by one or more spaces (or tabs);
- followed by the URL for the link;
- The link URL may, optionally, be surrounded by angle brackets.
- optionally followed by a title attribute for the link, enclosed in double or single quotes, or enclosed in parentheses.

The following three link definitions are equivalent:

代码:

    [foo]: http://example.com/  "Optional Title Here"
    [foo]: http://example.com/  'Optional Title Here'
    [foo]: http://example.com/  (Optional Title Here)
    [foo]: <http://example.com/>  "Optional Title Here"

Uses an empty set of square brackets, the link text itself is used as the name.

代码:

    [Google]: http://google.com/
    [Google][]

预览:

---

[Google]: http://google.com/

[Google][]

---

### Emphasis

HTML Tags: `<em>`, `<strong>`

Markdown treats **asterisks (\*)** and **underscores (\_)** as indicators of emphasis. **One delimiter** will be `<em>`; \*_double delimiters_ will be `<strong>`.

代码:

    *single asterisks*

    _single underscores_

    **double asterisks**

    __double underscores__

预览:

---

_single asterisks_

_single underscores_

**double asterisks**

**double underscores**

---

But if you surround an \* or \_ with spaces, it'll be treated as a literal asterisk or underscore.

You can backslash escape it:

代码:

    \*this text is surrounded by literal asterisks\*

预览:

---

\*this text is surrounded by literal asterisks\*

---

### 代码

HTML Tag: `<code>`

Wraps it with **backtick quotes (`)**.

代码:

    Use the `printf()` function.

预览:

---

Use the `printf()` function.

---

To include a literal backtick character within a code span, you can use **multiple backticks** as the opening and closing delimiters:

代码:

    ``There is a literal backtick (`) here.``

预览:

---

``There is a literal backtick (`) here.``

---

The backtick delimiters surrounding a code span may include spaces — one after the opening, one before the closing. This allows you to place literal backtick characters at the beginning or end of a code span:

代码:

    A single backtick in a code span: `` ` ``

    A backtick-delimited string in a code span: `` `foo` ``

预览:

---

A single backtick in a code span: `` ` ``

A backtick-delimited string in a code span: `` `foo` ``

---

### Images

HTML Tag: `<img />`

Markdown uses an image syntax that is intended to resemble the syntax for links, allowing for two styles: inline and reference.

#### Inline

Inline image syntax looks like this: `![Alt text](URL "Title")`

Title is optional.

代码:

    ![Alt text](/path/to/img.jpg)

    ![Alt text](/path/to/img.jpg "Optional title")

预览:

---

![Alt text](https://s2.loli.net/2024/08/20/5fszgXeOxmL3Wdv.webp)

![Alt text](https://s2.loli.net/2024/08/20/5fszgXeOxmL3Wdv.webp "Optional title")

---

That is:

- An exclamation mark: !;
- followed by a set of square brackets, containing the alt attribute text for the image;
- followed by a set of parentheses, containing the URL or path to the image, and an optional title attribute enclosed in double or single quotes.

#### Reference

Reference-style image syntax looks like this: `![Alt text][id]`

代码:

    [img id]: https://s2.loli.net/2024/08/20/5fszgXeOxmL3Wdv.webp  "Optional title attribute"
    ![Alt text][img id]

预览:

---

[img id]: https://s2.loli.net/2024/08/20/5fszgXeOxmL3Wdv.webp "Optional title attribute"

![Alt text][img id]

---

### Strikethrough

HTML Tag: `<del>`

It's an extension.

GFM adds syntax to strikethrough text.

代码:

```
~~Mistaken text.~~
```

预览:

---

~~Mistaken text.~~

---

## Miscellaneous

### Automatic Links

Markdown supports a shortcut style for creating "automatic" links for URLs and email addresses: simply surround the URL or email address with angle brackets.

代码:

    <http://example.com/>

    <address@example.com>

预览:

---

<http://example.com/>

<address@example.com>

---

GFM will autolink standard URLs.

代码:

```
https://github.com/emn178/markdown
```

预览:

---

https://github.com/emn178/markdown

---

### Backslash Escapes

Markdown allows you to use backslash escapes to generate literal characters which would otherwise have special meaning in Markdown's formatting syntax.

代码:

    \*literal asterisks\*

预览:

---

\*literal asterisks\*

---

Markdown provides backslash escapes for the following characters:

代码:

    \   backslash
    `   backtick
    *   asterisk
    _   underscore
    {}  curly braces
    []  square brackets
    ()  parentheses
    #   hash mark
    +   plus sign
    -   minus sign (hyphen)
    .   dot
    !   exclamation mark

## Inline HTML

For any markup that is not covered by Markdown's syntax, you simply use HTML itself. There's no need to preface it or delimit it to indicate that you're switching from Markdown to HTML; you just use the tags.

代码:

    This is a regular paragraph.

    <table>
        <tr>
            <td>Foo</td>
        </tr>
    </table>

    This is another regular paragraph.

预览:

---

This is a regular paragraph.

<table>
    <tr>
        <td>Foo</td>
    </tr>
</table>

This is another regular paragraph.

---

Note that Markdown formatting syntax is **not processed within block-level HTML tags**.

Unlike block-level HTML tags, Markdown syntax is **processed within span-level tags**.

代码:

    <span>**Work**</span>

    <div>
        **No Work**
    </div>

预览:

---

<span>**Work**</span>

<div>
  **No Work**
</div>
***