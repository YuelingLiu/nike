import { arrowRight } from '../assets/icons';
import { offer } from '../assets/images';
import Button from '../components/Button';
const SpecialOffer = () => {
  return (
    <section className="flex flex-wrap  items-center max-container w-full max-xl:flex-col-reverse gap-10">
      <div className="flex-1 ">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      <div>
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red ">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Unlock unbeatable deals on Nike shoes with our special offer—save up
          to 50% on select styles. Hurry, these exclusive discounts won't last
          long!
        </p>
        <p className="mt-4 lg:max-w-lg info-text">
          Step up your game with our limited-time Nike shoe sale—enjoy up to 50%
          off on top-rated models. Don't miss out on these incredible savings!
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now " iconURL={arrowRight} />
          <Button
            label="Learn More "
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
