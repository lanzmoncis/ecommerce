import * as z from "zod";

export const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().min(11, {
    message: "Phone number must be at least 11 numbers",
  }),
  address: z.string(),
  zipCode: z.string(),
  city: z.string(),
  country: z.string(),
  type: z.enum(["eMoney", "cashOnDelivery"], {
    required_error: "You need to select a payment type.",
  }),
  eMoneyNumber: z.string().min(9, {
    message: "Wrong format",
  }),
  eMoneyPin: z.string().min(4, {
    message: "Wrong format",
  }),
});
