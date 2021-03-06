import Stopwatch from "./Stopwatch.js";

class StopwatchWithResults extends Stopwatch {
  results: string[] = [];

  constructor(element: HTMLDivElement) {
    super(element);
    this.prepareElements(element);
    this.prepareActions();
  }

  private prepareElements(element: HTMLDivElement): void {
    this.dom.resultsList = element.querySelector(
      ".stopwatch__results"
    ) as HTMLDivElement;
    this.dom.addToListBtn = element.querySelector(
      ".stopwatch__add-to-list-btn"
    ) as HTMLButtonElement;
    this.dom.resetListBtn = element.querySelector(
      ".stopwatch__reset-list-btn"
    ) as HTMLButtonElement;
    this.dom.resultHead = element.querySelector(
      ".stopwatch__results__heading"
    ) as HTMLElement;
  }

  private prepareActions(): void {
    this.dom.addToListBtn.addEventListener("click", () => this.addToList());
    this.dom.resetListBtn.addEventListener("click", () => this.resetList());
  }

  private renderList(): void {
    this.dom.resultsList.replaceChildren(this.dom.resultHead);

    const resultHTMLElem = `<ul>${this.results
      .map((currentTime) => `<li><p>${currentTime}</p></li>`)
      .join(" ")}</ul>`;

    this.dom.resultsList.insertAdjacentHTML("beforeend", resultHTMLElem as any);
  }

  protected addToList(): void {
    const resultToArr = this.formatTime(this.currentTime);
    this.results.push(resultToArr);

    this.renderList();
  }

  protected resetList() {
    this.dom.resultsList.replaceChildren(this.dom.resultHead);

    const noResultText: string = "no results :(";
    const resultHTMLElem = `<ul><li><p>${noResultText}</p></li></ul>`;

    this.dom.resultsList.insertAdjacentHTML(
      "beforeend",
      resultHTMLElem as string
    );
  }
}

export default StopwatchWithResults;
