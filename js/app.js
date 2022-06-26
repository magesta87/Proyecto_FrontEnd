//Peticion JSON
$.ajax({
	type: "GET",
	url: "http://127.0.0.1:5500/datos.json",
	data: "data",
	dataType: "json",
	success: function (response) {
		mostrarTarjetas(response);
	},
});

//mostrar cards con canciones
const mostrarTarjetas = (response) => {
	for (let i = 0; i < response.canciones.length; i++) {
		$("#Tarjetas").append(
			`
            
            <div class="col-md py-4">
                <div class="card shadow-lg">
                    <img class="card-img-top mp3-cover  mp3-hover" src="../imagenes/icon_${response.canciones[i].icono}.svg" alt="">
                    <div class="card-body text-center">
                        <h5 class="h5 card-title text-white font-weight-bold">${response.canciones[i].nombre}</h5>
                        <audio  class="mp3-audio" controls="controls"  preload="true" src="../canciones/${response.canciones[i].ruta}"></audio>     
                    </div>
                </div>
            
            </div>
            `
		);
	}
};

/**VALIDACION DE CAMPOS REGISTRO */

const eregex =
	/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const nameregex = /^[a-zA-Z ]+$/;

toastr.options = {
	closeButton: false,
	debug: false,
	newestOnTop: false,
	progressBar: false,
	positionClass: "toast-top-center",
	preventDuplicates: false,
	onclick: null,
	showDuration: "300",
	hideDuration: "1000",
	timeOut: "5000",
	extendedTimeOut: "1000",
	showEasing: "swing",
	hideEasing: "linear",
	showMethod: "fadeIn",
	hideMethod: "fadeOut",
};

const validaCampos = () => {
	const user = $("#user").val();
	const email = $("#email").val();
	const password = $("#password").val();
	const rePassword = $("#re-password").val();
	//validamos campos
	if ($.trim(user) == "") {
		toastr.error("No ha ingresado Nombre", "aviso");
		return false;
	}

	if ($.trim(user).length < 8) {
		toastr.error("se requieren como mínimo 8 carácteres", "aviso");
		return false;
	}

	if (nameregex.test($.trim(user))) {
		toastr.error("Nombre inválido", "aviso");
		return false;
	}

	if ($.trim(email) == "") {
		toastr.error("Debe completar el campo email", "aviso");
		return false;
	}

	if (!eregex.test(email)) {
		toastr.error("Email inválido", "aviso");
		return false;
	}

	if ($.trim(password) == "") {
		toastr.error("Debe ingresar una contraseña", "aviso");
		return false;
	}

	if ($.trim(password).length < 8) {
		toastr.error(
			"La contraseña debe poseer como mínimo 8 caraácteres",
			"aviso"
		);
		return false;
	}

	if ($.trim(rePassword) == "") {
		toastr.error("Debe ingresa la contraseña nuevamente", "aviso");
	}

	if ($.trim(rePassword) !== password) {
		toastr.error("Las contraseñas no coinciden", "aviso");
		return false;
	} 
	
	
	else {
		toastr.success("Registro exitoso!", "aviso");
		return true;
	}
};


