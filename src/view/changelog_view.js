var title = 'changelog';
var titleUpper = title[0].toUpperCase() + title.slice(1, title.length);
var changelog =
`<div id="${title}_div" title=${title}>
  <ul class="list-group">
    <li class="list-group-item active">${titleUpper}</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Morbi leo risus</li>
    <li class="list-group-item">Porta ac consectetur ac</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
</div>`;

export {changelog};
