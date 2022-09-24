import GeneralButton from "./GeneralButton";
import MarketplaceButton from "./MarketplaceButton";

export default function Body() {
  return (
    <section className="container mt-56 mb-10 md:mt-80 md:mb-16">
      <GeneralButton />
      <MarketplaceButton />
    </section>
  );
}