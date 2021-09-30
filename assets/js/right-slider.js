var popup = function (dom, clickDom, options) {
  var initHtml =
    '<div class="loa-popup-mask"></div><div class="loa-popup-content"></div>';
  $(dom).html(initHtml);

  var $popupMaskEl = $(dom).find(".loa-popup-mask");
  var $popupContentEl = $(dom).find(".loa-popup-content");

  var popupMaskCss =
    "position: fixed;top: 0;left: 0;right: 0;bottom: 0; opacity: 0.1;z-index: 1001;display: none;";
  var popupContentCss =
    "position: fixed;z-index: 99999;background: overflow: hidden;";
  var popupContentHideCss =
    "position: fixed;z-index: 99999;background: overflow: hidden;";

  $popupMaskEl.attr("style", popupMaskCss);
  $popupContentEl.attr("style", popupContentCss);

  var top = 0,
    right = 0,
    bottom = 0,
    left = 0;
  var topCss = "",
    rightCss = "",
    bottomCss = "",
    leftCss = "";

  var width = options.width;
  var height = options.height;
  var duration = options.duration || "fast";
  var animateInto = {};

  var content = options.content;
  renderContent();

  this.popupRight = function () {
    width = width || "290px";
    height = height || "678px";
    topCss = bottomCss || topCss || "top:0;";
    rightCss = "right: -" + width + ";";
    leftCss = "";
    animateInto.right = "-" + width;
    handlePop({ right: right });
  };

  this.setRight = function (r) {
    right = r;
    left = 0;
    rightCss = "right:" + r + "px;";
    leftCss = "";
    return this;
  };

  function synthesisStyle() {
    return (
      popupContentCss +
      topCss +
      rightCss +
      bottomCss +
      leftCss +
      "width:" +
      width +
      ";" +
      "height:" +
      height
    );
  }

  function handlePop(animate) {
    $(clickDom).on("click", function () {
      $popupMaskEl.show();
      $popupContentEl.attr("style", synthesisStyle());
      $popupContentEl.animate(animate, duration);
      $popupContentEl.children(":first").show();
    });

    $(dom).on("click", ".loa-popup-mask", function () {
      $popupMaskEl.hide();
      $popupContentEl.animate(animateInto, duration, function () {
        $(this).children(":first").hide();
        $(this).attr("style", popupContentHideCss);
      });
    });
  }

  function renderContent() {
    var type = $.type(content);
    if (type === "object") {
      $popupContentEl.html($(content).prop("outerHTML"));
    } else {
      $popupContentEl.html(content);
    }
  }
};
