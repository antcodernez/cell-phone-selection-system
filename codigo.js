class celphone
    {
        constructor(color, peso, resolucionPantalla, camara, ram)
            {
                this.color = color;
                this.peso = peso;
                this.resolucionPantalla = resolucionPantalla;
                this.camara = camara;
                this.ram = ram;
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
            takePictures()
                {

                };
            recordVideo()
                {

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
function celphonePower()
    {
        celphone.power();
    }
