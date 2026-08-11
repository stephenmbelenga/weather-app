export function getLatLong() {
  return new Promise((resolve, reject) => {
    const confirmed = window.confirm("Allow location access.");
    if (!confirmed && !navigator.geolocation) {
      reject(new Error("Geolocation is not supported by your browser."));

      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => {
        reject(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 30000,
      },
    );
  });
}
