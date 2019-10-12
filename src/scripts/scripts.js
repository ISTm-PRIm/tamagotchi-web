export const getParameterFromUrl = param => {
  let urlString = window.location.href;
  let url = new URL(urlString);
  let vars = url.searchParams.get(param);
  return vars;
};

export function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
