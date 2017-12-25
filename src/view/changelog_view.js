var title = 'changelog';
var titleUpper = title[0].toUpperCase() + title.slice(1, title.length);
var changelogs = ['Lorem', 'Ipsum', 'dolor', 'sit', 'amet'];

var changelog =
`<div id="${title}_div" title=${title} class="container-fluid">
  <div>
    <ul class="list-group">
      <li class="list-group-item ${changelogs[0].toLowerCase()} active">${changelogs[0]}</li>
      <li class="list-group-item ${changelogs[1].toLowerCase()}">${changelogs[1]}</li>
      <li class="list-group-item ${changelogs[2].toLowerCase()}">${changelogs[2]}</li>
      <li class="list-group-item ${changelogs[3].toLowerCase()}">${changelogs[3]}</li>
      <li class="list-group-item ${changelogs[4].toLowerCase()}">${changelogs[4]}</li>
    </ul>
  </div>
</div>`;


export {
  changelog, changelogs
};
