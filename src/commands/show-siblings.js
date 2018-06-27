import { differenceBy } from "lodash-es";
import { getSelectedSiblings } from "../helpers/layers";

export default function(context) {
  const { parent, selected } = getSelectedSiblings(context);
  if (!parent) return;
  const siblings = differenceBy(parent.layers, selected, l => l.id);
  siblings.forEach(s => (s.hidden = false));
}
