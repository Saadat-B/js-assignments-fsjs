const submit = document.querySelector("#submit");
const img = document.querySelector("#img");

async function createQR() {
  const text = document.querySelector("#input");
  const url = `http://api.qrserver.com/v1/create-qr-code/?data=${text.value}&size=100x100`;
  const fetchQrCode = await fetch(url);
  const qrCode = await fetchQrCode;
  img.src = qrCode.url;
}

submit.addEventListener("click", createQR);
