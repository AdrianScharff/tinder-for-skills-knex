/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('provider_skill').del()
  await knex('provider_skill').insert([
    { provider_id: 1, skill_id: 3, hourly_rate: 50 },
    { provider_id: 1, skill_id: 6, hourly_rate: 60 },
    { provider_id: 2, skill_id: 4, hourly_rate: 45 },
    { provider_id: 2, skill_id: 7, hourly_rate: 55 },
    { provider_id: 3, skill_id: 5, hourly_rate: 35 },
    { provider_id: 3, skill_id: 8, hourly_rate: 70 },
    { provider_id: 4, skill_id: 1, hourly_rate: 40 },
    { provider_id: 4, skill_id: 9, hourly_rate: 65 },
    { provider_id: 5, skill_id: 2, hourly_rate: 55 },
    { provider_id: 5, skill_id: 10, hourly_rate: 75 },
    { provider_id: 6, skill_id: 3, hourly_rate: 60 },
    { provider_id: 6, skill_id: 11, hourly_rate: 80 },
    { provider_id: 7, skill_id: 4, hourly_rate: 50 },
    { provider_id: 7, skill_id: 12, hourly_rate: 70 },
    { provider_id: 8, skill_id: 5, hourly_rate: 65 },
    { provider_id: 8, skill_id: 13, hourly_rate: 90 },
    { provider_id: 9, skill_id: 6, hourly_rate: 70 },
    { provider_id: 9, skill_id: 14, hourly_rate: 95 },
    { provider_id: 10, skill_id: 7, hourly_rate: 75 },
    { provider_id: 10, skill_id: 15, hourly_rate: 100 },
    { provider_id: 11, skill_id: 1, hourly_rate: 80 },
    { provider_id: 11, skill_id: 8, hourly_rate: 110 },
    { provider_id: 12, skill_id: 2, hourly_rate: 85 },
    { provider_id: 12, skill_id: 9, hourly_rate: 120 },
    { provider_id: 13, skill_id: 3, hourly_rate: 90 },
    { provider_id: 13, skill_id: 10, hourly_rate: 130 },
    { provider_id: 14, skill_id: 4, hourly_rate: 95 },
    { provider_id: 14, skill_id: 11, hourly_rate: 140 },
    { provider_id: 15, skill_id: 5, hourly_rate: 100 },
    { provider_id: 15, skill_id: 12, hourly_rate: 150 },
    { provider_id: 16, skill_id: 6, hourly_rate: 105 },
    { provider_id: 16, skill_id: 13, hourly_rate: 160 },
    { provider_id: 17, skill_id: 7, hourly_rate: 110 },
    { provider_id: 17, skill_id: 14, hourly_rate: 170 },
    { provider_id: 18, skill_id: 8, hourly_rate: 115 },
    { provider_id: 18, skill_id: 15, hourly_rate: 180 },
    { provider_id: 19, skill_id: 9, hourly_rate: 120 },
    { provider_id: 19, skill_id: 1, hourly_rate: 190 },
    { provider_id: 20, skill_id: 10, hourly_rate: 125 },
    { provider_id: 20, skill_id: 2, hourly_rate: 200 }
  ]);
};
