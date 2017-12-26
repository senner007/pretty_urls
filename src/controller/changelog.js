import {changelog, changelogs} from "../view/changelog_view.js";
import {View_controller} from "./view_constructor/view_controller.js";
import {Selection_controller} from "./view_constructor/selection_controller.js";
import {myRouter} from "../router/router.js";




var changelog_view_controller = new Selection_controller({

  selectionParent: null,
  selectionArray: changelogs,
  router : myRouter


});


// changelog_view_controller.addEvent = function () {
//   this.changelogNode.on('click','li', function (e) {
//     e.preventDefault();
//     myRouter.navigateTo('changelog/' + this.innerText.toLowerCase());
//   });
// };
// changelog_view_controller.changelogsArray = changelogs;
// changelog_view_controller.active = changelog_view_controller.changelogsArray[0].toLowerCase();
//
// changelog_view_controller.changelogs = {};
// for (let cl of changelogs) {
//   cl = cl.toLowerCase();
//   changelog_view_controller.changelogs[cl] = {
//     id: null,
//     isActive: false //
//   }
// };
//
// changelog_view_controller.addActive = function (name) {
//   this.removeActive()
//   this.active = name;
//   this.changelogs[this.active].id = this.changelogs[this.active].id == null ? this.changelogNode.find('.' + name)[0] : this.changelogs[this.active].id;
//   this.changelogs[this.active].id.classList.toggle('active');
//   this.changelogs[this.active].isActive = true;
// }
//
// changelog_view_controller.removeActive = function () {
//   if(this.active) {
//     this.changelogs[this.active].id.classList.remove('active');
//     this.changelogs[this.active].isActive = false;
//   }
// }
//
// changelog_view_controller.init = function (container) {
//   this.changelogNode = container.find('#changelog_div').find('ul');
//   this.changelogs[this.active].id = this.changelogNode.find('.' + this.active)[0];
//   this.addEvent();
// };


export {changelog_view_controller};
