console.log("js");

function getKoalas() {
  console.log("in getKoalas");
  // axios call to server to get koalas
  axios
    .get("http://localhost:5001/koalas") // Update the URL to match your server
    .then((response) => {
      // Handle the response data, update the HTML to display koalas
      console.log("Koalas:", response.data);
    })
    .catch((error) => {
      console.error("Error fetching koalas:", error);
    });
} // end getKoalas

function saveKoala() {
  console.log("in saveKoala");
  const newKoala = {
    name: "New Koala",
    age: 5,
    favorite_color: "Green",
    ready_to_transfer: true,
    notes: "A new koala added via client",
  };

  axios
    .post("http://localhost:5001/koalas", newKoala) // Update the URL to match your server
    .then((response) => {
      // Handle the response data, if needed
      console.log("Koala saved successfully");
      getKoalas(); // Refresh the koalas list after saving
    })
    .catch((error) => {
      console.error("Error saving koala:", error);
    });
}

getKoalas(); // Call getKoalas when the page loads
