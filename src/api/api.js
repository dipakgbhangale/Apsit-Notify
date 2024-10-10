import axios from "axios";

const API_URL = "http://localhost:5000/api/events";

// Fetch all events
export const fetchEvents = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching events: ", error);
  }
};

// Create a new event
export const createEvent = async (eventData) => {
  try {
    const response = await axios.post(API_URL, eventData);
    return response.data;
  } catch (error) {
    console.error("Error creating event: ", error);
  }
};

// Update an event
export const updateEvent = async (id, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating event: ", error);
  }
};

// Delete an event
export const deleteEvent = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting event: ", error);
  }
};
