export function getActivitiesData(page, limit) {
  return fetch(
    `https://json-biglifeapp.herokuapp.com/activity?_page=${page}&_limit=${limit}`
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
