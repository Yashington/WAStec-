// Simple in-memory storage for development
let contacts = [];

// Handle contact form submission
const submitContactForm = async (req, res) => {
  try {
    const { name, email, company, phone, subject, message } = req.body;
    
    // Create contact object
    const contact = {
      id: Date.now().toString(),
      name,
      email,
      company,
      phone,
      subject,
      message,
      createdAt: new Date().toISOString()
    };
    
    // Store in memory (in production, this would be saved to database)
    contacts.push(contact);
    
    console.log('Contact form submission:', contact);
    
    res.status(200).json({ 
      message: 'Message received successfully!',
      status: 'success',
      contactId: contact.id
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ 
      message: 'Error processing your request',
      status: 'error'
    });
  }
};

module.exports = {
  submitContactForm
};