


export const getGifs = async (categories) => {
    const url =
  `https://api.giphy.com/v1/gifs/search?api_key=OvGLau6ftnBnFPq6PQaupEt9eXvvv8bX&limit=10&q=${encodeURI(categories)}`;
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      };
    });    
    return gifs;
  };