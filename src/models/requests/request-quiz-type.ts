type RequestQuizType = {
  id?: string;
  category_id?: string;
  slug?: string;
};

export class RequestQuizModel {
  id: string;
  category_id: string;
  slug: string;
}

export default RequestQuizType;
