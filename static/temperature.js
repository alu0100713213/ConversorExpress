(function(exports) {
  "use strict";

  function Medida(data_)
  {
    this.data = data_;
  };

  function Temperatura(tempValue)
  {
    Medida.call(this, tempValue);
  };

  function Celsius(valor)
  {
    Temperatura.call(this, valor);
    this.toFahrenheit = function()
    {
      var ext = (valor * 9/5) + 32;
      return ext + " " + "Fahrenheit";
    }
    this.toKelvin = function()
    {
      var parse = parseInt(valor);
      var ext = parse + 273.15;
      return ext + " Kelvin";
    }
  }
  
  function Fahrenheit(valor)
  {
    Temperatura.call(this, valor);
    this.toCelsius = function()
    {
      var ext = (valor - 32)/1.8;
      return ext + " Celsius";
    }
    this.toKelvin = function()
    {
      var ext1 = (valor - 32)/1.8;
      var ext = ext1 + 273.15;
      return ext + " Kelvin";
    }
  }
  
  function Kelvin(valor)
  {
    Temperatura.call(this, valor);
    this.toCelsius = function()
    {
      var ext = valor - 273.15;
      return ext + " Celsius";
    }
    this.toFahrenheit = function()
    {
      var ext = valor - 273.15;
      var ext1 = (ext*1.8)+32;
      return ext1 + " Fahrenheit";
    }
  }
  
  exports.Temperatura = Temperatura;
  exports.Celsius = Celsius;
  exports.Kelvin = Kelvin;
  exports.Fahrenheit = Fahrenheit;
  
  exports.convertir = function(tipo)
  {
    var valor     = document.getElementById('temp').value;
    var resultado  = document.getElementById('divsalida');
    if(valor)
    {
      switch (tipo)
      {
        case 'CF':
          var aux = new Celsius(valor);
          resultado.innerHTML = aux.toFahrenheit();
          break;
        case 'FC':
          var aux = new Fahrenheit(valor);
          resultado.innerHTML = aux.toCelsius();
          break;
        case 'FK':
          var aux = new Fahrenheit(valor);
          resultado.innerHTML = aux.toKelvin();
          break;
        case 'CK':
          var aux = new Celsius(valor);
          resultado.innerHTML = aux.toKelvin();
          break;
        case 'KC':
          var aux = new Kelvin(valor);
          resultado.innerHTML = aux.toCelsius();
          break;
        case 'KF':
          var aux = new Kelvin(valor);
          resultado.innerHTML = aux.toFahrenheit();
          break;
      }
    }
  }

})(this);
