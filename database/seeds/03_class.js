exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("class")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("class").insert([
        {
          instructor_id: 1,
          name: "crossfit",
          type: "hiit",
          start_time: "noon",
          duration: "60 mintues",
          intensity: "moderate",
          location: "5757 N Ridge Ave",
          max_size: 12,
        },
        {
          instructor_id: 2,
          name: "crossfit",
          type: "hiit",
          start_time: "noon",
          duration: "60 mintues",
          intensity: "moderate",
          location: "5757 N Ridge Ave",
          max_size: 12,
        },
        {
          instructor_id: 3,
          name: "crossfit",
          type: "hiit",
          start_time: "noon",
          duration: "60 mintues",
          intensity: "moderate",
          location: "5757 N Ridge Ave",
          max_size: 12,
        },
      ]);
    });
};
