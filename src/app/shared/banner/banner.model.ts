export class Banner {
  constructor(
      public adClient: string,
      public adSlot: string,
      public adFormat: string,
      public fullWidthResponsive: string) {
          this.adClient = adClient;
          this.adSlot = adSlot;
          this.adFormat = adFormat || 'auto';
          this.fullWidthResponsive = fullWidthResponsive || "true";
  }
}
