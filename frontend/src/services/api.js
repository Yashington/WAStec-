const API_BASE_URL = 'http://localhost:5001/api';

// Contact form submission
export const submitContactForm = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit contact form');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};

// Career application submission
export const submitCareerApplication = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/careers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit career application');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error submitting career application:', error);
    throw error;
  }
};