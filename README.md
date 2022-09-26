# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

### Links

- Solution URL: [Solution](https://your-solution-url.com)
- Live Site URL: [Live site](https://deepak-tech40-faq-accordion.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

This challenge was helpful in many ways. I've learnt more new things such as adding class list via js, adding eventlistener to multiple elements using a loop and more.

```js
arrowEl.addEventListener("click", function () {
  console.log(dropEl);
  if (isShown[i]) {
    quesEl.classList.remove("quesClick");
    arrowEl.classList.remove("arrowClick");
    dropEl.style.display = "none";
    isShown[i] = false;
  } else {
    quesEl.classList.add("quesClick");
    arrowEl.classList.add("arrowClick");
    dropEl.style.display = "block";
    isShown[i] = true;
  }
});
```

## Author

- Frontend Mentor - [@DEEPAK-tech40](https://www.frontendmentor.io/profile/DEEPAK-tech40)
