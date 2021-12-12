export function getActivitiesData() {
  return fetch(
    "https://json-biglifeapp.herokuapp.com/activity?_page=1&_limit=6"
  )
    .then((activities) => activities.json())
    .then((activities) =>
      activities.map((activity) => JSON.parse(activity.activity))
    );
}
export function getActivity(id) {
  return fetch(`https://json-biglifeapp.herokuapp.com/activity/${id}`)
    .then((activity) => activity.json())
    .then((activity) => JSON.parse(activity.activity));
}
export function similarActivities(category, amount) {
  return fetch("https://json-biglifeapp.herokuapp.com/activity")
    .then((activities) => activities.json())
    .then((activities) =>
      activities.map((activity) => JSON.parse(activity.activity))
    )
    .then((activities) =>
      activities.filter((activity) => activity.category === category)
    )
    .then((activities) => activities.sort((a, b) => 0.5 - Math.random()))
    .then((activities) => activities.slice(0, amount));
}
export function randomActivities(amount) {
  const randomPage = Math.random() * (200 - 1) + 1;

  return fetch(
    `https://json-biglifeapp.herokuapp.com/activity?_page=${randomPage}&_limit=${amount}`
  )
    .then((activities) => activities.json())
    .then((activities) =>
      activities.map((activity) => JSON.parse(activity.activity))
    );
}
