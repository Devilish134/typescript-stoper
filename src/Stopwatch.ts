interface StopwatchDom {
  currentTime: HTMLDivElement;
  startBtn: HTMLButtonElement;
  stopBtn: HTMLButtonElement;
  resetBtn: HTMLButtonElement;
  [x: string]: HTMLElement;
}

abstract class Stopwatch {
  protected currentTime: number = 0;
  private timer: number | null = null;
  protected dom = <StopwatchDom>{};

  constructor(element: HTMLDivElement) {
    this.getElements(element);
    this.initActions();
    this.renderTime();
  }

  private getElements(element: HTMLDivElement): void {
    this.dom.currentTime = <HTMLDivElement>(
      element.querySelector(".stopwatch__current-time")
    );
    this.dom.startBtn = <HTMLButtonElement>(
      element.querySelector(".stopwatch__start-btn")
    );
    this.dom.stopBtn = <HTMLButtonElement>(
      element.querySelector(".stopwatch__stop-btn")
    );
    this.dom.resetBtn = <HTMLButtonElement>(
      element.querySelector(".stopwatch__reset-btn")
    );
  }

  private initActions(): void {
    this.dom.startBtn.addEventListener("click", () => this.start());
    this.dom.stopBtn.addEventListener("click", () => this.stop());
    this.dom.resetBtn.addEventListener("click", () => this.reset());
  }

  protected formatTime(time: number): string {
    const pad0 = (num: number): string =>
      num < 10 ? `0${num}` : num.toString();

    const mm = Math.floor(time / 60000);
    const ss = Math.floor((time - mm * 60000) / 1000);
    const ms = time - mm * 60000 - ss * 1000;
    return `${pad0(mm)}:${pad0(ss)}:${pad0(ms).substr(0, 2)}`;
  }

  protected renderTime(): void {
    this.dom.currentTime.innerHTML = this.formatTime(this.currentTime);
  }

  protected start(time: number): void {}

  /*
    Funkcja ta powinna wystartować interwał, który będzie wykonywał się co milisekundę.
    Powinien on każdorazowo włączać funkcję this.step

    Dla wygody przypisz ten interwał do this.timer  */

  step() {
    /*
    Funkcja ta powinna zwiększać liczbę sekund w this.currentTime o jeden, a następnie uruchamiać metodę
    renderującą aktualny czas w HTML-u (this.renderTime).
    */
  }

  stop() {
    /* 
    Funkcja ta powinna zatrzymywać interval przypisany do this.timer.
    */
  }

  reset() {
    /*
    Ta funkcja powinna resetować czas zapisany w this.currentTime, a więć zmieniać jego wartość na zero.
    Naturalnie powinno to wiązać się również z przerenderowaniem HTML-a (this.renderTime).
    */
  }
}

export default Stopwatch;
