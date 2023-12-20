console.log("Test from Git");

$('[data-click="accordion"]').click(function () {
  if (!$(this).is(".open")) {
    $('[data-click="accordion"].open').each((i, item) => {
      item.click();
    });
    $(this).addClass("open");
  } else {
    $(this).removeClass("open");
  }
});

$('[data-scroll="section"]').each(function (index) {
  let childTriggers = $(this).find('[data-scroll="text"]');
  let childTargets = $(this).find('[data-scroll="img"]');
  // switch active class
  function makeItemActive(index) {
    childTriggers.removeClass("is-active");
    childTargets.removeClass("is-active");
    childTriggers.eq(index).addClass("is-active");
    childTargets.eq(index).addClass("is-active");
  }
  makeItemActive(0);
  // create triggers
  childTriggers.each(function (index) {
    ScrollTrigger.create({
      trigger: $(this),
      start: "top center",
      end: "bottom center",
      markers: false,
      onToggle: (isActive) => {
        if (isActive) {
          makeItemActive(index);
        }
      },
    });
  });
});
