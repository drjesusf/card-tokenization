export default {
  type: "object",
  properties: {
    card_number: { type: 'string', minLength: 13, maxLength: 16},
    cvv: { type: 'string'},
    expiration_month: { type: 'string'},
    expiration_year: { type: 'string'},
    email: { 
      type: 'string', 
      minLength: 5, 
      maxLength: 100, 
      pattern: '/^[a-z0-9._%+-]+@(gmail|hotmail|yahoo)\.(com|es)$/'},
  },
  required: ['card_number']
} as const;
