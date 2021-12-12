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
