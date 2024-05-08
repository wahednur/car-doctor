import { Helmet } from "react-helmet-async";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const loadCheckout = useLoaderData();
  const { title, description, price } = loadCheckout;
  return (
    <div>
      <Helmet>
        <title>Checkout</title>
      </Helmet>
      <Breadcrumb bread="checkout" pTitle={title}></Breadcrumb>
      <div className="container mx-auto">
        <div className="check-sum">
          <h2 className="text-3xl font-bold text-center text-dr-orange">
            Order summery
          </h2>
          <table className="w-full mt-8 hidden md:block">
            <tr className="flex flex-col md:flex-row md:justify-between w-full p-6 bg-red-300 text-white">
              <th className="hidden md:block md:w-1/12">SN</th>
              <th className="md:w-3/12">Service Name</th>
              <th className="md:w-6/12 hidden md:block">Service description</th>
              <th className="md:w-2/12">Price</th>
            </tr>
            <tr className="flex flex-col md:flex-row md:justify-between w-full p-6">
              <td className="hidden md:block md:w-1/12">01</td>
              <td className="md:w-3/12">{title}</td>
              <td className="md:w-6/12 hidden md:block">
                {description.slice(0, 50)}
              </td>
              <td className="text-dr-orange font-bold text-2xl md:w-2/12 text-right">
                $ {price}
              </td>
            </tr>
          </table>
          {/* Mobile table */}
          <table className="mbl-tbl w-full md:hidden mt-6">
            <tr className="bg-red-300 p-4 text-white">
              <th>Service Name</th>
              <th>Price</th>
            </tr>
            <tr className="p-3 font-bold">
              <td>{title}</td>
              <td className="text-2xl text-dr-orange">{price}</td>
            </tr>
          </table>
        </div>
        <div className="bg-[#F3F3F3] rounded-lg p-6 lg:p-24">
          <form>
            <div className="inp-group flex flex-col md:flex-row gap-6">
              <input
                type="text"
                name="fName"
                placeholder="First Name"
                className="w-full p-3 rounded-lg"
              />
              <input
                type="text"
                name="lName"
                placeholder="Last Name"
                className="w-full p-3 rounded-lg"
              />
            </div>
            <div className="inp-group flex flex-col md:flex-row gap-6 mt-6">
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                className="w-full p-3 rounded-lg"
              />
              <input
                type="email"
                name="lName"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your message"
              className="w-full p-3 rounded-lg mt-6"
              rows={8}
            ></textarea>
            <input
              type="submit"
              value="Order Confirm"
              className="cbtn cbtn-orange w-full mt-6"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
