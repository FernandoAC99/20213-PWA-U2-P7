let contextSW = '/20213-PWA-U2-P7/sw.js';
let url = window.location.href;

let tipo = "";

let player = $('#player')
let photoUser = $('#photoUser')

let btnCamera = $('#btnCamera')
let btnCameraBack = $('#btnCameraBack')
let btnTakePhoto = $('#btnTakePhoto')

const camera = new Camera(player[0]);

btnCamera.on('click', () => {

    camera.on()
        .then(result => {
            if (!result) {
                alert('Error al iniciar la cámara');
            }
        });
    tipo = "-- Tomada con Camara Frontal --"

})

btnCameraBack.on('click', () => {
    console.log('camara back')
    camera.onBack().then(result => {
        if (!result) {
            alert('Error al iniciar la cámara');
        }
    });

    tipo = "-- Tomada con Camara Trasera --"
})

btnTakePhoto.on('click', () => {

    console.log("Tomar foto");
    camera.off();


    let photoHtml = $(`<div class="col-md-12" style="margin-top:2%;">
                            <div class="card" style="width: 300px;">
                                <img src="${camera.takePhoto()}" width="300" height="300" id="photoUser">
                                <div class="card-body">
                                    <p class="card-text">${tipo}</p>
                                </div>
                            </div>
                        </div>`);
    $("#divPhoto").append(photoHtml)

    // photoUser.attr('src',camera.takePhoto());

})


if (navigator.serviceWorker) {

    if (url.includes('localhost')) {
        contextSW = '/sw.js';
    }
    navigator.serviceWorker.register(contextSW);
}