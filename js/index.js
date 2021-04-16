(() => {
  var toastElList = document.getElementById("toasts");

  var toast = new bootstrap.Toast(toastElList, { delay: 10000 });

  toast.show();

  
  toastElList.addEventListener("hide.bs.toast", function () {
    console.log("toast");
  });
})();
