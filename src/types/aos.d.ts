declare module "aos" {
  interface AosOptions {
    duration?: number;
    easing?: string;
    once?: boolean;
    offset?: number;
    delay?: number;
    disable?: string | boolean;
    startEvent?: string;
    throttleDelay?: number;
    debounceDelay?: number;
    disableMutationObserver?: boolean;
  }

  interface AOS {
    init(options?: AosOptions): void;
    refresh(hard?: boolean): void;
    refreshHard(): void;
  }

  const aos: AOS;
  export default aos;
}
