export interface iNotificationCarouselItem {
  title: string;
  list: () => JSX.Element;
}

export interface iNotificationCarouselRenderItem {
  item: iNotificationCarouselItem;
  index: number;
}
