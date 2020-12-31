document
  .getElementById("btnTinhTienTip")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var totalAmount = parseInt(document.getElementById("txtTongTien").value);
    var tipRate =
      parseInt(document.getElementById("slPhanTramTip").value) / 100;
    var persons = parseInt(document.getElementById("txtSoNguoi").value);

    var notification = document.getElementById("txtThongBao");

    document.getElementsByClassName("card-footer")[0].style.display = "block";

    if (isNaN(totalAmount) || tipRate == 0 || isNaN(persons)) {
      notification.className = "alert alert-danger";
      notification.innerText = "Vui lòng nhập đầy đủ thông tin!";
    } else {
      var tipAmount = Math.round((totalAmount * tipRate) / persons);

      notification.className = "";
      notification.innerHTML = `TIP AMOUNT <br> ${tipAmount} vnd <br> mỗi người.`;
      notification.style.textAlign = "center";
    }
  });
