type RequestQuizType = {
  id?: number;
  category_id?: string;
  slug?: string;
};

export class RequestQuizModel {
  id: number;
  category_id: string;
  slug: string;
}

export default RequestQuizType;
