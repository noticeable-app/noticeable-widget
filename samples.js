/**
 * @license
 * Copyright (c) 2017-2018 Noticeable. All rights reserved.
 */
export const postSamples = [
        {
            "node": {
                "content": {
                    "html": "<p>Today we're are thrilled to introduce our product timeline. The purpose of this timeline is to keep you informed about updates and changes we are continuously pushing to <em>Acme</em>. This includes new features, improvements, fixes but also scheduled maintenances.</p>\n<p>We work on <em>Acme</em> all the time and your satisfaction is our main metric for success. However, sometimes, it may seem that not much is happening. We know that communication is important and this new timeline is here to strengthen that very important part.</p>\n<p>You'll notice updates while browsing our <a href=\"https://acme.noticeable.io\">service webpage</a> through a widget that appears at the right time. Besides, all thing's we've changed is centralized on our <a href=\"https://acme.noticeable.io\">timeline</a>. You can also <a href=\"https://acme.noticeable.io/subscribe\">subscribe</a> to receive updates right to your inbox.</p>\n"
                },
                "excerpt": "Today we're are thrilled to introduce our product timeline. The purpose of this timeline is to keep you informed about updates and changes we are continuously pushing to Acme. This includes new features, improvements, fixes but also...",
                "hiddenComments": true,
                "id": "example1",
                "labels": [
                    {
                        "color": "#6b6cf3",
                        "name": "Announcement"
                    }
                ],
                "reactions": true,
                "slug": "we-are-starting-a-changelog",
                "title": "We are starting a changelog 📣"
            }
        },
        {
            "node": {
                "content": {
                    "html": "<p>Markdown is an intuitive and human-readable syntax. You can use it to format your posts. Below is a series of syntax examples:</p>\n<h2>Headings</h2>\n<pre><code class=\"hljs language-markdown\"><span class=\"hljs-section\"># h1 Heading</span>\n<span class=\"hljs-section\">## h2 Heading</span>\n<span class=\"hljs-section\">### h3 Heading</span>\n<span class=\"hljs-section\">#### h4 Heading</span>\n<span class=\"hljs-section\">##### h5 Heading</span>\n<span class=\"hljs-section\">###### h6 Heading</span>\n</code></pre>\n<h2>Emphasis</h2>\n<pre><code class=\"hljs language-markdown\"><span class=\"hljs-strong\">**This is bold text**</span>\n\n<span class=\"hljs-strong\">__This is bold text__</span>\n\n<span class=\"hljs-emphasis\">*This is italic text*</span>\n\n<span class=\"hljs-emphasis\">_This is italic text_</span>\n\n~~Deleted text~~\n\nSuperscript: 19^th^\n\nSubscript: H~2~O\n\n++Inserted text++\n\n==Marked text==\n</code></pre>\n<h2>Blockquotes</h2>\n<pre><code class=\"hljs language-markdown\"><span class=\"hljs-quote\">&gt; Blockquotes can also be nested...</span>\n&gt;&gt; ...by using additional greater-than signs right next to each other...\n<span class=\"hljs-quote\">&gt; &gt; &gt; ...or with spaces between arrows.</span>\n</code></pre>\n<h2>Lists</h2>\n<p>Unordered:</p>\n<pre><code class=\"hljs language-markdown\"><span class=\"hljs-bullet\">+ </span>Create a list by starting a line with <span class=\"hljs-code\">`+`</span>, <span class=\"hljs-code\">`-`</span>, or <span class=\"hljs-code\">`*`</span>\n<span class=\"hljs-bullet\">+ </span>Sub-lists are made by indenting 2 spaces:\n  - Marker character change forces new list start:\n<span class=\"hljs-code\">    * Ac tristique libero volutpat at</span>\n<span class=\"hljs-code\">    + Facilisis in pretium nisl aliquet</span>\n<span class=\"hljs-code\">    - Nulla volutpat aliquam velit</span>\n<span class=\"hljs-bullet\">+ </span>Very easy!\n</code></pre>\n<p>Ordered:</p>\n<pre><code class=\"hljs language-markdown\"><span class=\"hljs-bullet\">1. </span>Lorem ipsum dolor sit amet\n<span class=\"hljs-bullet\">2. </span>Consectetur adipiscing elit\n<span class=\"hljs-bullet\">3. </span>Integer molestie lorem at massa\n</code></pre>\n<pre><code class=\"hljs language-markdown\"><span class=\"hljs-bullet\">1. </span>You can use sequential numbers...\n<span class=\"hljs-bullet\">1. </span>...or keep all the numbers as <span class=\"hljs-code\">`1.`</span>\n</code></pre>\n<p>Start numbering with offset:</p>\n<pre><code class=\"hljs language-markdown\"><span class=\"hljs-bullet\">57. </span>foo\n<span class=\"hljs-bullet\">1. </span>bar\n</code></pre>\n<h2>Code</h2>\n<p>Inline code:</p>\n<pre><code class=\"hljs language-markdown\">Here is an expression <span class=\"hljs-code\">`2 + 3`</span>\n</code></pre>\n<p>Syntax highlighting:</p>\n<pre><code class=\"hljs language-markdown\"><span class=\"hljs-code\">```js\nvar foo = function (bar) {\n  return bar++;\n};\n\nconsole.log(foo(5));\n```</span>\n</code></pre>\n<h2>Tables</h2>\n<pre><code class=\"hljs language-markdown\">| Planet Name | Diameter (km) |\n| ----------- | ------------- |\n| Mercury | 4,879 |\n| Venus | 12,104 |\n| Earth | 12,756 |\n| Mars | 6,792 |\n</code></pre>\n<h2>Links</h2>\n<pre><code class=\"hljs language-markdown\">[<span class=\"hljs-string\">Noticeable</span>](<span class=\"hljs-link\">https://noticeable.io</span>)\n</code></pre>\n<pre><code class=\"hljs language-markdown\">Auto-converted link https://noticeable.io.\n</code></pre>\n<h2>Medias</h2>\n<h3>Images</h3>\n<pre><code class=\"hljs language-markdown\">![<span class=\"hljs-string\">Balloons</span>](<span class=\"hljs-link\">https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&amp;fit=crop&amp;w=934&amp;q=80</span>)\n</code></pre>\n<h3>Videos</h3>\n<p>YouTube, Videopress, Vimeo or Vine videos can be embedded using the same syntax as Images or auto-converted links:</p>\n<pre><code class=\"hljs language-markdown\">[<span class=\"hljs-string\">Vista</span>](<span class=\"hljs-link\">https://vimeo.com/152839850</span>)\n[<span class=\"hljs-string\">What About Us Piano Cover</span>](<span class=\"hljs-link\">https://youtu.be/zzpnNqqXLEI?list=RDzzpnNqqXLEI</span>)\n\nhttps://vimeo.com/152839850\nhttps://youtu.be/zzpnNqqXLEI?list=RDzzpnNqqXLEI\n</code></pre>\n"
                },
                "excerpt": "Markdown is an intuitive and human-readable syntax. You can use it to format your posts. Below is a series of syntax examples:  Headings  h1 Heading h2 Heading h3 Heading h4 Heading h5 Heading h6 Heading  Emphasis  This is bold text...",
                "hiddenComments": true,
                "id": "example2",
                "labels": [
                    {
                        "color": "#f3322f",
                        "name": "New feature"
                    }
                ],
                "reactions": true,
                "slug": "formatting-posts-with-markdown",
                "title": "Formatting posts with Markdown 🎨"
            }
        },
        {
            "node": {
                "content": {
                    "html": "<p>You may have already read the quote &quot;Ideas are commodity. Execution of them is not&quot;. What is most frustrating than spending time and money building awesome features that only part of your audience discovers?</p>\n<p><img src=\"https://media.giphy.com/media/7G5YcR8vFyXcc/giphy.gif\" alt=\"Boosting customer retention\"></p>\n<p>Improving engagement but also customer retention requires to keep customers involved in your continuous flow of innovation. Noticeable is designed to this aim: keeping your customers up-to-date so that they know how hard your team is working on getting them satisfied.</p>\n"
                },
                "excerpt": "You may have already read the quote \"Ideas are commodity. Execution of them is not\". What is most frustrating than spending time and money building awesome features that only part of your audience discovers?  Improving engagement but...",
                "hiddenComments": true,
                "id": "example3",
                "labels": [
                    {
                        "color": "#039be5",
                        "name": "Marketing"
                    },
                    {
                        "color": "#fdd835",
                        "name": "Tips"
                    }
                ],
                "reactions": true,
                "slug": "increasing-user-retention",
                "title": "Increasing customer retention 🚀"
            }
        }
    ];
