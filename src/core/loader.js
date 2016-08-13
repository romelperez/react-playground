import settings from 'settings';

const loadCSS = function (path) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = path;
  document.body.appendChild(link);
};

export default function () {
  settings.resources.
    filter(resource => resource.type === 'CSS').
    forEach(resource => loadCSS(resource.path));
}
