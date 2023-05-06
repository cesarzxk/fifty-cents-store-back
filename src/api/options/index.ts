function options(locale: string, id?: string) {
  if (id) {
    return {
      host: "616d6bdb6dacbb001794ca17.mockapi.io",
      path: `/devnology/${locale}_provider/${id}`,
    };
  } else {
    return {
      host: "616d6bdb6dacbb001794ca17.mockapi.io",
      path: `/devnology/${locale}_provider`,
    };
  }
}

export default options;
