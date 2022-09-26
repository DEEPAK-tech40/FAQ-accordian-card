# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

![desktop-preview](https://user-images.githubusercontent.com/94350356/192354775-d6e65c3b-e324-4ba1-892a-db54b02a58db.jpg)


### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

Desktop-view:

![active-states](https://user-images.githubusercontent.com/94350356/192354832-aee22f94-383e-431e-9631-f21bc16bc24a.jpg)

![desktop-design](https://user-images.githubusercontent.com/94350356/192354858-3cfcf3dd-fb02-4205-bbf8-9197f1c6a7a4.jpg)

Mobile-view:

![mobile-design](https://user-images.githubusercontent.com/94350356/192354918-0d036de5-1c9d-457a-887f-e64af31c0245.jpg)

### Links

- Solution URL: [Solution](https://www.frontendmentor.io/solutions/faqaccordioncard-ukVfk22bhr)
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
