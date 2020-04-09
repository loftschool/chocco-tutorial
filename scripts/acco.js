const getHeightOfBlock = (block) => block.height();

const mobileQuery = window.matchMedia("(max-width: 768px)");

const getContentBlockClass = () => {
  const isMobile = mobileQuery.matches;

  return isMobile
    ? ".team__content--hidden--mobile"
    : ".team__content--hidden--desktop";
};

const openItem = (item) => {
  const container = item.closest(".team__item");
  const contentBlockClass = getContentBlockClass();
  const contentBlock = container.find(contentBlockClass);
  const textBlock = contentBlock.find(".team__content-block");
  const reqHeight = getHeightOfBlock(textBlock);

  container.addClass("active");
  contentBlock.height(reqHeight);
};

const closeEveryItem = (container) => {
  const items = container.find(".team__item");
  const contentBlockClass = getContentBlockClass();
  const contentBlock = container.find(contentBlockClass);

  items.removeClass("active");
  contentBlock.height(0);
};

const resetElemsHeightsInContainer = (container) => {
  const mobileContainer = container.find(".team__content--hidden--mobile");
  const items = container.find(".team__item");
  const desktopContainer = container.find(".team__content--hidden--desktop");
  const isMobile = mobileQuery.matches;

  if (isMobile) {
    mobileContainer.height(0);
    desktopContainer.height("auto");
  } else {
    mobileContainer.height("auto");
    desktopContainer.height(0);
  }

  items.removeClass(".active");
};

mobileQuery.addListener((e) => {
  resetElemsHeightsInContainer($(".team"));
});

$(".team__title").click((e) => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const elemContainer = $this.closest(".team__item");
  const itemOpened = elemContainer.hasClass("active");
  const container = $this.closest(".team");

  if (itemOpened) {
    closeEveryItem(container);
  } else {
    closeEveryItem(container);
    openItem($this);
  }
});
