/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('service').del()
  await knex('service').insert([
    {
      provider_id: 1,
      hirer_id: 11,
      skill_id: 5,
      hourly_rate: 40,
      hours: 8,
      advance_amount: 200,
      advance_is_paid: false,
      start_date: '2024-05-10 09:00:00',
      place: "123 Main Street",
      is_completed: false,
      is_fully_paid: false,
      provider_rating: 4
    },
    {
      provider_id: 2,
      hirer_id: 12,
      skill_id: 8,
      hourly_rate: 50,
      hours: 6,
      advance_amount: 150,
      advance_is_paid: true,
      start_date: '2024-05-12 10:30:00',
      place: "456 Oak Avenue",
      is_completed: false,
      is_fully_paid: false,
      provider_rating: 3
    },
    {
      provider_id: 3,
      hirer_id: 13,
      skill_id: 12,
      hourly_rate: 60,
      hours: 5,
      advance_amount: 100,
      advance_is_paid: true,
      start_date: '2024-05-15 13:00:00',
      place: "789 Elm Road",
      is_completed: false,
      is_fully_paid: false,
      provider_rating: 5
    },
    // Additional services can be added here...
  ]);
};
