export interface User {
  name: string;
  username: string;
  email: string;
  password: string;
  profilePicture: string;
  token?: string;
  isVerified: boolean;
  location?: string;
  bio: string;
  followers: string[];
  following: string[];
}

export interface Event {
  name: string;
  image: string;
  eventType: "virtual" | "physical";
  description: string;
  location: string;
  ticketPrice: number;
  availableTickets: number;
  registrationClosingDate: Date;
  startDate: Date;
  endDate: Date;
  startTime: string;
  endTime: string;
  tags: string[];
  creator: string;
}
