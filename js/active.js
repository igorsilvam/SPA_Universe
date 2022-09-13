import { home, universe, explorer } from "/elements.js";

export default class Active {
  menu(ValuePath) {
    if (ValuePath == "/") {
      home.classList.add("active");
    } else {
      home.classList.remove("active");
    }

    if (ValuePath == "/universe") {
      universe.classList.add("active");
    } else {
      universe.classList.remove("active");
    }

    if (ValuePath == "/explorer") {
      explorer.classList.add("active");
    } else {
      explorer.classList.remove("active");
    }
  }
}
