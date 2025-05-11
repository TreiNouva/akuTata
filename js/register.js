document.getElementById("register-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const gender = document.querySelector("input[name='gender']:checked");

  // Validasi 1: Nama tidak kosong
  if (name.trim() === "") {
    alert("Nama lengkap harus diisi!");
    return;
  }

  // Validasi 2: Email harus mengandung @ dan .
  if (!email.includes("@") || !email.includes(".")) {
    alert("Email tidak valid!");
    return;
  }

  // Validasi 3: Password minimal 8 karakter
  if (password.length < 8) {
    alert("Password harus minimal 8 karakter!");
    return;
  }

  // Validasi 4: Konfirmasi password harus sama
  if (password !== confirmPassword) {
    alert("Konfirmasi password tidak cocok!");
    return;
  }

  // Validasi 5: Gender harus dipilih
  if (!gender) {
    alert("Pilih gender!");
    return;
  }

  alert("Pendaftaran berhasil!");
  this.reset();
});