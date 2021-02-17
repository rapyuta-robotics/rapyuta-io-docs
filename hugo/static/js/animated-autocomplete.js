
      // const searchBar = document.querySelector('.animated-search-box');
      // const DELAY_AFTER_ANIMATION = 1000;
      // const PLACEHOLDERS = [
      //   'rapyuta.io documentation', //1st animated placeholder
      //   'Find how-to guides to perform actions on rapyuta.io',
      //   'Understand rapyuta.io features and concepts',
      //   'Work through tutorials to see applications you can build on rapyuta.io ',
      //   'Read through Deep dives to understand technical design and best practices'
      // ];

      // const getRandomDelayBetween = (min, max) =>
      //   Math.floor(Math.random() * (max - min + 1) + min);

      // const setPlaceholder = (inputNode, placeholder) => {
      //   inputNode.setAttribute('placeholder', placeholder);
      // };

      // const animateLetters = (
      //   currentLetters,
      //   remainingLetters,
      //   inputNode,
      //   onAnimationEnd
      // ) => {
      //   if (!remainingLetters.length) {
      //     return (
      //       typeof onAnimationEnd === 'function' &&
      //       onAnimationEnd(currentLetters.join(''), inputNode)
      //     );
      //   }

      //   currentLetters.push(remainingLetters.shift());

      //   setTimeout(() => {
      //     setPlaceholder(inputNode, currentLetters.join(''));
      //     animateLetters(currentLetters, remainingLetters, inputNode, onAnimationEnd);
      //   }, getRandomDelayBetween(50, 90));
      // };

      // const animatePlaceholder = (inputNode, placeholder, onAnimationEnd) => {
      //   animateLetters([], placeholder.split(''), inputNode, onAnimationEnd);
      // };

      // const onAnimationEnd = (placeholder, inputNode) => {
      //   setTimeout(() => {
      //     let newPlaceholder =
      //       PLACEHOLDERS[Math.floor(Math.random() * PLACEHOLDERS.length)];

      //     do {
      //       newPlaceholder =
      //         PLACEHOLDERS[Math.floor(Math.random() * PLACEHOLDERS.length)];
      //     } while (placeholder === newPlaceholder);

      //     animatePlaceholder(inputNode, newPlaceholder, onAnimationEnd);
      //   }, DELAY_AFTER_ANIMATION);
      // };

      // window.addEventListener('load', () => {
      //   // If we want multiple different placeholders, we pass our callback
      //   animatePlaceholder(searchBar, PLACEHOLDERS[0], onAnimationEnd);
      // });