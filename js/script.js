// js
// Recent work
 var containerEl = document.querySelector('[data-ref~="mixitup-container"]');

            var mixer = mixitup(containerEl, {
                selectors: {
                    target: '[data-ref~="mixitup-target"]'
                }
            });

// jQuery
$(document).ready(function() {
  
});

  window.addEventListener('load', () => {
      setTimeout(() => {
        document.body.classList.add('loaded');
        document.getElementById('content').style.display = 'block';
      }, 2000); // 2000ms = 2 seconds delay
    });;
