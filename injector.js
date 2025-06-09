const div = document.querySelector('.geofs-wind-container');

const iframe = document.createElement('iframe');
iframe.src = 'https://copper-client.strator.gg/';
iframe.width = '1200';
iframe.height = '800';
iframe.style.position = "absolute";
iframe.style.border = 'none';

div.parentNode.replaceChild(iframe, div);