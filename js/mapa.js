function initMap() {
            const map = new google.maps.Map(document.getElementById("map"), {
                center: { lat: 32.5028, lng: -117.0371 },
                zoom: 8,
                mapTypeControl: false
            });

            // Ejemplo: cambiar zoom a 10 tras 3 segundos
            setTimeout(() => {
                map.setOptions({ zoom: 10 });
            }, 3000);
}