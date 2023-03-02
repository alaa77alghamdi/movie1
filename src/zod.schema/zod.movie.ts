import { z, TypeOf } from "zod";

export const MovieType = z.object({
  body: z.object({
    name: z
      .string({
        required_error: "name is required",
        invalid_type_error: "wright type is invalid",
      })

      .min(2, "name is too long"),

    rating: z.string({
      required_error: "rating is required",
      invalid_type_error: "wright type is invalid",
    }),

    duration: z.number({
      required_error: "duration is required",
      invalid_type_error: "write  duration is invalid",
    }),


    
  }),
});

export type MoviesType = TypeOf<typeof MovieType>;
