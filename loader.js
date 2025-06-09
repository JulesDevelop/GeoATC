fetch('https://cdn.jsdelivr.net/gh/JulesDevelop/GeoATC/index.html')
      .then(response => {
        if (!response.ok) {
          throw new Error("Erreur HTTP " + response.status);
        }
        return response.text();
      })
      .then(html => {
        document.write(html)
      })
      .catch(error => {
        console.error("Erreur lors du chargement du fichier :", error);
      });