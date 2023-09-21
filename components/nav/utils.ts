export const moveUp = () => {
  const d = document;
  const movelNavEl = d.getElementById("movelNav") as HTMLDivElement;
  const navButtonEl = d.getElementById("navButton") as HTMLDivElement;
  movelNavEl.classList.toggle("moveUpNavBox");
  navButtonEl.classList.toggle("moveUpAnimated");
};
