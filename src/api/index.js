export default function getActivitiesData() {
  return fetch(
    "https://json-biglifeapp.herokuapp.com/activity?_page=1&_limit=6"
  )
    .then((res) => res.json())
    .then((res) => res.map((data) => JSON.parse(data.activity)));
}
