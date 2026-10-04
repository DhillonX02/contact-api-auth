import { Contact } from "../Models/Contact.js";

// get all contact
export const getAllContact = async (req, res) => {
  const userContact = await Contact.find();

  if (!userContact)
    return res.json({ message: "No Contact Exist", success: false });

  res.json({ message: "All Contact Fatched", userContact });
};

//create new Contact
export const newContact = async (req, res) => {
  const { name, email, phone, type } = req.body;

  if (name == "" || email == "" || phone == "" || type == "") {
    return res.json({ message: "All feilds are required", success: false });
  }
  let saveContact = await Contact.create({
    name,
    email,
    phone,
    type,
    user:req.user
  });

  res.json({
    message: "Contact saved Successfully...!",
    saveContact,
    success: true,
  });
};

// update contact by id
export const updateContactById = async (req, res) => {
  const id = req.params.id;
  const { name, email, phone, type } = req.body;

  let updatedContact = await Contact.findByIdAndUpdate(
    id,
    {
      name,
      email,
      phone,
      type,
    },
    { returnDocument:"after" },
  );

  if (!updatedContact)
    return res.json({ message: "No Contact Exist", success: false });
  else {
    res.json({
      message: "Contact Updated Successfully...!",
      updatedContact,
      success: true,
    });
  }
};

// delete contact by id
export const deleteContactById = async (req, res) => {
  const id = req.params.id;

  let deleteContact = await Contact.findByIdAndDelete(id);

  if (!deleteContact)
    return res.json({ message: "No Contact Exist", success: false });
  else {
    res.json({
      message: "Contact Deleted Successfully...!",
      success: true,
    });
  }
};

//get contact by id
export const getContactByid = async (req, res) => {
  const id = req.params.id;

  const userContact = await Contact.findById(id);
  if (!userContact)
    return res.json({ message: "No Contact Find", success: false });
  res.json({ message: "Contact Fetched", userContact, success: true });
};

// get contact by user id
export const getContactByUserid = async (req, res) => {
  const id = req.params.id;

  const userContact = await Contact.find({user:id});
  if (!userContact)
    return res.json({ message: "No Contact Find", success: false });
  res.json({ message: "User Specific Contact Fetched", userContact, success: true });
};