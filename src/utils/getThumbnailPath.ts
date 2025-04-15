import { IMedia } from "@/core/_media";

const getThumbnailPath = (image?: IMedia): string => {
  return image ? "http://localhost:1337" + image.formats.medium.url : "";
};

export { getThumbnailPath };
