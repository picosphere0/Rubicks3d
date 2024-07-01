const blob = document.getElementById("blob");

window.onpointermove = event => {
  const { pageX, pageY } = event;

  blob.animate({
    left: `${pageX}px`,
    top: `${pageY}px`
  }, { duration: 300, fill: "forwards" });
}
