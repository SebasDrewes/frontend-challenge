export default async function getActivitiesData() {
  const activityData = await fetch(
    "https://json-biglifeapp.herokuapp.com/activity?_page=1&_limit=6"
  );
  const jsonActivityData = await activityData.json();
  const parsedActivityData = jsonActivityData.map((activity) =>
    JSON.parse(activity.activity)
  );
  return parsedActivityData;
}
