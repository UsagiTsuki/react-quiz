type ResponseQuizType = {
  contents: {
    id: number;
    name: string;
    details: string;
    slug: string;
    category_id: string;
    created_at: string;
    updated_at: string;
  }[];
  totalCount: number;
};

export default ResponseQuizType;
