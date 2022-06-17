import Stopwatch from "./Stopwatch.js";
class StopwatchWithResults extends Stopwatch {
    constructor(element) {
        super(element);
        this.results = [];
        this.prepareElements(element);
        this.prepareActions();
    }
    prepareElements(element) {
        this.dom.resultsList = element.querySelector(".stopwatch__results");
        this.dom.addToListBtn = element.querySelector(".stopwatch__add-to-list-btn");
        this.dom.resetListBtn = element.querySelector(".stopwatch__reset-list-btn");
        this.dom.resultHead = element.querySelector(".stopwatch__results__heading");
    }
    prepareActions() {
        this.dom.addToListBtn.addEventListener("click", () => this.addToList());
        this.dom.resetListBtn.addEventListener("click", () => this.resetList());
    }
    renderList() {
        this.dom.resultsList.replaceChildren(this.dom.resultHead);
        const resultHTMLElem = `<ul>${this.results
            .map((currentTime) => `<li><p>${currentTime}</p></li>`)
            .join(" ")}</ul>`;
        this.dom.resultsList.insertAdjacentHTML("beforeend", resultHTMLElem);
    }
    addToList() {
        const resultToArr = this.formatTime(this.currentTime);
        this.results.push(resultToArr);
        this.renderList();
    }
    resetList() {
        this.dom.resultsList.replaceChildren(this.dom.resultHead);
        const noResultText = "no results :(";
        const resultHTMLElem = `<ul><li><p>${noResultText}</p></li></ul>`;
        this.dom.resultsList.insertAdjacentHTML("beforeend", resultHTMLElem);
    }
}
export default StopwatchWithResults;
//# sourceMappingURL=StopwatchWithResults.js.map