

export default class  ToogleManager {
  constructor(variables, justOneOn = false) {
    this.justOneOn = justOneOn;
    this.variables = {};
    for (const variable of variables) {
      this.variables[variable] = false;
    }
  }

  toggle(variable) {
    if (this.justOneOn) {
      for (const key in this.variables) {
        this.variables[key] = false;
      }
    }
    this.variables[variable] = !this.variables[variable];
  }

  allOn() {
    for (const key in this.variables) {
      this.variables[key] = true;
    }
  }

  allOff() {
    for (const key in this.variables) {
      this.variables[key] = false;
    }
  }
}


