// Simple in-memory storage for development
let applications = [];

// Handle career application submission
const submitCareerApplication = async (req, res) => {
  try {
    const { name, email, phone, position, experience, message } = req.body;
    
    // Create application object
    const application = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      position,
      experience,
      message,
      createdAt: new Date().toISOString()
    };
    
    // Store in memory (in production, this would be saved to database)
    applications.push(application);
    
    console.log('Career application submission:', application);
    
    res.status(200).json({ 
      message: 'Application received successfully!',
      status: 'success',
      applicationId: application.id
    });
  } catch (error) {
    console.error('Error processing career application:', error);
    res.status(500).json({ 
      message: 'Error processing your request',
      status: 'error'
    });
  }
};

module.exports = {
  submitCareerApplication
};