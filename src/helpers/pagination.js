import parseLink from "parse-link-header";

export default function pagination() {
  const linkHeader =
    '<http://json-biglifeapp.herokuapp.com/activity?_page=1&_limit=9>; rel="first", ' +
    '<http://json-biglifeapp.herokuapp.com/activity?_page=236&_limit=9>; rel="last"';

  const parsedLinkHeader = parseLink(linkHeader);
  return parsedLinkHeader;
}
