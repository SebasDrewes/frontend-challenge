export default function activitiesData() {
  fetch("https://json-biglifeapp.herokuapp.com/activity?_page=1&_limit=6").then(
    (data) => {
      data.json().then((products) => {
        console.log(products);
        return products;
      });
    }
  );
}
