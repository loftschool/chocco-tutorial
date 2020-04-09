const findBlockByAlias = alias => {
  return $(".reviews__item").filter((ndx, item) => {
    return $(item).attr('data-linked-with') === alias;
  }) 
}

const switchTabs = e => {
  const $this = $(e.currentTarget);
  const target = $this.attr("data-open");
  const reqItem = findBlockByAlias(target);
  const curItem = $this.closest(".reviews-switcher__item");

  curItem.addClass("active").siblings().removeClass("active");
  reqItem.addClass("active").siblings().removeClass("active");
};

$(".reviews-switcher__link").click(switchTabs);


