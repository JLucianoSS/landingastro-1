// Declaraciones globales para TypeScript
declare global {
  interface Window {
    gsap: any;
    gsapReady: boolean;
    openModal: (modalId: string) => void;
    closeModal: (modalId: string) => void;
  }
}

export {};
