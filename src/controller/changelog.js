import {changelogs} from "../view/changelog_view.js";
import {Selection_controller} from "./view_constructor/selection_controller.js";

export const changelog_view_controller = new Selection_controller({

  selectionParent: null,
  selectionArray: changelogs,
  active: changelogs[0].toLowerCase(),
  pathName: 'changelog/'

});



