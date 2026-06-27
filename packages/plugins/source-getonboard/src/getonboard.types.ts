export interface GetOnBoardSearchResponse {
  data: GetOnBoardJob[];
  meta?: {
    current_page: number;
    total_pages: number;
    total_results: number;
  };
}

interface GetOnBoardCompanyAttributes {
  name: string;
  web?: string | null;
  logo?: string | null;
  description?: string | null;
  country?: string | null;
}

interface GetOnBoardCompanyData {
  id: string;
  type: 'company';
  attributes?: GetOnBoardCompanyAttributes;
}

export interface GetOnBoardJob {
  id: string;
  type: string;
  attributes: {
    title: string;
    description: string | null;
    description_headline: string | null;
    // Expanded via ?expand[]=company — attributes.name + attributes.web available
    company: { data: GetOnBoardCompanyData } | null;
    logo: string | null;
    min_salary: number | null;
    max_salary: number | null;
    remote: boolean;
    remote_modality: string | null;
    seniority: string | null;
    category_name: string | null;
    published_at: number | null;
    countries: string[];
    // API v0 changed: now returns { data: Array<{ id, type }> } instead of string[]
    location_cities: { data: Array<{ id: number | string; type: string }> } | string[];
    tags: string[];
    tenure_type: string | null;
  };
  links: {
    public_url: string;
  };
}
