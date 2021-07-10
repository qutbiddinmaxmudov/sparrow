const zIndexManager = () => {
  const items: NodeListOf<HTMLDivElement> =
    document.querySelectorAll(".rect__item");
  items.forEach((item, i) => {
    item.style.zIndex = `${10 - i}`;
    item.style.animationDelay = `${i * 0.5}s`;
  });
};


class worksTab {
  websitePreview: HTMLImageElement;
  websiteLink: HTMLAnchorElement;
  items: NodeListOf<HTMLDivElement>;
  nextButton: HTMLButtonElement;
  tabWrapper: HTMLDivElement
  active: number;
  transition: number;
  autoPlayTime: number;
  autoPlay: boolean;
  interval: number;

  constructor(autoPlay?: boolean, autoPlayTime?: number, transition?: number) {
    this.websitePreview = document.querySelector(".works__image");
    this.websiteLink = document.querySelector(".works__button");
    this.items = document.querySelectorAll(".rect__item");
    this.nextButton = document.querySelector(".rect__button");
    this.tabWrapper = document.querySelector('.works')

    this.transition = transition ?? 500;
    this.websitePreview.style.transition = `${this.transition}ms opacity`;
    this.active = 0;
    this.autoPlay = autoPlay ?? true;
    this.autoPlayTime =
      autoPlayTime > this.transition + 1000
        ? autoPlayTime
        : this.transition + 3000;

    if (this.autoPlay) {
      this.interval = setInterval(() => this.switchTab(), this.autoPlayTime);
      this.tabWrapper.onmouseover = () => clearInterval(this.interval);
      this.tabWrapper.onmouseout = () =>
        (this.interval = setInterval(
          () => this.switchTab(),
          this.autoPlayTime
        ));
    }

    this.items.forEach((item, i) => (item.onclick = () => this.switchTab(i)));
    this.nextButton.onclick = () => {
      this.switchTab();
    };
  }

  switchTab(active?: number) {
    this.items.forEach((item) => item.classList.remove("active"));
    this.websitePreview.style.opacity = "0";
    this.changeActive(active);
    this.items[this.active].classList.add("active");
    const link = this.items[this.active].getAttribute("data-link");
    const image = this.items[this.active].getAttribute("data-image");

    setTimeout(() => {
      this.websitePreview.style.opacity = "1";
      this.websiteLink.setAttribute("href", link);
      this.websitePreview.setAttribute("src", image);
    }, this.transition);
  }

  changeActive(active?: number) {
    if (active !== undefined) this.active = active;
    else {
      this.active++;
      if (this.active >= this.items.length) this.active = 0;
    }
  }
}



try {
  zIndexManager();
  new worksTab();
} catch (error) {
  console.dir(error);
}