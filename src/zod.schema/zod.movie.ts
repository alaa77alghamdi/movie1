import { z, TypeOf } from "zod";

export const MovieType = z.object({
  body: z.object({
    name: z
      .string({
        required_error: "name is required",
        invalid_type_error: "wright type is name",
      })

      .min(2, "name is too long"),

      gener: z.enum(["Drama", "Action", "Comedy"], {
        required_error: "Genre is required",
      }),


      rating: z
      .number({
        required_error: "Rating is required",
      })
      .min(1)
      .max(5),
      


      duration: z
      .number({
        required_error: "Duration is required",
      })
      .min(60),

  }),
});

export type MoviesType = TypeOf<typeof MovieType> ["body"];
