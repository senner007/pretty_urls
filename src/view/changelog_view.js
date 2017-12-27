var title = 'changelog';
var titleUpper = title[0].toUpperCase() + title.slice(1, title.length);
var changelogs = ['Lorem', 'Ipsum', 'dolor', 'sit', 'amet'];

var changelog =
`<div id="${title}_div" title=${title} class="container-fluid">
  <div>
    <ul class="list-group">
      <li data-name="${changelogs[0].toLowerCase()}" class="list-group-item active">${changelogs[0]}</li>
      <li data-name="${changelogs[1].toLowerCase()}" class="list-group-item">${changelogs[1]}</li>
      <li data-name="${changelogs[2].toLowerCase()}" class="list-group-item">${changelogs[2]}</li>
      <li data-name="${changelogs[3].toLowerCase()}" class="list-group-item">${changelogs[3]}</li>
      <li data-name="${changelogs[4].toLowerCase()}" class="list-group-item">${changelogs[4]}</li>
    </ul>
  </div>
</div>`;


export {
  changelog, changelogs
};
