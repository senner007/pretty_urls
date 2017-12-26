
function Selection_controller(o) {

  this.selectionParent = o.selectionParent;

  this.addEvent = function (router) {
    this.selectionParent.on('click','li', function (e) {
      e.preventDefault();
      router.navigateTo('changelog/' + this.innerText.toLowerCase());
    });
  };
  this.selectionArray = o.selectionArray;
  this.active = o.active;

  this.selection = {};
  for (let cl of o.selectionArray) {
    cl = cl.toLowerCase();
    this.selection[cl] = {
      id: null,
      isActive: false //
    }
  };

  this.addActive = function (name) {
    this.removeActive()
    this.active = name;
    this.selection[this.active].id = this.selection[this.active].id == null ? this.selectionParent.find('.' + name)[0] : this.selection[this.active].id;
    this.selection[this.active].id.classList.toggle('active');
    this.selection[this.active].isActive = true;
  }

  this.removeActive = function () {
    if(this.active) {
      this.selection[this.active].id.classList.remove('active');
      this.selection[this.active].isActive = false;
    }
  }

  this.init = function (container, router) {
    this.selectionParent = container.find('#changelog_div').find('ul');
    this.selection[this.active].id = this.selectionParent.find('.' + this.active)[0];
    this.addEvent(router);
  };

}

export {Selection_controller}
