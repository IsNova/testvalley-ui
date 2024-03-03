async function getData(url: string) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  const response = fetch(url, options)
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return response;
}

export async function getCarousalData(url: string) {
  const data = await getData(url);
  return data;
}

export async function getCategoryData(url: string) {
  const data = await getData(url);
  return data;
}

export async function getCollectionData(url: string) {
  const data = await getData(url);
  return data;
}
