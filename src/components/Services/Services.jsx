import "./Services.css";
import { useGetServicesQuery } from "../../Api/api";
import { useEffect, useState } from "react";

const Services = () => {
  const { data: services, isFetching } = useGetServicesQuery();
  const [servicesDetails, setServicesDetails] = useState(services);
  useEffect(() => {
    setServicesDetails(services);
    console.log(servicesDetails);
  }, [servicesDetails, services]);
  if (isFetching) return "loading";

  return (
    <>
      <section id="services">
        <div className="service-container">
          <div className="service-title">
            <h2>Services</h2>
            <h3>What Service i Offer you</h3>
          </div>

          <div className="service-row">
            {services &&
              services.map((service) => (
                <div className=" my-service">
                  <img src={service.icon_image} alt="" />
                  <h4 className="web">{service.service_name}</h4>
                  <p className="service-info">{service.service_description}</p>
                  {/* <h6 className="learn-more">{service.learn_more}</h6> */}
                  <div class="shadow-icon">
                    <i class={service.shadow_icon}></i>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
