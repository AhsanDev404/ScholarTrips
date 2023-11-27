// api.js

export async function getAllFlights() {
    const response = await fetch('/api/flights');
    const data = await response.json();
    return data;
  }
  
  export async function getFlightById(id) {
    const response = await fetch(`/api/flights/${id}`);
    const data = await response.json();
    return data;
  }
  
  export async function getAllReports() {
    const response = await fetch('/api/reports');
    const data = await response.json();
    return data;
  }
  
  export async function getReportById(id) {
    const response = await fetch(`/api/reports/${id}`);
    const data = await response.json();
    return data;
  }
  
  export async function getAllUsers() {
    const response = await fetch('/api/users');
    const data = await response.json();
    return data;
  }
  
  export async function getUserById(id) {
    const response = await fetch(`/api/users/${id}`);
    const data = await response.json();
    return data;
  }
  
  export async function getAllSearchResults() {
    const response = await fetch('/api/search');
    const data = await response.json();
    return data;
  }
  
  export async function getSearchResultById(id) {
    const response = await fetch(`/api/search/${id}`);
    const data = await response.json();
    return data;
  }
  
  export async function getAllAdvertisements() {
    const response = await fetch('/api/advertisements');
    const data = await response.json();
    return data;
  }
  
  export async function getAdvertisementById(id) {
    const response = await fetch(`/api/advertisements/${id}`);
    const data = await response.json();
    return data;
  }
  
  export async function performAuthentication() {
    const response = await fetch('/api/authentication');
    const data = await response.json();
    return data;
  }
  
  export async function getCommunicationData() {
    const response = await fetch('/api/communications');
    const data = await response.json();
    return data;
  }
  
  export async function getModerationData() {
    const response = await fetch('/api/moderation');
    const data = await response.json();
    return data;
  }
  
  export async function getProfileData() {
    const response = await fetch('/api/profiles');
    const data = await response.json();
    return data;
  }
  
  // Add other API functions for different endpoints...
  