import { CreateUploadflyClient } from "@uploadfly/js";
const API_KEY = process.env.NEXT_PUBLIC_UPLOADFLY_API_KEY as string;
export const uploadFly = new CreateUploadflyClient(API_KEY);
