var fs          = require("fs"),
    wrench      = require("wrench"),
    specsPath   = "test/e2e-specs";

module.exports = {
  specs : function(){
    return wrench.readdirSyncRecursive(specsPath).filter(function(file){
      return file.endsWith("_spec.json");
    }).map(function(specFile){
      var filename  = specsPath + "/" + specFile,
          spec      = JSON.parse(fs.readFileSync(filename));
      spec.filePath = filename;
      spec.filename = specFile;
      return spec;
    });
  },
  getTemplate: function(specFile){
    return fs.readFileSync(specsPath +"/" + specFile);
  }
}