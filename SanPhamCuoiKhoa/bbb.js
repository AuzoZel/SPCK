let bbb = document.getElementById("button2");
bbb.addEventListener("click", button2);
function button2 (event) {
    event.preventDefault()
    let email = document.getElementById("email").value;
    let text = document.getElementById("name").value;
        if (text === "") {
            alert("Vui Lòng Điền Đầy Đủ Thông Tin");
        } else if (email ===""){
            alert("Vui Lòng Điền Đầy Đủ Thông Tin");
        } else {
            alert("Đăng Nhập Thành Công");
            location.href = "./111.html"
        } 
}
