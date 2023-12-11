import { z } from "zod";

export const createShortLinkSchema = z.object({
  nickname: z.string({ required_error: "Preenchimento necessário" }),
  url: z.string({ required_error: "Preenchimento necessário" }).url("Campo deve ser uma URL"),
});

export type CreateShortLinkValues = z.infer<typeof createShortLinkSchema>;

export const validateCreateShortLink = (data: any) => {
  const parsed = createShortLinkSchema.safeParse(data);

  if (!parsed.success) throw new Error("CREATE_SHORT_LINK");

  return parsed.data;
};
