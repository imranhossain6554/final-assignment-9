export interface IDepartment {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

export default interface IProduct {
  _id?: string;
  title: string;
  instructors: string[];
  img: string;
  price: string;
  category: string;
  seat: string;
  rating: string;
  status: boolean;
  description: string;
  features: string[];
  reviews: string[];
}

export default interface IUser {
  _id?: string;
  name: string;
  email: string;
  role: string;
}

export default interface IFeedback {
  _id?: string;
  userName: string;
  userEmail: string;
  rating: string;
  comment: string;
}
