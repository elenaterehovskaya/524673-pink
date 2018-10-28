ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map-yandex", {
    center: [59.938931, 30.323055],
    controls: ["zoomControl"],
    zoom: 16
  });

  var myPin = new ymaps.GeoObjectCollection({}, {
    iconLayout: "default#image",
    iconImageHref: "img/icon-map-marker.svg",
    iconImageSize: [35.983, 35.983],
    iconImageOffset: [-15, -12]
  });

  var myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
    balloonContentHeader: "Мобильное приложение Пинк",
    balloonContentBody: "+7 (812) 555-66-66; mail@htmlacademy.ru",
    hintContent: "ул. Большая Конюшенная, 19/8"
  });

  myPin.add(myPlacemark);
  myMap.geoObjects.add(myPin);
}
