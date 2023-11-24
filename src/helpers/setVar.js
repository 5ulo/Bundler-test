// https://stackoverflow.com/questions/24736938/is-it-possible-to-assign-a-parameter-value-within-handlebars-templates-without-u
// {{setVar 'imageTag' 'drop-155'}}
// {{@root.imageTag}}

module.exports = function (varName, varValue, options) {
    if (!options.data.root) {
        options.data.root = {};
    }
    options.data.root[varName] = varValue;
};

// {{setVariable "thisVar" "Contents Here"}}
// <div>
//   {{thisVar}}
// </div>

// module.exports = function(varName, varValue, options) {
//     options.data.root[varName] = varValue;
// };
