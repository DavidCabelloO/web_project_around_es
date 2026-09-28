export type RendererFunction<T> = (item: T) => void;

export class Section<T> {
  private renderedItems: T[];
  private renderer: RendererFunction<T>;
  private container: HTMLElement;

  constructor(
    { data, renderer }: { data: T[]; renderer: RendererFunction<T> },
    containerSelector: string,
  ) {
    this.renderedItems = data;
    this.renderer = renderer;
    this.container = document.querySelector(containerSelector) as HTMLElement;
  }

  clear(): void {
    this.container.innerHTML = "";
  }

  renderItems(): void {
    this.clear();

    this.renderedItems.forEach((item) => {
      this.renderer(item);
    });
  }

  addItem(element: HTMLElement): void {
    this.container.append(element);
  }
}
