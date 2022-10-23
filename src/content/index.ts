const r = new XMLHttpRequest();
r.open('GET', chrome.runtime.getURL('content/content.js'), true);
r.setRequestHeader('Content-Type', 'text/javascript;charset=UTF-8');
r.onload = function () {
  const script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', chrome.runtime.getURL('content/content.js'));

  document.querySelector('head')!.appendChild(script);
};
r.send();