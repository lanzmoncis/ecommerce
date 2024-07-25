import { CheckOutForm } from "@/components/checkout/checkout-form";
import { Footer } from "@/components/shared/footer";
import { Nav } from "@/components/shared/nav";
import { GoBackLink } from "@/components/ui/back-link";

export default function CheckOutPage() {
  return (
    <div className="flex flex-col">
      <div className="bg-black">
        <Nav />
      </div>
      <div className="bg-[#CFCFCF]/20">
        <div className="mt-6">
          <GoBackLink />
        </div>
        <CheckOutForm />
      </div>
      <Footer />
    </div>
  );
}
