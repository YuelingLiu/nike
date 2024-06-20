import Hero from './sections/Hero';
import Services from './sections/Services';
import Subscribe from './sections/Subscribe';
import SuperQuality from './sections/SuperQuality';
import Footer from './sections/Footer';
import PopularProducts from './sections/PopularProducts';
import SpecialOffer from './sections/SpecialOffer';

const App = () => (
  <main className="relatice">
    Nav
    <section className="xl:padding-1 wide:padding-r padding-b">Hero</section>
    <section className="padding">PopularProducts</section>
    <section className="padding">SuperQuality</section>
    <section className="padding-x py-10">Services</section>
    <section className="padding">SpecialOffer</section>
    <section className="bg-pale-blue padding">CustomerReviews</section>
    <section className="padding-x sm:py-32 py-16 w-full">Subscribe</section>
    <section className="bg-black padding-x padding-t pb-8">Footer</section>
  </main>
);
export default App;