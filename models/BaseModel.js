"use strict";

const Models = require("../db/schemas");

class BaseModel {
  constructor(modelname) {
    this.modelname = modelname;
    this.Models = Models;
  }
  getModel() {
    return this.Models[this.modelname];
  }
  saveOne(values) {
    return this.Models[this.modelname].create(values);
  }
  findAll(params) {
    return this.Models[this.modelname].find(params);
  }
  findOne(params) {
    return this.Models[this.modelname].findOne(params);
  }
  updateById(values, id) {
    return this.Models[this.modelname].findByIdAndUpdate(id, { $set: values });
  }
  delete(params) {
    return this.Models[this.modelname].find(params).remove();
  }
}

module.exports = BaseModel;
