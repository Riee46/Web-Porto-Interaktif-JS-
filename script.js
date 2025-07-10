// 🌙 Ganti Tema (Dark Mode)
const toggleBtn = document.getElementById("toggle-mode");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// ⏰ Jam Real-Time
function updateJam() {
  const elemenJam = document.getElementById("jam");
  const sekarang = new Date();
  const waktu = sekarang.toLocaleTimeString();
  elemenJam.textContent = "Jam: " + waktu;
}
setInterval(updateJam, 1000);
updateJam();

// ✅ Validasi Form Manual
const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const pesan = document.getElementById("pesan").value.trim();

  if (!nama || !email || !pesan) {
    alert("Harap isi semua kolom!");
    e.preventDefault();
  } else {
    alert("Terima kasih, " + nama + "!");
    localStorage.setItem("pengunjung", nama);
  }
});

// 🧠 Ambil Nama dari Local Storage
const pengunjung = localStorage.getItem("pengunjung");
if (pengunjung) {
  document.getElementById("halo").textContent = "Halo, " + pengunjung + "!";
}
