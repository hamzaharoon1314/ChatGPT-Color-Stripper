function stripBackgroundColor(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const elements = doc.querySelectorAll('*');
  
    elements.forEach(element => {
      if (element.style.backgroundColor) {
        element.style.backgroundColor = '';
      }
    });
  
    return doc.body.innerHTML;
  }
  
  document.addEventListener('copy', (event) => {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const clonedContent = range.cloneContents();
  
    const container = document.createElement('div');
    container.appendChild(clonedContent);
  
    const strippedHtml = stripBackgroundColor(container.innerHTML);
    event.clipboardData.setData('text/html', strippedHtml);
    event.preventDefault();
  });
  