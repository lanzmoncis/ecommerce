import * as z from "zod";

export const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email(),
  phone: z.string().min(11, {
    message: "Must be at least 11 numbers",
  }),
  address: z.string().min(1, { message: "Address is required" }),
  zipCode: z.string().min(1, { message: "Zipcode is required" }),
  city: z.string().min(1, { message: "City is required" }),
  country: z.string().min(1, { message: "Country is required" }),
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
