import { User } from "../users/types";

export interface Repository {
  node_id: string;
  name: string;
  html_url: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  owner: User;
}
