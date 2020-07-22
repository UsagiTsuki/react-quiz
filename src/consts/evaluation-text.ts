type EvaluationType = {
  readonly id: string;
  readonly text: string;
  readonly color: string;
}[];

const Evaluations: EvaluationType = [
  { id: '1', text: 'Perfect', color: '#1AEDED' },
  { id: '2', text: 'Excellent', color: '#701AED' },
  { id: '3', text: 'Good', color: '#1AEDB7' },
  { id: '4', text: 'Normal', color: '#6A729B' },
  { id: '5', text: 'Bad', color: '#47484B' }
];

export default Evaluations;
