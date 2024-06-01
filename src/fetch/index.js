export async function getData(path) {
  const res = await fetch(`https://fakestoreapi.com/${path}`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Request failed!");
  }
  return res.json();
}
