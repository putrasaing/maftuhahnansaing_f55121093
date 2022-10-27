function validasi () {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username == "" && password == ""){
        swal("Maaf", "Username dan Password Masih Kosong!", "error");
    }
    else if (username == ""){
        swal("Maaf", "Username Masih Kosong!", "error");   
    }
    else if (password == ""){
        swal("Maaf", "Password Masih Kosong!", "error");
    }
    else {
        swal ({
            title: "Yey",
            title: "Berhasil Login",
            icon: "success",
        }).then((terus) =>{
        if (terus) {
            window.location.href = "registrasi.html";
        }}
        );
    }
}