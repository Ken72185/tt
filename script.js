async function downloadVideo() {
  const url = document.getElementById("urlInput").value;
  const result = document.getElementById("result");
  result.innerHTML = "Memproses...";

  try {
    const res = await fetch("http://localhost:5000/api/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });

    const data = await res.json();

    if (data && data.data && data.data.play) {
      result.innerHTML = `
        <h2>Berhasil!</h2>
        <video controls src="${data.data.play}"></video>
        <a href="${data.data.play}" download>Download Video</a>
      `;
    } else {
      result.innerHTML = "Gagal mengambil video";
    }
  } catch (err) {
    result.innerHTML = "Terjadi kesalahan saat mengunduh.";
  }
}
