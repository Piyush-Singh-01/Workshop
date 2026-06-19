import { z } from 'zod';
import Enquiry from '../models/Enquiry.js';
import mongoose from 'mongoose';

// Validation Schema
const enquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
});

export const submitEnquiry = async (req, res) => {
  try {
    // Validate request body
    const validatedData = enquirySchema.parse(req.body);

    // If MongoDB is connected, save the document
    if (mongoose.connection.readyState === 1) {
      const newEnquiry = new Enquiry(validatedData);
      await newEnquiry.save();
    } else {
      // If MongoDB is not connected, simulate success (for testing without DB)
      console.log('MongoDB not connected, simulating enquiry save:', validatedData);
    }

    res.status(200).json({
      success: true,
      message: 'Registration submitted successfully',
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
       res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: error.errors,
      });
      return;
    }

    console.error('Error submitting enquiry:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};
