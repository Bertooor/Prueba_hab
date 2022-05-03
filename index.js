//Libreria JS_form
class JS_form{
    constructor(id_where, id_form, method = "", action = ""){
        this.id_form = id_form;
        document.getElementById(id_where).innerHTML += '<form action = "'+action+'" method = "'+method+'" id = "'+id_form+'"></form>';
    }
    add_label(text){
        document.getElementById(this.id_form).innerHTML += '<p>'+text+'</p>';
    }
    add_input(name, type, placeholder = false, required = false){
        var _placeholder = "";
        var _required = "";
        if(placeholder != false){
            _placeholder = 'placeholder = "'+placeholder+'"';
        }
        if(required != false){
            _required = "required";
    }
        document.getElementById(this.id_form).innerHTML += '<input name = "'+name+'" type = "'+type+'" '+_placeholder+' '+_required+'>';
    }
    //Si queremos quitar o añadir el placeholder, o el required...mediante el name...
    set_placeholder(name, text){
        document.getElementsByName(name)[0].placeholder = text;
    }
    set_required(name, status = true){
        document.getElementsByName(name)[0].required = status;
    }
    add_submit(value){
        document.getElementById(this.id_form).innerHTML += '<br><br><input type = "submit" value = "'+value+'">';
    }
    
}
window.onload = function(){
    var form1 = new JS_form("contenido", "myform");
    form1.add_label('Nombre:');
    form1.add_input('nombre', 'text', 'Introduzca su nombre', true);
    form1.add_label('Apellido:');
    form1.add_input('apellido', 'text', 'Introduzca su apellido');
    form1.add_label('Email:');
    form1.add_input('email', 'email', 'Introduzca su correo', true);
    form1.add_label('Edad:');
    form1.add_input('edad', 'number');
    form1.add_label('Elige un color:');
    form1.add_input('color', 'color');
    form1.add_label('Fecha:');
    form1.add_input('fecha', 'date');
    //poner placeholder con el name
    form1.set_placeholder('nombre', 'introduce nombre');
    //quitar placeholder con el name
    form1.set_placeholder('email','');
    //required
    form1.set_required('apellido');
    //submit
    form1.add_submit('Enviar formulario');
}