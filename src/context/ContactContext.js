import React, { useState, createContext } from "react";
import axios from "axios";

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contact, setContact] = useState([]);
  const [loadContact, setLoadContact] = useState(true);
  const [alertDelete, setAlertDelete] = useState("");
  const Apiurl = "https://simple-contact-crud.herokuapp.com/contact";

  const clearAlert = () => {
    setAlertDelete("");
  };

  const getContact = () => {
    axios
      .get(Apiurl)
      .then((res) => {
        console.log(res.data.data);
        setContact(res.data.data);
        setLoadContact(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addContact = ({ firstName, lastName, age, photo, navigate }) => {
    const data = {
      firstName,
      lastName,
      age,
      photo,
    };
    console.log(data);
    axios
      .post(Apiurl, data)
      .then((res) => {
        console.log(res);
        navigate();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateContact = ({ id, firstName, lastName, age, photo, navigate }) => {
    const url = `${Apiurl}/${id}`;
    const data = {
      firstName,
      lastName,
      age,
      photo,
    };
    console.log(data);
    axios
      .put(url, data)
      .then((res) => {
        navigate();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteContact = (id, navigate) => {
    const url = `${Apiurl}/${id}`;
    console.log(url);
    axios
      .delete(url)
      .then((res) => {
        console.log(res);
        navigate();
      })
      .catch((err) => {
        console.log(err);
        setAlertDelete("Terjadi kesalahan");
      });
  };

  return (
    <ContactContext.Provider
      value={{
        contact,
        loadContact,
        alertDelete,
        getContact,
        addContact,
        updateContact,
        deleteContact,
        clearAlert,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
