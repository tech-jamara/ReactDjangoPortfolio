import "./ContactMe.css";
import { useGetContactsQuery } from "../../Api/api";
import { useEffect, useState } from "react";
const ContactMe = () => {
  const { data: contacts, isFetching } = useGetContactsQuery();

  const [contactsDetails, setContactDetails] = useState(contacts);
  const img_300 = "http://127.0.0.1:8000";
  useEffect(() => {
    setContactDetails(contacts);
  }, [contactsDetails, contacts]);
  if (isFetching) return "loading";
  return (
    <>
      <section id="contact">
        <div className="contact-me2">
          <div className="contact-title">
            <h2>Contact Me</h2>
            <h3>Discuss A Project or Say Hi</h3>
          </div>
          <div className="contact-row">
            {contactsDetails &&
              contactsDetails.map((details) => (
                <div className="contact-info ">
                  <div>
                    <i class={details.icon}></i>
                  </div>
                  <div className="contact-details">
                    <h4 className="icon-name">{details.contact_name}</h4>

                    <p>{details.contact_info}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMe;
