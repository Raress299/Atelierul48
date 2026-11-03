import createImageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "./env";

const builder =
  projectId && projectId !== "placeholder"
    ? createImageUrlBuilder({ projectId, dataset })
    : null;

export function urlForImage(source: Parameters<NonNullable<typeof builder>["image"]>[0]) {
  return builder?.image(source);
}
