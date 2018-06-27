import { map, every } from "lodash-es";
import sketch from "sketch";

export function getSelectedLayers(context) {
  const selectedLayers = context.selection;

  if (selectedLayers.length === 0) {
    context.document.showMessage("⚠️ Select one or more layer(s) first!");
    return;
  }

  return map(selectedLayers, l => sketch.fromNative(l));
}

export function getSelectedSiblings(context) {
  const selectedLayers = getSelectedLayers(context);

  // Make sure all selected layers have the same parent
  const firstParent = selectedLayers[0].parent;
  if (!every(selectedLayers, l => l.parent.id === firstParent.id)) {
    context.document.showMessage("⚠️ Selected layers or groups must be in the same parent!");
    return;
  }

  return { parent: firstParent, selected: map(selectedLayers, l => sketch.fromNative(l)) };
}
