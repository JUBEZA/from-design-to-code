import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="search-movies"
export default class extends Controller {
  static targets = ["form", "imput", "list"];

  connect() {
    console.log(this.formTarget);
    console.log(this.listTarget);
    console.log(this.inputTarget);
  }

  update() {
    console.log("TODO: send request in AJAX")
  }

}
