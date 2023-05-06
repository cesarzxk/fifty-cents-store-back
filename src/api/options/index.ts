function options(locale: string, id?: string) {
  if (id) {
    return {
<<<<<<< HEAD
      host: "json-mock-api.herokuapp.com",
      path: `/${locale}_provider/${id}`,
    };
  } else {
    return {
      host: "json-mock-api.herokuapp.com",
      path: `/${locale}_provider`,
=======
      host: "616d6bdb6dacbb001794ca17.mockapi.io",
      path: `/devnology/${locale}_provider/${id}`,
    };
  } else {
    return {
      host: "616d6bdb6dacbb001794ca17.mockapi.io",
      path: `/devnology/${locale}_provider`,
>>>>>>> parent of 763bd24 (feat: change api option url)
    };
  }
}

export default options;
