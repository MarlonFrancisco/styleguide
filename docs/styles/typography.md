<div class="pb7"></div>
<div class="f2 c-on-base pv5">Typography</div>
Typography is used to communicate informations the most efficient way possible through legibility and visual hierarchy. It's a crucial tool to guide users on their tasks. It should be used on clear and delightful way. For that, it's important to define different **typography styles** for an app by setting a combination of different typography attributes: **Typeface, weight, size, capitalization and letter spacing.**

Typography styles work as single-purpose CSS classes used to modify the typography configuration of an app. Each class configures the following CSS attributes: ** font-family, font-size, font-weight, text-transform and letter-spacing. **

<!-- Headings -->
<div class="flex mt7 mb3 items-center">
    <div class="f3 fw5 c-on-base mv0 mr5 pv3">Headings</div>
</div>
Headings are the most prominent type elements of an app. They are the first elements that users read. They should call attention and give information the most efficient way, using no more than the necessary quantity of words. Heading-1 is the most prominent heading style and heading-6 is the less one. Headings should be applied to:

<div class="pa3 br2 bg-muted-5 c-on-muted-5 mb5 dib mr5">Product names</div>
<div class="pa3 br2 bg-muted-5 c-on-muted-5 mb5 dib mr5">Prices</div>
<div class="pa3 br2 bg-muted-5 c-on-muted-5 mb5 dib">Page titles</div>
<div class="pa3 br2 bg-muted-5 c-on-muted-5 mb5 dib">Input labels</div>

```js
<div className="">
  <h1 className="t-heading-1">Level 1 Heading</h1>
  <h2 className="t-heading-2">Level 2 Heading</h2>
  <h3 className="t-heading-3">Level 3 Heading</h3>
  <h4 className="t-heading-4">Level 4 Heading</h4>
  <h5 className="t-heading-5">Level 5 Heading</h5>
  <h6 className="t-heading-6">Level 5 Heading</h6>
</div>
```

<!-- Body -->
<div class="flex mt7 mb3 items-center">
    <div class="f3 fw5 c-on-base mv0 mr5 pv3">Body</div>
</div>
Body is the text style defined to achieve a good level of rhythm and legibility on longer texts. Paragraph should be applied to:

<div class="pa3 br2 bg-muted-5 c-on-muted-5 mb5 dib mr5">Product descriptions </div>
<div class="pa3 br2 bg-muted-5 c-on-muted-5 mb5 dib mr5">Forms</div>
<div class="pa3 br2 bg-muted-5 c-on-muted-5 mb5 dib">Reports</div>

```js
<div className="">
  <p className="t-body mw9">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
</div>
```
<!-- Auxiliary -->
<div class="flex mt7 mb3 items-center">
    <div class="f3 fw5 c-on-base mv0 mr5 pv3">Auxiliary</div>
</div>
Small and mini are the less prominent type elements of an app. They should work as secondary elements of an interface, those that do not require the user's attention to complete a task. Auxiliary should be applied to:

<div class="pa3 br2 bg-muted-5 c-on-muted-5 mb5 dib mr5">Promotional and status badges</div>
<div class="pa3 br2 bg-muted-5 c-on-muted-5 mb5 dib mr5">Forms</div>
<div class="pa3 br2 bg-muted-5 c-on-muted-5 mb5 dib">Captions</div>

```js
<div className="">
  <p className="t-small mw9">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  <p className="t-mini mw9">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>
```

<!-- Action -->
<div class="flex mt7 mb3 items-center">
    <div class="f3 fw5 c-on-base mv0 mr5 pv3">Action</div>
</div>
Action is the text style used on the main action and interactive elements of the page. Action should be applied to:

<div class="pa3 br2 bg-muted-5 c-on-muted-5 mb5 dib mr5">Call to actions</div>
<div class="pa3 br2 bg-muted-5 c-on-muted-5 mb5 dib mr5">Buttons</div>
<div class="pa3 br2 bg-muted-5 c-on-muted-5 mb5 dib">Tabs</div>

```js
<div className="">
  <p className="t-action-large mw9">Lorem ipsum</p>
  <p className="t-action mw9">Lorem ipsum</p>
  <p className="t-action-small mw9">Lorem ipsum</p>
</div>
```
