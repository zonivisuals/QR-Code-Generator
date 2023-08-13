const qrInput = document.getElementById("qr-input")
const qrImage = document.getElementById("qr-image")
const qrBtn = document.getElementById("qr-btn")
const imgBox = document.getElementById("img-box")
const title = document.getElementById("title")

qrBtn.addEventListener("click", () => {
    generateQrCode()
})

function generateQrCode() {
    let keyword = qrInput.value;

    if (keyword.length > 0) {
        let url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${keyword}`;
        qrImage.src = url
        imgBox.classList.add("show-img")
    }
    else{
        qrInput.classList.add('error')
        qrInput.style.borderColor = "red"
        setTimeout(() => {
            qrInput.classList.remove('error')
            qrInput.style.borderColor = "#0070BB"
        }, 600);
    }
}


//download the qr code once imgBox is clicked//
imgBox.addEventListener("click", () => {
    if (qrImage.src.length > 0) {
        downloadQRImage()
    }
})

function downloadQRImage() {
    const a = document.createElement("a")
    a.target = '_blank'
    a.href = qrImage.src
    a.download = "qr_code.png"
    a.style.display = "none"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}
