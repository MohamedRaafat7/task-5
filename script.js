document.querySelector('.b-1').addEventListener('click', function() {
    document.querySelector('.pp-1').style.backgroundColor = '#f9cf73'; 
    document.querySelector('.p-a').style.color = '#ffffff'; 
});

document.querySelector('.b-2').addEventListener('click', function() {
    document.querySelector('.pp-2').style.backgroundColor = '#6194e2'; 
    document.querySelector('.p-b').style.color = '#ffffff'; 
});

document.querySelector('.b-3').addEventListener('click', function() {
    document.querySelector('.pp-3').style.backgroundColor = '#df7d66'; 
    document.querySelector('.p-c').style.color = '#ffffff'; 
});

document.querySelector('.b-4').addEventListener('click', function() {
    document.querySelector('.pp-4').style.backgroundColor = '#354c6c'; 
    document.querySelector('.p-d').style.color = '#ffffff'; 
});





document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggles = document.querySelectorAll('.toggleSwitch');
    const darkModeSections = document.querySelectorAll('.backgroundSection');
  
    const originalColors = Array.from(darkModeSections).map(section => ({
      element: section,
      originalColor: window.getComputedStyle(section).backgroundColor
    }));
  
    darkModeToggles.forEach(toggle => {
      toggle.addEventListener('change', () => {
        darkModeSections.forEach((section, index) => {
          if (toggle.checked) {
            section.style.backgroundColor = 'black';
           
          } else {
            section.style.backgroundColor = originalColors[index].originalColor;
           
          }
        });
      });
    });
  });
  