export default {
  type: "object",
  properties: {
    card_number: { type: 'string', minLength: 13, maxLength: 16},
    cvv: { type: 'string', minLength: 3, maxLength: 4},
    expiration_month: { type: 'string', minLength: 1, maxLength: 2},
    expiration_year: { type: 'string', minLength: 4, maxLength: 4},
    email: { 
      type: 'string', 
      minLength: 5, 
      maxLength: 100},
  },
  required: ['card_number']
} as const;
