export const titleCount = (database) => {
  let titleCount = 0;
  database.map((post) => {
    const {text} = post.properties.Name.title[0];
    debugger;
    if (!text) {
      return null;
    } else {
      titleCount++;
    }
  });
  return titleCount;
};

// Util to generate map of tags for given notion database, column name
// from "multi_select" data type
export const tagsFromMultiSelect = (database, colTitle) => {
  let tags = {};
  database.map((item) => {
    if (!!item.properties[colTitle].multi_select.length) {
      item.properties[colTitle].multi_select.map((tag) => {
        const {name, color, id} = tag;
        tags[name] = {
          count: tags[name] ? tags[name].count + 1 : 1,
          color,
          id,
        };
      });
    }
  });
  return tags;
};

// Util to generate map of tags for given notion database, column name
// from "select" data type
export const tagsFromSelect = (database, colTitle) => {
  let tags = {};
  database
    .filter((filterItem) => filterItem.properties[colTitle])
    .map((item) => {
      const {name, color, id} = item.properties[colTitle].select;
      tags[name] = {
        count: tags[name] ? tags[name].count + 1 : 1,
        color,
        id,
      };
    });
  return tags;
};
