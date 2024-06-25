import Button from '../components/Button';
import { shoe8 } from '../assets/images';
const SuperQuality = () => {
  return (
    <section
      id="about us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col ">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          we provide You <span className="text-coral-red ">super </span>
          <span className="text-coral-red ">Qaulity </span>
          Sheos
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Nike shoes are synonymous with super quality, offering exceptional
          durability and unmatched comfort. Each pair is crafted using premium
          materials and cutting-edge technology to ensure they withstand
          rigorous use while maintaining peak performance.
          <br />
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detial and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View Details" className="mt-6" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
