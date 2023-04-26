const getOpenDrawer = () => (state) => state.general.openDrawer;
const getActiveIndex = () => (state) => state.general.activeIndex;
const getCurrentCard = () => (state) => state.general.currentCard;

export { getOpenDrawer, getActiveIndex, getCurrentCard };
