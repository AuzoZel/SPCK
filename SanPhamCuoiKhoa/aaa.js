let aaa = document.getElementById("button1");
aaa.addEventListener("click", button1);
function button1 (event) {
    event.preventDefault()
    let text = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;
    let number = document.getElementById("number").value;
if (text === "") {
    alert("Vui Lòng Điền Đầy Đủ Thông Tin");
}else if(email === "") {
    alert("Vui Lòng Điền Đầy Đủ Thông Tin");
}else if(password ==="") {
    alert("Vui Lòng Điền Đầy Đủ Thông Tin");
}else if(number ==="") {
    alert("Vui Lòng Điền Đầy Đủ Thông Tin");
}else if(isNaN(number)){ 
    alert("SĐT ko Phải Là Số");
} else {
    alert("Đăng Ký Thành Công");
    location.href = "./bbb.html"
} 
}