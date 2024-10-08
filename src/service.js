class Service {
  constructor() {
    this.primaryRepository = null;
    this.secondaryRepository = null;
  }

  getItemById(id) {
    let item = this.primaryRepository.getItemById(id);
    if (item) {
      return item;
    }
    item = this.secondaryRepository.getItemById(id);
    if (item) {
      return item;
    }
    throw new Error("Item not found in both repositories");
  }
}

export default Service;
