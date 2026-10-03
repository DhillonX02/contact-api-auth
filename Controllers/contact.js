import { Contact } from "../Models/Contact.js";

// get all contact
export const getAllContact = async (req,res)=> {
    const userContact = await Contact.find();

    if(!userContact) return res.json({message:"No Contact Exist",success:false})

        res.json({message:"All Contact Fatched",userContact})
}

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
  });

  res.json({
    message: "Contact saved Successfully...!",
    saveContact,
    success: true,
  });
};

//get contact by id

