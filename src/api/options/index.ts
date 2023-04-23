function options(locale: string, id?: string) {
  if (id) {
    return {
      host: "json-mock-api.herokuapp.com",
      path: `/${locale}_provider/${id}`,
    };
  } else {
    return {
      host: "json-mock-api.herokuapp.com",
      path: `/${locale}_provider`,
    };
  }
}

export default options;
