function options(locale: string, id?: string) {
  if (id) {
    return {
      host: "https://json-mock-api.herokuapp.com",
      path: `/${locale}_provider/${id}`,
    };
  } else {
    return {
      host: "https://json-mock-api.herokuapp.com",
      path: `/${locale}_provider`,
    };
  }
}

export default options;
