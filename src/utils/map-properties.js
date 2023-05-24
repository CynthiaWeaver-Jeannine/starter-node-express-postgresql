const lodash = require("lodash");


//the code below accepts a configuration parameter, which is an object where the key specifies the original property name and the value specifies the new property name
//mapProperties() takes and object 'data' and maps its properties based on the provided 'configuration' object. It returns a new object with properties mapped according to the configuration. This function allows for flexible property mapping based on the specified configuration, which can be useful in scenarios where you need to transform and restructure data objects.
//here the reduce() method is called on the array of key-value pairs. It iterates over each entry and accumulates the result into a single object.
//the mapProperties() funcion returns a new function that can be used over and over to modify multiple data objects
function mapProperties(configuration) {
  return (data) => {
    if (data) {
      return Object.entries(data).reduce((accumulator, [key, value]) => {
        return lodash.set(accumulator, configuration[key] || key, value);
      }, {});
    }
    return data;
  };
}

module.exports = mapProperties;