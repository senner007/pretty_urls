var title = 'about';
var titleUpper = title[0].toUpperCase() + title.slice(1, title.length);
var about =
`<div id="${title}_div" title=${title} class="card text-center">
  <div class="card-header">
    ${titleUpper}
  </div>
  <div class="card-body">
    <h4 class="card-title">${titleUpper}</h4>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class="card-footer text-muted">
    This is the ${title} page
  </div>
</div>`;
export {about}
