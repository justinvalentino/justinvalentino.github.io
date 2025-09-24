document.getElementById("CVdownload").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "click-me.pdf";
  link.download = "JustinValentino.pdf"; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
