class cellPhone
    {
        constructor(color, peso, resolucionPantalla, camara, ram)
            {
                this.color = color;
                this.peso = peso;
                this.resolucionPantalla = resolucionPantalla;
                this.camara = camara;
                this.ram = ram;
                this.infoCell = `El telefono es de color ${this.color}, su peso es de ${this.peso} gr, la resolucón de la pantalla es de ${this.resolucionPantalla} px, la camara tiene ${this.camara} pixeles, y posee ${this.ram} gb de ram`;
            };
            static reiniciar()
                {
                    let reinicio = prompt(`¿Quieres reiniciar tu celular?
                    Escribe sí o no`);

                    if(reinicio == `Sí` | reinicio == `si` | reinicio == `SI` | reinicio == `Si`)
                        {
                            alert(`Celular reiniciado`);
                        }
                    else
                        {
                            alert(`No paso nada, sigue con tu vida :D`);
                        }
                };
            static takePictures()
                {
                    alert(`Foto tomada baby :3`);
                };
            static recordVideo()
                {
                    alert("Video tomado nenita Bv");
                };
            static power()
                {
                    let estado = prompt(`Si tu teléfono está apagado escribe off
                    si tu telefono está encendido escribe on`);

                    if (estado == `on`| estado == `ON`)
                        {
                            alert(`Teléfono encendido`);
                        }
                    else
                        {
                            alert(`Teléfono apagado`)
                        }
                }
    };
function cellPhonePower()
    {
        cellPhone.power();
    }
function reinicioPhone()
    {
        cellPhone.reiniciar();
    }
function photoTakeIt()
    {
        cellPhone.takePictures();
    }
function takeVideo()
    {
        cellPhone.recordVideo();
    }
    constructor(color, peso, resolucionPantalla, camara, ram)
const phone1 = new cellPhone ("rojo", 180, "720x1200", 64, 6);
const phone2 = new cellPhone ("Negro", 178, "189x720", 124, 8);
const phone3 = new cellPhone ("Azul", 190, "1080x720", 64, 6);

