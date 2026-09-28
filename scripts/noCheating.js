window.addEventListener('keydown', function(event) {
  // Check if a modifier key or function key is pressed
  if (
    event.ctrlKey || 
    event.altKey || 
    event.metaKey || 
    (event.shiftKey && event.key !== 'Shift') || 
    (event.keyCode >= 112 && event.keyCode <= 123) 
  ) {
    event.preventDefault();
    event.stopPropagation();
  }
}, { capture: true });
