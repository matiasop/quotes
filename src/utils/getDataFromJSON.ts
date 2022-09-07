function getDataFromJSON<Type>(json: { [title: string]: any }): {title: string, data: Type}[] {
  const titles = Object.keys(json);
  return titles.map(title => ({title, data: json[title]}));
}

export default getDataFromJSON;