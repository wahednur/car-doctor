import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const BookingService = () => {
  const loadService = useLoaderData();
  const { title, price, service_id, img } = loadService;
  const { user } = useContext(AuthContext);

  const handleBookingService = (e) => {
    e.preventDefault();
    const form = e.target;
    const fName = form.firstName.value;
    const lName = form.lastName.value;
    const custName = fName + " " + lName;
    const orderDate = form.serviceDate.value;
    const email = user?.email;
    const serviceName = form.serviceName.value;
    const msg = form.message.value;
    const pNumber = form.phone.value;
    const booking = {
      customerName: custName,
      email,
      orderDate,
      service_id,
      price: price,
      serviceName: serviceName,
      message: msg,
      img,
      phone: pNumber,
    };
    console.log(booking);
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${serviceName} order successfully completed`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    form.reset();
  };
  return (
    <div>
      <Helmet>
        <title>Booking order</title>
      </Helmet>
      <div className="container mx-auto mt-11">
        <h1 className="text-3xl text-center mb-12">Order Booking</h1>
        <div className="bg-[#F3F3F3] rounded-lg p-6 lg:p-24">
          <form onSubmit={handleBookingService}>
            <div className="inp-group flex flex-col md:flex-row gap-6 mb-6">
              <input
                type="text"
                name="serviceName"
                placeholder="Service Name"
                className="w-full p-3 rounded-lg"
                defaultValue={title}
              />
              <input
                type="date"
                name="serviceDate"
                placeholder="date"
                className="w-full p-3 rounded-lg"
              />
            </div>
            <div className="inp-group flex flex-col md:flex-row gap-6">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-full p-3 rounded-lg"
                defaultValue={user?.displayName}
              />
              <input
                type="text"
                name="lastName"
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
                defaultValue={user?.email}
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

export default BookingService;
