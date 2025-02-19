function initMap() {
    var mapCenter = { lat: 9.935, lng: -84.091 };

    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: mapCenter,
        mapTypeId: 'roadmap'
    });

    var locations = [
        { lat: 9.9281, lng: -84.0907, title: "Location 1", img: "images/Xcaret-logo.png" },
        { lat: 9.935, lng: -84.100, title: "Location 2", img: "images/Xcaret-logo.png" }
    ];

    locations.forEach(function (location) {
        var marker = new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.title,
            icon: {
                url: location.img, 
                scaledSize: new google.maps.Size(40, 40)
            }
        });

        var infoWindow = new google.maps.InfoWindow({
            content: `<h3>${location.title}</h3><img src="${location.img}" width="100">`
        });

        marker.addListener("click", function () {
            infoWindow.open(map, marker);
        });
    });
}
